import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contributions from "@/components/Contributions";
import Certificates from "@/components/Certificates";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Contributions />
      <Certificates />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
