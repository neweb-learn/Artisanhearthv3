
import React from 'react';
import { siteContent } from '../../data/content';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const NarrativeSection = () => {
  const { aboutTeaser } = siteContent;

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - "Polaroid" Style */}
          <motion.div 
            initial={{ opacity: 0, x: -30, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 relative group"
          >
            <div className="bg-white p-4 pb-12 shadow-xl rotate-[-3deg] transition-transform duration-500 group-hover:rotate-0 max-w-md mx-auto lg:mx-0">
              <img 
                src={aboutTeaser.image} 
                alt="Our Philosophy" 
                className="w-full h-[400px] object-cover filter sepia-[0.2] contrast-[0.9] brightness-[1.1]"
              />
              <div className="mt-4 text-center font-script text-2xl text-[#4A3B32]/60 rotate-1">
                Made with love
              </div>
            </div>
            
            {/* "Tape" visual */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#F9F5E3]/50 rotate-[2deg] shadow-sm border border-white/40"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-2 space-y-6 text-center lg:text-left"
          >
            <h2 className="font-script text-4xl text-[#8C3A28] mb-4 relative inline-block">
              {aboutTeaser.heading}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#4A5D23]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </h2>
            
            <p className="font-serif text-xl text-[#4A3B32] leading-relaxed">
              {aboutTeaser.body}
            </p>
            
            <div className="pt-6">
              <Link to={aboutTeaser.cta.link}>
                <Button variant="ghost" className="text-lg underline decoration-[#8C3A28]/50 underline-offset-4 hover:decoration-[#8C3A28]">
                  {aboutTeaser.cta.label}
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
