import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import GalleryGrid from './components/GalleryGrid';
import Footer from './components/Footer';

function App() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars for background
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 100 + 50}s`
    }));
    setStars(newStars);
  }, []);

  const navLinks = [
    { label: 'Home', url: '#' },
    { label: 'Galleries', url: '#galleries' },
    { label: 'About', url: '#about' }
  ];

  const galleryData = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop',
      caption: 'Nebula Dream',
      likes: 342,
      author: 'Astro Bob'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      caption: 'Earth from Orbit',
      likes: 891,
      author: 'Jane Stella'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=800&auto=format&fit=crop',
      caption: 'Milky Way Core',
      likes: 1205,
      author: 'Cosmic Ray'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=800&auto=format&fit=crop',
      caption: 'Deep Space',
      likes: 567,
      author: 'Nova Explorer'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=800&auto=format&fit=crop',
      caption: 'Zero Gravity',
      likes: 412,
      author: 'Luke Walker'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop',
      caption: 'Black Hole Event',
      likes: 2133,
      author: 'Event Horizon'
    }
  ];

  return (
    <div className="app-container">
      {/* Star effect base */}
      <div className="stars-container">
        {stars.map((star) => (
          <div 
            key={star.id} 
            className="star" 
            style={{ 
              left: star.left, 
              top: star.top,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration 
            }} 
          />
        ))}
      </div>

      <Navbar links={navLinks} />
      
      <Header 
        title="ZERO GRAVITY" 
        subtitle="A visual journey through the cosmos" 
      />

      <HeroSection 
        title="DISCOVER THE UNIVERSE" 
        description="Experience the weightless wonder of space through our curated gallery of breathtaking astronomical photography. Floating in the digital vacuum."
        backgroundImage="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1600&auto=format&fit=crop"
      />

      <section id="galleries">
        <GalleryGrid cards={galleryData} columns={3} />
      </section>

      <Footer author="gazzaco" year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
