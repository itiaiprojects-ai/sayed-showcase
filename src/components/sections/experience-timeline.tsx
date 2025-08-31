import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/content"
import { MapPin, Calendar } from "lucide-react"

export function ExperienceTimeline() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building enterprise-grade solutions and leading cloud transformations
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.slice(0, 3).map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <Card className="bg-card border-border hover:shadow-md transition-smooth">
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
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="space-y-2">
                        {job.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}