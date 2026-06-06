import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "I've been using his service for years, what I'll say genuinely is that, he's straight and sincere, period!",
    author: "Samuel Mayowa",
    role: "Long-term Client"
  },
  {
    text: "What a nice place with good customer service. The transparency throughout the whole process is unmatched.",
    author: "Abimbola Salawu",
    role: "Recent Buyer"
  },
  {
    text: "It's loaded with the right information needed to make proper decisions. They don't just sell you a car, they guide you.",
    author: "Chukwuma Oren",
    role: "Satisfied Customer"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Don't Just Take Our Word.
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A perfect 5.0 rating from 57 reviews. We built our reputation on being straight-talking and sincere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 flex flex-col justify-between"
            >
              <div>
                <Star className="w-8 h-8 text-secondary mb-6 opacity-50" />
                <p className="text-lg font-medium leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="font-bold">{review.author}</p>
                <p className="text-sm text-primary-foreground/60">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-secondary hover:text-white font-medium transition-colors border-b border-secondary hover:border-white pb-1"
          >
            Read all 57 reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
