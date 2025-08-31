import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/content"
import { ExternalLink, Github, Play } from "lucide-react"

export default function Projects() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">Featured Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world implementations showcasing cloud architecture, automation, and infrastructure best practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-xl transition-smooth overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-mono text-primary/20 group-hover:text-primary/30 transition-colors">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.technologies[0]}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-medium text-sm mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-sm mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-muted-foreground">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
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
                      <Play className="h-3 w-3 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-surface-secondary rounded-2xl p-8 border border-border">
            <h2 className="font-heading font-bold text-2xl mb-4">More on GitHub</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore my complete portfolio of projects, including open-source contributions, 
              infrastructure templates, and automation scripts.
            </p>
            <Button asChild className="bg-primary hover:bg-primary-hover">
              <a href="https://github.com/ahmed-sayed" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View GitHub Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}