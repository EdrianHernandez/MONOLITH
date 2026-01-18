import React from 'react';
import { ContactInfo } from '../types';

interface ContactFooterProps {
  info: ContactInfo;
}

const ContactFooter: React.FC<ContactFooterProps> = React.memo(({ info }) => {
  return (
    <footer id="contact" className="contact-footer bg-mono-white text-mono-black pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-mono-black/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Contact Details */}
        <div className="contact-details space-y-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif mb-8">
              Contact
            </h2>
            <p className="font-sans text-mono-gray text-lg max-w-sm leading-relaxed">
              We are currently accepting commissions for residential and cultural projects worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-mono-gray mb-4">Studio</h4>
              {info.address.map((line, i) => (
                <p key={i} className="text-mono-black text-lg">{line}</p>
              ))}
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest text-mono-gray mb-4">Digital</h4>
              <a href={`mailto:${info.email}`} className="block text-mono-black text-lg hover:underline mb-1">
                {info.email}
              </a>
              <a href={`tel:${info.phone}`} className="block text-mono-black text-lg hover:underline">
                {info.phone}
              </a>
            </div>
          </div>

          <div className="social-links pt-8 flex gap-6">
            {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
              <a key={social} href="#" className="text-sm uppercase tracking-widest hover:text-mono-gray transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Minimalist Map Placeholder */}
        <div className="map-container relative h-96 lg:h-auto bg-mono-gray/10 grayscale mix-blend-multiply overflow-hidden group">
          {/* Abstract representation of a map */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#e5e5e5]">
            <div className="w-full h-full relative">
               {/* Decorative grid lines */}
               <div className="absolute top-1/4 w-full h-px bg-mono-black/10"></div>
               <div className="absolute top-2/4 w-full h-px bg-mono-black/10"></div>
               <div className="absolute top-3/4 w-full h-px bg-mono-black/10"></div>
               <div className="absolute left-1/4 h-full w-px bg-mono-black/10"></div>
               <div className="absolute left-2/4 h-full w-px bg-mono-black/10"></div>
               <div className="absolute left-3/4 h-full w-px bg-mono-black/10"></div>
               
               {/* Location Marker */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-mono-black rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-mono-black/30 rounded-full"></div>
               </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-white p-3 shadow-sm z-10">
            <span className="font-sans text-xs uppercase tracking-widest">
              {info.coordinates.lat.toFixed(4)}° N, {Math.abs(info.coordinates.lng).toFixed(4)}° W
            </span>
          </div>
        </div>

      </div>

      <div className="mt-24 pt-8 border-t border-mono-black/5 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-mono-gray uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Monolith Architects.</span>
        <span className="mt-2 md:mt-0">Privacy & Legal</span>
      </div>
    </footer>
  );
});

export default ContactFooter;