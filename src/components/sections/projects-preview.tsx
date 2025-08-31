import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/content"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export function ProjectsPreview() {
  return (
    <section className="py-20 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world implementations showcasing cloud architecture and automation expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-smooth overflow-hidden group">
              {/* Project Visual */}
              <div className="relative h-40 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-mono text-primary/20 group-hover:text-primary/30 transition-colors">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.technologies[0]}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}