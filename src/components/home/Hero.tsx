
import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../../data/content';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1 space-y-6"
          >
            <span className="block font-script text-4xl md:text-5xl text-[#8C3A28] mb-2 transform -rotate-2">
              {hero.eyebrow}
            </span>
            
            <h1 className="font-serif text-5xl md:text-7xl text-[#4A3B32] leading-[1.1]">
              {hero.headline}
            </h1>
            
            <p className="font-serif text-lg md:text-xl text-[#4A3B32]/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {hero.subhead}
            </p>
            
            <div className="pt-4">
              <Link to={hero.cta.link}>
                <Button size="lg" className="shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1">
                  {hero.cta.label}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10">
              {/* Main Image with organic border radius */}
              <div className="overflow-hidden rounded-[2rem] rounded-tr-[5rem] rounded-bl-[5rem] shadow-2xl rotate-1 border-4 border-[#FCFAF2]">
                <img 
                  src={hero.image.src} 
                  alt={hero.image.alt} 
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Decorative 'Stamp' or Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#FCFAF2] p-4 rounded-full shadow-lg rotate-[-12deg] w-32 h-32 flex items-center justify-center z-20 border border-[#4A3B32]/10">
                <div className="text-center">
                  <span className="block font-script text-2xl text-[#8C3A28]">Fresh</span>
                  <span className="block font-serif text-xs uppercase tracking-widest text-[#4A3B32]">Daily</span>
                </div>
              </div>
            </div>
            
            {/* Decorative organic shape behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#4A5D23]/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
