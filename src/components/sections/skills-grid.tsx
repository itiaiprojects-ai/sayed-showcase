import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/data/content"
import { Cloud, Server, Terminal, Network, Container, Shield } from "lucide-react"

const categoryIcons = {
  "Cloud Platforms": Cloud,
  "Windows Server": Server,
  "Linux Systems": Terminal,
  "Virtualization": Container,
  "Containers & DevOps": Container,
  "Networking & Security": Shield
}

const levelColors = {
  "Expert": "bg-accent text-accent-foreground",
  "Advanced": "bg-primary text-primary-foreground", 
  "Intermediate": "bg-secondary text-secondary-foreground"
}

export function SkillsGrid() {
  return (
    <section className="py-20 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skills across cloud platforms, infrastructure, and modern DevOps practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Network
            
            return (
              <Card key={category} className="bg-card border-border hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-heading text-lg">{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skillList.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${levelColors[skill.level as keyof typeof levelColors]}`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Technology Logos */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="font-heading font-semibold text-center text-lg mb-8 text-muted-foreground">
            Technologies & Platforms
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Azure", "AWS", "Docker", "VMware", "Red Hat", "Ubuntu", "PowerShell", "Linux"].map((tech) => (
              <div key={tech} className="text-muted-foreground font-medium text-sm hover:text-foreground transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}