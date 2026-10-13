import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowLeft, 
  Maximize2, 
  Users, 
  BedDouble, 
  Eye, 
  Check, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Coffee,
  Waves,
  Sun,
  Flame,
  HelpCircle,
  ChevronDown,
  Gift,
  CheckCircle2,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { RESORT_ROOMS } from '../data/resortData';

export const RoomsPage = ({ 
  onNavigateHome, 
  onNavigateSection,
  onSelectRoomForBooking, 
  onOpenRoomModal 
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');
  const [guestFilter, setGuestFilter] = useState('all');
  const [openFaqId, setOpenFaqId] = useState('room-faq-1');

  // Filter logic
  let filtered = RESORT_ROOMS.filter((room) => {
    if (activeCategory !== 'all' && room.category !== activeCategory) {
      return false;
    }
    if (guestFilter === '2' && !room.capacity.includes('2')) {
      return false;
    }
    if (guestFilter === '3+' && !(room.capacity.includes('3') || room.capacity.includes('4'))) {
      return false;
    }
    return true;
  });

  // Sort logic
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'size') {
    filtered.sort((a, b) => {
      const sizeA = parseInt(a.size, 10) || 0;
      const sizeB = parseInt(b.size, 10) || 0;
      return sizeB - sizeA;
    });
  }

  const roomFaqs = [
    {
      id: 'room-faq-1',
      q: 'What time is check-in and check-out for our room?',
      a: 'Check-in begins at 3:00 PM and check-out is by 11:00 AM. If you arrive early or wish to linger after checkout, our concierge provides access to the oceanfront lounge, luggage stewardship, and changing pavilions.'
    },
    {
      id: 'room-faq-2',
      q: 'Is gourmet farm-to-table breakfast included with all rooms?',
      a: 'Yes. Every booking includes daily complimentary breakfast served either at The Sunflower Pavilion or delivered privately to your room terrace with pour-over coffee, fresh tropical fruits, and artisanal sourdough.'
    },
    {
      id: 'room-faq-3',
      q: 'What is the private heated plunge pool temperature?',
      a: 'Our cliffside and room plunge pools are maintained at a soothing 29°C to 31°C (84°F–88°F) using clean geothermal loops, ensuring ideal comfort year-round under sunny skies or starlit evenings.'
    },
    {
      id: 'room-faq-4',
      q: 'Are children and families welcome in the suites?',
      a: 'We warmly welcome families in our spacious Coastal Breeze Garden Suite (up to 4 guests). To protect the quiet atmosphere of the overwater bungalows and cliff edge villas, those categories are reserved for adults and teens aged 14 and older.'
    },
    {
      id: 'room-faq-5',
      q: 'Can we request customized pillows, scents, or soundscapes?',
      a: 'Prior to arrival, our wellness team sends a bespoke sanctuary preference card where you can select your preferred aromatherapy blend (wild chamomile, coastal eucalyptus, or hinoki cedarwood) and pillow firmness.'
    }
  ];

  const inSuiteInclusions = [
    {
      icon: <Coffee className="w-5 h-5 text-amber-500" />,
      title: 'Daily Breakfast',
      desc: 'Farm-fresh organic breakfast and pour-over single-origin coffee delivered directly to your terrace.'
    },
    {
      icon: <Waves className="w-5 h-5 text-sky-500" />,
      title: 'Geothermal Heated Waters',
      desc: 'Private mineral plunge pools and open-air cedar soaking tubs with botanical bath salts.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-indigo-500" />,
      title: 'Tactile Journaling Station',
      desc: 'Handcrafted leather-bound StrongMe journal, archival ink fountain pen, and daily reflection cards.'
    },
    {
      icon: <Sun className="w-5 h-5 text-orange-500" />,
      title: 'Bang & Olufsen Acoustics',
      desc: 'Bespoke ambient sound system pre-loaded with tidal ocean waves, forest wind harps, and Tibetan bells.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: 'Organic Eucalyptus Robes',
      desc: 'Hypoallergenic sustainable cloud bedding, silk eye masks, and organic bamboo cotton bathrobes.'
    },
    {
      icon: <Gift className="w-5 h-5 text-rose-500" />,
      title: 'Evening Turn-Down Ritual',
      desc: 'Fresh chamomile botanical infusions, warm lavender foot soak compress, and twilight aromatherapy.'
    }
  ];

  return (
    <div className="rooms-page-wrapper animate-in fade-in duration-300">
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
            <span className="text-sky-600 dark:text-sky-400">Sanctuary Suites &amp; Rooms</span>
          </div>

          <div className="max-w-3xl">
            <div className="section-badge mb-4">
              <Sparkles className="w-3.5 h-3.5" /> 12 Intimate Private Accommodations
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Sanctuaries Crafted for Solitude, Rest &amp; Horizon Views
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Designed in harmony with the coastal topography, each room blends natural cedar timber, 
              limestone finishes, and expansive floor-to-ceiling glass. Wake to gentle tidal breezes, 
              enjoy private heated plunge pools, and discover the quiet luxury of unhurried living.
            </p>
          </div>

          {/* Quick Estate Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>100% Ocean &amp; Flora Views</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Private Heated Plunge Pools</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Daily Gourmet Breakfast Included</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Complimentary Airport Shuttle</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          INTERACTIVE FILTER & SANCTUARY SHOWCASE GRID
      ======================================================== */}
      <section className="resort-section bg-white dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">
        <div className="resort-container">
          {/* Controls Bar */}
          <div className="p-3 sm:p-5 lg:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Tabs */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch sm:items-center gap-2 w-full lg:w-auto">
              {[
                { key: 'all', label: 'All Sanctuaries' },
                { key: 'villa', label: 'rooms' },
                { key: 'bungalow', label: 'Overwater Bungalows' },
                { key: 'suite', label: 'Garden & Studios' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  className={`min-w-0 px-2.5 sm:px-3.5 py-2.5 sm:py-2 rounded-xl text-center text-xs leading-tight font-bold transition-all cursor-pointer ${
                    activeCategory === tab.key
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200/80 dark:border-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Guest & Sort Selectors */}
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:flex gap-3 w-full lg:w-auto">
              <div className="flex min-w-0 flex-col gap-1 text-xs">
                <span className="text-slate-400 font-medium">Guests:</span>
                <select
                  value={guestFilter}
                  onChange={(e) => setGuestFilter(e.target.value)}
                  className="w-full min-w-0 px-2.5 sm:px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 outline-none cursor-pointer"
                >
                  <option value="all">All Capacities</option>
                  <option value="2">2 Guests (Couples)</option>
                  <option value="3+">3 - 4 Guests (Spacious)</option>
                </select>
              </div>

              <div className="flex min-w-0 flex-col gap-1 text-xs">
                <span className="text-slate-400 font-medium">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full min-w-0 px-2.5 sm:px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 outline-none cursor-pointer"
                >
                  <option value="recommended">Featured Sanctuaries</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Guest Rating</option>
                  <option value="size">Largest Living Space</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6 text-xs text-slate-500 dark:text-slate-400">
            <span>Showing <strong>{filtered.length}</strong> of {RESORT_ROOMS.length} sanctuary villas</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Best rate guarantee &amp; free 7-day cancellation
            </span>
          </div>

          {/* Sanctuary Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((room) => (
              <div key={room.id} className="resort-card flex flex-col justify-between group">
                <div>
                  {/* Media banner */}
                  <div className="room-card-media cursor-pointer" onClick={() => onOpenRoomModal(room)}>
                    <img src={room.image} alt={room.name} loading="lazy" />
                    
                    {room.badge && (
                      <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-500" /> {room.badge}
                      </div>
                    )}

                    <div className="absolute top-4 right-4 bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{room.rating}</span>
                      <span className="text-slate-300">({room.reviewsCount})</span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs px-3 py-1 rounded-full font-medium shadow opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" /> View 360° Photos &amp; Specs
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {room.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                          ${room.price}
                        </div>
                        <div className="text-[11px] text-slate-400">per night • incl. breakfast</div>
                      </div>
                    </div>

                    <p className="text-xs font-medium text-sky-600 dark:text-sky-400 mb-4">
                      {room.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-5">
                      {room.description}
                    </p>

                    {/* Room Specs Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 border-y border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 mb-5">
                      <div className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-sky-500" /> {room.size}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-sky-500" /> {room.capacity}
                      </div>
                      <div className="flex items-center gap-1">
                        <BedDouble className="w-3.5 h-3.5 text-sky-500" /> {room.bed}
                      </div>
                      <div className="flex items-center gap-1 truncate" title={room.view}>
                        <Eye className="w-3.5 h-3.5 text-sky-500" /> {room.view}
                      </div>
                    </div>

                    {/* Feature Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {room.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6 pt-0 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenRoomModal(room)}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Villa Details &amp; Gallery
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectRoomForBooking(room)}
                    className="py-2.5 px-5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl shadow-md shadow-sky-500/20 transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          IN-SUITE SANCTUARY INCLUSIONS & RITUALS
      ======================================================== */}
      <section className="resort-section bg-sky-50/40 dark:bg-slate-900/40">
        <div className="resort-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-badge">
              <Gift className="w-3.5 h-3.5" /> Included with Every Reservation
            </div>
            <h2 className="section-title">Unhurried Inclusions for Mindful Living</h2>
            <p className="section-description">
              Every sanctuary reservation is curated with holistic sensory amenities to support restorative sleep and calm reflection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inSuiteInclusions.map((inc, idx) => (
              <div key={idx} className="resort-card p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700">
                    {inc.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {inc.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {inc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          ACCOMMODATION FREQUENTLY ASKED QUESTIONS
      ======================================================== */}
      <section className="resort-section">
        <div className="resort-container max-w-3xl">
          <div className="text-center mb-10">
            <div className="section-badge">
              <HelpCircle className="w-3.5 h-3.5" /> Villa Details FAQ
            </div>
            <h2 className="section-title">Accommodation Questions &amp; Inquiries</h2>
            <p className="section-description">
              Key details regarding stays, check-in, arrivals, and sanctuary policies.
            </p>
          </div>

          <div className="space-y-3">
            {roomFaqs.map((faq) => (
              <div key={faq.id} className="faq-accordion-item">
                <button
                  type="button"
                  onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                  className="faq-accordion-header"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaqId === faq.id ? 'rotate-180 text-sky-500' : ''
                    }`}
                  />
                </button>

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

      {/* ========================================================
          CALL TO ACTION FOOTER
      ======================================================== */}
      <section className="resort-section pt-0 pb-16">
        <div className="resort-container text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/60">
                <Sparkles className="w-3.5 h-3.5" /> Reserve Your Sanctuary
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold">
                Experience the Serenity of Seaside Living
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Select your preferred villa or connect with our concierge desk to arrange bespoke dates and airport transfers.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectRoomForBooking(RESORT_ROOMS[0])}
                  className="py-3 px-6 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-sky-500/25 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Reserve Featured Cliff Villa (${RESORT_ROOMS[0].price}/night)</span>
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
