
import React from 'react';
import { siteContent } from '../../data/content';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const CollageGallery = () => {
  const { galleryTeaser } = siteContent;
  const images = galleryTeaser.images;

  return (
    <section className="py-24 relative bg-[#FCFAF2]">
        {/* Paper Torn Edge Top (CSS Trick) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[40px] text-[#F9F5E3]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="font-script text-5xl text-[#4A3B32]">{galleryTeaser.heading}</h2>
          </div>
          <Link to={galleryTeaser.cta.link}>
            <Button variant="outline">
              {galleryTeaser.cta.label}
            </Button>
          </Link>
        </div>

        <div className="relative h-[600px] hidden md:block">
           {/* Image 1 - Left Vertical */}
           <motion.div 
              initial={{ opacity: 0, rotate: -2, y: 20 }}
              whileInView={{ opacity: 1, rotate: -2, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute left-0 top-0 w-1/3 z-10 p-2 bg-white shadow-lg"
            >
              <img src={images[0]} alt="Gallery 1" className="w-full h-[400px] object-cover filter contrast-[0.95]" />
           </motion.div>

           {/* Image 2 - Center Top Landscape */}
           <motion.div 
              initial={{ opacity: 0, rotate: 1, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-[30%] top-[100px] w-5/12 z-20 p-2 bg-white shadow-xl"
            >
              <img src={images[1]} alt="Gallery 2" className="w-full h-[350px] object-cover filter sepia-[0.1]" />
           </motion.div>

           {/* Image 3 - Right Vertical/Square */}
           <motion.div 
              initial={{ opacity: 0, rotate: 4, x: 20 }}
              whileInView={{ opacity: 1, rotate: 4, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-0 top-[50px] w-1/3 z-10 p-2 bg-white shadow-lg"
            >
              <img src={images[2]} alt="Gallery 3" className="w-full h-[380px] object-cover" />
           </motion.div>
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          {images.map((img, i) => (
            <div key={i} className={`p-2 bg-white shadow-md transform ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
              <img src={img} alt={`Gallery ${i}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
