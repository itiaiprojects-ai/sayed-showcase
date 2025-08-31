import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "Email",
    href: "mailto:ahmed.sayed@example.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ahmed-sayed",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/ahmed-sayed",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://x.com/ahmed_sayed",
    icon: Twitter,
  },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Training", href: "/training" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-surface-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">AS</span>
              </div>
              <span className="font-heading font-semibold text-lg">Ahmed Sayed</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cloud & Systems Engineer specializing in Azure, AWS, and infrastructure automation.
              Passionate about teaching and mentoring the next generation of IT professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-medium text-foreground mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-heading font-medium text-foreground mb-4">Connect</h3>
            <div className="flex space-x-2 mb-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-9 w-9 hover:bg-surface-tertiary"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-muted-foreground text-xs">
              Response time: Within 24 hours<br />
              Available for freelance & consulting
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ahmed Sayed. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2 sm:mt-0">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}