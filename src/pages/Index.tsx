import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
// import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
// import { Testimonials } from "@/components/Testimonials";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      {/* <About /> */}
      <Experience />
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <Certifications />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
