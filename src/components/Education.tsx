import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in Software Engineering and AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 gradient-border slide-up">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      BS Software Engineering
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary mb-2">
                      Punjab University College of Information Technology
                    </CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>2021 – 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Lahore, Pakistan</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant="outline" 
                  className="bg-success/10 text-success border-success/30 px-3 py-1"
                >
                  <BookOpen className="w-3 h-3 mr-1" />
                  Graduated
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Focus Areas */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Academic Focus</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized in Artificial Intelligence, Machine Learning, and Deep Learning with extensive 
                  hands-on projects in computer vision and natural language processing applications.
                </p>
              </div>

              {/* Key Projects */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Notable Academic Projects</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                    <h5 className="font-semibold text-sm text-foreground mb-2">Blindvision</h5>
                    <p className="text-xs text-muted-foreground">
                      AI-powered Android application designed to empower visually impaired users by transforming any standard smartphone into a real-time vision assistant.
                    </p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                    <h5 className="font-semibold text-sm text-foreground mb-2">Skin Cancer Detection</h5>
                    <p className="text-xs text-muted-foreground">
                      Computer vision system for automated skin cancer screening and classification
                    </p>
                  </div>
                </div>
              </div>

              {/* Coursework */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Advanced Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Deep Learning", 
                    "Natural Language Processing",
                    "Computer Vision",
                    "Distributed Systems",
                    "Data Structures & Algorithms",
                    "Database Systems",
                    "Software Engineering"
                  ].map((course, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="text-xs px-3 py-1 bg-background/50 text-muted-foreground border-border/50"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievement */}
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground text-sm mb-1">Academic Excellence</h5>
                    <p className="text-xs text-muted-foreground">
                      Built a strong foundation for real-world AI solutions through comprehensive theoretical 
                      knowledge and practical project implementation across multiple domains.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};