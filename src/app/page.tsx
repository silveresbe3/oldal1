import Header from '@/components/Header';
import LoadingScreen from '@/components/LoadingScreen';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
