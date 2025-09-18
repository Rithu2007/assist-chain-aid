import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart, ShoppingCart, User, Menu } from "lucide-react";

export const Header = () => {
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
          <Button variant="ghost" size="sm">
            <Heart className="w-4 h-4" />
            <span className="hidden sm:inline ml-2">Saved</span>
          </Button>
          <Button variant="ghost" size="sm">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline ml-2">Cart</span>
          </Button>
          <Button variant="outline" size="sm">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline ml-2">Account</span>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};