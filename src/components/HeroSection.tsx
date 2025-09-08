import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroShoe from "@/assets/hero-shoe.jpg";
import LazyImage from "@/components/LazyImage";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">Step Into</span>
                <span className="block text-transparent bg-accent-gradient bg-clip-text">
                  Excellence
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Discover our premium collection of footwear designed for comfort, 
                style, and performance. Every step matters.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-glass bg-glass backdrop-blur-sm hover:bg-glass/80">
                Watch Story
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm text-muted-foreground">Premium Styles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Hero image */}
          <div className="relative">
            <div className="relative z-10">
              <LazyImage 
                src={heroShoe} 
                alt="Premium athletic shoe with modern design - FootwearFlow collection" 
                className="w-full h-auto object-cover rounded-2xl shadow-elegant"
                priority={true}
                width={600}
                height={400}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-glass rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;