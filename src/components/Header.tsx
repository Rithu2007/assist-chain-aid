import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Header = () => {
  const [savedCount, setSavedCount] = useState(3);
  const [cartCount, setCartCount] = useState(1);
  const { toast } = useToast();

  const handleSaved = () => {
    toast({
      title: "Saved Items",
      description: `You have ${savedCount} saved devices`,
    });
  };

  const handleCart = () => {
    toast({
      title: "Shopping Cart",
      description: `${cartCount} item${cartCount > 1 ? 's' : ''} in your cart`,
    });
  };

  const handleAccount = () => {
    toast({
      title: "Account",
      description: "Account management coming soon!",
    });
  };

  const handleMenu = () => {
    toast({
      title: "Menu",
      description: "Mobile menu opening...",
    });
  };

  return (
    <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="font-bold text-xl text-foreground">MedAccess</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search assistive devices..." 
              className="pl-10 bg-muted/50"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handleSaved} className="relative">
            <Heart className="w-4 h-4" />
            <span className="hidden sm:inline ml-2">Saved</span>
            {savedCount > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2 text-xs h-4 w-4 p-0 flex items-center justify-center">
                {savedCount}
              </Badge>
            )}
          </Button>
          <Button variant="ghost" size="sm" onClick={handleCart} className="relative">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline ml-2">Cart</span>
            {cartCount > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2 text-xs h-4 w-4 p-0 flex items-center justify-center">
                {cartCount}
              </Badge>
            )}
          </Button>
          <Button variant="outline" size="sm" onClick={handleAccount}>
            <User className="w-4 h-4" />
            <span className="hidden sm:inline ml-2">Account</span>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={handleMenu}>
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};