import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { personalInfo } from "@/data/content"
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Github, Twitter } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 XXX XXX XXXX",
    href: "tel:+20XXXXXXXXX"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
    href: "#"
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#"
  }
]

const socialLinks = [
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Twitter, href: personalInfo.twitter, label: "Twitter" }
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "" // Spam protection
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic spam protection
    if (formData.honeypot) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: ""
      })
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next cloud project or interested in training? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell me about your project, training needs, or any questions you have..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-hover"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{method.label}</div>
                        {method.href !== "#" ? (
                          <a 
                            href={method.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <div className="text-sm text-muted-foreground">{method.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      asChild
                      className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-primary border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading font-semibold text-lg mb-2">Available for</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cloud consulting projects</li>
                  <li>• Technical training & workshops</li>
                  <li>• Infrastructure assessments</li>
                  <li>• Career mentorship sessions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}