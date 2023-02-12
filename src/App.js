import './App.css';
import Header from './Components/Header';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import MyNav from './Components/MyNav';
import useMediaQuery from './Hooks/useMediaQuery';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default function App() {
  const matchesS = useMediaQuery("(min-width: 600px)");

  const ref = useRef(null);
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refPort = useRef(null);
  const refCont = useRef(null);
  const inView = useInView(ref);
  const inViewHome = useInView(refHome, { amount: 0 });
  const inViewAbout = useInView(refAbout, { amount: 0 });
  const inViewPort = useInView(refPort, { amount: 0 });
  const inViewCont = useInView(refCont, { amount: 0 });

  const defineActive = () => {
    if (matchesS) {
      return (inView || inViewHome) ? 'Home' : inViewAbout ? 'About' : inViewPort ? 'Portfolio' : inViewCont ? 'Contact' : '';
    } else {
      return inViewHome ? 'Home' : inViewAbout ? 'About' : inViewPort ? 'Portfolio' : inViewCont ? 'Contact' : '';
    }
  }

  const active = defineActive();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <MyNav active={active} position={'fixed'} inView={inView} />
      <header ref={refHome} id='Home'>
        <Header />
      </header>
      <div ref={ref} style={{ width: '100%' }}>
        <MyNav active={active} position={'sticky'} inView={(inView || inViewHome)} />
      </div>
      <section style={{ backgroundColor: '#ffffff' }} ref={refAbout} id='About'>
        <About />
      </section>
      <section style={{ backgroundColor: '#f5f5f5' }} ref={refPort} id='Projects'>
        <Portfolio />
      </section>
      <section style={{ backgroundColor: '#252934' }} ref={refCont} id="Contact">
        <Contact />
      </section>
      <footer ref={refCont} style={{ backgroundColor: '#1b242f' }}>
        <Footer />
      </footer>

    </div>
  );

}
