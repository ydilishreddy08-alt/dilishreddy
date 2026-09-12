import { CustomCursor } from '@/components/CustomCursor';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WhatWeDo } from '@/components/WhatWeDo';
import { Events } from '@/components/Events';
import { FindOpportunities } from '@/components/FindOpportunities';
import { Resources } from '@/components/Resources';
import { DeveloperJourney } from '@/components/DeveloperJourney';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-scope-black text-gray-200 overflow-x-hidden">
      <CustomCursor />
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhatWeDo />
          <Events />
          <FindOpportunities />
          <Resources />
          <DeveloperJourney />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
