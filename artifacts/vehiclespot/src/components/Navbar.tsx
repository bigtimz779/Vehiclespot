import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-display font-bold text-xl group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
              V
            </div>
            <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Vehiclespot
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('inventory')} className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}>Inventory</button>
            <button onClick={() => scrollTo('reviews')} className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}>Reviews</button>
            <button onClick={() => scrollTo('location')} className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}>Visit Us</button>
            
            <div className="flex items-center gap-4 border-l border-border/30 pl-8 ml-2">
              <a href="tel:08033971669" className={`flex items-center gap-2 text-sm font-bold hover:text-secondary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                <Phone className="w-4 h-4" />
                0803 397 1669
              </a>
              <Button className={isScrolled ? 'bg-primary' : 'bg-white text-primary hover:bg-white/90'} onClick={() => window.open('https://wa.link', '_blank')}>
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          <button onClick={() => scrollTo('inventory')} className="text-left px-4 py-2 hover:bg-muted font-medium text-foreground">Inventory</button>
          <button onClick={() => scrollTo('reviews')} className="text-left px-4 py-2 hover:bg-muted font-medium text-foreground">Reviews</button>
          <button onClick={() => scrollTo('location')} className="text-left px-4 py-2 hover:bg-muted font-medium text-foreground">Visit Us</button>
          <div className="h-px bg-border my-2"></div>
          <a href="tel:08033971669" className="flex items-center gap-3 px-4 py-2 font-bold text-foreground">
            <Phone className="w-5 h-5 text-primary" />
            0803 397 1669
          </a>
          <Button className="w-full mt-2" size="lg" onClick={() => window.open('https://wa.link', '_blank')}>
            WhatsApp Us
          </Button>
        </div>
      )}
    </nav>
  );
}
