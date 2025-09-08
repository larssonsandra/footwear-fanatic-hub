import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Menu } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { state } = useCart();
  const navigate = useNavigate();
  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/">
              <h1 className="text-2xl font-bold cursor-pointer hover:text-accent transition-colors">
                FootwearFlow
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-foreground hover:text-accent transition-smooth">New Arrivals</a>
              <a href="#" className="text-foreground hover:text-accent transition-smooth">Men</a>
              <a href="#" className="text-foreground hover:text-accent transition-smooth">Women</a>
              <a href="#" className="text-foreground hover:text-accent transition-smooth">Collections</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => navigate('/checkout')}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItemsCount}
                </Badge>
              )}
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