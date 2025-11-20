import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "AI/ML Intern",
    company: "Aug AI",
    period: "03/2025 – 06/2025",
    type: "Learning",
    description: "Gaining hands-on experience in AI, computer vision, and NLP",
    achievements: [
      "Contributed to computer vision projects including video frame capturing and object detection",
      "Built LSTM-based models for sequence modeling and sports/game outcome prediction",
      "Gained practical exposure to audio processing, NLP frameworks, and temporal data analysis"
    ]
  },
  {
    title: "AI Engineer",
    company: "Fiverr",
    period: "11/2024 – 08/2025",
    type: "Development",
    description: "Developing and deploying production-ready AI applications",
    achievements: [
      "Built and deployed FinHealer, an AI-powered fintech platform for forecasting, fraud detection, and advisory",
      "Developed optimized RAG pipelines, fine-tuned LLMs, and multi-agent decision-making systems",
      "Integrated computer vision models (YOLO, CNNs) for detection tasks and voice AI agents with STT/TTS",
      "Delivered scalable AI solutions across healthcare, finance, and communication domains"
    ]
  }
];


const typeColors = {
  Leadership: "bg-primary/10 text-primary border-primary/30",
  Development: "bg-accent/10 text-accent border-accent/30",
  Learning: "bg-success/10 text-success border-success/30"
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of growth and innovation in AI & Machine Learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-success opacity-30"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-3 w-6 h-6 bg-gradient-hero rounded-full border-4 border-background shadow-glow"></div>
                  
                  <Card className="ml-16 bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 gradient-border">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-foreground mb-2">{exp.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          <Badge 
                            variant="outline" 
                            className={typeColors[exp.type as keyof typeof typeColors]}
                          >
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {exp.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};