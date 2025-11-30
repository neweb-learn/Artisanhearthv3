
import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from 'motion/react';

export const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1641394535269-dbea1fa94ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBiYWtlcnklMjBoYW5kcyUyMGtuZWFkaW5nJTIwZG91Z2glMjB3YXJtJTIwbGlnaHR8ZW58MXx8fHwxNzY0NDc2NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1715617029865-57cbbd44800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwcnVzdGljJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZ29sZGVuJTIwaG91ciUyMHdvb2RlbiUyMHRhYmxlc3xlbnwxfHx8fDE3NjQ0NzY3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1760562796142-47e7799d6ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwb24lMjB3b29kZW4lMjB0YWJsZSUyMGZhcm0lMjB0byUyMHRhYmxlfGVufDF8fHx8MTc2NDQyNDEzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1649165484312-5ea739a10c05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBhbmQlMjBzb3VwJTIwcnVzdGljJTIwc2V0dGluZ3xlbnwxfHx8fDE3NjQ0NzY3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1719865200855-01fea0667d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGVhdGluZyUyMGRpbm5lciUyMHJ1c3RpYyUyMHJlc3RhdXJhbnQlMjBjYW5kaWR8ZW58MXx8fHwxNzY0NDc2NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1669743630567-a2d27ae3f0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcGxhdGluZyUyMGZvb2QlMjBydXN0aWMlMjBraXRjaGVufGVufDF8fHx8MTc2NDQ3NjkxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1622289789785-b01ae28ad035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBmb29kJTIwcGxhdGluZyUyMHdvb2QlMjB0YWJsZXxlbnwxfHx8fDE3NjQ0NzY5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1577050783516-87c79e0f9565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3MlMjBydXN0aWMlMjB0YWJsZSUyMGV2ZW5pbmd8ZW58MXx8fHwxNzY0NDc2OTE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <div className="min-h-screen py-20 px-4">
       <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-script text-6xl text-[#8C3A28] mb-4">Moments</h1>
            <p className="font-serif text-[#4A3B32]/80 text-lg">A visual diary of our days.</p>
          </div>

          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter="20px">
              {images.map((image, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group overflow-hidden rounded-sm shadow-md bg-white p-2 pb-8"
                >
                  <img
                    src={image}
                    style={{width: "100%", display: "block"}}
                    alt={`Gallery item ${i}`}
                    className="filter grayscale-[0.2] contrast-[0.95] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-2 right-2 font-script text-[#4A3B32]/40 text-sm">
                    No. {i + 1}
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
       </div>
    </div>
  );
};
