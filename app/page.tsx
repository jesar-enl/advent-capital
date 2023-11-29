import Benefits from './components/Benefits';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <Benefits />
      <Testimonial />
      <Contact />
    </main>
  );
}
