import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/content"
import { MapPin, Calendar, ExternalLink } from "lucide-react"

export default function Experience() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">Professional Experience</h1>
          <p className="text-xl text-muted-foreground">
            Building enterprise-grade cloud solutions and infrastructure across diverse environments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <Card className="bg-card border-border hover:shadow-lg transition-smooth">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="font-heading text-xl text-foreground">
                            {job.title}
                          </CardTitle>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="font-medium text-primary">{job.company}</span>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              {job.period}
                            </div>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                          </div>
                        </div>
                        {index === 0 && (
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            Current
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-3">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8">
            <h2 className="font-heading font-bold text-2xl mb-4">Ready to Work Together?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let's discuss how my experience can help solve your infrastructure challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-smooth"
              >
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#resume"
                className="inline-flex items-center px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}