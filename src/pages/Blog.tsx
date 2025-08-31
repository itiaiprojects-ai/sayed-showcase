import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/data/content"
import { Calendar, Clock, ArrowRight, BookOpen, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const publishedPosts = blogPosts.filter(post => post.published)
  const filteredPosts = publishedPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">Technical Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and best practices from the world of cloud engineering and infrastructure automation
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-lg mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              {searchQuery ? "Try adjusting your search terms" : "New articles coming soon!"}
            </p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {filteredPosts.length > 0 && (
              <div className="mb-12">
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Featured Article
                  </Badge>
                </div>
                
                <Card className="bg-card border-border hover:shadow-lg transition-smooth overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center">
                      <div className="text-6xl font-mono text-primary/30">
                        {filteredPosts[0].title.split(' ').slice(0, 3).map(word => word[0]).join('')}
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(filteredPosts[0].date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {filteredPosts[0].readTime}
                        </div>
                      </div>
                      
                      <h2 className="font-heading font-bold text-2xl mb-4 hover:text-primary transition-colors cursor-pointer">
                        {filteredPosts[0].title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {filteredPosts[0].excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {filteredPosts[0].tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button className="bg-primary hover:bg-primary-hover">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Other Posts */}
            {filteredPosts.length > 1 && (
              <div>
                <h2 className="font-heading font-bold text-2xl mb-8">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.slice(1).map((post, index) => (
                    <Card key={index} className="bg-card border-border hover:shadow-lg transition-smooth overflow-hidden group cursor-pointer">
                      <div className="h-32 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-3xl font-mono text-primary/20 group-hover:text-primary/30 transition-colors">
                            {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs">
                            {post.tags[0]}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-2">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:text-primary-hover">
                          Read more
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-primary border-border">
            <CardContent className="p-8 text-center">
              <h2 className="font-heading font-bold text-2xl mb-4">Stay Updated</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get the latest articles, tutorials, and cloud engineering insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  type="email"
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary-hover">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                No spam, unsubscribe anytime. New articles monthly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
