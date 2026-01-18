import React from 'react';

const FirmPhilosophy: React.FC = React.memo(() => {
  return (
    <section className="firm-philosophy-section bg-mono-white text-mono-black py-24 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 firm-header-block">
          <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-mono-gray mb-6">
            Our Philosophy
          </h3>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight">
            Structure <br/>
            <span className="italic font-light opacity-60">as</span> <br/>
            Sculpture.
          </h2>
        </div>

        {/* Right Column: Detailed Text */}
        <div className="lg:col-span-7 flex flex-col justify-end">
          <div className="firm-text-block space-y-8 md:pl-12 border-l border-mono-black/10">
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-mono-black/90">
              We believe architecture is not merely the enclosure of space, but the precise orchestration of light, material, and void.
            </p>
            <p className="text-base md:text-lg font-sans text-mono-gray leading-loose max-w-prose">
              At Monolith, every line drawn is a deliberate act of reduction. We strip away the non-essential to reveal the raw purity of form. Our work exists at the intersection of brutalism and elegance, creating environments that command attention through silence rather than noise.
            </p>
            
            <div className="pt-8">
              <a href="#contact" className="inline-flex items-center gap-3 text-mono-black font-sans text-sm tracking-widest uppercase border-b border-mono-black pb-1 hover:opacity-60 transition-opacity">
                Start a Dialogue
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
});

export default FirmPhilosophy;