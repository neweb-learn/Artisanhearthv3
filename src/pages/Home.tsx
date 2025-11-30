
import React from 'react';
import { Hero } from '../components/home/Hero';
import { NarrativeSection } from '../components/home/NarrativeSection';
import { MenuTeaser } from '../components/home/MenuTeaser';
import { CollageGallery } from '../components/home/CollageGallery';

export const Home = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <NarrativeSection />
      <MenuTeaser />
      <CollageGallery />
    </div>
  );
};
