import React from 'react';

import {
  Sparkles,
  ArrowLeft,
  Compass,
  Heart,
  Leaf,
  Sun,
  Feather,
  Users,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Waves,
  BookOpen
} from 'lucide-react';


// About Page
export const AboutPage = ({
  onNavigateHome,
  onNavigateSection
}) => {

  // =========================================================
  // MILESTONES
  // =========================================================

  const milestones = [
    {
      year: '2021',
      title: 'Discovery of Sunflower Bluff',
      desc: 'Our founders stood upon this untouched coastal headland, moved by the rare harmony of azure waters and wild flora, envisioning a sanctuary dedicated to mental clarity.',
      icon: <Compass className="w-5 h-5 text-sky-500" />
    },

    {
      year: '2022',
      title: 'Biophilic Blueprint & Soil Care',
      desc: 'Partnering with master sustainable architects, every room was planned to follow natural wind corridors and coastal topography without felling ancient trees.',
      icon: <Leaf className="w-5 h-5 text-emerald-500" />
    },

    {
      year: '2023',
      title: 'Artisanal Craft & Timber Build',
      desc: 'Local cedarwood, natural limestone, and Japanese joinery were woven into 12 private cliffside and overwater sanctuaries built to last generations.',
      icon: <Feather className="w-5 h-5 text-amber-500" />
    },

    {
      year: '2024',
      title: '4.2-Hectare Flora Expansion',
      desc: 'Our organic yellow sunflower and wildflower meadows expanded to 4.2 hectares, providing vital habitats for coastal pollinators and quiet walking trails for guests.',
      icon: <Sun className="w-5 h-5 text-orange-500" />
    },

    {
      year: '2025',
      title: 'Welcoming the World to Stillness',
      desc: 'StrongMe opened its doors as a premier sanctuary where travelers from over 40 countries come to disconnect from noise and reconnect with themselves.',
      icon: <Sparkles className="w-5 h-5 text-sky-400" />
    }
  ];


  // =========================================================
  // TEAM MEMBERS
  // =========================================================

  const team = [
    {
      name: 'Dr. Maya Lin',
      role: 'Founder & Mindfulness Director',
      image: 'https://images.pexels.com/photos/12467319/pexels-photo-12467319.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
      quote: 'We didn’t build a resort to fill your calendar with activities. We created space so you can hear your own thoughts again.'
    },

    {
      name: 'Chef Aurélien Laurent',
      role: 'Executive Culinary Curator',
      image: 'https://images.pexels.com/photos/8477058/pexels-photo-8477058.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
      quote: 'Every ingredient tells the story of the morning harvest from our organic gardens and line-caught coastal sea.'
    },

    {
      name: 'Kenji Sato',
      role: 'Sound Healer & Wellness Director',
      image: 'https://images.pexels.com/photos/19989614/pexels-photo-19989614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
      quote: 'The rhythm of the tides and Tibetan harmonic bowls gently retune the nervous system within forty-eight hours.'
    },

    {
      name: 'Elena Rostova',
      role: 'Lead Biophilic Architect',
      image: 'https://images.pexels.com/photos/18693470/pexels-photo-18693470.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
      quote: 'Architecture should not shout over nature; it should bow to the horizon and invite the sea breeze inside.'
    }
  ];


  // =========================================================
  // FOUR MAIN PILLARS
  // =========================================================

  const pillars = [
    {
      icon: <BookOpen className="w-6 h-6 text-sky-500" />,
      title: 'Mindful Stillness & Journaling Ritual',
      desc: 'Each room features our signature skeuomorphic leather journal. Writing by hand beside the sea grounds the nervous system and creates timeless keepsakes.'
    },

    {
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      title: 'Eco-Regeneration & Flora Conservation',
      desc: 'Our 4.2-hectare organic sunflower meadow is zero-chemical, fully solar-supported, and dedicated to native biodiversity and sea bird protection.'
    },

    {
      icon: <Waves className="w-6 h-6 text-indigo-500" />,
      title: 'Tidal Rhythm & Acoustic Calming',
      desc: 'No artificial alarms or jarring public announcements. The gentle crest of coastal waves and ambient wind harps set the rhythm of your days.'
    },

    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: 'Discreet, Unhurried Hospitality',
      desc: 'Our hosts anticipate your needs without intruding on your solitude. Every interaction is grounded in quiet respect and genuine warmth.'
    }
  ];


  // =========================================================
  // PAGE
  // =========================================================

  return (
    <div className="about-page-wrapper animate-in fade-in duration-300">

      {/* =====================================================
          PAGE HERO BANNER
      ===================================================== */}

      <section className="about-hero-section">

        <div className="resort-container">

          {/* Breadcrumb Navigation */}
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
              About Our Story
            </span>

          </div>


          {/* Hero Text */}
          <div className="max-w-3xl">

            <div className="section-badge mb-4">
              <Sparkles className="w-3.5 h-3.5" />

              The StrongMe Story & Philosophy
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Born from a Simple Truth: True Luxury is Time to Simply Be
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Nestled along the quiet cliffs of Azure Peninsula, StrongMe Sanctuary was created as an antidote
              to the hurried world—a coastal haven where tactile journaling, sustainable architecture,
              and the healing beauty of the sea converge.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN STORY & ARCHITECTURE SHOWCASE
      ===================================================== */}

      <section className="resort-section bg-white dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800/80">

        <div className="resort-container">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

            {/* Left Image */}
            <div className="lg:col-span-6 relative">

              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-[4/3]">

                <img
                  src="/images/about-sanctuary-architecture.jpg"
                  alt="StrongMe Sustainable Sanctuary Architecture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

              </div>


              {/* Carbon Neutral Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 flex items-center justify-center font-bold">
                    <Leaf className="w-5 h-5" />
                  </div>

                  <div>

                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      100% Carbon Neutral
                    </div>

                    <div className="text-[11px] text-slate-400">
                      Geothermal & solar-powered estate
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-6">

              <div className="section-badge">
                <Compass className="w-3.5 h-3.5" />

                Our Genesis
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                An Untamed Coastline Designed for Deep Restoration
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                In 2021, our founding team sought out a remote peninsula where the ocean winds remained clean and the nights were free of urban light pollution. When we discovered the wild sunflower bluffs overlooking turquoise waters, we made a commitment: never build more than twelve private rooms, and dedicate four times as much land to native floral preservation.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Every room is positioned so that the sunrise enters naturally through floor-to-ceiling glass, eliminating the need for digital alarms. On every cedar writing desk rests a bound archival notebook, inviting guests to slow down, write down their reflections, and rediscover their inner voice.
              </p>


              {/* Sanctuary Stats */}
              <div className="grid grid-cols-2 gap-4 pt-2">

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs">

                  <strong className="text-slate-900 dark:text-white block text-sm mb-0.5">
                    4.2 Hectares
                  </strong>

                  <span className="text-slate-500 dark:text-slate-400">
                    Protected sunflower & coastal reserve
                  </span>

                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs">

                  <strong className="text-slate-900 dark:text-white block text-sm mb-0.5">
                    12 Sanctuaries
                  </strong>

                  <span className="text-slate-500 dark:text-slate-400">
                    Intimate low-density hotel rooms
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              FOUR CORE PILLARS
          ================================================= */}

          <div className="mt-20">

            <div className="text-center max-w-2xl mx-auto mb-12">

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                The Four Pillars of StrongMe Life
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Guiding every ritual, meal, and design choice across our sanctuary estate.
              </p>

            </div>


            {/* Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {pillars.map((pillar, idx) => (

                <div
                  key={idx}
                  className="resort-card p-6 flex flex-col justify-between"
                >

                  <div>

                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                      {pillar.icon}
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SANCTUARY TIMELINE / MILESTONES
      ===================================================== */}

      <section className="resort-section">

        <div className="resort-container max-w-4xl">

          <div className="text-center mb-14">

            <div className="section-badge">
              <Calendar className="w-3.5 h-3.5" />

              Milestone Journey
            </div>

            <h2 className="section-title">
              From Dream to Sacred Sanctuary
            </h2>

            <p className="section-description">
              The thoughtful evolution of our eco-retreat over the past five years.
            </p>

          </div>


          {/* Timeline */}
          <div className="relative border-l-2 border-sky-200 dark:border-slate-700 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">

            {milestones.map((m, idx) => (

              <div
                key={idx}
                className="relative group"
              >

                {/* Timeline Icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-9 h-9 rounded-full bg-white dark:bg-slate-800 border-2 border-sky-400 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  {m.icon}
                </div>


                {/* Timeline Card */}
                <div className="resort-card p-5 sm:p-6">

                  <div className="flex items-center gap-2 mb-1.5">

                    <span className="text-xs font-extrabold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 px-2.5 py-0.5 rounded-full">
                      {m.year}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {m.title}
                    </h3>

                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {m.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SANCTUARY KEEPERS & LEADERSHIP
      ===================================================== */}

      <section className="resort-section bg-slate-50/50 dark:bg-slate-900/30">

        <div className="resort-container">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <div className="section-badge">
              <Users className="w-3.5 h-3.5" />

              Sanctuary Keepers
            </div>

            <h2 className="section-title">
              The People Guiding Your Stillness
            </h2>

            <p className="section-description">
              Meet the founders, wellness masters, and culinary artists devoted to your restorative experience.
            </p>

          </div>


          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {team.map((member, idx) => (

              <div
                key={idx}
                className="resort-card overflow-hidden flex flex-col justify-between group"
              >

                <div>

                  {/* Team Member Image */}
                  <div className="aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-3 left-3 right-3 text-white">

                      <h4 className="text-base font-bold leading-tight">
                        {member.name}
                      </h4>

                      <p className="text-xs text-sky-300 font-medium">
                        {member.role}
                      </p>

                    </div>

                  </div>


                  {/* Quote */}
                  <div className="p-4">

                    <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                      "{member.quote}"
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SUSTAINABILITY CHARTER
      ===================================================== */}

      <section className="resort-section">

        <div className="resort-container">

          <div className="resort-card p-8 sm:p-12 bg-gradient-to-br from-emerald-50/70 via-sky-50/40 to-white dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border-2 border-emerald-200/80 dark:border-emerald-800/40">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Sustainability Text */}
              <div className="lg:col-span-7 space-y-4">

                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-950 px-3 py-1 rounded-full">

                  <Leaf className="w-3.5 h-3.5" />

                  Our Eco & Ocean Pledge

                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Preserving What Heals Us
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We operate as ecological custodians of the Azure Peninsula. 100% of our energy is produced via on-site solar arrays and quiet geothermal loops. We produce zero single-use plastics, compost all organic kitchen scraps for our sunflower bluffs, and donate 5% of retreat proceeds to coastal turtle and reef rehabilitation.
                </p>


                {/* Sustainability Features */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">

                  <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">

                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />

                    <span>
                      Zero Plastic Estate
                    </span>

                  </div>

                  <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">

                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />

                    <span>
                      100% Solar Powered
                    </span>

                  </div>

                  <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">

                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />

                    <span>
                      Native Flora Reserve
                    </span>

                  </div>

                </div>

              </div>


              {/* Eco Rating */}
              <div className="lg:col-span-5 text-center sm:text-right">

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg text-center">

                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1">
                    4.98 ★
                  </div>

                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    Certified Eco-Sanctuary Standard
                  </div>

                  <p className="text-[11px] text-slate-400">
                    Audited annually by Global Regenerative Travel Alliance
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA FOOTER BANNER
      ===================================================== */}

      <section className="resort-section pt-0 pb-16">

        <div className="resort-container text-center">

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">

              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/60">

                <Sparkles className="w-3.5 h-3.5" />

                Plan Your Escape

              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold">
                Ready to Experience Coastal Stillness?
              </h3>

              <p className="text-xs sm:text-sm text-slate-300">
                Explore our private rooms or connect with our concierge team to design your customized retreat.
              </p>


              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">

                {/* Explore Ocean Rooms */}
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
                    Explore Rooms
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