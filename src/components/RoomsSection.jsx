import React, { useState } from 'react';

import {
  Sparkles,
  Maximize2,
  Users,
  BedDouble,
  Eye,
  Check,
  Star,
  ArrowRight
} from 'lucide-react';

import { RESORT_ROOMS } from '../data/resortData';


export const RoomsSection = ({
  onSelectRoomForBooking,
  onOpenRoomModal,
  onOpenFullRoomsPage,
}) => {

  // Currently selected room category
  const [activeCategory, setActiveCategory] = useState('all');


  // --------------------------------------------------
  // Filter Rooms
  // --------------------------------------------------

  const filteredRooms = RESORT_ROOMS.filter((room) => {

    // Show all rooms
    if (activeCategory === 'all') {
      return true;
    }

    // Show only the selected category
    return room.category === activeCategory;
  });


  return (
    <section
      id="rooms"
      className="resort-section"
    >

      <div className="resort-container">


        {/* ================= SECTION HEADER ================= */}

        <div className="text-center max-w-3xl mx-auto mb-10">

          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            Sanctuary Suites &amp; Rooms
          </div>

          <h2 className="section-title">
            Thoughtfully Designed for Comfort &amp; Coastal Escape
          </h2>

          <p className="section-description">
            Each room and suite at StrongMe Sanctuary is designed as a peaceful retreat, blending refined comfort with the natural beauty of the coast. Wake to gentle ocean breezes, unwind in beautifully appointed spaces, and enjoy thoughtfully chosen details that make every stay feel effortless. From relaxing interiors to inviting views, every room offers the perfect setting to rest, recharge, and experience the quiet luxury of life by the sea.
          </p>

        </div>


        {/* ================= ROOMS INTRO ================= */}

        <div className="rooms-intro">

          {/* Intro Text */}
          <div className="rooms-intro-copy">

            <span className="rooms-intro-kicker">
              A place to settle in
            </span>

            <h3 className="rooms-intro-title">
              Rooms &amp; suites made for slower days
            </h3>

            <p className="rooms-intro-text">
              From open-plan ocean villas to quiet garden suites, each room pairs soft natural textures with
              thoughtful comforts and a view of the coast. Choose the space that fits your stay: wake beside
              the water, find shade among the palms, or stretch out above the shoreline.
            </p>

            {/* Number of Rooms */}
            <div className="rooms-intro-note">

              <span className="rooms-intro-note-number">
                12
              </span>

              <span>
                private rooms and suites, each with its own connection to the coast
              </span>

            </div>

          </div>


          {/* Room Style Photos */}
          <div
            className="rooms-intro-photos"
            aria-label="Explore room and suite styles"
          >

            {[
              {
                key: 'villa',
                label: 'Ocean villas',
                note: 'Open views, private terraces',
                image: RESORT_ROOMS[0].image,
                alt: 'Bright oceanfront villa bedroom with a view of the sea',
              },
              {
                key: 'bungalow',
                label: 'Overwater stay',
                note: 'Wake beside the lagoon',
                image: RESORT_ROOMS[1].image,
                alt: 'Overwater sanctuary bedroom overlooking the lagoon',
              },
              {
                key: 'suite',
                label: 'Garden suites',
                note: 'Quiet rooms among the palms',
                image: RESORT_ROOMS[2].image,
                alt: 'Warm timber hotel suite with natural garden views',
              },
            ].map((roomStyle) => (

              <button
                key={roomStyle.key}
                type="button"
                onClick={() => setActiveCategory(roomStyle.key)}
                className={`rooms-intro-photo ${
                  activeCategory === roomStyle.key ? 'selected' : ''
                }`}
                aria-pressed={activeCategory === roomStyle.key}
              >

                {/* Room Image */}
                <img
                  src={roomStyle.image}
                  alt={roomStyle.alt}
                  loading="lazy"
                />

                {/* Dark Image Overlay */}
                <span className="rooms-intro-photo-shade" />

                {/* Image Text */}
                <span className="rooms-intro-photo-copy">

                  <strong>
                    {roomStyle.label}
                  </strong>

                  <small>
                    {roomStyle.note}
                  </small>

                </span>

              </button>

            ))}

          </div>

        </div>


        {/* ================= CATEGORY FILTER ================= */}

        <div className="text-center">

          <div className="filter-tabs-container">

            {/* All Rooms */}
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`filter-tab-btn ${
                activeCategory === 'all' ? 'active' : ''
              }`}
            >
              All Sanctuaries ({RESORT_ROOMS.length})
            </button>


            {/* Ocean Villas */}
            <button
              type="button"
              onClick={() => setActiveCategory('villa')}
              className={`filter-tab-btn ${
                activeCategory === 'villa' ? 'active' : ''
              }`}
            >
              Ocean Villas
            </button>


            {/* Overwater Bungalows */}
            <button
              type="button"
              onClick={() => setActiveCategory('bungalow')}
              className={`filter-tab-btn ${
                activeCategory === 'bungalow' ? 'active' : ''
              }`}
            >
              Overwater Bungalows
            </button>


            {/* Garden Suites */}
            <button
              type="button"
              onClick={() => setActiveCategory('suite')}
              className={`filter-tab-btn ${
                activeCategory === 'suite' ? 'active' : ''
              }`}
            >
              Garden Suites
            </button>

          </div>


          {/* Mobile Dropdown */}
          <select
            className="filter-select"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            aria-label="Filter sanctuary type"
          >

            <option value="all">
              All Sanctuaries ({RESORT_ROOMS.length})
            </option>

            <option value="villa">
              Ocean Villas
            </option>

            <option value="bungalow">
              Overwater Bungalows
            </option>

            <option value="suite">
              Garden Suites
            </option>

          </select>

        </div>


        {/* ================= ROOMS GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {filteredRooms.map((room) => (

            <div
              key={room.id}
              className="resort-card flex flex-col justify-between group"
            >

              <div>


                {/* ================= ROOM IMAGE ================= */}

                <div
                  className="room-card-media cursor-pointer"
                  onClick={() => onOpenRoomModal(room)}
                >

                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                  />


                  {/* Room Badge */}
                  {room.badge && (
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1">

                      <Sparkles className="w-3 h-3 text-amber-500" />

                      {room.badge}

                    </div>
                  )}


                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-slate-900/75 text-white text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1">

                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />

                    <span>
                      {room.rating}
                    </span>

                    <span className="text-slate-300">
                      ({room.reviewsCount})
                    </span>

                  </div>


                  {/* Hover Text */}
                  <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-xs px-3 py-1 rounded-full font-medium shadow opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">

                    <Maximize2 className="w-3 h-3" />

                    View Photos & Details

                  </div>

                </div>


                {/* ================= ROOM CONTENT ================= */}

                <div className="p-6 sm:p-7">


                  {/* Room Name + Price */}
                  <div className="flex items-baseline justify-between mb-2">

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {room.name}
                    </h3>

                    <div className="text-right">

                      <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        ${room.price}
                      </div>

                      <div className="text-[11px] text-slate-400">
                        per night
                      </div>

                    </div>

                  </div>


                  {/* Room Subtitle */}
                  <p className="text-xs font-medium text-sky-600 dark:text-sky-400 mb-4">
                    {room.subtitle}
                  </p>


                  {/* Room Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-5">
                    {room.description}
                  </p>


                  {/* ================= ROOM SPECS ================= */}

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 border-y border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 mb-5">


                    {/* Room Size */}
                    <div className="flex items-center gap-1">

                      <Maximize2 className="w-3.5 h-3.5 text-sky-500" />

                      {room.size}

                    </div>


                    {/* Capacity */}
                    <div className="flex items-center gap-1">

                      <Users className="w-3.5 h-3.5 text-sky-500" />

                      {room.capacity}

                    </div>


                    {/* Bed */}
                    <div className="flex items-center gap-1">

                      <BedDouble className="w-3.5 h-3.5 text-sky-500" />

                      {room.bed.split(' ')[0]} King

                    </div>


                    {/* View */}
                    <div
                      className="flex items-center gap-1 truncate"
                      title={room.view}
                    >

                      <Eye className="w-3.5 h-3.5 text-sky-500" />

                      {room.view.split(' ')[0]} View

                    </div>

                  </div>


                  {/* ================= FEATURE HIGHLIGHTS ================= */}

                  <div className="space-y-1.5 mb-6">

                    {room.features.slice(0, 3).map((feat, idx) => (

                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300"
                      >

                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />

                        <span>
                          {feat}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>


              {/* ================= ACTION BUTTONS ================= */}

              <div className="px-6 pb-6 pt-0 flex items-center gap-3">


                {/* Explore Details */}
                <button
                  type="button"
                  onClick={() => onOpenRoomModal(room)}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Explore Villa Details
                </button>


                {/* Reserve Room */}
                <button
                  type="button"
                  onClick={() => onSelectRoomForBooking(room)}
                  className="py-2.5 px-5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl shadow-md shadow-sky-500/20 transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                >

                  <span>
                    Reserve
                  </span>

                  <ArrowRight className="w-3.5 h-3.5" />

                </button>

              </div>

            </div>

          ))}

        </div>


        {/* ================= FULL ROOMS BUTTON ================= */}

        {onOpenFullRoomsPage && (
          <div className="mt-12 text-center">

            <button
              type="button"
              onClick={onOpenFullRoomsPage}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/60 text-xs sm:text-sm font-bold border border-sky-200/80 dark:border-sky-800/60 transition-all cursor-pointer shadow-sm hover:shadow"
            >

              <span>
                Explore All Sanctuary Villas
              </span>

              <ArrowRight className="w-4 h-4" />

            </button>

          </div>
        )}

      </div>

    </section>
  );
};