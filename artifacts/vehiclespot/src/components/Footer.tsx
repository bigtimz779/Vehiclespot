import { SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-16 border-t-[8px] border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center font-display font-bold text-xl text-white">
                V
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Vehiclespot
              </span>
            </div>
            <p className="text-background/70 max-w-sm text-lg mb-8">
              Lagos' most trusted dealership for premium vehicles. Straight talking, sincere service, and uncompromising quality.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.link" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors">
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors">
                <SiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-background/70">
              <li><button onClick={() => document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-secondary transition-colors">Inventory</button></li>
              <li><button onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-secondary transition-colors">Reviews</button></li>
              <li><button onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-secondary transition-colors">Location</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-background/70">
              <li>0803 397 1669</li>
              <li>vehiclespot.ng</li>
              <li>Obafemi Awolowo Way, Oregun, Ikeja</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© {new Date().getFullYear()} Vehiclespot. All rights reserved.</p>
          <button onClick={scrollToTop} className="hover:text-white transition-colors">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
