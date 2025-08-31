import { Card, CardContent } from "@/components/ui/card"
import { personalInfo } from "@/data/content"
import { Target, Users, BookOpen, Award } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering high-quality solutions that exceed expectations and drive business value."
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Passionate about sharing knowledge and helping others succeed in their technology careers."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always staying current with emerging technologies and industry best practices."
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Dedicated to personal and professional development through challenges and achievements."
  }
]

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Passionate about cloud technology and empowering others through education
          </p>
        </div>

        {/* Bio */}
        <div className="mb-16">
          <div className="prose prose-lg max-w-none">
            {personalInfo.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-foreground mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-md transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Teaching Mission */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center">
          <h2 className="font-heading font-bold text-2xl mb-4">Teaching Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My teaching philosophy centers on practical, hands-on learning combined with real-world applications. 
            I believe that the best way to master technology is through guided practice and mentorship. 
            Whether you're just starting your IT journey or looking to advance your cloud skills, 
            I'm here to help you build confidence and achieve your career goals.
          </p>
        </div>
      </div>
    </div>
  )
}