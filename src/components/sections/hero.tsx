import { ArrowRight, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/content"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Avatar/Initials */}
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-heading font-bold text-2xl">AS</span>
            </div>
            
            {/* Hero Text */}
            <div className="space-y-6">
              <div>
                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                  <span className="text-foreground">Cloud &</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Systems Engineer
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mt-4 leading-relaxed">
                  {personalInfo.headline.split('|')[0]} • Passionate Instructor
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Specializing in Azure, AWS, and infrastructure automation. 
                I design secure, scalable IT solutions and mentor the next generation of cloud professionals.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="accent" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-heading font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Cloud Migrations</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:pl-12">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-card p-8 rounded-2xl shadow-xl border border-border">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-muted rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-sm font-mono text-muted-foreground">$ az login --service-principal</div>
                    <div className="text-sm text-accent">✓ Authentication successful</div>
                    <div className="text-sm font-mono text-muted-foreground">$ terraform apply</div>
                    <div className="text-sm text-accent">✓ Infrastructure provisioned</div>
                    <div className="text-sm font-mono text-muted-foreground">$ docker-compose up -d</div>
                    <div className="text-sm text-accent">✓ Services deployed</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-xl backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-mono text-xs">AZ</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-xl backdrop-blur-sm border border-accent/20 flex items-center justify-center">
                <span className="text-accent font-mono text-xs">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}