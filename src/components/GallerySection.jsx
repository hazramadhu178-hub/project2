import React, { useState } from 'react';
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { GALLERY_ITEMS } from '../data/resortData';

export const GallerySection = ({ onOpenFullGalleryPage }) => {

  // Selected gallery filter
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Stores which image is open in the lightbox
  // null means no image is open
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);


  // Filter gallery images
  const filteredItems = GALLERY_ITEMS.filter((item) => {

    // Show all images when "all" is selected
    if (selectedFilter === 'all') {
      return true;
    }

    // Otherwise, only show images from the selected category
    return item.category === selectedFilter;
  });


  // Open an image in the lightbox
  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };


  // Close the lightbox
  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };


  // Show the next image
  const handleNext = () => {

    // Make sure an image is currently open
    if (activeLightboxIndex !== null) {

      // Move to the next image
      // % makes it return to the first image at the end
      setActiveLightboxIndex(
        (activeLightboxIndex + 1) % filteredItems.length
      );
    }
  };


  // Show the previous image
  const handlePrev = () => {

    // Make sure an image is currently open
    if (activeLightboxIndex !== null) {

      // Move to the previous image
      // % makes it go to the last image if we are at the first
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) %
          filteredItems.length
      );
    }
  };


  return (
    <section
      id="gallery"
      className="resort-section bg-slate-50/50 dark:bg-slate-900/30"
    >

      <div className="resort-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" /> Visual Sanctuary
          </div>

          <h2 className="section-title">
            Glimpses of Coastal Peace Through the Lens
          </h2>

          <p className="section-description">
            Explore our sun-drenched floral pathways, glass lagoon villas,
            farm-to-table cuisine, and the tranquil moments waiting for you.
          </p>

        </div>


        {/* Filter Tabs */}
        <div className="text-center mb-8">

          <div className="filter-tabs-container">

            {[
              { key: 'all', label: 'All Photos' },
              { key: 'suites', label: 'Suites & Villas' },
              { key: 'beach', label: 'Beach & Lagoon' },
              { key: 'wellness', label: 'Wellness & Spa' },
              { key: 'dining', label: 'Dining' },
              { key: 'landscape', label: 'Landscapes' },
            ].map((tab) => (

              <button
                key={tab.key}
                type="button"
                onClick={() => setSelectedFilter(tab.key)}
                className={`filter-tab-btn ${
                  selectedFilter === tab.key ? 'active' : ''
                }`}
              >
                {tab.label}
              </button>

            ))}

          </div>


          {/* Mobile dropdown (≤425px) */}
          <select
            className="filter-select"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            aria-label="Filter gallery category"
          >
            <option value="all">All Photos</option>
            <option value="suites">Suites & Villas</option>
            <option value="beach">Beach & Lagoon</option>
            <option value="wellness">Wellness & Spa</option>
            <option value="dining">Dining</option>
            <option value="landscape">Landscapes</option>
          </select>

        </div>


        {/* Gallery Grid */}
        <div className="gallery-grid">

          {filteredItems.map((item, idx) => (

            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="gallery-tile group"
            >

              {/* Gallery Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />


              {/* Image Hover Information */}
              <div className="gallery-tile-hover">

                <div className="flex items-center justify-between mb-1">

                  <span className="text-[10px] uppercase font-bold tracking-wider text-sky-400">
                    {item.category}
                  </span>

                  <Maximize2 className="w-4 h-4 text-white" />

                </div>

                <h4 className="text-sm font-bold text-white mb-0.5">
                  {item.title}
                </h4>

                <p className="text-[11px] text-slate-300 line-clamp-1">
                  {item.caption}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* Full Gallery Button */}
        {onOpenFullGalleryPage && (

          <div className="mt-12 text-center">

            <button
              type="button"
              onClick={onOpenFullGalleryPage}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/60 text-xs sm:text-sm font-bold border border-sky-200/80 dark:border-sky-800/60 transition-all cursor-pointer shadow-sm hover:shadow"
            >
              <span>
                Explore Full Visual Sanctuary Gallery &amp; Photo Spots Guide →
              </span>
            </button>

          </div>

        )}

      </div>


      {/* Lightbox Modal */}
      {activeLightboxIndex !== null &&
        filteredItems[activeLightboxIndex] && (

          <div
            className="modal-overlay"
            onClick={closeLightbox}
          >

            {/* Lightbox Content */}
            <div
              className="relative max-w-4xl w-full mx-4 bg-black/90 rounded-3xl overflow-hidden p-2 sm:p-4 shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>


              {/* Previous Image Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>


              {/* Next Image Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>


              {/* Large Image */}
              <div className="aspect-[16/10] max-h-[70vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center">

                <img
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="w-full h-full object-contain"
                />

              </div>


              {/* Image Information */}
              <div className="p-4 text-center text-white">

                <h3 className="text-lg font-bold">
                  {filteredItems[activeLightboxIndex].title}
                </h3>

                <p className="text-xs text-slate-300 mt-1 max-w-xl mx-auto">
                  {filteredItems[activeLightboxIndex].caption}
                </p>

                <span className="text-[11px] text-slate-500 mt-2 block">
                  {activeLightboxIndex + 1} of {filteredItems.length}
                </span>

              </div>

            </div>

          </div>

        )}

    </section>
  );
};