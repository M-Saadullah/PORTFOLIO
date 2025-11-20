import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    year: "2024",
    status: "Certified",
    description: "Advanced ML services, model deployment, and MLOps on AWS cloud infrastructure",
    badge: "bg-gradient-to-r from-orange-400 to-orange-600"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI (Coursera)",
    year: "2023",
    status: "Completed",
    description: "Neural networks, CNNs, RNNs, and deep learning frameworks",
    badge: "bg-gradient-to-r from-blue-400 to-blue-600"
  },
  {
    title: "Machine Learning Engineering",
    issuer: "Google Cloud Professional",
    year: "2024",
    status: "In Progress",
    description: "ML model design, training, and deployment at scale",
    badge: "bg-gradient-to-r from-green-400 to-green-600"
  },
  {
    title: "LangChain & LangGraph Certification",
    issuer: "LangChain Inc.",
    year: "2024",
    status: "Certified",
    description: "Advanced LLM orchestration and multi-agent system development",
    badge: "bg-gradient-to-r from-purple-400 to-purple-600"
  }
];

const learningAreas = [
  {
    area: "Generative AI & LLMs",
    skills: ["OpenAI GPT-4", "Claude 3", "Llama 2/3", "Fine-tuning", "RAG Systems"],
    progress: 95
  },
  {
    area: "Computer Vision",
    skills: ["YOLO", "CNNs", "Object Detection", "Medical Imaging", "Transfer Learning"],
    progress: 90
  },
  {
    area: "Voice & Audio AI",
    skills: ["STT/TTS", "LiveKit", "Twilio", "OpenAI Realtime API", "VAD"],
    progress: 85
  },
  {
    area: "MLOps & Deployment",
    skills: ["Docker", "Kubernetes", "AWS", "MLflow", "CI/CD", "Model Monitoring"],
    progress: 88
  }
];

export const Certifications = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Continuous Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Staying ahead of the curve with the latest certifications and cutting-edge AI knowledge
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 gradient-border slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground mb-2">{cert.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {cert.issuer} • {cert.year}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${cert.status === 'Certified' ? 'bg-success/10 text-success border-success/30' : 
                                  cert.status === 'In Progress' ? 'bg-accent/10 text-accent border-accent/30' : 
                                  'bg-primary/10 text-primary border-primary/30'}`}
                    >
                      {cert.status === 'Certified' && <CheckCircle className="w-3 h-3 mr-1" />}
                      {cert.status === 'In Progress' && <BookOpen className="w-3 h-3 mr-1" />}
                      {cert.status === 'Completed' && <Award className="w-3 h-3 mr-1" />}
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  <div className={`w-full h-1 rounded-full ${cert.badge} opacity-80`}></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Current Learning Areas */}
          <div className="slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Current Areas of Expertise & Growth
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {learningAreas.map((area, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 gradient-border"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-foreground">{area.area}</CardTitle>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {area.progress}% Proficiency
                      </Badge>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 mt-3">
                      <div 
                        className="bg-gradient-hero h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${area.progress}%` }}
                      ></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs px-2 py-1 bg-background/50 text-muted-foreground border-border/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          {/* <div className="text-center mt-16 slide-up">
            <Card className="bg-gradient-card border-border/50 shadow-card inline-block p-8 max-w-4xl">
              <h3 className="text-xl font-bold text-foreground mb-4">
                📚 My Learning Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "In AI, yesterday's breakthrough is today's baseline. I dedicate 20% of my time to learning new technologies, 
                experimenting with cutting-edge models, and contributing to the AI community. This investment ensures my clients 
                always get solutions built with the latest and most effective tools."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/10"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  View My Learning Journal
                </Button>
                <Button 
                  variant="outline" 
                  className="border-accent/30 bg-card/50 backdrop-blur-sm hover:bg-accent/10"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Follow My Research
                </Button>
              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};