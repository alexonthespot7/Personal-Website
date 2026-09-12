import './App.css';
import Header from './Components/Header';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import MyNav from './Components/MyNav';
import useMediaQuery from './Hooks/useMediaQuery';
import About from './Components/About';
import WorkExperience from './Components/WorkExperience';
import Education from './Components/Education';
import Volunteering from './Components/Volunteering';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default function App() {
  const matchesS = useMediaQuery("(min-width: 900px)");

  const ref = useRef<HTMLDivElement>(null);
  const refHome = useRef<HTMLElement>(null);
  const refAbout = useRef<HTMLElement>(null);
  const refExp = useRef<HTMLElement>(null);
  const refEdu = useRef<HTMLElement>(null);
  const refVol = useRef<HTMLElement>(null);
  const refPort = useRef<HTMLElement>(null);
  const refCont = useRef<HTMLElement>(null);
  const refFooter = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  const inViewHome = useInView(refHome, { amount: 0 });

  // A section is "active" when it crosses a thin horizontal band at the
  // vertical centre of the viewport, so only one section can be active at a time.
  const centerBand = { amount: 0, margin: '-50% 0px -49% 0px' } as const;
  const activeHome = useInView(refHome, centerBand);
  const activeAbout = useInView(refAbout, centerBand);
  const activeExp = useInView(refExp, centerBand);
  const activeEdu = useInView(refEdu, centerBand);
  const activeVol = useInView(refVol, centerBand);
  const activePort = useInView(refPort, centerBand);
  const activeCont = useInView(refCont, centerBand);
  const activeFooter = useInView(refFooter, centerBand);

  const defineActive = () => {
    if (matchesS && inView) return 'Home';
    if (activeHome) return 'Home';
    if (activeAbout) return 'About';
    if (activeExp) return 'Experience';
    if (activeEdu) return 'Education';
    if (activeVol) return 'Volunteering';
    if (activePort) return 'Portfolio';
    if (activeCont || activeFooter) return 'Contact';
    return '';
  }

  const active = defineActive();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
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
        <section style={{ backgroundColor: '#f5f5f5' }} ref={refExp} id='Experience'>
          <WorkExperience />
        </section>
        <section style={{ backgroundColor: '#eaf6f7' }} ref={refEdu} id='Education'>
          <Education />
        </section>
        <section style={{ backgroundColor: '#fdf1f5' }} ref={refVol} id='Volunteering'>
          <Volunteering />
        </section>
        <section style={{ backgroundColor: '#ffffff' }} ref={refPort} id='Projects'>
          <Portfolio />
        </section>
        <section style={{ backgroundColor: '#ffffff' }} ref={refCont} id="Contact">
          <Contact />
        </section>
      </div>
      <footer ref={refFooter} style={{ backgroundColor: '#1b242f' }}>
        <Footer />
      </footer>
    </div>
  );

}
