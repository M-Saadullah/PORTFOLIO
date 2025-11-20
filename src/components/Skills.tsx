import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Mic, Eye, Zap, Database, Cloud, Code, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Large Language Models & AI APIs",
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "LLM Platforms", items: ["OpenAI", "Claude", "Groq", "Gemini"] },
      { name: "Open Source Models", items: ["Llama", "Phi", "DeepSeek", "BERT", "T5"] },
      { name: "LLM Orchestration", items: ["LangChain", "LlamaIndex", "LangGraph", "LangSmith"] },
      { name: "AI Workflow Tools", items: ["LangFlow", "Flowise", "n8n", "Zapier"] }
      // ,{ name: "Model Hubs", items: ["Hugging Face"] }
    ]
  },
  {
    icon: Mic,
    title: "Voice & Audio Processing",
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "Voice Systems", items: ["Voice Agents (STT/TTS)", "Twilio Call Systems", "OpenAI Realtime API", "LiveKit"] },
      { name: "Audio Analysis", items: ["Voice Activity Detection (VAD)", "Speaker Diarization"] }
    ]
  },
  {
    icon: Eye,
    title: "Computer Vision",
    color: "text-success",
    bgColor: "bg-success/10",
    skills: [
      { name: "Libraries", items: ["OpenCV", "MediaPipe"] },
      { name: "Pre-trained Models", items: ["YOLO", "FaceNet", "InceptionV3", "VGG", "ResNet"] },
      { name: "Applications", items: ["Image Classification", "Object Detection", "Semantic Segmentation"] },
      { name: "Custom Models", items: ["CNN Architectures", "Fine-tuning"] }
    ]
  },
  {
    icon: Zap,
    title: "Machine Learning & AI Frameworks",
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "Deep Learning", items: ["TensorFlow", "PyTorch", "Keras"] },
      { name: "Traditional ML", items: ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost"] },
      { name: "Neural Networks", items: ["CNNs", "Transformers", "Vision Transformers", "Transfer Learning"] }
    ]
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "Data Processing", items: ["Pandas", "NumPy"] },
      { name: "Statistical Analysis", items: ["Scipy", "Statsmodels"] },
      { name: "Visualization", items: ["Matplotlib", "Seaborn", "Plotly", "Tableau"] },
      { name: "EDA & ML", items: ["Feature Engineering", "Model Evaluation", "Data Profiling"] }
    ]
  },
  // {
  //   icon: Cloud,
  //   title: "Cloud & Infrastructure",
  //   color: "text-success",
  //   bgColor: "bg-success/10",
  //   skills: [
  //     { name: "Cloud Platforms", items: ["AWS (SageMaker, S3, EC2, Lambda)", "Google Cloud", "Azure"] },
  //     { name: "Containerization", items: ["Docker", "Kubernetes"] },
  //     { name: "MLOps", items: ["MLflow", "Kubeflow", "Model Deployment", "Celery"] },
  //     { name: "Big Data", items: ["Hadoop", "Apache Spark"] }
  //   ]
  // },
  {
    icon: Code,
    title: "Programming & Development",
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "Languages", items: ["Python", "R", "SQL", "JavaScript"] },
      { name: "Frameworks", items: ["FastAPI", "Flask", "Django", "Streamlit"] },
      { name: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Vector DBs (FAISS, Pinecone, Weaviate, ChromaDB, Milvus)"] },
      { name: "Version Control & Tools", items: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira"] }
    ]
  }
  // ,{
  //   icon: BarChart3,
  //   title: "Specialized AI Applications",
  //   color: "text-accent",
  //   bgColor: "bg-accent/10",
  //   skills: [
  //     { name: "RAG Systems", items: ["Retrieval-Augmented Generation", "Vector Search", "Embeddings"] },
  //     { name: "Multi-Agent Systems", items: ["Agent Orchestration", "Workflow Automation"] },
  //     { name: "Fine-Tuning", items: ["Model Adaptation", "Domain Specialization", "Transfer Learning"] },
  //     { name: "Automation", items: ["n8n", "Zapier", "Claude Computer Use", "OpenAI Computer Use"] }
  //   ]
  // }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the AI & Machine Learning ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 gradient-border slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-4`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
                <CardDescription className="text-sm">
                  Professional proficiency across multiple technologies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skillGroup, skillIndex) => (
                  <div key={skillIndex}>
                    <h4 className="font-semibold text-sm text-foreground mb-2">{skillGroup.name}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((skill, itemIndex) => (
                        <Badge
                          key={itemIndex}
                          variant="secondary"
                          className="text-xs px-2 py-1 bg-background/50 text-muted-foreground border-border/50 hover:border-primary/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
