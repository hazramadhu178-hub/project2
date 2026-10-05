import React from 'react';
import { 
  BicepsFlexed, 
  ArrowUp, 
  Leaf, 
  Heart 
} from 'lucide-react';

export const FooterSection = ({ onNavigateAbout, onNavigateRooms, onNavigateBeach, onNavigateAmenities, onNavigateGallery, onNavigateDiningReviews, onNavigateLocationFAQ, onNavigateContact, onNavigateSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 text-slate-600 dark:text-slate-400">
      <div className="resort-container px-6">
        {/* Top Affirmation Ribbon */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50 to-amber-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border border-sky-100 dark:border-slate-700 text-center mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
            <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> StrongMe Daily Affirmation
          </span>
          <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 italic">
            "I slow down to hear the flowers bloom and feel the gentle touch of the breeze."
          </p>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="brand-icon-box">
                <BicepsFlexed className="w-5 h-5 text-slate-700 dark:text-sky-400" strokeWidth={2.4} />
              </div>
              <span className="brand-title">StrongMe</span>
            </div>

            <p className="text-xs leading-relaxed max-w-sm">
              StrongMe Coastal Sanctuary & Mindful Journaling Retreat. 
              An intimate haven of sunflower fields, private ocean villas, and tactile reflection rituals designed to restore your inner calm.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 rounded-xl w-fit">
              <Leaf className="w-4 h-4" />
              <span>100% Carbon-Neutral & Single-Use Plastic Free</span>
            </div>
          </div>

          {/* Col 2: Sanctuary Experience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Sanctuary
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onNavigateAbout}
                  className="hover:text-sky-500 transition-colors text-left cursor-pointer"
                >
                  Our Story &amp; Philosophy (About)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateRooms}
                  className="hover:text-sky-500 transition-colors text-left cursor-pointer"
                >
                  Suites &amp; Ocean Villas (Rooms)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateBeach}
                  className="hover:text-sky-500 transition-colors text-left cursor-pointer"
                >
                  Beach &amp; Tidal Lagoon (Beach)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateAmenities}
                  className="hover:text-sky-500 transition-colors text-left cursor-pointer"
                >
                  Amenities &amp; Services (Amenities)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateGallery}
                  className="hover:text-sky-500 transition-colors text-left cursor-pointer"
                >
                  Visual Sanctuary Gallery (Gallery)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Gastronomy & Rituals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Gastronomy &amp; Stories
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onNavigateDiningReviews}
                  className="hover:text-sky-500 transition-colors text-left cursor-pointer"
                >
                  Dining by the Sea (Dining)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateDiningReviews}
                  className="hover:text-sky-500 transition-colors text-left cursor-pointer"
                >
                  Coastal Flavors Lounge
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateDiningReviews}
                  className="hover:text-sky-500 transition-colors text-left cursor-pointer"
                >
                  Guest Stories &amp; Reviews (Reviews)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateLocationFAQ}
                  className="hover:text-sky-500 transition-colors text-left cursor-pointer"
                >
                  Location &amp; Weather (Location)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateLocationFAQ}
                  className="hover:text-sky-500 transition-colors text-left cursor-pointer"
                >
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateContact}
                  className="hover:text-sky-500 transition-colors text-left cursor-pointer"
                >
                  Concierge Desk (Contact)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Policies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Policies
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#privacy" className="hover:text-sky-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-sky-500 transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#cancellation" className="hover:text-sky-500 transition-colors">
                  Cancellation &amp; Refunds
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1">
            <span>© 2025 – 2026 StrongMe Sanctuary Resort. </span>
            <span>Powered by Orian Ai</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-sky-500 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-sky-500 transition-colors">Terms &amp; Conditions</a>
            <a href="#cancellation" className="hover:text-sky-500 transition-colors">Cancellation &amp; Refunds</a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-600 dark:text-slate-300 transition-all cursor-pointer flex items-center gap-1 font-semibold"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
