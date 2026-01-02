import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-deep-space text-white overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Gallery />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
