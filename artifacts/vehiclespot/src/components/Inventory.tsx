import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const inventory = [
  {
    id: 1,
    name: "Lexus LX 570",
    year: "2021",
    price: "₦ 95,000,000",
    image: "/src/assets/images/featured-1.png",
    specs: ["V8 Engine", "Full Option", "Custom Duty Paid"],
    tag: "Just Arrived"
  },
  {
    id: 2,
    name: "Mercedes-Benz G-Wagon",
    year: "2020",
    price: "₦ 120,000,000",
    image: "/src/assets/images/featured-2.png",
    specs: ["AMG Package", "Foreign Used", "Pristine"],
    tag: "Premium"
  },
  {
    id: 3,
    name: "Toyota Land Cruiser",
    year: "2022",
    price: "₦ 110,000,000",
    image: "/src/assets/images/featured-3.png",
    specs: ["V6 Twin Turbo", "Thumbstart", "Leather Interior"],
    tag: "Hot Deal"
  }
];

export default function Inventory() {
  return (
    <section id="inventory" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Premium Stock. <br />
              <span className="text-primary">Ready to Drive.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every vehicle on our floor is thoroughly inspected, legally cleared, and ready for the road. What you see is what you get.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 rounded-none border-primary text-primary hover:bg-primary hover:text-white" onClick={() => window.open('https://wa.link', '_blank')}>
            Request Full Stocklist <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inventory.map((car, index) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {car.tag && (
                  <div className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {car.tag}
                  </div>
                )}
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{car.year}</p>
                    <h3 className="text-xl font-display font-bold text-foreground">{car.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{car.price}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {car.specs.map((spec, i) => (
                    <div key={i} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mr-2 shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-foreground text-background hover:bg-primary rounded-none transition-colors" onClick={() => window.open('https://wa.link', '_blank')}>
                  Inquire About This Car
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
