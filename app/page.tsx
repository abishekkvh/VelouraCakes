import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import TresLechesCakes from './components/TresLechesCakes';
import Brownies from './components/Brownies';
import CookieTins from './components/CookieTins';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <WhyChooseUs />
      <TresLechesCakes />
      <Brownies />
      <CookieTins />
      <Specials />
      <Testimonials />
      <Footer />
    </main>
  );
}
