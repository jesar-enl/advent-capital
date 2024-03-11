import { getServerSession } from 'next-auth';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import Choice from '../components/Choice';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Testimonial from '../components/Testimonial';
import { authOptions } from '../libs/authOptions';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session){
    console.log(session?.user);
  }
  return (
    <main>
      <Hero />
      <Overview />
      <Benefits />
      <Choice />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
