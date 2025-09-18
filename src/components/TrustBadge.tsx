import { Shield, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  type: "verified" | "blockchain" | "certified";
  className?: string;
}

export const TrustBadge = ({ type, className }: TrustBadgeProps) => {
  const badges = {
    verified: {
      icon: CheckCircle,
      text: "Verified Authentic",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground",
    },
    blockchain: {
      icon: Shield,
      text: "Blockchain Tracked",
      bgColor: "bg-trust",
      textColor: "text-trust-foreground",
    },
    certified: {
      icon: Shield,
      text: "Medical Certified",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground",
    },
  };

  const badge = badges[type];
  const Icon = badge.icon;

  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
      badge.bgColor,
      badge.textColor,
      className
    )}>
      <Icon className="w-3 h-3" />
      {badge.text}
    </div>
  );
};