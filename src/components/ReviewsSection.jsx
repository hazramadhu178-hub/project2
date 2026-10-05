import React, { useState } from 'react';
import {
  Sparkles,
  Star,
  ThumbsUp,
  ShieldCheck
} from 'lucide-react';

import { GUEST_REVIEWS } from '../data/resortData';

export const ReviewsSection = ({ onOpenFullDiningReviewsPage }) => {

  // Store all reviews
  const [reviewsList, setReviewsList] = useState(GUEST_REVIEWS);

  // Store the selected filter
  const [activeFilter, setActiveFilter] = useState('all');

  // Store which reviews the user has liked
  const [likedIds, setLikedIds] = useState({});


  // --------------------------------------------------
  // Filter Reviews
  // --------------------------------------------------

  const filteredReviews = reviewsList.filter((r) => {

    // Show all reviews
    if (activeFilter === 'all') {
      return true;
    }

    // Show only the selected trip type
    return r.tripType === activeFilter;
  });


  // --------------------------------------------------
  // Like / Unlike Review
  // --------------------------------------------------

  const handleToggleLike = (id) => {

    setLikedIds((prev) => {

      // Check if this review is already liked
      const isLiked = !!prev[id];

      // Add 1 when liking
      // Remove 1 when unliking
      const updatedLikes = isLiked ? -1 : 1;


      // Update the review's like count
      setReviewsList((list) =>
        list.map((item) =>
          item.id === id
            ? {
                ...item,
                likes: item.likes + updatedLikes
              }
            : item
        )
      );


      // Save the new liked/unliked state
      return {
        ...prev,
        [id]: !isLiked
      };
    });
  };


  // --------------------------------------------------
  // Reviews Section
  // --------------------------------------------------

  return (
    <section
      id="reviews"
      className="resort-section bg-sky-50/40 dark:bg-slate-900/40"
    >

      <div className="resort-container">


        {/* ================= SECTION HEADER ================= */}

        <div className="text-center max-w-3xl mx-auto mb-10">

          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            Guest Reflections & Stories
          </div>

          <h2 className="section-title">
            Words From Those Who Found Stillness Here
          </h2>

          <p className="section-description">
            Read honest reflections from solo travelers, couples, and creative souls who stepped into our coastal sanctuary.
          </p>

        </div>


        {/* ================= RATING OVERVIEW ================= */}

        <div className="max-w-xl mx-auto p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-around text-center mb-10">

          {/* Serenity Score */}
          <div>

            <div className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-1">

              <span>4.98</span>

              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />

            </div>

            <div className="text-[11px] text-slate-400">
              Overall Serenity Score
            </div>

          </div>


          {/* Divider */}
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />


          {/* Recommendation */}
          <div>

            <div className="text-2xl font-extrabold text-sky-500">
              99.4%
            </div>

            <div className="text-[11px] text-slate-400">
              Would Recommend to a Friend
            </div>

          </div>


          {/* Divider */}
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />


          {/* Review Count */}
          <div>

            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
              300+
            </div>

            <div className="text-[11px] text-slate-400">
              Verified Guest Reviews
            </div>

          </div>

        </div>


        {/* ================= FILTER BUTTONS ================= */}

        <div className="text-center mb-8">

          <div className="filter-tabs-container">

            {[
              'all',
              'Solo Mindful',
              'Romantic Escape',
              'Wellness Retreat'
            ].map((type) => (

              <button
                key={type}
                type="button"
                onClick={() => setActiveFilter(type)}
                className={`filter-tab-btn ${
                  activeFilter === type ? 'active' : ''
                }`}
              >
                {type === 'all' ? 'All Stories' : type}
              </button>

            ))}

          </div>


          {/* Mobile Dropdown */}
          <select
            className="filter-select"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            aria-label="Filter reviews by trip type"
          >
            <option value="all">
              All Stories
            </option>

            <option value="Solo Mindful">
              Solo Mindful
            </option>

            <option value="Romantic Escape">
              Romantic Escape
            </option>

            <option value="Wellness Retreat">
              Wellness Retreat
            </option>

          </select>

        </div>


        {/* ================= REVIEWS GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {filteredReviews.map((rev) => (

            <div
              key={rev.id}
              className="resort-card p-6 flex flex-col justify-between"
            >

              <div>


                {/* ================= GUEST INFORMATION ================= */}

                <div className="flex items-center justify-between mb-3">

                  {/* Guest Profile */}
                  <div className="flex items-center gap-3">

                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover border border-sky-300"
                    />

                    <div>

                      {/* Guest Name */}
                      <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">

                        <span>
                          {rev.name}
                        </span>

                        {/* Verified Guest Icon */}
                        {rev.verified && (
                          <span
                            title="Verified Guest Stay"
                            className="inline-flex"
                          >
                            <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                          </span>
                        )}

                      </div>


                      {/* Guest Location */}
                      <div className="text-[11px] text-slate-400">
                        {rev.location}
                      </div>

                    </div>

                  </div>


                  {/* Trip Type */}
                  <span className="text-[10px] bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded-full font-semibold">
                    {rev.tripType}
                  </span>

                </div>


                {/* ================= STAR RATING ================= */}

                <div className="flex items-center gap-1 mb-2">

                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}

                  <span className="text-xs text-slate-400 ml-1.5">
                    {rev.date}
                  </span>

                </div>


                {/* ================= REVIEW TEXT ================= */}

                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  "{rev.title}"
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {rev.comment}
                </p>

              </div>


              {/* ================= REVIEW FOOTER ================= */}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">

                {/* Room Stayed */}
                <span
                  className="truncate max-w-[170px]"
                  title={rev.stayedRoom}
                >
                  Stayed:{' '}

                  <strong className="text-slate-600 dark:text-slate-300">
                    {rev.stayedRoom.split(' ')[0]}{' '}
                    {rev.stayedRoom.split(' ')[1]}
                  </strong>

                </span>


                {/* Like Button */}
                <button
                  type="button"
                  onClick={() => handleToggleLike(rev.id)}
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg border transition-all cursor-pointer ${
                    likedIds[rev.id]
                      ? 'border-sky-400 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 font-bold'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >

                  <ThumbsUp className="w-3 h-3" />

                  <span>
                    {rev.likes}
                  </span>

                </button>

              </div>

            </div>

          ))}

        </div>


        {/* ================= FULL REVIEWS BUTTON ================= */}

        {onOpenFullDiningReviewsPage && (
          <div className="mt-12 text-center">

            <button
              type="button"
              onClick={onOpenFullDiningReviewsPage}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-750 text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-700 transition-all cursor-pointer shadow-sm hover:shadow"
            >
              <span>
                Read All Verified Guest Stories &amp; Share Your Reflection →
              </span>
            </button>

          </div>
        )}

      </div>

    </section>
  );
};