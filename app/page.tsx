import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Diensten from "@/components/Diensten";
import About from "@/components/About";
import Waarom from "@/components/Waarom";
import Werkwijze from "@/components/Werkwijze";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Diensten />
        <About />
        <Waarom />
        <Werkwijze />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
