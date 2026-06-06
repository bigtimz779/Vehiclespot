import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border border-border p-0 overflow-hidden bg-card">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted text-muted-foreground text-sm font-bold uppercase tracking-wider mb-6 w-fit">
              Visit The Showroom
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Come See For Yourself.
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Obafemi Awolowo Way,<br />Oregun, Ikeja 101233, Lagos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">Hours</h3>
                  <p className="text-muted-foreground">Open Daily: 8:00 AM – 9:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">Contact</h3>
                  <p className="text-muted-foreground">0803 397 1669</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none" onClick={() => window.open('https://maps.google.com/?q=Vehiclespot+Obafemi+Awolowo+Way+Oregun+Ikeja', '_blank')}>
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
              <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background" onClick={() => window.open('https://wa.link', '_blank')}>
                Message on WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-auto w-full bg-muted relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3855688583496!2d3.3512342!3d6.6025219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93cacdc23b5d%3A0x6b77af60c23f1bd!2sObafemi%20Awolowo%0Way%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
