import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { training } from "@/data/content"
import { Users, BookOpen, Target, Calendar, Star, MessageCircle } from "lucide-react"

const trainingStats = [
  { icon: Users, label: "Students Trained", value: "200+" },
  { icon: Star, label: "Average Rating", value: "4.9/5" },
  { icon: Target, label: "Success Rate", value: "95%" },
  { icon: BookOpen, label: "Topics Covered", value: "8+" }
]

const testimonials = [
  {
    text: "Ahmed's Azure training was exceptional. His hands-on approach and real-world examples made complex concepts easy to understand.",
    author: "Sarah Johnson",
    role: "Systems Administrator"
  },
  {
    text: "The Docker workshop transformed how I think about containerization. Ahmed's teaching style is clear and engaging.",
    author: "Michael Chen",
    role: "DevOps Engineer"
  },
  {
    text: "Best Linux training I've ever attended. Ahmed provides practical skills that I use every day in my job.",
    author: "David Rodriguez",
    role: "Cloud Engineer"
  }
]

export default function Training() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">Training & Mentorship</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering IT professionals through practical, hands-on training and personalized career guidance
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trainingStats.map((stat, index) => (
            <Card key={index} className="bg-card border-border text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Training Topics */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Training Topics</h2>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Curriculum Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {training.topics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-secondary transition-colors">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Training Formats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Training Formats</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {training.formats.map((format, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-sm mb-1">{format.split(':')[0]}:</div>
                      <div className="text-xs text-muted-foreground">
                        {format.split(':').slice(1).join(':').trim()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-accent" />
                <span>Learning Outcomes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {training.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-medium text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center">
          <h2 className="font-heading font-bold text-2xl mb-4">Ready to Advance Your Career?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of professionals who have accelerated their IT careers through personalized training and mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary-hover">
              <Calendar className="mr-2 h-4 w-4" />
              Book a Session
            </Button>
            <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <MessageCircle className="mr-2 h-4 w-4" />
              Free Consultation
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            First consultation is always free • Flexible scheduling • Personalized curriculum
          </p>
        </div>
      </div>
    </div>
  )
}