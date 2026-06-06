import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Inventory from "@/components/Inventory";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background selection:bg-secondary selection:text-secondary-foreground">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Features />
        <Inventory />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
