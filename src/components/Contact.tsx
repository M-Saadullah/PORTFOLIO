import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  ExternalLink,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "saadullahm037@gmail.com",
    href: "mailto:saadullahm037@gmail.com",
  
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 301 5737417",
    href: "tel:+923015737417",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cavalry ground, Lahore, Pakistan",
    href: "#",
    description: "Available for remote work worldwide",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub Portfolio",
    href: "https://github.com/M-Saadullah",
    description: "View my projects and code",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/muhammad-saadullah-4473a22b0/",
    description: "Professional network",
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 slide-up">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border-primary/30"
          >
            <span className="gradient-text font-semibold">Let's Connect</span>
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next AI project? Let's discuss how we
            can build innovative solutions together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

           
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactMethods
                  .filter(
                    (method) =>
                      method.label === "Email" || method.label === "Phone"
                  )
                  .map((method, index) => (
                    <Card
                      key={index}
                      className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 cursor-pointer group"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <method.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-foreground">
                                {method.label}
                              </h4>
                             
                            </div>
                            <a
                              href={method.href}
                              className="text-primary hover:text-primary-glow transition-colors font-medium"
                            >
                              {method.value}
                            </a>
                            <p className="text-xs text-muted-foreground mt-1">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* Other methods (like Location, Website, etc.) stacked below */}
              <div className="space-y-4 mt-4">
                {contactMethods
                  .filter(
                    (method) =>
                      method.label !== "Email" && method.label !== "Phone"
                  )
                  .map((method, index) => (
                    <Card
                      key={index}
                      className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 cursor-pointer group"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <method.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-foreground">
                                {method.label}
                              </h4>
                              {method.href !== "#" && (
                                <ExternalLink className="w-3 h-3 text-muted-foreground" />
                              )}
                            </div>
                            <a
                              href={method.href}
                              className="text-primary hover:text-primary-glow transition-colors font-medium"
                            >
                              {method.value}
                            </a>
                           
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Professional Links
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 group">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <link.icon className="w-4 h-4 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {link.label}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <Card className="bg-gradient-to-r from-success/10 to-primary/10 border-success/30">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Available for Opportunities
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Open to full-time on-site and remote opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
