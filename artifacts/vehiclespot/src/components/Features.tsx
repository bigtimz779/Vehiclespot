import { Shield, Clock, MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "100% Genuine",
    description: "No stories. Every car comes with full documentation, verified history, and accurate mileage."
  },
  {
    icon: Search,
    title: "Sincere Guidance",
    description: "We give you the right information needed to make proper decisions, not just a sales pitch."
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Located centrally on Obafemi Awolowo Way, Ikeja. Safe, secure, and accessible."
  },
  {
    icon: Clock,
    title: "Open Daily til 9PM",
    description: "Your schedule matters. We're open late every day to accommodate your busy lifestyle."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              The Vehiclespot <br />
              <span className="text-primary">Standard.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Buying a car in Lagos shouldn't be a gamble. We built our entire business around one core principle: sincere, straightforward dealing. Period.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] bg-muted w-full">
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
            <img 
              src="/src/assets/images/showroom.png" 
              alt="Vehiclespot Dealership Showroom" 
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-secondary p-8 z-20 max-w-xs shadow-xl hidden md:block">
              <p className="text-2xl font-display font-bold text-secondary-foreground mb-2">
                "Straight and sincere, period!"
              </p>
              <p className="font-medium text-secondary-foreground/80">— Samuel M.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
