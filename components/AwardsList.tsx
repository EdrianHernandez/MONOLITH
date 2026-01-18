import React from 'react';
import { Award } from '../types';

interface AwardsListProps {
  awards: Award[];
}

const AwardsList: React.FC<AwardsListProps> = React.memo(({ awards }) => {
  return (
    <section className="awards-section bg-mono-white text-mono-black py-24 px-6 md:px-12 lg:px-24 border-t border-mono-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-serif mb-4">Awards</h2>
          <span className="text-mono-gray font-sans text-sm tracking-widest uppercase">
            2019 — Present
          </span>
        </div>

        <div className="awards-grid grid grid-cols-1 border-t border-mono-black/10">
          {awards.map((award) => (
            <div 
              key={award.id} 
              className="award-row group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-mono-black/10 hover:bg-mono-black/5 transition-colors duration-300 px-2"
            >
              <div className="md:col-span-2">
                <span className="font-sans text-mono-gray text-sm">{award.year}</span>
              </div>
              <div className="md:col-span-6">
                <h3 className="font-serif text-2xl md:text-3xl text-mono-black group-hover:translate-x-2 transition-transform duration-300">
                  {award.title}
                </h3>
              </div>
              <div className="md:col-span-4 flex md:justify-end items-center">
                <span className="font-sans text-xs tracking-widest uppercase text-mono-gray">
                  {award.organization}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AwardsList;