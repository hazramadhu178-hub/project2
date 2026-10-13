import React, { useState } from 'react';

import {
  Sparkles,
  ArrowLeft,
  Clock,
  ChefHat,
  CalendarDays,
  UtensilsCrossed,
  Star,
  ThumbsUp,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Wine,
  Coffee,
  MessageSquare,
  Send
} from 'lucide-react';

import { DINING_VENUES, GUEST_REVIEWS } from '../data/resortData';


export const DiningReviewsPage = ({
  onNavigateHome,
  onNavigateSection,
  onReserveTable
}) => {

  // =========================================================
  // DINING STATE
  // =========================================================

  // Which dining venue is currently selected
  const [activeVenueIdx, setActiveVenueIdx] = useState(0);

  // Get the selected venue
  const currentVenue =
    DINING_VENUES[activeVenueIdx] || DINING_VENUES[0];


  // =========================================================
  // REVIEWS STATE
  // =========================================================

  // List of all reviews
  const [reviewsList, setReviewsList] = useState(GUEST_REVIEWS);

  // Current review filter
  const [activeReviewFilter, setActiveReviewFilter] = useState('all');

  // Stores which reviews have been liked
  const [likedIds, setLikedIds] = useState({});

  // Show / hide review form
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Shows success message after submitting a review
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // New review form data
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    tripType: 'Solo Mindful',
    title: '',
    comment: '',
    stayedRoom: 'Sunflower Rooms',
  });


  // =========================================================
  // FAQ STATE
  // =========================================================

  // Currently opened FAQ
  const [openFaqId, setOpenFaqId] = useState('dining-faq-1');


  // =========================================================
  // FILTER REVIEWS
  // =========================================================

  const filteredReviews = reviewsList.filter((review) => {

    // Show all reviews when "all" is selected
    if (activeReviewFilter === 'all') {
      return true;
    }

    // Otherwise only show the selected trip type
    return review.tripType === activeReviewFilter;
  });


  // =========================================================
  // LIKE / UNLIKE REVIEW
  // =========================================================

  const handleToggleLike = (id) => {

    setLikedIds((prev) => {

      // Check if this review is already liked
      const isLiked = !!prev[id];

      // Add 1 when liking
      // Remove 1 when unliking
      const delta = isLiked ? -1 : 1;


      // Update the review's like count
      setReviewsList((list) =>
        list.map((item) =>
          item.id === id
            ? {
                ...item,
                likes: item.likes + delta
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


  // =========================================================
  // SUBMIT NEW REVIEW
  // =========================================================

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // Stop if required fields are empty
    if (
      !newReview.name ||
      !newReview.title ||
      !newReview.comment
    ) {
      return;
    }


    // Create the new review object
    const created = {
      id: `rev-${Date.now()}`,

      name: newReview.name,

      location:
        newReview.location || 'Guest Traveler',

      avatar:
        'https://images.pexels.com/photos/12467319/pexels-photo-12467319.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=120&w=120',

      rating: Number(newReview.rating),

      date: 'Just Now',

      tripType: newReview.tripType,

      title: newReview.title,

      comment: newReview.comment,

      stayedRoom: newReview.stayedRoom,

      verified: true,

      likes: 1,
    };


    // Add the new review at the beginning
    setReviewsList([
      created,
      ...reviewsList
    ]);


    // Show success message
    setReviewSubmitted(true);


    // Reset the review form
    setNewReview({
      name: '',
      location: '',
      rating: 5,
      tripType: 'Solo Mindful',
      title: '',
      comment: '',
      stayedRoom: 'Sunflower Rooms',
    });


    // Close the form after 2.8 seconds
    setTimeout(() => {
      setShowReviewForm(false);
      setReviewSubmitted(false);
    }, 2800);
  };


  // =========================================================
  // FOUR CULINARY PILLARS
  // =========================================================

  const culinaryPillars = [
    {
      icon: (
        <Leaf className="w-5 h-5 text-emerald-500" />
      ),
      title: '100% Estate Organic Harvest',
      desc: 'Herbs, edible sunflowers, seasonal vegetables, and wild figs harvested daily from our 4.2-hectare grounds.'
    },

    {
      icon: (
        <UtensilsCrossed className="w-5 h-5 text-sky-500" />
      ),
      title: 'Sustainable Coastal Fishery',
      desc: 'Line-caught bluefin tuna, local sea bass, and Maine lobster sourced strictly from local artisanal cooperatives.'
    },

    {
      icon: (
        <Wine className="w-5 h-5 text-indigo-500" />
      ),
      title: 'Botanical & Biodynamic Cellar',
      desc: 'Natural low-intervention wines, Japanese ceremonial matcha, and zero-proof lavender floral mocktails.'
    },

    {
      icon: (
        <Coffee className="w-5 h-5 text-amber-500" />
      ),
      title: 'In-Room Terrace Dining Service',
      desc: 'Any breakfast or candlelit dinner can be prepared and served privately on your private ocean deck.'
    }
  ];


  // =========================================================
  // DINING FAQ DATA
  // =========================================================

  const diningFaqs = [
    {
      id: 'dining-faq-1',
      q: 'Do I need reservations for Dining by the Sea or Coastal Flavors?',
      a: 'Breakfast is served on an unhurried, walk-in basis from 07:00 AM to 10:30 AM. For evening dinners and sunset tables at Coastal Flavors, we recommend reserving your table at least 4 hours in advance with the concierge or through our instant reservation system.'
    },

    {
      id: 'dining-faq-2',
      q: 'How do you accommodate dietary restrictions and allergies?',
      a: 'Our executive culinary team is dedicated to bespoke dining. We provide dedicated gluten-free, vegan, ketogenic, and dairy-free tasting menus, and confirm all allergen requirements with you prior to check-in.'
    },

    {
      id: 'dining-faq-3',
      q: 'Is Room terrace dining available at any time?',
      a: 'Yes. Rooms dining is available from 07:00 AM to 10:30 PM with zero delivery surcharges. Breakfast can be ordered the evening before for a sunrise delivery at your exact requested time.'
    },

    {
      id: 'dining-faq-4',
      q: 'How are guest reviews collected and verified?',
      a: 'All published reviews are written by verified guests who stayed in our suites or dined at our seaside restaurants. We publish both reflections and constructive feedback to maintain authentic transparency.'
    },

    {
      id: 'dining-faq-5',
      q: 'Can we arrange private beach dining under the stars?',
      a: 'Yes. Our culinary team can prepare a private candlelit 5-course degustation directly on our private 800-meter sandbar with acoustic cello accompaniment and beach bonfire.'
    }
  ];


  // =========================================================
  // PAGE
  // =========================================================

  return (
    <div className="dining-reviews-page-wrapper animate-in fade-in duration-300">

      {/* =====================================================
          PAGE HERO BANNER
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
              Coastal Dining &amp; Guest Stories
            </span>

          </div>


          {/* Hero Content */}
          <div className="max-w-3xl">

            <div className="section-badge mb-4">
              <Sparkles className="w-3.5 h-3.5" />

              Gastronomy &amp; Verified Guest Reflections
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Seaside Flavors &amp; Words of Unhurried Stillness
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Discover our two seaside culinary venues celebrating estate-grown harvests and coastal catch,
              paired with genuine reflections and stories from mindful travelers who found sanctuary here.
            </p>

          </div>


          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800">

            {/* Gastronomy */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                Gastronomy
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                100% Organic
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                Estate farm-to-table daily
              </span>
            </div>


            {/* Serenity Score */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                Serenity Score
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
                4.98

                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" />
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                Over 300+ verified stays
              </span>
            </div>


            {/* Seaside Venues */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                Seaside Venues
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                2 Sanctuaries
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                Breakfast &amp; Sunset Lounge
              </span>
            </div>


            {/* Recommendation */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                Recommendation
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-sky-600 dark:text-sky-400">
                99.4%
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                Positive guest sentiment
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 1: SEASIDE DINING VENUES
      ===================================================== */}

      <section className="resort-section bg-white dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">
        <div className="resort-container">

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">

            <div className="section-badge">
              <UtensilsCrossed className="w-3.5 h-3.5" />

              Culinary Venues
            </div>

            <h2 className="section-title">
              Nourishment for Body, Spirit &amp; Mind
            </h2>

            <p className="section-description">
              Select between our morning breakfast pavilion overlooking floral bluffs or our evening sunset cocktail lounge.
            </p>

          </div>


          {/* Venue Selection Tabs */}
          <div className="flex justify-center mb-10">

            <div className="p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 inline-flex gap-2">

              {DINING_VENUES.map((venue, idx) => (
                <button
                  key={venue.id}
                  type="button"
                  onClick={() => setActiveVenueIdx(idx)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    activeVenueIdx === idx
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <UtensilsCrossed className="w-4 h-4 text-sky-500" />

                  <span>{venue.name}</span>
                </button>
              ))}

            </div>
          </div>


          {/* Selected Venue */}
          <div className="resort-card p-6 sm:p-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Side: Image + Chef Information */}
              <div className="lg:col-span-5">

                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-4 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={currentVenue.image}
                    alt={currentVenue.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 space-y-2 text-xs">

                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                    <ChefHat className="w-4 h-4 text-sky-500" />
                    <span>{currentVenue.chef}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 text-sky-500" />
                    <span>{currentVenue.hours}</span>
                  </div>

                  <div className="text-[11px] text-slate-400 italic pt-1">
                    "{currentVenue.atmosphere}"
                  </div>

                </div>

              </div>


              {/* Right Side: Venue Information */}
              <div className="lg:col-span-7 flex flex-col justify-between">

                <div>

                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />

                    {currentVenue.type}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                    {currentVenue.name}
                  </h3>

                  <div className="space-y-3 mb-6">

                    {currentVenue.description.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}

                  </div>

                  {currentVenue.tagline && (
                    <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mb-6">
                      {currentVenue.tagline}
                    </p>
                  )}

                </div>


                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">

                  <button
                    type="button"
                    onClick={() => onReserveTable(currentVenue)}
                    className="py-3 px-6 bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-sky-500/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <CalendarDays className="w-4 h-4" />

                    <span>
                      Reserve Table at {currentVenue.name}
                    </span>
                  </button>

                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />

                    Complimentary In-Room Dining Setup
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CULINARY & FARM PHILOSOPHY
      ===================================================== */}

      <section className="resort-section">
        <div className="resort-container">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <div className="section-badge">
              <Leaf className="w-3.5 h-3.5" />

              Soil to Shoreline
            </div>

            <h2 className="section-title">
              The Four Pillars of Coastal Dining
            </h2>

            <p className="section-description">
              Every dish is crafted with intentional simplicity, celebrating authentic regional recipes and organic soil health.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {culinaryPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="resort-card p-6 flex flex-col justify-between"
              >

                <div>

                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-slate-800 shadow-sm flex items-center justify-center mb-4 border border-sky-100 dark:border-slate-700">
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
      </section>


      {/* =====================================================
          SECTION 2: GUEST REVIEWS
      ===================================================== */}

      <section className="resort-section bg-sky-50/40 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
        <div className="resort-container">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10">

            <div className="section-badge">
              <MessageSquare className="w-3.5 h-3.5" />

              Verified Guest Stories
            </div>

            <h2 className="section-title">
              Words From Those Who Found Stillness Here
            </h2>

            <p className="section-description">
              Read authentic experiences from solo travelers, romantic getaways, and wellness seekers from around the globe.
            </p>

          </div>


          {/* Rating Summary */}
          <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-around text-center mb-10">

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-1">
                <span>4.98</span>
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
              </div>

              <div className="text-[11px] text-slate-400 mt-0.5">
                Overall Serenity Score
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-500">
                99.4%
              </div>

              <div className="text-[11px] text-slate-400 mt-0.5">
                Would Recommend to a Friend
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                300+
              </div>

              <div className="text-[11px] text-slate-400 mt-0.5">
                Verified Guest Reviews
              </div>
            </div>

          </div>


          {/* Review Filters + Write Review Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">

            {/* Filter Buttons */}
            <div className="filter-tabs-container !mb-0">

              {[
                'all',
                'Solo Mindful',
                'Romantic Escape',
                'Wellness Retreat'
              ].map((type) => (

                <button
                  key={type}
                  type="button"
                  onClick={() => setActiveReviewFilter(type)}
                  className={`filter-tab-btn ${
                    activeReviewFilter === type ? 'active' : ''
                  }`}
                >
                  {type === 'all'
                    ? `All Stories (${reviewsList.length})`
                    : type}
                </button>

              ))}

            </div>


            {/* Mobile Filter */}
            <select
              className="filter-select !mb-0 sm:hidden"
              value={activeReviewFilter}
              onChange={(e) => setActiveReviewFilter(e.target.value)}
              aria-label="Filter reviews by trip type"
            >
              <option value="all">
                All Stories ({reviewsList.length})
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


            {/* Write Review Button */}
            <button
              type="button"
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-md shadow-sky-500/20 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />

              <span>
                {showReviewForm
                  ? 'Close Review Form'
                  : 'Write a Reflection'}
              </span>
            </button>

          </div>


          {/* Review Form */}
          {showReviewForm && (
            <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-850 border-2 border-sky-300 dark:border-sky-800 shadow-xl animate-in fade-in zoom-in-95 duration-200">

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Share Your Sanctuary Reflection
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Your words inspire future travelers seeking quiet mindfulness by the sea.
              </p>


              {/* Review Submitted Message */}
              {reviewSubmitted ? (

                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 text-emerald-800 dark:text-emerald-300 text-center text-sm font-semibold flex items-center justify-center gap-2">

                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />

                  <span>
                    Thank you! Your reflection has been verified and published to our guest book.
                  </span>

                </div>

              ) : (

                <form
                  onSubmit={handleReviewSubmit}
                  className="space-y-4"
                >

                  {/* Name, Location, Trip Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {/* Name */}
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Your Name
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="e.g. Julian K."
                        value={newReview.name}
                        onChange={(e) =>
                          setNewReview({
                            ...newReview,
                            name: e.target.value
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white outline-none"
                      />
                    </div>


                    {/* Location */}
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Your Location
                      </label>

                      <input
                        type="text"
                        placeholder="e.g. Zurich, Switzerland"
                        value={newReview.location}
                        onChange={(e) =>
                          setNewReview({
                            ...newReview,
                            location: e.target.value
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white outline-none"
                      />
                    </div>


                    {/* Trip Type */}
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Trip Experience Type
                      </label>

                      <select
                        value={newReview.tripType}
                        onChange={(e) =>
                          setNewReview({
                            ...newReview,
                            tripType: e.target.value
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white outline-none"
                      >
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

                  </div>


                  {/* Villa + Rating */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Villa Stayed */}
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Sanctuary Rooms Stayed
                      </label>

                      <select
                        value={newReview.stayedRoom}
                        onChange={(e) =>
                          setNewReview({
                            ...newReview,
                            stayedRoom: e.target.value
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white outline-none"
                      >
                        <option value="Sunflower Rooms">
                          Sunflower Rooms
                        </option>

                        <option value="Overwater Serenity Sanctuary">
                          Overwater Serenity Sanctuary
                        </option>

                        <option value="Coastal Breeze Garden Suite">
                          Coastal Breeze Garden Suite
                        </option>

                        <option value="Azure Sky Oceanview Studio">
                          Azure Sky Oceanview Studio
                        </option>
                      </select>
                    </div>


                    {/* Rating */}
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Serenity Rating
                      </label>

                      <div className="flex gap-2">

                        {[5, 4, 3].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() =>
                              setNewReview({
                                ...newReview,
                                rating: num
                              })
                            }
                            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                              newReview.rating === num
                                ? 'bg-sky-500 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <span>{num}</span>

                            <Star className="w-3 h-3 fill-current" />
                          </button>
                        ))}

                      </div>
                    </div>

                  </div>


                  {/* Review Title */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Headline / Title of Your Reflection
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="e.g. Waking to the waves and journaling with morning matcha..."
                      value={newReview.title}
                      onChange={(e) =>
                        setNewReview({
                          ...newReview,
                          title: e.target.value
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white outline-none"
                    />
                  </div>


                  {/* Review Comment */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Your Detailed Experience &amp; Notes
                    </label>

                    <textarea
                      rows={3}
                      required
                      placeholder="Share what brought you peace during your stay..."
                      value={newReview.comment}
                      onChange={(e) =>
                        setNewReview({
                          ...newReview,
                          comment: e.target.value
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white outline-none resize-none"
                    />
                  </div>


                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="py-2.5 px-6 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />

                    <span>
                      Submit Reflection to Guest Book
                    </span>
                  </button>

                </form>

              )}

            </div>
          )}


          {/* Reviews Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredReviews.map((rev) => (

              <div
                key={rev.id}
                className="resort-card p-6 flex flex-col justify-between"
              >

                <div>

                  {/* Guest Header */}
                  <div className="flex items-center justify-between mb-3">

                    <div className="flex items-center gap-3">

                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-10 h-10 rounded-full object-cover border border-sky-300"
                      />

                      <div>

                        <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">

                          <span>{rev.name}</span>

                          {rev.verified && (
                            <span
                              title="Verified Guest Stay"
                              className="inline-flex"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                            </span>
                          )}

                        </div>

                        <div className="text-[11px] text-slate-400">
                          {rev.location}
                        </div>

                      </div>

                    </div>

                    <span className="text-[10px] bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded-full font-semibold">
                      {rev.tripType}
                    </span>

                  </div>


                  {/* Star Rating */}
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


                  {/* Review Title */}
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    "{rev.title}"
                  </h4>


                  {/* Review Comment */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {rev.comment}
                  </p>

                </div>


                {/* Room Stayed + Like Button */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">

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


                  <button
                    type="button"
                    onClick={() => handleToggleLike(rev.id)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                      likedIds[rev.id]
                        ? 'border-sky-400 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 font-bold'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />

                    <span>{rev.likes}</span>
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          DINING & REVIEW FAQ
      ===================================================== */}

      <section className="resort-section">

        <div className="resort-container max-w-3xl">

          {/* FAQ Heading */}
          <div className="text-center mb-10">

            <div className="section-badge">
              <HelpCircle className="w-3.5 h-3.5" />

              Gastronomy &amp; Stories FAQ
            </div>

            <h2 className="section-title">
              Dining &amp; Experience Inquiries
            </h2>

            <p className="section-description">
              Answers regarding opening hours, special occasions, and guest reflection policies.
            </p>

          </div>


          {/* FAQ List */}
          <div className="space-y-3">

            {diningFaqs.map((faq) => (

              <div
                key={faq.id}
                className="faq-accordion-item"
              >

                <button
                  type="button"
                  onClick={() =>
                    setOpenFaqId(
                      openFaqId === faq.id
                        ? null
                        : faq.id
                    )
                  }
                  className="faq-accordion-header"
                >

                  <span className="flex items-center gap-2">

                    <HelpCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />

                    <span>{faq.q}</span>

                  </span>


                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaqId === faq.id
                        ? 'rotate-180 text-sky-500'
                        : ''
                    }`}
                  />

                </button>


                {/* Show answer only when this FAQ is open */}
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
          CALL TO ACTION FOOTER
      ===================================================== */}

      <section className="resort-section pt-0 pb-16">

        <div className="resort-container text-center">

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">

              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/60">

                <Sparkles className="w-3.5 h-3.5" />

                Savor the Coastal Experience
              </div>


              <h3 className="text-2xl sm:text-4xl font-extrabold">
                Ready for Fresh Flavors &amp; Deep Rest?
              </h3>


              <p className="text-xs sm:text-sm text-slate-300">
                Reserve your table at our seaside restaurants or book your private rooms with complimentary daily breakfast.
              </p>


              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">

                {/* Reserve Table */}
                <button
                  type="button"
                  onClick={() =>
                    onReserveTable(DINING_VENUES[0])
                  }
                  className="py-3 px-6 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-sky-500/25 transition-all cursor-pointer flex items-center gap-2"
                >
                  <CalendarDays className="w-4 h-4" />

                  <span>
                    Reserve Table at Dining by the Sea
                  </span>
                </button>


                {/* Explore Rooms */}
                <button
                  type="button"
                  onClick={() => {
                    onNavigateHome();

                    setTimeout(() => {
                      onNavigateSection('rooms');
                    }, 100);
                  }}
                  className="py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
                >
                  Explore Sanctuary Accommodations
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};