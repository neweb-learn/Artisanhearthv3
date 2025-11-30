
import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../data/content';

export const Menu = () => {
  const menuCategories = [
    {
      title: "Starters",
      items: [
        { name: "Rustic Sourdough", price: "$8", desc: "Whipped cultured butter, flaky sea salt" },
        { name: "Charred Carrots", price: "$14", desc: "Labneh, za'atar, honey, pistachio" },
        { name: "Heirloom Tomato Tart", price: "$16", desc: "Puff pastry, basil pesto, burrata" }
      ]
    },
    {
      title: "Mains",
      items: [
        { name: "Hand-Rolled Pappardelle", price: "$26", desc: "Wild mushroom ragu, parmesan, truffle oil" },
        { name: "Pan-Seared Trout", price: "$28", desc: "Warm potato salad, dill, lemon butter" },
        { name: "Farmhouse Roast Chicken", price: "$32", desc: "Root vegetables, thyme jus, crispy skin" },
        { name: "Grass-Fed Ribeye", price: "$45", desc: "Chimichurri, roasted garlic mash" }
      ]
    },
    {
      title: "Sweets",
      items: [
        { name: "Skillet Cookie", price: "$12", desc: "Dark chocolate, vanilla bean ice cream" },
        { name: "Lemon Olive Oil Cake", price: "$10", desc: "Mascarpone cream, seasonal berries" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="font-script text-6xl text-[#8C3A28] mb-4">Our Menu</h1>
        <p className="font-serif text-[#4A3B32]/80 text-lg">Seasonal dishes inspired by the harvest.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {menuCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#FCFAF2] p-8 shadow-sm border-t-4 border-[#4A5D23]/20"
          >
            <h2 className="font-serif text-3xl text-[#4A3B32] mb-8 text-center border-b border-[#4A3B32]/10 pb-4 inline-block w-full">
              {category.title}
            </h2>
            <div className="space-y-8">
              {category.items.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-baseline group">
                  <div className="flex-1">
                    <div className="flex items-baseline">
                      <h3 className="font-serif text-xl font-medium text-[#4A3B32] group-hover:text-[#8C3A28] transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex-1 mx-4 border-b border-dashed border-[#4A3B32]/20 relative top-[-4px]"></div>
                      <span className="font-serif text-lg text-[#8C3A28]">{item.price}</span>
                    </div>
                    <p className="font-serif text-[#4A3B32]/60 italic mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
