import Benefits from './components/Benefits';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const sectionVariants = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
};

const sectionTransition = {
  duration: 0.3,
  ease: 'easeInOut',
  delay: 0.3,
};

export default function Home() {
  return (
    <main>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.section
            ref={ref}
            variants={sectionVariants}
            transition={sectionTransition}
            initial="initial"
            whileInView={inView ? 'whileInView' : 'exit'}
            exit="exit"
          >
            <Hero />
          </motion.section>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.section
            ref={ref}
            variants={sectionVariants}
            transition={sectionTransition}
            initial="initial"
            whileInView={inView ? 'whileInView' : 'exit'}
            exit="exit"
          >
            <Overview />
          </motion.section>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.section
            ref={ref}
            variants={sectionVariants}
            transition={sectionTransition}
            initial="initial"
            whileInView={inView ? 'whileInView' : 'exit'}
            exit="exit"
          >
            <Benefits />
          </motion.section>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.section
            ref={ref}
            variants={sectionVariants}
            transition={sectionTransition}
            initial="initial"
            whileInView={inView ? 'whileInView' : 'exit'}
            exit="exit"
          >
            <Testimonial />
          </motion.section>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.section
            ref={ref}
            variants={sectionVariants}
            transition={sectionTransition}
            initial="initial"
            whileInView={inView ? 'whileInView' : 'exit'}
            exit="exit"
          >
            <Contact />
          </motion.section>
        )}
      </InView>
    </main>
  );
}
