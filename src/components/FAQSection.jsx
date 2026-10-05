import React, { useState } from 'react';

import {
  Sparkles,
  Search,
  ChevronDown,
  HelpCircle
} from 'lucide-react';

import { FAQ_ITEMS } from '../data/resortData';


// FAQ Section
export const FAQSection = ({
  onOpenFullLocationFAQPage
}) => {

  // Search text
  const [searchQuery, setSearchQuery] = useState('');

  // Selected FAQ category
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Stores which FAQ items are open
  const [openIds, setOpenIds] = useState({});


  // Open or close an FAQ
  const toggleFAQ = (id) => {

    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

  };


  // Filter FAQs using category and search
  const filteredFAQs = FAQ_ITEMS.filter((item) => {

    // Check selected category
    const matchesCategory =
      selectedCategory === 'all' ||
      item.category === selectedCategory;


    // Check search text
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());


    // FAQ must match both conditions
    return matchesCategory && matchesSearch;

  });


  return (
    <section
      id="faq"
      className="resort-section bg-slate-50/50 dark:bg-slate-900/30"
    >

      <div className="resort-container max-w-4xl">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <div className="section-badge">

            <Sparkles className="w-3.5 h-3.5" />

            Clarity & Answers

          </div>


          <h2 className="section-title">
            Frequently Asked Questions
          </h2>


          <p className="section-description">
            Everything you need to know about your mindful sanctuary stay, daily inclusions, and reservation policies.
          </p>

        </div>


        {/* Search Input */}
        <div className="relative mb-6">

          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. breakfast, cancellation, journal, yoga)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-sky-400 transition-all shadow-sm"
          />

        </div>


        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">

          {[
            { key: 'all', label: 'All FAQs' },
            { key: 'general', label: 'Sanctuary Philosophy' },
            { key: 'booking', label: 'Bookings & Rates' },
            { key: 'wellness', label: 'Wellness & Rituals' },
            { key: 'dining', label: 'Dining & Nutrition' },
            { key: 'journal', label: 'Mindful Journal' },
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


        {/* FAQ List */}
        <div className="space-y-3">

          {filteredFAQs.length > 0 ? (

            filteredFAQs.map((faq) => (

              <div
                key={faq.id}
                className="faq-accordion-item"
              >

                {/* FAQ Question Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="faq-accordion-header"
                >

                  <span className="flex items-center gap-2">

                    <HelpCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />

                    <span>
                      {faq.question}
                    </span>

                  </span>


                  {/* Down Arrow */}
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      openIds[faq.id]
                        ? 'rotate-180 text-sky-500'
                        : ''
                    }`}
                  />

                </button>


                {/* FAQ Answer */}
                {openIds[faq.id] && (

                  <div className="faq-accordion-body animate-in fade-in duration-150">

                    {faq.answer}

                  </div>

                )}

              </div>

            ))

          ) : (

            /* No Search Results */
            <div className="p-8 text-center bg-white dark:bg-slate-800 rounded-2xl text-xs text-slate-400">

              No matching questions found for "{searchQuery}". Please contact our 24/7 concierge below!

            </div>

          )}

        </div>


        {/* Full FAQ Button */}
        {onOpenFullLocationFAQPage && (

          <div className="mt-10 text-center">

            <button
              type="button"
              onClick={onOpenFullLocationFAQPage}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-750 text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-700 transition-all cursor-pointer shadow-sm hover:shadow"
            >

              <span>
                View Complete Interactive Location Map &amp; Full FAQ Hub →
              </span>

            </button>

          </div>

        )}

      </div>

    </section>
  );
};