
import React from 'react';
import { siteContent } from '../../data/content';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const MenuTeaser = () => {
  const { menuHighlights } = siteContent;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background texture specifically for this section to differentiate */}
      <div className="absolute inset-0 bg-[#4A3B32]/5 z-0"></div>
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FCFAF2] p-8 md:p-12 shadow-xl rotate-1 mx-auto max-w-2xl relative"
          style={{
            backgroundImage: "radial-gradient(#4A3B32 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0",
            backgroundColor: "#FCFAF2" // Paper color
          }}
        >
          {/* "Tape" visual at the top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#F9F5E3]/80 backdrop-blur-sm rotate-[-2deg] shadow-sm border-l border-r border-white/50 opacity-80"></div>

          <div className="text-center mb-10">
            <h2 className="font-script text-4xl text-[#8C3A28] mb-2">{menuHighlights.heading}</h2>
            <div className="w-16 h-0.5 bg-[#4A3B32]/20 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {menuHighlights.items.map((item, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-baseline mb-1 border-b border-[#4A3B32]/10 pb-1 border-dashed">
                  <h3 className="font-serif text-xl text-[#4A3B32] font-medium group-hover:text-[#8C3A28] transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-serif text-lg text-[#4A3B32]">{item.price}</span>
                </div>
                <p className="font-serif text-[#4A3B32]/70 text-sm italic leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to={menuHighlights.cta.link}>
              <Button variant="outline" className="border-[#4A3B32] text-[#4A3B32] hover:bg-[#4A3B32] hover:text-[#FCFAF2]">
                {menuHighlights.cta.label}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
