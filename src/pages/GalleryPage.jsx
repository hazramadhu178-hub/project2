import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowLeft, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  MapPin, 
  Sun, 
  Moon, 
  Compass, 
  ArrowRight
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/resortData';

export const GalleryPage = ({ onNavigateHome, onNavigateSection }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const photoSpots = [
    {
      title: 'Sunflower Bluff Overlook',
      location: 'North Headland Path',
      time: 'Best at 07:00 AM & 06:30 PM',
      desc: 'Stand amidst 4.2 hectares of vibrant yellow blooms with panoramic ocean horizons and towering cumulus clouds.',
      icon: <Sun className="w-5 h-5 text-amber-500" />
    },
    {
      title: 'Overwater Lagoon Boardwalk',
      location: 'South Sanctuary Rooms',
      time: 'Best at Sunset (06:45 PM)',
      desc: 'A floating timber walkway suspended above crystal waters reflecting the apricot and lilac evening sky.',
      icon: <Compass className="w-5 h-5 text-sky-500" />
    },
    {
      title: 'Solarium Lotus Water Pavilion',
      location: 'Central Wellness Garden',
      time: 'Best at Midday for Reflections',
      desc: 'Minimalist Japanese cedar joinery and tranquil water lilies mirroring geometric bamboo architecture.',
      icon: <Sparkles className="w-5 h-5 text-indigo-500" />
    },
    {
      title: 'Starlit Pier & Night Sky',
      location: 'Marine Cove Dock',
      time: 'Best at Night (09:30 PM+)',
      desc: 'Zero light pollution creates breathtaking astronomical vistas of constellations, moon reflections, and glowing fireflies.',
      icon: <Moon className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <div className="gallery-page-wrapper animate-in fade-in duration-300">
      {/* ========================================================
          PAGE HERO BANNER
      ======================================================== */}
      <section className="about-hero-section">
        <div className="resort-container">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-sky-500 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Sanctuary Home
            </button>
            <span>/</span>
            <span className="text-sky-600 dark:text-sky-400">Visual Sanctuary Gallery</span>
          </div>

          <div className="max-w-3xl">
            <div className="section-badge mb-4">
              <Camera className="w-3.5 h-3.5" /> Visual Sanctuary • 12 Curated Perspectives
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Glimpses of Coastal Peace Through the Lens
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore our sun-drenched floral pathways, rooms, farm-to-table culinary artistry, 
              and the unhurried moments of stillness captured across our 4.2-hectare private coastal estate.
            </p>
          </div>

          {/* Quick Photography Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Sun className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>Golden Hour Natural Light</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Camera className="w-4 h-4 text-sky-500 flex-shrink-0" />
              <span>Complimentary Polaroid Kits</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>4 Guided Photo Trail Spots</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Moon className="w-4 h-4 text-indigo-500 flex-shrink-0" />
              <span>Zero Light Pollution Skies</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          GALLERY GRID & FILTER SECTION
      ======================================================== */}
      <section className="resort-section bg-white dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">
        <div className="resort-container">
          {/* Controls Bar */}
          <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Desktop Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {[
                { key: 'all', label: 'All Perspectives (12)' },
                { key: 'suites', label: 'Suites & Architecture' },
                { key: 'beach', label: 'Beach & Lagoon' },
                { key: 'wellness', label: 'Wellness & Spa' },
                { key: 'dining', label: 'Dining & Flavors' },
                { key: 'landscape', label: 'Floral Landscapes' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedFilter(tab.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedFilter === tab.key
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200/80 dark:border-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* View Counter */}
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Showing <strong>{filteredItems.length}</strong> of {GALLERY_ITEMS.length} curated photos
            </div>
          </div>

          {/* Gallery Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="resort-card overflow-hidden group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                    <div className="flex items-center justify-between">
                      <span className="bg-white/25 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="text-white">
                      <div className="text-xs font-medium text-sky-300 flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3" /> {item.location || 'Sanctuary Grounds'}
                      </div>
                      <h4 className="text-base font-bold leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-200 line-clamp-2 mt-1">{item.caption}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white leading-tight truncate max-w-[200px]">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-sky-500" /> {item.location || 'Sanctuary Estate'}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2.5 py-1 rounded-lg">
                    {item.camera || 'View Photo'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SANCTUARY PHOTO TRAILS & SCENIC SPOTS
      ======================================================== */}
      <section className="resort-section">
        <div className="resort-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-badge">
              <Compass className="w-3.5 h-3.5" /> Estate Scenic Guide
            </div>
            <h2 className="section-title">The Four Most Picturesque Sanctuary Spots</h2>
            <p className="section-description">
              Curated locations across our flower fields and coastline for quiet reflection and stunning photography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photoSpots.map((spot, idx) => (
              <div key={idx} className="resort-card p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-slate-800 shadow-sm flex items-center justify-center mb-4 border border-sky-100 dark:border-slate-700">
                    {spot.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {spot.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3" /> {spot.location}
                  </div>
                  <div className="text-[11px] text-amber-600 dark:text-amber-400 mb-3 font-medium">
                    {spot.time}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {spot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          POLAROID & MINDFUL PHOTOGRAPHY PHILOSOPHY
      ======================================================== */}
      <section className="resort-section bg-slate-50/50 dark:bg-slate-900/30">
        <div className="resort-container">
          <div className="resort-card p-8 sm:p-12 bg-gradient-to-br from-amber-50/60 via-sky-50/40 to-white dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border-2 border-amber-200/70 dark:border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-950 px-3 py-1 rounded-full">
                  <Camera className="w-3.5 h-3.5" /> Mindful Photography
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Capturing Stillness, Not Just Images
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We encourage our guests to practice intentional looking. Each room is furnished with a vintage Polaroid instant camera and fresh film packs. Rather than taking dozens of digital photos, you are invited to capture a single, cherished sensory memory each day and paste it directly into your leather StrongMe reflection journal.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                    <strong className="text-slate-900 dark:text-white block text-sm mb-0.5">Instant Film</strong>
                    <span className="text-slate-500 dark:text-slate-400">Complimentary per room</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                    <strong className="text-slate-900 dark:text-white block text-sm mb-0.5">Easel Stations</strong>
                    <span className="text-slate-500 dark:text-slate-400">Along sunflower trails</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                    <strong className="text-slate-900 dark:text-white block text-sm mb-0.5">#StrongMe</strong>
                    <span className="text-slate-500 dark:text-slate-400">Share your memories</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 text-center">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-700 max-w-sm mx-auto">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src="/images/summer-flowers.jpg"
                      alt="Sunflower Polaroid Reflection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-serif italic mt-3">
                    "I slow down to hear the flowers bloom..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CALL TO ACTION FOOTER BANNER
      ======================================================== */}
      <section className="resort-section pt-0 pb-16">
        <div className="resort-container text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/60">
                <Sparkles className="w-3.5 h-3.5" /> Experience the Beauty in Person
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold">
                Step into These Coastal Views
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Reserve your private room and connect with our hosts to plan your serene escape.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onNavigateHome();
                    setTimeout(() => onNavigateSection('rooms'), 100);
                  }}
                  className="py-3 px-6 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-sky-500/25 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Oceanfront Accommodations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateHome();
                    setTimeout(() => onNavigateSection('contact'), 100);
                  }}
                  className="py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
                >
                  Contact Concierge Desk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FULL-SCREEN INTERACTIVE LIGHTBOX
      ======================================================== */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="modal-overlay" onClick={closeLightbox}>
          <div 
            className="relative max-w-5xl w-full mx-4 bg-slate-950/95 rounded-3xl overflow-hidden p-3 sm:p-6 shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Container */}
            <div className="aspect-[16/10] max-h-[72vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Caption & Metadata Footer */}
            <div className="p-4 sm:p-5 text-center text-white">
              <div className="flex items-center justify-center gap-2 mb-1.5 text-xs text-sky-400 font-semibold">
                <span className="uppercase tracking-wider">{filteredItems[activeLightboxIndex].category}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {filteredItems[activeLightboxIndex].location || 'Sanctuary Estate'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl mx-auto leading-relaxed">
                {filteredItems[activeLightboxIndex].caption}
              </p>
              <span className="text-[11px] text-slate-500 mt-3 block">
                Photo {activeLightboxIndex + 1} of {filteredItems.length} • Use Arrow Keys to Navigate
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
