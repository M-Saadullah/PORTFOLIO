import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award, Users, TrendingUp } from "lucide-react";

const projects = [
  // === ENTERPRISE & PROFESSIONAL ===
  // {
  //   title: "Public Agent (Codsy.ai)",
  //   category: "Autonomous Computer Use Platform",
  //   description:
  //     "Architected a virtual desktop platform enabling Claude AI to autonomously perform computer interactions with multi-user Kubernetes infrastructure.",
  //   tech: ["Claude API", "Kubernetes", "Docker", "AWS", "FastAPI", "MongoDB"],
  //   features: [
  //     "Multi-user JWT authentication with namespace isolation",
  //     "Containerized desktop environments accessible via noVNC",
  //     "Deployed on AWS with enterprise-grade security",
  //   ],
  //   impact: "Enabled secure, autonomous AI computer use",
  //   clients: "Codsy.ai",
  //   icon: Award,
  //   color: "text-primary",
  //   bgColor: "bg-primary/10",
  // },
  {
    title: "Form Filling Agent",
    category: "AI-Powered Document Automation",
    description:
      "Developed a multi-agent system automating compliance, budgeting, and research document workflows with 90%+ reduction in manual effort.",
    tech: ["Llama 3.1/4", "Groq API", "FastAPI", "MongoDB", "Microsoft Graph API"],
    features: [
      "7+ specialized AI agents for form filling and validation",
      "Multilingual support (English ↔ Lithuanian)",
      "90% reduction in manual effort for R&D forms",
    ],
    impact: "Streamlined enterprise compliance processes",
    clients: "European R&D organizations",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10",
    github: "https://github.com/yourusername/form-filling-agent",
    demo: "https://demo.example.com/form-filling-agent",
  },
  // {
  //   title: "Codsy.ai Agent Platform",
  //   category: "Multi-Agent Coding Assistant",
  //   description:
  //     "Spearheaded development of an AI-powered coding assistant platform with enterprise integrations and auto-scaling infrastructure.",
  //   tech: ["Python", "OpenAI/Groq APIs", "Microsoft Graph API", "Docker", "GCP", "Azure"],
  //   features: [
  //     "Multi-agent architecture for enterprise coding support",
  //     "Integrated Graph API, Teams, SMTP for workflows",
  //     "Successfully demonstrated beta to investors",
  //   ],
  //   impact: "Improved developer productivity and enterprise adoption",
  //   clients: "Codsy.ai",
  //   icon: Users,
  //   color: "text-success",
  //   bgColor: "bg-success/10",
  // },
  {
    title: "Real-Time Voice & Calling Agent",
    category: "Conversational AI & Audio Processing",
    description:
      "Built a real-time voice agent with LiveKit, handling inbound/outbound calls, transcription, and spam detection.",
    tech: ["LiveKit", "Python", "Audio Processing", "Spam Detection Algorithms"],
    features: [
      "Real-time STT/TTS integration",
      "Low-latency communication pipelines",
      "Caller schema with whitelist/blacklist support",
    ],
    impact: "Reduced spam call handling costs significantly",
    clients: "Telecom and enterprise clients",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10",
    github: "https://github.com/M-Saadullah/livekit-voice-agent",
    demo: "https://demo.example.com/blindvision",
  },
  {
    title: "BlindVision – On-Device Vision Assistant",
    category: "FYP • On-Device AI • Computer Vision",
    description:
      "Built an offline Android vision assistant for visually impaired users, enabling real-time object detection, depth estimation, and bilingual audio guidance on commodity smartphones.",
  
    tech: [
      "TensorFlow Lite",
      "YOLOX-Tiny (Quantised)",
      "Kotlin",
      "Camera2 API",
      "Jetpack TTS"
    ],
  
    features: [
      "Real-time on-device object detection (80 COCO classes)",
      "Monocular/ToF depth estimation with ±10% error",
      "Sub-3s pipeline with GPU-accelerated TFLite inference",
      "Gesture + speech-driven control with Urdu/English TTS",
      "Adaptive modes: Indoor, Outdoor, Obstacle, Object Finder"
    ],
  
    impact:
      "Enabled reliable low-latency scene understanding fully offline, improving mobility and safety for visually impaired users.",
  
    clients:
      "Research & Assistive Vision Application",
  
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10",
    github: "https://github.com/M-Saadullah/BlindVision-FYP",
    demo: "https://demo.example.com/blindvision",
  },  
  {
    title: "Number Plate Detection System",
    category: "AI-Powered Vehicle Recognition",
    description:
      "Developed a vehicle recognition system integrated with loyalty and payment workflows achieving 97.2% precision.",
    tech: ["YOLOv11n/v12n", "EasyOCR", "MongoDB", "Streamlit"],
    features: [
      "High-precision plate detection and OCR",
      "97.2% precision on real-world datasets",
      "GDPR-compliant infrastructure for deployment",
    ],
    impact: "Enhanced customer loyalty workflows",
    clients: "Retail & automotive enterprises",
    icon: Award,
    color: "text-primary",
    bgColor: "bg-primary/10",
    github: "https://github.com/M-Saadullah/Number-Plate-Detection",
    demo: "https://drive.google.com/file/d/1uhnO_XpKKBhyhseNETkI7lnppQ3bCTg2/view?usp=sharing",
  },
  {
    "title": "RAG-based Knowledge Assistant – LangGraph + RAG AI Engine",
    "category": "AI • RAG Systems • Workflow Orchestration",
    "description":
      "Built an intelligent retrieval-augmented AI assistant using LangGraph, hybrid retrieval, and Groq-accelerated Llama 3.3, enabling deterministic document-aware question answering from user-uploaded files.",
  
    "tech": [
      "LangGraph",
      "Nomic Embeddings (nomic-embed-text-v1.5)",
      "ChromaDB",
      "Groq Llama 3.3 70B",
      "FastAPI",
      "Python"
    ],
  
    "features": [
      "Hybrid RAG (vector + keyword) with parallel retrieval execution",
      "LangGraph workflow with conditional branching and state tracking",
      "High-speed deterministic LLM reasoning via Groq inference",
      "Robust PDF/Markdown/Text ingestion with dual-extraction pipeline",
      "Persistent vector search with metadata-rich ChromaDB"
    ],
  
    "impact":
      "Delivered a fast, reliable knowledge engine capable of grounded, hallucination-resistant answers using hybrid retrieval and structured LangGraph orchestration.",
  
    "clients":
      "Knowledge Automation • Enterprise Document QA • Research Assistants",
  
    "icon": Award,
    "color": "text-primary",
    "bgColor": "bg-primary/10",
    "github": "https://github.com/M-Saadullah/rag-based-knowledge-assistant",
    "demo": "https://drive.google.com/file/d/1KCovjoUOaWpN9R59dZVfOlxaVGHzsVaT/view?usp=sharing"
  },
  
  // {
  //   title: "FinHealer",
  //   category: "AI-Driven Fintech Application",
  //   description:
  //     "Led development of a financial health analysis platform with advanced forecasting and conversational AI modules.",
  //   tech: ["Prophet", "LSTM", "ARIMA", "PyTorch", "OpenAI GPT", "Stripe API"],
  //   features: [
  //     "6 specialized AI modules for financial health",
  //     "40% improvement in forecasting accuracy",
  //     "Integrated premium AI chatbot for finance",
  //   ],
  //   impact: "Prevented multimillion-dollar fraud losses",
  //   clients: "3 financial institutions",
  //   icon: Users,
  //   color: "text-success",
  //   bgColor: "bg-success/10",
  // },
  // {
  //   title: "Automated Data Analyst Agent",
  //   category: "Data Intelligence Automation",
  //   description:
  //     "Developed an agent that automates CSV data processing, visualization, and generates GPT-powered natural language insights.",
  //   tech: ["Pandas", "Matplotlib", "LangChain", "GPT-4"],
  //   features: [
  //     "Automated data cleaning and profiling",
  //     "Dynamic visualizations for business intelligence",
  //     "Natural language explanations for non-technical users",
  //   ],
  //   impact: "Enabled rapid decision-making for non-technical teams",
  //   clients: "SMEs & analytics teams",
  //   icon: Award,
  //   color: "text-primary",
  //   bgColor: "bg-primary/10",
  // },
  // {
  //   title: "Fraud Detection System",
  //   category: "Financial AI Security",
  //   description:
  //     "Built an end-to-end fraud detection platform for real-time banking transaction monitoring with anomaly detection and explainable AI.",
  //   tech: ["AWS SageMaker", "S3", "Anomaly Detection", "Claude API"],
  //   features: [
  //     "Real-time transaction monitoring",
  //     "Explainable AI justifications for fraud detection",
  //     "Reduced false positives with optimized ML models",
  //   ],
  //   impact: "Safeguarded millions in banking transactions",
  //   clients: "Banking institutions",
  //   icon: TrendingUp,
  //   color: "text-accent",
  //   bgColor: "bg-accent/10",
  // },
  // {
  //   title: "AI-Powered Research Assistant",
  //   category: "Intelligent Research Automation",
  //   description:
  //     "Developed a research assistant with automated web scraping, NLP-based summarization, and professional report generation.",
  //   tech: ["FastAPI", "BeautifulSoup", "GPT-4", "Scrapy", "Selenium", "PDFKit"],
  //   features: [
  //     "Automated deep web scraping and data extraction",
  //     "Summarization and content generation using GPT",
  //     "Generated structured reports in PDF and Word",
  //   ],
  //   impact: "Accelerated research workflows by 70%",
  //   clients: "Consulting & R&D firms",
  //   icon: Users,
  //   color: "text-success",
  //   bgColor: "bg-success/10",
  // },
  // {
  //   title: "Financial Bot",
  //   category: "Valuation & Earnings Call Analysis",
  //   description:
  //     "Built a financial assistant for valuation analysis and earnings call transcript summarization using multi-agent systems.",
  //   tech: ["MongoDB", "Vector Databases", "OpenAI", "JWT", "Python"],
  //   features: [
  //     "Multi-agent valuation and analysis pipeline",
  //     "Fast financial document retrieval with embeddings",
  //     "Secure multi-user support with JWT authentication",
  //   ],
  //   impact: "Accelerated financial analysis and decision-making",
  //   clients: "Finance & investment firms",
  //   icon: Award,
  //   color: "text-primary",
  //   bgColor: "bg-primary/10",
  // },

  // === HEALTHCARE & RESEARCH ===
  // {
  //   title: "ChestXGPT",
  //   category: "Medical AI Computer Vision",
  //   description:
  //     "Chest X-ray analysis system achieving 94% diagnostic accuracy, supporting early detection of 12+ medical conditions.",
  //   tech: ["CNNs", "Transfer Learning", "Medical Imaging", "Deep Learning"],
  //   features: [
  //     "94% accuracy in X-ray disease detection",
  //     "Integration with hospital PACS systems",
  //     "Reduced diagnosis time by 60%",
  //   ],
  //   impact: "Early diagnosis impacting thousands of patients",
  //   clients: "Medical institutions",
  //   icon: Users,
  //   color: "text-success",
  //   bgColor: "bg-success/10",
  // },
  {
    title: "Skin Cancer Detection System",
    category: "Healthcare Computer Vision",
    description:
      "Intelligent skin cancer screening system using advanced image classification and computer vision techniques.",
    tech: ["CNN", "Image Classification", "Deep Learning"],
    features: [
      "Multi-class skin lesion classification",
      "High-precision cancer detection",
      "Real-time image analysis",
    ],
    impact: "Medical-grade AI for early cancer detection",
    clients: "Healthcare research labs",
    icon: Award,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Footblall Analytics & Prediction",
    category: "Video Analytics & Time Series",
    description:
      "Football team player prediction system using video frame analysis and sequence modeling with LSTM networks.",
    tech: ["LSTM", "Video Analytics", "Computer Vision", "Time Series"],
    features: [
      "Video frame sequence analysis",
      "Real-time outcome prediction",
      "Performance tracking for sports analytics",
    ],
    impact: "Improved accuracy of game outcome predictions",
    clients: "Sports organizations",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10",
    github: "https://github.com/M-Saadullah/sports-analytics-prediction",
    demo: "https://drive.google.com/file/d/1kXL9ISj4FwmiQaA9qm7dawZNS6veWDlf/view?usp=sharing",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world AI solutions that have delivered measurable impact and transformed businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 gradient-border slide-up group flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${project.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className={`w-6 h-6 ${project.color}`} />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-primary/80">
                  {project.category}
                </CardDescription>
                <CardDescription className="text-sm text-muted-foreground mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4 flex-1 flex flex-col">
                {/* Technology Stack */}
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-background/50 text-muted-foreground border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons - Fixed at bottom */}
                {(project.github || project.demo) && (
                  <div className="flex gap-2 pt-4 mt-auto pointer-events-auto relative z-10">
                    {project.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/30 bg-card/50 hover:bg-primary/10 transition-colors cursor-pointer"
                      >
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Visit
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/30 bg-card/50 hover:bg-primary/10 transition-colors cursor-pointer"
                      >
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Link */}
        {/* <div className="text-center mt-12 slide-up">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/30 bg-card/50 backdrop-blur-sm px-8 py-3 hover:bg-primary/10"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View Complete Portfolio
          </Button>
        </div> */}
      </div>
    </section>
  );
};