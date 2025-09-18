import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { TrustBadge } from "@/components/TrustBadge";
import { DeviceCard } from "@/components/DeviceCard";
import { CategoryCard } from "@/components/CategoryCard";
import { useToast } from "@/hooks/use-toast";
import { 
  Accessibility, 
  Ear, 
  Eye, 
  MessageSquare, 
  Shield, 
  Users, 
  CheckCircle, 
  Truck,
  ArrowRight 
} from "lucide-react";
import heroWheelchair from "@/assets/hero-wheelchair.jpg";
import hearingAids from "@/assets/hearing-aids.jpg";
import prostheticArm from "@/assets/prosthetic-arm.jpg";

const Index = () => {
  const { toast } = useToast();

  const handleBrowseDevices = () => {
    // Scroll to featured devices section
    const featuredSection = document.querySelector('#featured-devices');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "Browse Devices",
      description: "Showing featured devices below",
    });
  };

  const handleHowItWorks = () => {
    // Scroll to how it works section
    const howItWorksSection = document.querySelector('#how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "How It Works",
      description: "Learn about our blockchain verification process",
    });
  };
  const featuredDevices = [
    {
      name: "Advanced Electric Wheelchair Model X1",
      price: "$2,499",
      originalPrice: "$3,200",
      image: heroWheelchair,
      condition: "Like New" as const,
      verificationCount: 127,
      category: "Mobility"
    },
    {
      name: "Digital Hearing Aid Set - Professional",
      price: "$899",
      originalPrice: "$1,200",
      image: hearingAids,
      condition: "New" as const,
      verificationCount: 89,
      category: "Hearing"
    },
    {
      name: "Bionic Prosthetic Arm with Smart Sensors",
      price: "$15,999",
      originalPrice: "$22,000",
      image: prostheticArm,
      condition: "Good" as const,
      verificationCount: 234,
      category: "Prosthetics"
    }
  ];

  const categories = [
    { name: "Mobility Aids", icon: Accessibility, deviceCount: 1247, bgColor: "bg-primary" },
    { name: "Hearing Devices", icon: Ear, deviceCount: 834, bgColor: "bg-secondary" },
    { name: "Vision Aids", icon: Eye, deviceCount: 567, bgColor: "bg-accent" },
    { name: "Communication", icon: MessageSquare, deviceCount: 423, bgColor: "bg-trust" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mb-6">
            <TrustBadge type="blockchain" className="text-sm px-4 py-2" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Trusted Assistive Devices
            <span className="block text-primary">Verified by Blockchain</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover authentic, affordable assistive devices with complete ownership history. 
            Every device is verified through our blockchain-powered trust system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={handleBrowseDevices}>
              Browse Devices
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" onClick={handleHowItWorks}>
              How It Works
            </Button>
          </div>
          
          <div className="flex justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>Medical Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-accent" />
              <span>Secure Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Devices */}
      <section id="featured-devices" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Devices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hand-picked assistive devices with verified authenticity and complete ownership history
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDevices.map((device, index) => (
              <DeviceCard key={index} {...device} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Device Categories</h2>
            <p className="text-muted-foreground">
              Explore our comprehensive range of assistive technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How Blockchain Verification Works</h2>
            <p className="text-muted-foreground">
              Our innovative system ensures every device's authenticity and history
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Device Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every device gets a unique blockchain identity upon first registration with complete specifications and certifications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl">Ownership Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All ownership transfers are recorded immutably, creating a complete history of the device's journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Buyers can instantly verify authenticity, condition reports, and maintenance history before purchase.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Trusted by the Community</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12,847</div>
              <div className="text-muted-foreground">Verified Devices</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">98.7%</div>
              <div className="text-muted-foreground">Authenticity Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5,291</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
