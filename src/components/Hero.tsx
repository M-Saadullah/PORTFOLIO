import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Briefcase,

  ExternalLink,
} from "lucide-react";


export const Hero = () => {

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center slide-up">
          {/* Professional Badge
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 bg-card/50 backdrop-blur-sm border-primary/30"
          >
            <span className="gradient-text font-semibold">
              🚀 Ready to Transform Your Business with AI
            </span>
          </Badge> */}

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Muhammad Saadullah</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-8 space-y-2">
            <p className="font-semibold">
              AI/ML Engineer • Data Scientist
            </p>
            <p className="text-lg">Building Scalable & Production-Ready AI Systems</p>
          </div>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            I am an <span className="text-primary font-semibold">AI/ML Engineer</span> with 6+ months of hands-on experience 
            developing <span className="text-primary font-semibold">production-grade machine learning models</span>, 
            <span className="text-primary font-semibold"> LLM-powered applications</span>, and 
            <span className="text-primary font-semibold"> agentic workflows</span>.
            I specialize in RAG systems, LLM fine-tuning, computer vision, and real-time voice AI 
            using STT/TTS pipelines. I enjoy building end-to-end pipelines—from model development 
            to deployment—across cloud platforms and modern AI stacks.
          </p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-hero text-primary-foreground px-8 py-3 shadow-elegant hover:shadow-glow transition-all duration-300"
             onClick={() => scrollToSection("contact")}

            >
              <Mail className="w-5 h-5 mr-2" />
              Let's Connect
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 bg-card/50 backdrop-blur-sm px-8 py-3 hover:bg-primary/10"
                  onClick={() => scrollToSection("projects")}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Explore My Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/M-Saadullah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-saadullah-4473a22b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
