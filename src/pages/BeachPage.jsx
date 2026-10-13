import React, { useState } from 'react';

import {
  Sparkles,
  ArrowLeft,
  Clock,
  Compass,
  Waves,
  Sun,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Droplets,
  Flame,
  Gift,
  Camera,
  Leaf
} from 'lucide-react';

import { BEACH_EXPERIENCES } from '../data/resortData';

export const BeachPage = ({
  onNavigateHome,
  onNavigateSection,
  onInquireExperience
}) => {

  // Stores which time slot is selected
  const [activeSlot, setActiveSlot] = useState('all');

  // Stores which FAQ is currently open
  const [openFaqId, setOpenFaqId] = useState('beach-faq-1');


  // ---------------------------------------------------------
  // FILTER BEACH EXPERIENCES
  // ---------------------------------------------------------

  const filteredExperiences = BEACH_EXPERIENCES.filter((exp) => {

    // If "all" is selected, show every experience
    if (activeSlot === 'all') {
      return true;
    }

    // Otherwise, only show experiences from the selected time
    return exp.slot === activeSlot;
  });


  // ---------------------------------------------------------
  // BEACH INCLUSIONS
  // ---------------------------------------------------------

  const beachInclusions = [
    {
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      title: 'Private Teak Cabanas & Daybeds',
      desc: 'Shaded bamboo pavilions with linen curtains and panoramic lagoon vistas reserved for retreat guests.'
    },
    {
      icon: <Droplets className="w-5 h-5 text-sky-500" />,
      title: 'Chilled Herbal Towel & Mist Service',
      desc: 'Attentive beach stewards providing iced eucalyptus towels, fresh young coconuts, and citrus water.'
    },
    {
      icon: <Waves className="w-5 h-5 text-indigo-500" />,
      title: '100% Transparent Eco-Kayaks',
      desc: 'Crystal-clear kayaks and carbon-fiber paddleboards allowing unobstructed views of passing sea turtles.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-emerald-500" />,
      title: 'Coral-Safe Mineral Sun Care',
      desc: 'Complimentary zinc and botanical non-nano sunscreen bar protecting both your skin and our living reef.'
    },
    {
      icon: <Camera className="w-5 h-5 text-orange-500" />,
      title: 'Polaroid Shoreline Memory Kits',
      desc: 'Vintage Polaroid cameras with instant film packs provided for capturing quiet seaside reflections.'
    },
    {
      icon: <Flame className="w-5 h-5 text-rose-500" />,
      title: 'Twilight Bonfire & Herbal Infusions',
      desc: 'Driftwood evening fires with artisan roasted marshmallows, acoustic cello melodies, and star maps.'
    }
  ];


  // ---------------------------------------------------------
  // BEACH FAQ DATA
  // ---------------------------------------------------------

  const beachFaqs = [
    {
      id: 'beach-faq-1',
      q: 'Is the 800-meter sandbar private and restricted to resort guests?',
      a: 'Yes. Our coastal headland and shallow lagoon sandbar are entirely private and secured by natural topography, ensuring undisturbed stillness, zero commercial watercraft, and plenty of space between sun cabanas.'
    },
    {
      id: 'beach-faq-2',
      q: 'Do I need to reserve beach cabanas or water sports equipment in advance?',
      a: 'All beach cabanas, sun loungers, transparent kayaks, and paddleboards are complimentary and available on an unhurried, walk-in basis. For the guided Golden Hour Shoreline Walk, we recommend booking 24 hours in advance with the front desk.'
    },
    {
      id: 'beach-faq-3',
      q: 'Are the swimming waters and lagoon safe for beginner swimmers?',
      a: 'Our natural lagoon is protected by an outer barrier reef, creating warm, crystal-clear, and calm waters with minimal current. Resident lifeguards and marine guides are on duty from dawn to dusk.'
    },
    {
      id: 'beach-faq-4',
      q: 'What should I bring for the Sunrise Shoreline Sound Healing?',
      a: 'Nothing is required. Our wellness team prepares padded linen mats, organic Turkish towels, infused lemon water, and your daily morning reflection card right on the water’s edge.'
    },
    {
      id: 'beach-faq-5',
      q: 'How does StrongMe protect the marine environment?',
      a: 'We operate a certified zero-plastic shoreline, sponsor a 500-meter coral nursery, and only operate non-motorized or silent electric watercraft to protect our resident green sea turtles.'
    }
  ];


  // =========================================================
  // PAGE START
  // =========================================================

  return (
    <div className="beach-page-wrapper animate-in fade-in duration-300">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="about-hero-section">

        <div className="resort-container">

          {/* Back button + breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">

            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-sky-500 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />

              Back to Sanctuary Home
            </button>

            <span>/</span>

            <span className="text-sky-600 dark:text-sky-400">
              Beach &amp; Coastal Experience
            </span>

          </div>


          {/* Hero text */}
          <div className="max-w-3xl">

            <div className="section-badge mb-4">
              <Sparkles className="w-3.5 h-3.5" />

              800-Meter Private Sandbar &amp; Marine Cove
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              The Healing Rhythm of Ocean Tides, Sunlit Shores &amp; Starlit Seas
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Step from your room onto warm golden sands. From Tibetan singing bowls at dawn
              to crystal kayaking above coral reefs and acoustic fires under the stars,
              every seaside ritual is crafted to restore your peace of mind.
            </p>

          </div>


          {/* =================================================
              COASTAL INFORMATION
          ================================================= */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800">

            {/* Water Temperature */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">

              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                Water Temp
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                26°C / 79°F
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                Warm &amp; calm tropical lagoon
              </span>

            </div>


            {/* Tidal State */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">

              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                Tidal State
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                0.4m Low Slack
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                High tide at 04:45 PM
              </span>

            </div>


            {/* Lagoon Visibility */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">

              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                Lagoon Visibility
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                25+ Meters
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                Crystal reef clarity
              </span>

            </div>


            {/* Sunset */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">

              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                Golden Sunset
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                07:18 PM
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                Shoreline walk begins 5:30
              </span>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SHORELINE EXPERIENCES
      ===================================================== */}

      <section className="resort-section bg-white dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">

        <div className="resort-container">

          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">

            <div className="section-badge">
              <Clock className="w-3.5 h-3.5" />

              Daily Shoreline Schedule
            </div>

            <h2 className="section-title">
              Rituals Formed with the Flow of the Sun
            </h2>

            <p className="section-description">
              Participate at your own quiet pace. All morning, afternoon, and night rituals are guided by certified resident mindfulness practitioners.
            </p>

          </div>


          {/* =================================================
              TIME FILTER
          ================================================= */}

          <div className="flex justify-center mb-10">

            <div className="p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 inline-flex flex-wrap gap-1.5">

              {[
                { key: 'all', label: 'All Experiences (6)' },
                { key: 'morning', label: '🌅 Morning Dawn' },
                { key: 'afternoon', label: '☀️ Afternoon Sun' },
                { key: 'sunset', label: '🌇 Sunset Sail' },
                { key: 'night', label: '✨ Night Bonfire' }
              ].map((tab) => (

                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveSlot(tab.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeSlot === tab.key
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>

              ))}

            </div>

          </div>


          {/* =================================================
              EXPERIENCE CARDS
          ================================================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredExperiences.map((exp) => (

              <div
                key={exp.id}
                className="resort-card overflow-hidden flex flex-col justify-between group"
              >

                <div>

                  {/* Experience image */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-slate-100 dark:bg-slate-800">

                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />


                    {/* Experience tags */}
                    <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">

                      {exp.tags.slice(0, 2).map((tag, idx) => (

                        <span
                          key={idx}
                          className="bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>

                      ))}

                    </div>


                    {/* Complimentary / Reservation badge */}
                    <div className="absolute top-3 right-3">

                      {exp.included ? (

                        <span className="bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                          COMPLIMENTARY
                        </span>

                      ) : (

                        <span className="bg-sky-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                          RESERVATION
                        </span>

                      )}

                    </div>

                  </div>


                  {/* Experience information */}
                  <div className="p-6">

                    <div className="flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400 font-semibold mb-1.5">

                      <Clock className="w-3.5 h-3.5" />

                      <span>{exp.time}</span>

                      <span>•</span>

                      <span>{exp.duration}</span>

                    </div>


                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {exp.title}
                    </h3>


                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                  </div>

                </div>


                {/* Experience button */}
                <div className="px-6 pb-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-auto pt-4 flex items-center justify-between">

                  <span className="text-[11px] text-slate-400">
                    {exp.included
                      ? 'Included with stay'
                      : 'Optional premium sail'}
                  </span>


                  <button
                    type="button"
                    onClick={() => {

                      // If a custom inquiry function exists, use it
                      if (onInquireExperience) {
                        onInquireExperience(exp);
                      }

                      // Otherwise go to the contact section
                      else {
                        onNavigateHome();

                        setTimeout(() => {
                          onNavigateSection('contact');
                        }, 100);
                      }

                    }}
                    className="py-2 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Inquire Details →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BEACH INCLUSIONS
      ===================================================== */}

      <section className="resort-section">

        <div className="resort-container">

          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">

            <div className="section-badge">
              <Gift className="w-3.5 h-3.5" />

              Complimentary Shoreline Care
            </div>

            <h2 className="section-title">
              Designed for Sun-Soaked Solitude
            </h2>

            <p className="section-description">
              Every beach chair, cabana pavilion, and watercraft is reserved exclusively for retreat guests with zero crowds.
            </p>

          </div>


          {/* Inclusion cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {beachInclusions.map((item, idx) => (

              <div
                key={idx}
                className="resort-card p-6 flex flex-col justify-between"
              >

                <div>

                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-slate-800 shadow-sm flex items-center justify-center mb-4 border border-sky-100 dark:border-slate-700">
                    {item.icon}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MARINE CONSERVATION
      ===================================================== */}

      <section className="resort-section bg-slate-50/50 dark:bg-slate-900/30">

        <div className="resort-container">

          <div className="resort-card p-8 sm:p-12 bg-gradient-to-br from-sky-50/80 via-blue-50/50 to-white dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border-2 border-sky-200/80 dark:border-slate-700">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Conservation information */}
              <div className="lg:col-span-7 space-y-4">

                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-100/80 dark:bg-sky-950 px-3 py-1 rounded-full">

                  <ShieldCheck className="w-3.5 h-3.5" />

                  Coastal Conservation Pledge

                </div>


                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Protecting the Sea That Restores You
                </h3>


                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our private lagoon is home to wild green sea turtles, staghorn coral reefs, and resident schools of colorful reef fish. We actively monitor water clarity, maintain zero motorboat noise, and partner with regional marine biologists to ensure our coastline remains pristine for generations.
                </p>


                {/* Conservation points */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">

                  <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                    <span>Protected Turtle Cove</span>
                  </div>

                  <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                    <span>100% Coral-Safe Sun Balm</span>
                  </div>

                  <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                    <span>Zero Engine Wake Noise</span>
                  </div>

                </div>

              </div>


              {/* Sanctuary badge */}
              <div className="lg:col-span-5 text-center sm:text-right">

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg text-center">

                  <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 mx-auto flex items-center justify-center font-bold mb-2">

                    <Waves className="w-6 h-6" />

                  </div>

                  <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Certified Blue Haven Sanctuary
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Designated as an eco-protected marine sanctuary with zero commercial fishing.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BEACH FAQ
      ===================================================== */}

      <section className="resort-section">

        <div className="resort-container max-w-3xl">

          {/* FAQ heading */}
          <div className="text-center mb-10">

            <div className="section-badge">
              <HelpCircle className="w-3.5 h-3.5" />

              Shoreline Details FAQ
            </div>

            <h2 className="section-title">
              Beach &amp; Tidal Questions
            </h2>

            <p className="section-description">
              Everything you need to know about our private sandbar, equipment, and ocean activities.
            </p>

          </div>


          {/* FAQ list */}
          <div className="space-y-3">

            {beachFaqs.map((faq) => (

              <div
                key={faq.id}
                className="faq-accordion-item"
              >

                {/* FAQ question button */}
                <button
                  type="button"
                  onClick={() => {
                    if (openFaqId === faq.id) {
                      setOpenFaqId(null);
                    } else {
                      setOpenFaqId(faq.id);
                    }
                  }}
                  className="faq-accordion-header"
                >

                  <span className="flex items-center gap-2">

                    <HelpCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />

                    <span>{faq.q}</span>

                  </span>


                  {/* Arrow rotates when FAQ is open */}
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaqId === faq.id
                        ? 'rotate-180 text-sky-500'
                        : ''
                    }`}
                  />

                </button>


                {/* FAQ answer */}
                {openFaqId === faq.id && (
                  <div className="faq-accordion-body animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CALL TO ACTION
      ===================================================== */}

      <section className="resort-section pt-0 pb-16">

        <div className="resort-container text-center">

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">

              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/60">

                <Sparkles className="w-3.5 h-3.5" />

                Coastal Escape Awaits

              </div>


              <h3 className="text-2xl sm:text-4xl font-extrabold">
                Step Into the Rhythm of the Waves
              </h3>


              {/* CTA buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">

                {/* Go to rooms */}
                <button
                  type="button"
                  onClick={() => {
                    onNavigateHome();

                    setTimeout(() => {
                      onNavigateSection('rooms');
                    }, 100);
                  }}
                  className="py-3 px-6 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-sky-500/25 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Oceanfront Accommodations</span>

                  <ArrowRight className="w-4 h-4" />
                </button>


                {/* Go to contact */}
                <button
                  type="button"
                  onClick={() => {
                    onNavigateHome();

                    setTimeout(() => {
                      onNavigateSection('contact');
                    }, 100);
                  }}
                  className="py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
                >
                  Contact Shoreline Concierge
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};