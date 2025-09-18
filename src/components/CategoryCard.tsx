import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  deviceCount: number;
  bgColor: string;
}

export const CategoryCard = ({ name, icon: Icon, deviceCount, bgColor }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{deviceCount} devices available</p>
      </CardContent>
    </Card>
  );
};