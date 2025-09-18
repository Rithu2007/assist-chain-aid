import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrustBadge } from "./TrustBadge";
import { Heart, Info } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface DeviceCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  condition: "New" | "Like New" | "Good";
  verificationCount: number;
  category: string;
}

export const DeviceCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  condition, 
  verificationCount, 
  category 
}: DeviceCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { toast } = useToast();

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast({
      title: isFavorited ? "Removed from favorites" : "Added to favorites",
      description: `${name} ${isFavorited ? 'removed from' : 'added to'} your saved items`,
    });
  };

  const handleViewDetails = () => {
    toast({
      title: "Device Details",
      description: `Opening detailed view for ${name}`,
    });
  };

  const handleInfo = () => {
    toast({
      title: "Device Information",
      description: `Condition: ${condition} • ${verificationCount} blockchain verifications`,
    });
  };
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`h-8 w-8 p-0 bg-white/80 hover:bg-white ${isFavorited ? 'text-red-500' : ''}`}
              onClick={handleFavorite}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
            </Button>
          </div>
          <div className="absolute top-3 left-3">
            <TrustBadge type="verified" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {condition}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TrustBadge type="blockchain" className="text-xs" />
          <span>{verificationCount} verifications</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 gap-2">
        <Button className="flex-1" size="sm" onClick={handleViewDetails}>
          View Details
        </Button>
        <Button variant="outline" size="sm" onClick={handleInfo}>
          <Info className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};