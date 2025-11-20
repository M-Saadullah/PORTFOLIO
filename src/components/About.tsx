import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, Target, Users, ExternalLink } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Human-Centered AI",
    description:
      "I focus on building AI systems that enhance decision-making and improve user experience—whether in healthcare, automation, or enterprise intelligence.",
    color: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "Research-Driven Innovation",
    description:
      "My work blends practical engineering with deep learning research—LLMs, vision models, and agentic pipelines—to solve real technical challenges.",
    color: "text-accent",
  },
  {
    icon: Target,
    title: "Engineering for Impact",
    description:
      "I prioritize robust, scalable architectures—evaluation pipelines, optimized inference, and reliable deployment—to ensure models succeed in production.",
    color: "text-success",
  },
  {
    icon: Users,
    title: "Collaborative Engineering",
    description:
      "I work closely with cross-functional teams, contributing to design, training workflows, data pipelines, and infrastructure that support modern AI systems.",
    color: "text-primary",
  },
];


export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about turning complex AI into simple, powerful solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Personal Story */}
            <div className="slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                A Journey into Applied AI Engineering
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My interest in AI began early, driven by curiosity about how models interpret
                  language, images, and human intent. At the Punjab University College of
                  Information Technology, I developed a strong foundation in machine learning,
                  deep learning, and data systems—working on projects ranging from medical
                  imaging (ChestXGPT) to financial forecasting.
                </p>

                <p>
                  I have since engineered{" "}
                  <span className="text-primary font-semibold">LLM-powered applications</span>,{" "}
                  <span className="text-primary font-semibold">RAG systems</span>,{" "}
                  <span className="text-primary font-semibold">voice-based AI agents</span>, and{" "}
                  <span className="text-primary font-semibold">computer vision pipelines</span> using YOLO and transformers.
                  My work spans domains such as{" "}
                  <span className="text-primary font-semibold">healthcare, finance, automation, and communication</span>.
                </p>

                <p>
                  I enjoy building end-to-end AI systems—model development, dataset creation,
                  evaluation, optimization, and deployment on cloud platforms like AWS, GCP,
                  and Azure. I am committed to continuous learning, contributing to engineering
                  teams, and exploring new ways AI can be applied responsibly and effectively.
                </p>
              </div>
            </div>

            {/* My Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-up" style={{ animationDelay: '0.1s' }}>
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 gradient-border group"
                >
                  <CardHeader className="pb-4">
                    <div className={`w-10 h-10 rounded-lg bg-${value.color.split('-')[1]}/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className={`w-5 h-5 ${value.color}`} />
                    </div>
                    <CardTitle className="text-lg text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Snapshot of My Work
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Months of Experience</div>
              <Badge variant="outline" className="mt-2 text-xs bg-primary/10 text-primary border-primary/30">
                AI & ML Engineering
              </Badge>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
              <Badge variant="outline" className="mt-2 text-xs bg-accent/10 text-accent border-accent/30">
                ML • LLM • CV
              </Badge>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Domains Explored</div>
              <Badge variant="outline" className="mt-2 text-xs bg-success/10 text-success border-success/30">
                Applied AI
              </Badge>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};