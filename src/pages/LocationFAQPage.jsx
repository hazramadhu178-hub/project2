import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowLeft, 
  MapPin, 
  Sun, 
  Wind, 
  Droplets, 
  Sunset, 
  Car, 
  Train, 
  Navigation, 
  Compass, 
  Search, 
  HelpCircle, 
  ChevronDown, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight,
  Waves
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/resortData';

export const LocationFAQPage = ({ onNavigateHome, onNavigateSection }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIds, setOpenIds] = useState({ });

  const toggleFAQ = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFAQs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const arrivalMethods = [
    {
      icon: <Car className="w-6 h-6 text-sky-500" />,
      title: 'Airport Transfer Shuttle',
      time: '45 Minutes Drive',
      desc: 'Complimentary with all room bookings. Our driver meets you at baggage claim with chilled eucalyptus towels and estate refreshments.',
      highlight: 'Complimentary with room'
    },
    {
      icon: <Train className="w-6 h-6 text-emerald-500" />,
      title: 'Scenic Coastal Rail Express',
      time: '75 Minutes from Central',
      desc: 'Enjoy sweeping sea vistas aboard the express train. Our private luxury shuttle connects you directly from the station platform to the sanctuary gates.',
      highlight: 'Direct platform shuttle'
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-500" />,
      title: 'Self-Drive & EV Charging',
      time: 'Private Gated Entry',
      desc: 'Complimentary on-site guest parking and EV charging points powered 100% by our estate solar energy grid.',
      highlight: '100% Solar EV charging'
    },
    {
      icon: <Waves className="w-6 h-6 text-indigo-500" />,
      title: 'Local Taxi & Car Rental',
      time: 'Flexible Daily Scheduling',
      desc: 'Our front desk coordinates trusted local taxis and rental cars to nearby villages, beaches, and scenic coastal landmarks.',
      highlight: 'Arrange anytime with our host'
    }
  ];

  return (
    <div className="location-faq-page-wrapper animate-in fade-in duration-300">
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
            <span className="text-sky-600 dark:text-sky-400">Location &amp; Frequently Asked Questions</span>
          </div>

          <div className="max-w-3xl">
            <div className="section-badge mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Sanctuary Destination &amp; Practical Guide
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Your Coastal Gateway &amp; Practical Travel Guide
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Everything you need to know about reaching our secluded coastal headland, live weather and marine tides, 
              transportation options, and answers to all guest questions.
            </p>
          </div>

          {/* Quick Travel & Climate Telemetry Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800">
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">GPS Location</span>
              <strong className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">34.2084° N, 136.8122° E</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">88 Sunflower Bay, Azure Peninsula</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">Airport Shuttle</span>
              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">45 Minutes</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">Complimentary hotel transfer</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">Live Climate</span>
              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">27°C / 81°F</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">Sunny &amp; gentle coastal breeze</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">FAQ Topics</span>
              <strong className="text-base sm:text-lg font-extrabold text-sky-600 dark:text-sky-400">{FAQ_ITEMS.length} Categories</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">Instant search &amp; answers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 1: INTERACTIVE MAP & WEATHER STATION
      ======================================================== */}
      <section className="resort-section bg-white dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">
        <div className="resort-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge">
              <MapPin className="w-3.5 h-3.5" /> Destination Map &amp; Real-Time Weather
            </div>
            <h2 className="section-title">
              Secluded by Nature, Effortlessly Accessible
            </h2>
            <p className="section-description">
              Located on a protected coastal headland overlooking calm turquoise waters and rolling yellow flower meadows, sheltered from urban noise yet easily reached.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Left: Interactive Map */}
            <div className="lg:col-span-7 resort-card overflow-hidden relative flex flex-col justify-between min-h-[420px] p-6 sm:p-8 bg-gradient-to-br from-sky-100 via-blue-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        StrongMe Coastal Sanctuary
                      </h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        88 Sunflower Bay, Azure Peninsula (34.2084° N, 136.8122° E)
                      </span>
                    </div>
                  </div>

                  <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">
                    Private Gated Bluff
                  </span>
                </div>

                {/* Live Map Frame */}
                <div className="location-map">
                  <iframe
                    className="location-map-frame"
                    title="Map showing StrongMe Coastal Sanctuary at 88 Sunflower Bay, Azure Peninsula"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=136.78%2C34.18%2C136.85%2C34.24&amp;layer=mapnik&amp;marker=34.2084%2C136.8122"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => setMapLoaded(true)}
                  />

                  {!mapLoaded && (
                    <div className="location-map-fallback">
                      <div className="location-map-pin">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="location-map-pin-label">StrongMe Coastal Sanctuary</span>
                      <span className="location-map-pin-sub">34.2084° N, 136.8122° E</span>
                    </div>
                  )}

                  {mapLoaded && (
                    <div className="location-map-marker" aria-hidden="true">
                      <span className="location-map-marker-dot">
                        <MapPin className="w-3.5 h-3.5" />
                      </span>
                      <span className="location-map-marker-text">Sunflower Bluff Estate</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-5 border-t border-slate-200 dark:border-slate-700 text-xs">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-sky-500" /> Free Parking &amp; EV Charging
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=34.2084,136.8122"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 dark:text-sky-400 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right: Live Coastal Weather Station & Transport Quick Pill */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Weather Box */}
              <div className="resort-card p-6 bg-gradient-to-br from-sky-50 to-white dark:from-slate-800 dark:to-slate-900">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-amber-500" /> Sanctuary Live Climate Station
                  </span>
                  <span className="text-[11px] text-slate-400">Updated Real-Time</span>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-4xl font-extrabold text-slate-900 dark:text-white">
                      27°C / 81°F
                    </div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                      Sunny &amp; Gentle Coastal Breeze
                    </div>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-500 flex items-center justify-center font-bold text-2xl animate-pulse">
                    <i className="fa-solid fa-sun" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-2.5 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-100 dark:border-slate-700">
                    <Wind className="w-4 h-4 text-sky-500 mx-auto mb-1" />
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">8 knots</span>
                    <span className="text-[10px] text-slate-400">Breeze</span>
                  </div>
                  <div className="p-2.5 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-100 dark:border-slate-700">
                    <Droplets className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">48%</span>
                    <span className="text-[10px] text-slate-400">Humidity</span>
                  </div>
                  <div className="p-2.5 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-100 dark:border-slate-700">
                    <Sunset className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">07:18 PM</span>
                    <span className="text-[10px] text-slate-400">Sunset</span>
                  </div>
                </div>
              </div>

              {/* Transit Times Card */}
              <div className="resort-card p-6 space-y-3.5 text-xs">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Estimated Travel Times:</h4>
                
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Car className="w-4 h-4 text-sky-500" /> International Airport (Shuttle)
                  </span>
                  <strong className="text-slate-900 dark:text-white">45 min</strong>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Train className="w-4 h-4 text-sky-500" /> Coastal Express Train (Central Station)
                  </span>
                  <strong className="text-slate-900 dark:text-white">75 min</strong>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Waves className="w-4 h-4 text-sky-500" /> Local Town Center (Taxi)
                  </span>
                  <strong className="text-slate-900 dark:text-white">15 min</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Arrival Options Grid */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-8">
              Four Seamless Arrival Options
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {arrivalMethods.map((method, idx) => (
                <div key={idx} className="resort-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-slate-800 shadow-sm flex items-center justify-center mb-4 border border-sky-100 dark:border-slate-700">
                      {method.icon}
                    </div>
                    <span className="text-[11px] font-extrabold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 px-2 py-0.5 rounded-full inline-block mb-1.5">
                      {method.time}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {method.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {method.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{method.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: COMPREHENSIVE FAQ ACCORDION HUB
      ======================================================== */}
      <section className="resort-section bg-sky-50/40 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
        <div className="resort-container max-w-4xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="section-badge">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </div>
            <h2 className="section-title">
              Clarity &amp; Detailed Sanctuary Answers
            </h2>
            <p className="section-description">
              Find instant answers regarding reservations, room amenities, dietary requirements, wellness classes, and arrival logistics.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative mb-6">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. airport transfer, cancellation, breakfast, journal, yoga)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-sky-400 transition-all shadow-sm"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { key: 'all', label: `All Topics (${FAQ_ITEMS.length})` },
              { key: 'location', label: '📍 Location & Arrival' },
              { key: 'booking', label: '🗓️ Bookings & Rates' },
              { key: 'wellness', label: '🌿 Wellness & Rituals' },
              { key: 'dining', label: '🍽️ Dining & Nutrition' },
              { key: 'journal', label: '📖 Mindful Journal' },
              { key: 'general', label: '✨ Sanctuary Philosophy' },
            ].map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <div key={faq.id} className="faq-accordion-item shadow-sm">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="faq-accordion-header"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      <span className="font-bold">{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                        openIds[faq.id] ? 'rotate-180 text-sky-500' : ''
                      }`}
                    />
                  </button>

                  {openIds[faq.id] && (
                    <div className="faq-accordion-body animate-in fade-in duration-150 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-8 text-center bg-white dark:bg-slate-800 rounded-2xl text-xs text-slate-400 border border-slate-100 dark:border-slate-700">
                No matching questions found for "{searchQuery}". Please contact our 24/7 concierge team below!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          DIRECT CONCIERGE HELP CARD
      ======================================================== */}
      <section className="resort-section">
        <div className="resort-container max-w-3xl">
          <div className="resort-card p-8 sm:p-10 bg-gradient-to-br from-sky-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border-2 border-sky-200 dark:border-slate-700 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 mx-auto flex items-center justify-center font-bold">
              <MessageSquare className="w-7 h-7" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Have Additional Questions or Bespoke Travel Inquiries?
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
              Our 24-hour host desk is at your service to arrange airport transfers, customized dining tasting menus, or special occasion celebrations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => {
                  onNavigateHome();
                  setTimeout(() => onNavigateSection('contact'), 100);
                }}
                className="py-3 px-6 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-sky-500/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message Concierge Desk</span>
              </button>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
              >
                Instant WhatsApp Chat
              </a>
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
                <Sparkles className="w-3.5 h-3.5" /> Plan Your Arrival
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold">
                Your Sanctuary by the Sea Awaits
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Explore our rooms or reserve your stay with complimentary airport shuttles and daily gourmet breakfast.
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
                  <span>Explore Rooms</span>
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
    </div>
  );
};
