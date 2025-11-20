import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Saadullah's AI-driven financial forecasting system increased our prediction accuracy by 40% and helped us prevent over $2M in potential fraud losses. His technical expertise combined with business understanding is exceptional.",
    author: "Sarah Chen",
    title: "CTO, FinTech Solutions Inc.",
    company: "Finance",
    rating: 5,
    impact: "40% accuracy improvement"
  },
  {
    quote: "The voice AI system Saadullah built for our customer service reduced response times by 60% while maintaining 95% customer satisfaction. He delivered beyond our expectations.",
    author: "Michael Rodriguez",
    title: "Head of Operations",
    company: "Communications",
    rating: 5,
    impact: "60% faster responses"
  },
  {
    quote: "Working with Saadullah on our medical imaging project was incredible. His computer vision models achieved 94% accuracy in chest X-ray analysis, potentially impacting thousands of patients.",
    author: "Dr. Priya Patel",
    title: "Chief Medical Officer",
    company: "Healthcare",
    rating: 5,
    impact: "94% diagnostic accuracy"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Client Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real impact, real results - hear from the teams I've helped transform with AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 gradient-border slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Impact Badge */}
                <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
                  📈 {testimonial.impact}
                </Badge>

                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <Badge variant="secondary" className="mt-2 text-xs bg-background/50 text-muted-foreground">
                    {testimonial.company}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16 slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">AI Applications Built</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">$50K+</div>
              <div className="text-sm text-muted-foreground">Value Delivered to Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};