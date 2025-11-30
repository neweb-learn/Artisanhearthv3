
import React from 'react';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';

export const Reservations = () => {
  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center relative">
       {/* Background element */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8C3A28]/5 rounded-full blur-3xl -z-10"></div>

       <motion.div 
         initial={{ opacity: 0, scale: 0.98 }}
         animate={{ opacity: 1, scale: 1 }}
         className="max-w-2xl w-full bg-white p-8 md:p-16 shadow-2xl rotate-1 border border-[#4A3B32]/5 relative"
       >
          {/* Tape top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#F9F5E3]/90 shadow-sm rotate-[-1deg]"></div>

          <div className="text-center mb-12">
             <h1 className="font-script text-5xl text-[#8C3A28] mb-4">Save a Seat</h1>
             <p className="font-serif text-[#4A3B32]/80">We'd love to host you. For parties larger than 6, please call us directly.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="font-serif text-sm uppercase tracking-wide text-[#4A3B32]/60">Name</label>
                   <input 
                      type="text" 
                      className="w-full border-b-2 border-[#4A3B32]/20 bg-transparent py-2 focus:outline-none focus:border-[#8C3A28] font-serif text-lg transition-colors"
                      placeholder="Your name"
                   />
                </div>
                <div className="space-y-2">
                   <label className="font-serif text-sm uppercase tracking-wide text-[#4A3B32]/60">Email</label>
                   <input 
                      type="email" 
                      className="w-full border-b-2 border-[#4A3B32]/20 bg-transparent py-2 focus:outline-none focus:border-[#8C3A28] font-serif text-lg transition-colors"
                      placeholder="email@example.com"
                   />
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="font-serif text-sm uppercase tracking-wide text-[#4A3B32]/60">Date</label>
                   <input 
                      type="date" 
                      className="w-full border-b-2 border-[#4A3B32]/20 bg-transparent py-2 focus:outline-none focus:border-[#8C3A28] font-serif text-lg transition-colors"
                   />
                </div>
                <div className="space-y-2">
                   <label className="font-serif text-sm uppercase tracking-wide text-[#4A3B32]/60">Guests</label>
                   <select className="w-full border-b-2 border-[#4A3B32]/20 bg-transparent py-2 focus:outline-none focus:border-[#8C3A28] font-serif text-lg transition-colors">
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6 Guests</option>
                   </select>
                </div>
             </div>

             <div className="space-y-2 pt-4">
                <label className="font-serif text-sm uppercase tracking-wide text-[#4A3B32]/60">Notes</label>
                <textarea 
                   rows={3}
                   className="w-full border-2 border-[#4A3B32]/20 bg-[#F9F5E3]/30 p-3 rounded-sm focus:outline-none focus:border-[#8C3A28] font-serif text-lg transition-colors resize-none"
                   placeholder="Allergies, special occasions..."
                ></textarea>
             </div>

             <div className="pt-8 text-center">
                <Button size="lg" className="w-full md:w-auto min-w-[200px]">
                   Request Booking
                </Button>
             </div>
          </form>

          <div className="mt-8 text-center text-sm text-[#4A3B32]/40 italic font-serif">
             *Reservations are held for 15 minutes.
          </div>
       </motion.div>
    </div>
  );
};
