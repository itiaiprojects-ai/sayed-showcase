import { SkillsGrid } from "@/components/sections/skills-grid"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { skills } from "@/data/content"

const skillLevels = {
  "Expert": 95,
  "Advanced": 80,
  "Intermediate": 65
}

export default function Skills() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">Technical Skills</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across cloud platforms, infrastructure management, and modern DevOps practices
          </p>
        </div>

        {/* Skills Grid */}
        <SkillsGrid />

        {/* Detailed Progress View */}
        <div className="mt-20">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Skill Proficiency</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skillList.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}</span>
                        </div>
                        <Progress 
                          value={skillLevels[skill.level as keyof typeof skillLevels]} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Preview */}
        <div className="mt-20 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Professional Certifications</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Industry-recognized certifications validating my expertise
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {["Azure Fundamentals", "AWS Cloud Practitioner", "RHCSA", "Security+"].map((cert) => (
              <div key={cert} className="bg-surface-secondary rounded-lg p-4 text-center">
                <div className="text-sm font-medium">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}