import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import MessageSection from './sections/MessageSection';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import FlavorSection from './sections/FlavorSection';
import { useGSAP } from '@gsap/react';
import NutritionSection from './sections/NutritionSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div className="h-dvh border border-red"></div>
        </div>
      </div>
    </main>
  )
}

export default App