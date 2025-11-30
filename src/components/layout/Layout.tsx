
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../../data/content';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#F9F5E3] text-[#4A3B32] font-serif relative overflow-x-hidden selection:bg-[#8C3A28] selection:text-[#F9F5E3]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
          
          .font-script {
            font-family: 'Dancing Script', cursive;
          }
          .font-serif {
            font-family: 'Lora', serif;
          }
          
          /* Grain overlay */
          .bg-grain {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          }
        `}
      </style>

      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-grain opacity-40 mix-blend-multiply"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full bg-[#F9F5E3]/90 backdrop-blur-sm border-b border-[#4A3B32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo / Home Link */}
            <Link to="/" className="flex flex-col items-center group">
              <span className="font-script text-3xl text-[#8C3A28] transform group-hover:scale-105 transition-transform">The Rustic Table</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-10 items-center">
              {siteContent.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg tracking-wide hover:text-[#8C3A28] transition-colors relative ${location.pathname === link.path ? 'text-[#8C3A28]' : 'text-[#4A3B32]'}`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.span 
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8C3A28] rounded-full" 
                    />
                  )}
                </Link>
              ))}
              <Link to="/reservations">
                <button className="bg-[#4A5D23] text-[#F9F5E3] px-6 py-2 rounded-md hover:bg-[#3A4A1C] transition-colors shadow-sm font-medium">
                  Book a Table
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#4A3B32] hover:text-[#8C3A28] focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#F9F5E3] border-b border-[#4A3B32]/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {siteContent.navigation.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-3 py-3 text-xl text-center hover:bg-[#8C3A28]/5 rounded-md text-[#4A3B32]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100vh-300px)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#4A3B32] text-[#F9F5E3] pt-16 pb-8 relative overflow-hidden">
        {/* Texture overlay for footer */}
        <div className="absolute inset-0 bg-grain opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start">
              <span className="font-script text-4xl mb-4 text-[#F9F5E3]">The Rustic Table</span>
              <p className="text-[#F9F5E3]/80 max-w-xs italic">
                "Simple ingredients, timeless flavors, and a seat for everyone at our table."
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <h3 className="font-serif text-lg uppercase tracking-widest text-[#F9F5E3]/60 mb-2">Visit Us</h3>
              <p>{siteContent.footer.address}</p>
              <p>{siteContent.footer.hours}</p>
              <p className="mt-4 font-script text-2xl text-[#F9F5E3]/80">Est. 1998</p>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3 className="font-serif text-lg uppercase tracking-widest text-[#F9F5E3]/60 mb-2">Connect</h3>
              <div className="flex space-x-6">
                {siteContent.footer.socials.map((social) => (
                  <a key={social.platform} href={social.link} className="hover:text-[#8C3A28] transition-colors">
                    {social.platform === 'Instagram' && <Instagram />}
                    {social.platform === 'Facebook' && <Facebook />}
                  </a>
                ))}
              </div>
              <Link to="/reservations" className="mt-4 underline decoration-[#8C3A28] decoration-2 underline-offset-4 hover:text-[#8C3A28] transition-colors">
                Make a Reservation
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#F9F5E3]/10 text-center text-[#F9F5E3]/40 text-sm">
            <p>&copy; {new Date().getFullYear()} The Rustic Table. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
