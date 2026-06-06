import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
        <img 
          src="/src/assets/images/hero-car.png" 
          alt="Luxury SUV in Vehiclespot Showroom" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-20" />
      </div>

      <div className="container relative z-30 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-6 font-medium text-sm tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Ikeja's Most Trusted Dealership
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Straight Talk. <br />
              <span className="text-secondary">Premium Rides.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl font-light leading-relaxed">
              No games. No hidden details. Just a flawless selection of vehicles and the sincere service you deserve in Lagos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base rounded-none" onClick={() => window.open('https://wa.link', '_blank')}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 h-14 px-8 text-base rounded-none" onClick={() => document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' })}>
                View Inventory
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                Oregun, Ikeja
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-secondary fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                5.0 Rating (57 Reviews)
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
