import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">FootwearFlow</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-foreground hover:text-accent transition-smooth">New Arrivals</a>
              <a href="#" className="text-foreground hover:text-accent transition-smooth">Men</a>
              <a href="#" className="text-foreground hover:text-accent transition-smooth">Women</a>
              <a href="#" className="text-foreground hover:text-accent transition-smooth">Collections</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;