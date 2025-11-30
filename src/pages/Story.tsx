
import React from 'react';
import { motion } from 'motion/react';

export const Story = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-script text-6xl text-[#8C3A28] mb-6">Our Story</h1>
          <p className="font-serif text-xl text-[#4A3B32]/80 max-w-2xl mx-auto leading-relaxed">
            "It started with a simple idea: good food takes time, and it tastes better when shared."
          </p>
        </div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="order-2 md:order-1"
          >
            <div className="prose prose-stone prose-lg text-[#4A3B32] font-serif">
              <h2 className="font-serif text-3xl text-[#4A5D23] mb-4">Rooted in Tradition</h2>
              <p>
                Founded in 1998, The Rustic Table was born from a desire to reconnect with the origins of our food. We believe that every ingredient tells a story—of the soil it grew in, the hands that harvested it, and the season it represents.
              </p>
              <p>
                Our recipes have been passed down through three generations, refined not by machines, but by memory and taste. We knead our bread by hand every morning before the sun rises, and we source our vegetables from farms within a 20-mile radius.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="order-1 md:order-2"
          >
            <div className="p-2 bg-white shadow-xl rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1641394535269-dbea1fa94ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBiYWtlcnklMjBoYW5kcyUyMGtuZWFkaW5nJTIwZG91Z2glMjB3YXJtJTIwbGlnaHR8ZW58MXx8fHwxNzY0NDc2NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Baker hands" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="bg-[#FCFAF2] p-12 shadow-lg rotate-[-1deg] mx-4 md:mx-0 border border-[#4A3B32]/5">
           <div className="text-center max-w-3xl mx-auto">
              <h3 className="font-script text-4xl text-[#8C3A28] mb-6">The Hearth</h3>
              <p className="font-serif text-lg text-[#4A3B32] leading-relaxed mb-8">
                 At the center of our restaurant lies the hearth—a wood-fired oven that never goes cold. It is the heart of our kitchen, imparting a distinct, smoky warmth to everything from our roasted vegetables to our slow-cooked meats. It reminds us that fire, like food, is a gathering place.
              </p>
              <div className="font-serif text-sm uppercase tracking-widest text-[#4A5D23]">
                 — The Family
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};
