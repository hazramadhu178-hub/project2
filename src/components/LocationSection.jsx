import React, { useState } from 'react';

import {
  Sparkles,
  MapPin,
  Sun,
  Wind,
  Droplets,
  Sunset,
  Car,
  Train,
  Navigation,
  Compass,
} from 'lucide-react';


export const LocationSection = ({ onOpenFullLocationFAQPage }) => {

  // Stores whether the map has finished loading
  const [mapLoaded, setMapLoaded] = useState(false);


  return (
    <section id="location" className="resort-section">

      <div className="resort-container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          {/* Small Badge */}
          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            Our Location &amp; Destination
          </div>


          {/* Main Heading */}
          <h2 className="section-title">
            Your Gateway to the Coast
          </h2>


          {/* Description */}
          <p className="section-description">
            Perfectly located by the sea, StrongMe Sanctuary offers easy access to beautiful beaches, local attractions, coastal experiences, and breathtaking sunsets. Spend your days exploring the destination, enjoying the ocean, and discovering the charm of the surrounding coast, then return to the peaceful comfort of the sanctuary.
          </p>

        </div>


        {/* =====================================================
            LOCATION + WEATHER
            2 COLUMN LAYOUT
        ===================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">


          {/* ===================================================
              LEFT SIDE
              MAP
          =================================================== */}

          <div className="lg:col-span-7 resort-card overflow-hidden relative flex flex-col justify-between min-h-[380px] p-6 sm:p-8 bg-gradient-to-br from-sky-100 via-blue-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

            <div>

              {/* Location Name */}
              <div className="flex items-center justify-between mb-4">

                <div className="flex items-center gap-2">

                  {/* Location Icon */}
                  <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>


                  {/* Location Details */}
                  <div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      StrongMe Coastal Sanctuary
                    </h4>

                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      88 Sunflower Bay, Azure Peninsula (34.2084° N, 136.8122° E)
                    </span>

                  </div>

                </div>


                {/* Location Status */}
                <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">
                  Private Gated Bluff
                </span>

              </div>


              {/* =================================================
                  LIVE MAP
              ================================================= */}

              <div className="location-map">

                <iframe
                  className="location-map-frame"
                  title="Map showing StrongMe Coastal Sanctuary at 88 Sunflower Bay, Azure Peninsula"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=136.78%2C34.18%2C136.85%2C34.24&layer=mapnik&marker=34.2084%2C136.8122"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setMapLoaded(true)}
                />


                {/* Map Fallback */}
                {!mapLoaded && (

                  <div className="location-map-fallback">

                    <div className="location-map-pin">
                      <MapPin className="w-5 h-5" />
                    </div>

                    <span className="location-map-pin-label">
                      StrongMe Coastal Sanctuary
                    </span>

                    <span className="location-map-pin-sub">
                      34.2084° N, 136.8122° E
                    </span>

                  </div>

                )}


                {/* Custom Map Marker */}
                {mapLoaded && (

                  <div
                    className="location-map-marker"
                    aria-hidden="true"
                  >

                    <span className="location-map-marker-dot">
                      <MapPin className="w-3.5 h-3.5" />
                    </span>

                    <span className="location-map-marker-text">
                      Sunflower Bluff Estate
                    </span>

                  </div>

                )}

              </div>

            </div>


            {/* =================================================
                MAP FOOTER
            ================================================= */}

            <div className="flex items-center justify-between pt-4 mt-5 border-t border-slate-200 dark:border-slate-700 text-xs">

              {/* Parking Information */}
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-sky-500" />
                Free Parking & EV Charging
              </span>


              {/* Google Maps Link */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=34.2084,136.8122"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 dark:text-sky-400 font-bold hover:underline flex items-center gap-1"
              >

                <span>
                  Open in Maps
                </span>

                <Navigation className="w-3 h-3" />

              </a>

            </div>

          </div>


          {/* ===================================================
              RIGHT SIDE
              WEATHER + TRAVEL TIME
          =================================================== */}

          <div className="lg:col-span-5 flex flex-col gap-5">


            {/* =================================================
                WEATHER BOX
            ================================================= */}

            <div className="resort-card p-6 bg-gradient-to-br from-sky-50 to-white dark:from-slate-800 dark:to-slate-900">

              {/* Weather Header */}
              <div className="flex items-center justify-between mb-4">

                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-amber-500" />
                  Sanctuary Live Weather
                </span>

                <span className="text-[11px] text-slate-400">
                  Updated Real-Time
                </span>

              </div>


              {/* Main Weather */}
              <div className="flex items-center justify-between mb-6">

                <div>

                  <div className="text-4xl font-extrabold text-slate-900 dark:text-white">
                    27°C / 81°F
                  </div>

                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Sunny & Gentle Coastal Breeze
                  </div>

                </div>


                {/* Sun Icon */}
                <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-500 flex items-center justify-center font-bold text-2xl animate-pulse">

                  <i
                    className="fa-solid fa-sun"
                    aria-hidden="true"
                  ></i>

                </div>

              </div>


              {/* Weather Details */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-4 border-t border-slate-100 dark:border-slate-800">


                {/* Wind */}
                <div className="p-2 bg-white dark:bg-slate-800 rounded-xl">

                  <Wind className="w-4 h-4 text-sky-500 mx-auto mb-1" />

                  <span className="font-bold text-slate-800 dark:text-slate-200 block">
                    8 knots
                  </span>

                  <span className="text-[10px] text-slate-400">
                    Breeze
                  </span>

                </div>


                {/* Humidity */}
                <div className="p-2 bg-white dark:bg-slate-800 rounded-xl">

                  <Droplets className="w-4 h-4 text-blue-500 mx-auto mb-1" />

                  <span className="font-bold text-slate-800 dark:text-slate-200 block">
                    48%
                  </span>

                  <span className="text-[10px] text-slate-400">
                    Humidity
                  </span>

                </div>


                {/* Sunset */}
                <div className="p-2 bg-white dark:bg-slate-800 rounded-xl">

                  <Sunset className="w-4 h-4 text-orange-500 mx-auto mb-1" />

                  <span className="font-bold text-slate-800 dark:text-slate-200 block">
                    07:18 PM
                  </span>

                  <span className="text-[10px] text-slate-400">
                    Sunset
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                TRAVEL TIME
            ================================================= */}

            <div className="resort-card p-5 space-y-3 text-xs">

              <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                Getting Here:
              </h4>


              {/* Airport */}
              <div className="flex items-center justify-between">

                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Car className="w-4 h-4 text-sky-500" />
                  International Airport (Airport Shuttle)
                </span>

                <strong className="text-slate-900 dark:text-white">
                  45 min
                </strong>

              </div>


              {/* Train Station */}
              <div className="flex items-center justify-between">

                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Train className="w-4 h-4 text-sky-500" />
                  Coastal Express Train (Central Station)
                </span>

                <strong className="text-slate-900 dark:text-white">
                  75 min
                </strong>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            FULL LOCATION & FAQ BUTTON
        ===================================================== */}

        {onOpenFullLocationFAQPage && (

          <div className="mt-8 text-center">

            <button
              type="button"
              onClick={onOpenFullLocationFAQPage}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/60 text-xs sm:text-sm font-bold border border-sky-200/80 dark:border-sky-800/60 transition-all cursor-pointer shadow-sm hover:shadow"
            >
              <span>
                Explore Complete Location, Arrival &amp; FAQ Guide →
              </span>
            </button>

          </div>

        )}

      </div>

    </section>
  );
};