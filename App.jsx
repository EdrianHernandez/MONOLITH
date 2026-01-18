import React, { useEffect, useState } from 'react';
import ProjectShowcase from './components/ProjectShowcase';
import FirmPhilosophy from './components/FirmPhilosophy';
import AwardsList from './components/AwardsList';
import ContactFooter from './components/ContactFooter';
import { Menu, X } from 'lucide-react';

// Mock Data
const projects = [
  {
    id: 'p1',
    title: 'The Void House',
    location: 'Kyoto, Japan',
    year: '2023',
    imageUrl: 'https://picsum.photos/id/1033/1920/1080', // Urban/Concrete vibe
    description: 'A residential sanctuary built around a central courtyard, designed to capture silence in the heart of the bustling city.'
  },
  {
    id: 'p2',
    title: 'Azure Pavilion',
    location: 'Copenhagen, Denmark',
    year: '2022',
    imageUrl: 'https://picsum.photos/id/234/1920/1080', // Abstract/Architecture vibe
    description: 'A public exhibition space that blurs the boundary between the ocean and the built environment through translucent concrete.'
  },
  {
    id: 'p3',
    title: 'Stone Ridge Museum',
    location: 'Reykjavik, Iceland',
    year: '2021',
    imageUrl: 'https://picsum.photos/id/534/1920/1080', // Dramatic landscape
    description: 'Embedded into the volcanic cliffside, this museum serves as a lens through which to view the ancient geological history.'
  }
];

const awards = [
  { id: 'a1', year: '2023', title: 'Gold Medal for Sustainable Design', organization: 'World Architecture Festival' },
  { id: 'a2', year: '2022', title: 'Best Residential Project', organization: 'Dezeen Awards' },
  { id: 'a3', year: '2021', title: 'Emerging Architect of the Year', organization: 'Pritzker Forum' },
  { id: 'a4', year: '2020', title: 'Excellence in Concrete', organization: 'Global Material Institute' },
];

const contactInfo = {
  address: ['1400 Broadway, Suite 50', 'New York, NY 10018'],
  email: 'studio@monolith.arch',
  phone: '+1 (212) 555-0199',
  coordinates: { lat: 40.7536, lng: -73.9832 }
};

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-mono-white font-sans selection:bg-mono-black selection:text-white">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-mono-white border-b border-mono-black/5 py-4' : 'bg-transparent'}`}>
        <h1 className={`text-2xl font-serif tracking-tight font-bold z-50 transition-colors ${isNavOpen ? 'text-mono-black' : (scrolled ? 'text-mono-black' : 'text-mono-black md:text-white mix-blend-difference')}`}>
          MONOLITH
        </h1>
        
        <button 
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`z-50 p-2 focus:outline-none transition-colors ${isNavOpen ? 'text-mono-black' : (scrolled ? 'text-mono-black' : 'text-mono-black md:text-white mix-blend-difference')}`}
          aria-label="Toggle Menu"
        >
          {isNavOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>

        {/* Full Screen Navigation Overlay */}
        <div className={`fixed inset-0 bg-mono-white z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${isNavOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <nav className="flex flex-col space-y-8 text-center">
            {['Work', 'Philosophy', 'Awards', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-5xl md:text-7xl font-serif text-mono-black hover:text-mono-gray transition-colors cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <div id="work" className="scroll-mt-32">
          <ProjectShowcase projects={projects} />
        </div>
        
        <div id="philosophy" className="scroll-mt-32">
          <FirmPhilosophy />
        </div>
        
        <div id="awards" className="scroll-mt-32">
          <AwardsList awards={awards} />
        </div>
        
        <ContactFooter info={contactInfo} />
      </main>
    </div>
  );
};

export default App;
