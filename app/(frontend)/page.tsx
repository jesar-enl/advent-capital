import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <Benefits />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
