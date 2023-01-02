import './App.css';
import { gsap} from 'gsap';
import { useEffect } from 'react';
import { ScienceProvider } from './context/ScienceContext'

import TransitionOverlay from './components/TransitionOverlay';
import NavigationBar from './components/NavigationBar';
import HeroBackground from './components/HeroBackground';

import Psych from './images/PsychImage.png'

gsap.registerPlugin(Attr)

function App() {

  useEffect(() => {
    let tl = gsap.timeline()
      tl.fromTo('.overlay-items', {y:0}, {duration: 1.5, delay: 1, y: '100%', stagger: {amount:0.5}, ease: "power1.out"})
      // tl.to('.overlay-items', {duration: 1.5, y: '0%', stagger: {amount:0.5}, ease: "power1.out"})
      // tl.to('.background-overlay', {backgroundImage:'none', duration:0.1})
      // tl.to('.background', {backgroundImage:`url(${Psych})`, duration:1},)
      // tl.set('.title', {attr: { src: PsychTitle}})
      // tl.to('.overlay-items', {duration: 1.5, y: '-100%', stagger: {amount:0.5}, ease: "power1.out"})
  
    
    // gsap.to('transition-overlay', {duration: 0.1, delay: 2.5, display: 'none'})
  })

  return (
    <div className="App">
      <div className="hero">
        <ScienceProvider>
          <HeroBackground />
          <NavigationBar />
        </ScienceProvider>
      </div>

      <TransitionOverlay count="10"/>
    </div>
  );

}

export default App;
