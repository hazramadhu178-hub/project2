import React, { useState } from 'react';

import {
  Sparkles,
  ArrowLeft,
  Clock,
  Check,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Coffee,
  Waves,
  Sun,
  Gift,
  BookOpen,
  Utensils,
  CheckCircle2,
  Droplets
} from 'lucide-react';


export const AmenitiesPage = ({
  onNavigateHome,
  onNavigateSection
}) => {

  // =========================================================
  // STATE
  // =========================================================

  // Stores the currently selected amenity category
  const [activeCategory, setActiveCategory] = useState('all');

  // Stores which FAQ is currently open
  const [openFaqId, setOpenFaqId] = useState('amenity-faq-1');


  // =========================================================
  // AMENITIES DATA
  // =========================================================

  const detailedAmenities = [
    {
      id: 'botanical-spa',
      category: 'wellness',
      title: 'Solarium Botanical & Hot Stone Spa',
      subtitle: 'Holistic therapies, volcanic river stones, and organic essential oils',
      hours: '08:00 AM – 09:00 PM',
      highlight: '6 Private Open-Air Pavilions',
      image: '/images/spa-pavilion.jpg',
      description: 'Nestled beside a tranquil lotus pond, our spa offers bespoke treatments using estate-grown chamomile, lavender compresses, and warm Himalayan salt stones.',
      perks: [
        'Custom organic aromatherapy blending',
        'Open-air cedar soaking tubs with sea salt infusions',
        'Sound bath integration with Tibetan harmonic bowls',
        'Complimentary spa setup upon request'
      ]
    },

    {
      id: 'infinity-pool',
      category: 'pools',
      title: 'Triple-Tier Horizon Infinity Pool',
      subtitle: 'Geothermal heated mineral water seamlessly merging with the sea',
      hours: '06:00 AM – 10:00 PM',
      highlight: '30°C Year-Round Heated Minerals',
      image: 'https://images.pexels.com/photos/38048432/pexels-photo-38048432.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      description: 'Suspended above the turquoise lagoon, enjoy cushioned sun loungers, shaded bamboo umbrellas, and attentive poolside service with iced eucalyptus towels.',
      perks: [
        'Geothermal mineral-rich heated water (30°C / 86°F)',
        'Dedicated adult quiet zones and sunset daybeds',
        'Poolside hydration bar with fresh young coconuts',
        'Underwater acoustic soundscape system'
      ]
    },

    {
      id: 'mindful-library',
      category: 'culture',
      title: 'The Mindful Library & Stationery Studio',
      subtitle: 'Curated literature, Japanese fountain pens, and archival paper',
      hours: 'Open 24 Hours Daily',
      highlight: '2,000+ Curated Global Titles',
      image: 'https://images.pexels.com/photos/6032162/pexels-photo-6032162.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      description: 'A quiet cedarwood haven lined with literature on philosophy, poetry, mindfulness, and design. Guests are provided with handcrafted StrongMe journals and calligraphy stations.',
      perks: [
        'Complimentary handcrafted leather journal kit',
        'Bespoke writing desks with ocean horizon vistas',
        'Rare single-origin tea and pour-over coffee bar',
        'Quiet reading alcoves with acoustic sound insulation'
      ]
    },

    {
      id: 'gastronomy-dining',
      category: 'dining',
      title: 'Farm-to-Table Gastronomy & Private Terrace Dining',
      subtitle: 'Sustainable coastal bounty and bespoke and dining rituals',
      hours: '07:00 AM – 11:00 PM',
      highlight: 'Estate Organic Gardens',
      image: 'https://images.pexels.com/photos/30660306/pexels-photo-30660306.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      description: 'Every dish celebrates local fishing cooperatives and morning harvests from our 4.2-hectare organic estate, paired with organic biodynamic wines and floral mocktails.',
      perks: [
        'Daily complimentary gourmet breakfast included',
        'Plant-forward, gluten-free, and allergen-sensitive tasting menus',
        'Sunset raw bar & artisanal botanical cocktails'
      ]
    },

    {
      id: 'movement-studio',
      category: 'wellness',
      title: 'Open-Air Movement & Pilates Studio',
      subtitle: 'Technogym equipment, Reformer Pilates, and panoramic palm vistas',
      hours: '06:00 AM – 09:00 PM',
      highlight: 'Daily Guided Classes',
      image: 'https://images.pexels.com/photos/3012274/pexels-photo-3012274.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      description: 'Surrounded by whispering bamboo and sea views, practice guided sunrise yoga, breathwork, and strength conditioning with resident movement masters.',
      perks: [
        'Reformer Pilates and Technogym cardio machines',
        'Daily complimentary sunrise and sunset yoga flow',
        'Private personal training and mobility sessions',
        'Chilled infused electrolyte waters and organic towels'
      ]
    },

    {
      id: 'concierge-mobility',
      category: 'concierge',
      title: '24/7 Dedicated Concierge & Guest Mobility',
      subtitle: 'Airport shuttles, EV charging, and discreet host stewardship',
      hours: 'Available 24/7 Non-Stop',
      highlight: 'Private Airport Transfers',
      image: 'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      description: 'Our multilingual concierge team ensures every logistical detail is effortless, from airport shuttle bookings to trusted local taxi coordination for coastal day trips.',
      perks: [
        'Complimentary airport shuttle transfers',
        'On-site EV charging and free guest parking',
        'Luggage packing and garment care stewardship',
        'Dedicated 24-hour host communication via WhatsApp'
      ]
    }
  ];


  // =========================================================
  // FILTER AMENITIES
  // =========================================================

  // If "all" is selected, show everything.
  // Otherwise, only show amenities from the selected category.
  const filtered = detailedAmenities.filter((item) => {

    if (activeCategory === 'all') {
      return true;
    }

    return item.category === activeCategory;
  });


  // =========================================================
  // DAILY SCHEDULE DATA
  // =========================================================

  const dailySchedule = [
    {
      time: '06:30 AM',
      title: 'Sunrise Shoreline Setup & Lemon Infusion',
      desc: 'Padded Turkish towels, warm lemon water, and singing bowls prepared on the water’s edge.',
      icon: <Sun className="w-4 h-4 text-amber-500" />
    },

    {
      time: '08:00 AM',
      title: 'Room Artisanal Breakfast Delivery',
      desc: 'Freshly baked sourdough, tropical dragonfruit bowls, and pour-over coffee brought to your terrace.',
      icon: <Coffee className="w-4 h-4 text-sky-500" />
    },

    {
      time: '01:00 PM',
      title: 'Midday Poolside Eucalyptus Mist & Coconuts',
      desc: 'Chilled face towels, fresh young coconuts, and mineral sunscreen service around the infinity pools.',
      icon: <Droplets className="w-4 h-4 text-emerald-500" />
    },

    {
      time: '04:30 PM',
      title: 'Solarium Hot Stone & Sound Healing Sessions',
      desc: 'Open-air botanical treatments, cedar soaking tubs, and vibrational Tibetan singing bowls.',
      icon: <Sparkles className="w-4 h-4 text-indigo-500" />
    },

    {
      time: '07:00 PM',
      title: 'Golden Hour Terrace Aperitif & Dining',
      desc: '5-course seasonal degustation or sunset tapas paired with artisanal lavender mocktails.',
      icon: <Utensils className="w-4 h-4 text-orange-500" />
    },

    {
      time: '09:30 PM',
      title: 'Chamomile Evening Turn-Down & Aromatherapy',
      desc: 'Fresh chamomile tea infusions, warm lavender foot soak, and twilight soundscape activation.',
      icon: <Gift className="w-4 h-4 text-rose-500" />
    }
  ];


  // =========================================================
  // FAQ DATA
  // =========================================================

  const amenityFaqs = [
    {
      id: 'amenity-faq-1',
      q: 'Are all pool cabanas and daybeds complimentary for resort guests?',
      a: 'Yes. All sun loungers, shaded bamboo cabanas, private daybeds, and infinity pool access are 100% complimentary on an unhurried, first-come basis with dedicated steward service.'
    },

    {
      id: 'amenity-faq-2',
      q: 'Can spa massages and treatments be experienced in our private room?',
      a: 'Absolutely. Our wellness team can transform your private room terrace or indoor living room into an open-air treatment sanctuary with mobile massage beds, essential oils, and sound bowls.'
    },

    {
      id: 'amenity-faq-3',
      q: 'What is included in the complimentary daily breakfast?',
      a: 'Every guest receives our complete farm-to-table breakfast featuring house-baked sourdough, tropical fruit platters, free-range eggs, organic grains, and pour-over coffee or ceremonial matcha.'
    },

    {
      id: 'amenity-faq-4',
      q: 'Is high-speed Wi-Fi available throughout the entire estate?',
      a: 'Yes. Quiet, ultra-high-speed fiber Wi-Fi is seamlessly available across all 12 rooms, the infinity pool deck, beach cabanas, and the mindful library.'
    },

    {
      id: 'amenity-faq-5',
      q: 'How does the luggage stewardship and early arrival service work?',
      a: 'If you arrive before check-in time (3:00 PM), our concierge securely handles your luggage, provides fresh towels and refreshments in our arrival lounge, and gives you immediate access to all pools, beach, and dining.'
    }
  ];


  // =========================================================
  // PAGE START
  // =========================================================

  return (
    <div className="amenities-page-wrapper animate-in fade-in duration-300">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="about-hero-section">

        <div className="resort-container">

          {/* Breadcrumb */}
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
              Amenities &amp; Services
            </span>

          </div>


          {/* Hero Text */}
          <div className="max-w-3xl">

            <div className="section-badge mb-4">

              <Sparkles className="w-3.5 h-3.5" />

              Complete Hotel Amenities &amp; Services

            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Thoughtfully Crafted Services for Unhurried Ease &amp; Sensorial Rest
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              From heated mineral infinity pools and open-air botanical spa pavilions to private in-room dining
              and 24-hour concierge stewardship, discover our comprehensive resort amenities.
            </p>

          </div>


          {/* Quick Amenities */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800">

            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>24/7 Concierge &amp; Host Desk</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>30°C Heated Mineral Pools</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Daily Housekeeping &amp; Turn-down</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Farm-to-Table Gastronomy</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DETAILED AMENITIES
      ===================================================== */}

      <section className="resort-section bg-white dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">

        <div className="resort-container">

          <div className="text-center max-w-2xl mx-auto mb-10">

            <div className="section-badge">
              <Sparkles className="w-3.5 h-3.5" />

              Curated Hotel Facilities
            </div>

            <h2 className="section-title">
              Everything You Need for Restorative Living
            </h2>

            <p className="section-description">
              Filter through our specialized wellness pavilions, water facilities, and creative sanctuaries.
            </p>

          </div>


          {/* Category Filter */}
          <div className="flex justify-center mb-10">

            <div className="p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 inline-flex flex-wrap gap-1.5">

              {[
                {
                  key: 'all',
                  label: 'All Services (6)'
                },
                {
                  key: 'wellness',
                  label: 'Wellness & Spa',
                  icon: 'fa-spa'
                },
                {
                  key: 'pools',
                  label: 'Pools & Water',
                  icon: 'fa-water'
                },
                {
                  key: 'dining',
                  label: 'Gastronomy',
                  icon: 'fa-utensils'
                },
                {
                  key: 'culture',
                  label: 'Mindful Library',
                  icon: 'fa-book-open'
                },
                {
                  key: 'concierge',
                  label: 'Mobility & Host',
                  icon: 'fa-car'
                }
              ].map((tab) => (

                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === tab.key
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >

                  {tab.icon && (
                    <i
                      className={`fa-solid ${tab.icon} mr-1.5`}
                      aria-hidden="true"
                    ></i>
                  )}

                  {tab.label}

                </button>

              ))}

            </div>

          </div>


          {/* Amenities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filtered.map((item) => (

              <div
                key={item.id}
                className="resort-card overflow-hidden flex flex-col justify-between group"
              >

                <div>

                  {/* Amenity Image */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-slate-100 dark:bg-slate-800">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />


                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">

                      <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        {item.category.toUpperCase()}
                      </span>

                    </div>


                    {/* Highlight Badge */}
                    <div className="absolute top-3 right-3">

                      <span className="bg-sky-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                        {item.highlight}
                      </span>

                    </div>

                  </div>


                  {/* Amenity Information */}
                  <div className="p-6">

                    {/* Opening Hours */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium mb-1.5">

                      <Clock className="w-3.5 h-3.5 text-sky-500" />

                      <span>
                        {item.hours}
                      </span>

                    </div>


                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                      {item.title}
                    </h3>


                    {/* Subtitle */}
                    <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-3">
                      {item.subtitle}
                    </p>


                    {/* Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                      {item.description}
                    </p>


                    {/* Perks */}
                    <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">

                      {item.perks.map((perk, idx) => (

                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                        >

                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />

                          <span>
                            {perk}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>


                {/* Card Footer */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-auto flex items-center justify-between">

                  <span className="text-[11px] text-slate-400">
                    Complimentary for all guests
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      onNavigateHome();

                      setTimeout(() => {
                        onNavigateSection('contact');
                      }, 100);
                    }}
                    className="py-2 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Inquire Host →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DAILY SCHEDULE
      ===================================================== */}

      <section className="resort-section">

        <div className="resort-container max-w-4xl">

          <div className="text-center mb-14">

            <div className="section-badge">

              <Clock className="w-3.5 h-3.5" />

              Daily Flow of Hospitality

            </div>

            <h2 className="section-title">
              A Day of Mindful Sanctuary Services
            </h2>

            <p className="section-description">
              How our discreet hosts care for your well-being throughout every hour of the day.
            </p>

          </div>


          {/* Schedule Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {dailySchedule.map((slot, idx) => (

              <div
                key={idx}
                className="resort-card p-6 flex items-start gap-4"
              >

                {/* Schedule Icon */}
                <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-slate-800 shadow-sm flex items-center justify-center flex-shrink-0 border border-sky-100 dark:border-slate-700">
                  {slot.icon}
                </div>


                <div>

                  {/* Time */}
                  <span className="text-xs font-extrabold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 px-2 py-0.5 rounded-full inline-block mb-1.5">
                    {slot.time}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {slot.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {slot.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="resort-section bg-slate-50/50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-800">

        <div className="resort-container max-w-3xl">

          <div className="text-center mb-10">

            <div className="section-badge">

              <HelpCircle className="w-3.5 h-3.5" />

              Facilities &amp; Services FAQ

            </div>

            <h2 className="section-title">
              Frequently Asked Amenities Questions
            </h2>

            <p className="section-description">
              Answers regarding pool access, room service, breakfast hours, and concierge logistics.
            </p>

          </div>


          {/* FAQ List */}
          <div className="space-y-3">

            {amenityFaqs.map((faq) => (

              <div
                key={faq.id}
                className="faq-accordion-item"
              >

                {/* FAQ Question Button */}
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

                    <span>
                      {faq.q}
                    </span>

                  </span>


                  {/* Arrow */}
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaqId === faq.id
                        ? 'rotate-180 text-sky-500'
                        : ''
                    }`}
                  />

                </button>


                {/* FAQ Answer */}
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
          CTA FOOTER
      ===================================================== */}

      <section className="resort-section pt-0 pb-16">

        <div className="resort-container text-center">

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">

              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/60">

                <Sparkles className="w-3.5 h-3.5" />

                Experience Coastal Luxury

              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold">
                Ready to Enjoy Unhurried Ease?
              </h3>

              <p className="text-xs sm:text-sm text-slate-300">
                Select your private room sanctuary or connect with our concierge desk to arrange personalized treatments and transportation.
              </p>


              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">

                {/* Explore Rooms */}
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

                  <span>
                    Explore Ocean Sanctuaries
                  </span>

                  <ArrowRight className="w-4 h-4" />

                </button>


                {/* Contact Concierge */}
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