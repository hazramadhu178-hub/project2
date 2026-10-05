import React, { useState } from 'react';

import {
  Sparkles,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle,
  Clock,
  Camera,
  AtSign,
  Globe,
  Video,
  Headphones,
  Star,
  ArrowUpRight,
  User,
  Calendar,
  Users,
  Gift,
  Utensils,
  Heart,
  HelpCircle,
  ChevronDown,
  Globe2,
} from 'lucide-react';


// ============================================================
// CONTACT PAGE
// ============================================================

export const ContactPage = ({
  onNavigateHome,
  onNavigateSection,
  onSendMessage,
}) => {

  // ----------------------------------------------------------
  // FORM DATA
  // ----------------------------------------------------------

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    arrival: '',
    guests: '2',
    subject: 'General Stay & Suite Reservations',
    message: '',
  });

  // Shows the success message after form submission
  const [formSent, setFormSent] = useState(false);

  // Stores any error message
  const [submissionError, setSubmissionError] = useState('');

  // Shows whether the form is currently being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Stores which FAQ is currently open
  const [openFaqId, setOpenFaqId] = useState('contact-faq-1');


  // ----------------------------------------------------------
  // FORM SUBMIT
  // ----------------------------------------------------------

  const handleSubmit = async (e) => {

    // Stop the browser from refreshing the page
    e.preventDefault();

    // Do nothing if required fields are empty
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return;
    }

    // Start loading
    setIsSubmitting(true);

    // Remove previous error
    setSubmissionError('');


    try {

      // Send the form data
      if (onSendMessage) {
        await onSendMessage(formData);
      }


      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        arrival: '',
        guests: '2',
        subject: 'General Stay & Suite Reservations',
        message: '',
      });


      // Show success message
      setFormSent(true);


      // Hide success message after 6 seconds
      setTimeout(() => {
        setFormSent(false);
      }, 6000);

    } catch (error) {

      // Show error message if something goes wrong
      setSubmissionError(
        error.message || 'Your inquiry could not be sent.'
      );

    } finally {

      // Stop loading
      setIsSubmitting(false);
    }
  };


  // ----------------------------------------------------------
  // CONTACT CHANNELS
  // ----------------------------------------------------------

  const contactChannels = [
    {
      icon: <Phone className="w-5 h-5" />,
      tone: 'sky',
      label: 'Call / WhatsApp',
      value: '+1 (800) 880-FLOW',
      sub: 'Available 24 hours daily',
      action: 'tel:+18008803569',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      tone: 'amber',
      label: 'Email Concierge',
      value: 'concierge@strongmeresort.com',
      sub: 'Reply within 2 hours',
      action: 'mailto:concierge@strongmeresort.com',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      tone: 'emerald',
      label: 'Estate Location',
      value: '88 Sunflower Bluff Road',
      sub: 'Azure Peninsula • Private Gated Estate',
      action:
        'https://www.google.com/maps/search/?api=1&query=34.2084,136.8122',
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      tone: 'indigo',
      label: 'Instant WhatsApp Chat',
      value: '+81 90 2888 7700',
      sub: 'Typical reply in 5 minutes',
      action: 'https://wa.me',
    },
  ];


  // ----------------------------------------------------------
  // CONTACT ICON COLORS
  // ----------------------------------------------------------

  const toneMap = {
    sky: 'bg-sky-100 dark:bg-sky-950 text-sky-600',
    amber: 'bg-amber-100 dark:bg-amber-950 text-amber-600',
    emerald: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600',
    indigo: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600',
  };


  // ----------------------------------------------------------
  // SOCIAL MEDIA
  // ----------------------------------------------------------

  const socials = [
    {
      icon: <Camera className="w-4 h-4" />,
      label: 'Instagram',
    },
    {
      icon: <AtSign className="w-4 h-4" />,
      label: 'Facebook',
    },
    {
      icon: <Globe className="w-4 h-4" />,
      label: 'Website',
    },
    {
      icon: <Video className="w-4 h-4" />,
      label: 'Youtube',
    },
  ];


  // ----------------------------------------------------------
  // DEPARTMENTS
  // ----------------------------------------------------------

  const departments = [
    {
      icon: <Calendar className="w-5 h-5 text-sky-500" />,
      title: 'Reservations & Villa Booking',
      email: 'reservations@strongmeresort.com',
      desc: 'Villa availability, seasonal packages, and multi-generational family stays.',
    },
    {
      icon: <Utensils className="w-5 h-5 text-amber-500" />,
      title: 'Culinary & Private Dining',
      email: 'dining@strongmeresort.com',
      desc: 'Tasting menus, dietary accommodations, and private beach dinner arrangements.',
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      title: 'Wellness & Spa Rituals',
      email: 'wellness@strongmeresort.com',
      desc: 'Sound healing, botanical spa treatments, sunrise yoga, and mobility sessions.',
    },
    {
      icon: <Gift className="w-5 h-5 text-emerald-500" />,
      title: 'Celebrations & Occasions',
      email: 'celebrate@strongmeresort.com',
      desc: 'Anniversaries, honeymoon proposals, birthdays, and milestone celebrations.',
    },
    {
      icon: <Headphones className="w-5 h-5 text-indigo-500" />,
      title: 'Transfers & Local Travel Desk',
      email: 'transfers@strongmeresort.com',
      desc: 'Airport shuttle bookings, trusted local taxis, and rental car coordination.',
    },
    {
      icon: <Users className="w-5 h-5 text-sky-600" />,
      title: 'Partnerships & Media',
      email: 'media@strongmeresort.com',
      desc: 'Press kits, photography shoots, creator collaborations, and trade inquiries.',
    },
  ];


  // ----------------------------------------------------------
  // TIME ZONES
  // ----------------------------------------------------------

  const timeZones = [
    {
      city: 'Azure Peninsula (Local)',
      time: '04:20 PM',
      tz: 'UTC+9',
    },
    {
      city: 'London',
      time: '08:20 AM',
      tz: 'UTC+1',
    },
    {
      city: 'New York',
      time: '03:20 AM',
      tz: 'UTC-4',
    },
  ];


  // ----------------------------------------------------------
  // CONTACT FAQ
  // ----------------------------------------------------------

  const contactFaqs = [
    {
      id: 'contact-faq-1',
      q: 'How quickly will the concierge team reply to my inquiry?',
      a: 'Our 24-hour concierge desk replies to email and contact form inquiries within 2 hours on average, and WhatsApp messages typically within 5 minutes. Urgent arrival changes are handled immediately by phone.',
    },
    {
      id: 'contact-faq-2',
      q: 'Can I arrange airport transfers through the concierge?',
      a: 'Absolutely. Our travel desk coordinates shared airport shuttle pickups and trusted local taxi services to bring you to the estate gates. Please allow at least 24 hours advance notice.',
    },
    {
      id: 'contact-faq-3',
      q: 'What languages does your guest care team speak?',
      a: 'Our multilingual host team speaks English, Mandarin Chinese, Japanese, French, and Spanish fluently, ensuring effortless communication for international guests.',
    },
    {
      id: 'contact-faq-4',
      q: 'Do you accept group or corporate retreat requests?',
      a: 'Yes. We welcome group reservations for executive retreats, family reunions, and intimate celebrations. Contact our guest care team for group rates and private dining arrangements.',
    },
    {
      id: 'contact-faq-5',
      q: 'Where should I send special dietary or accessibility requirements?',
      a: 'Simply add your requirements in the message field of the inquiry form or write directly to concierge@strongmeresort.com at least 7 days before arrival, and our wellness and culinary teams will personalize your experience.',
    },
  ];


  // ============================================================
  // PAGE
  // ============================================================

  return (
    <div className="contact-page-wrapper animate-in fade-in duration-300">

      {/* ======================================================
          PAGE HERO
      ====================================================== */}

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
              Contact &amp; Concierge Desk
            </span>

          </div>


          {/* Hero text */}
          <div className="max-w-3xl">

            <div className="section-badge mb-4">
              <Sparkles className="w-3.5 h-3.5" />

              24/7 Sanctuary Concierge &amp; Guest Care
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Let's Plan Your Season of Stillness
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether arranging airport transfers, planning bespoke wellness rituals, or answering
              dietary inquiries, our dedicated hosts are at your quiet service — day and night.
            </p>

          </div>


          {/* Quick contact information */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800">

            {/* Average reply */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">

              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                Average Reply
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                Under 2 Hours
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                Email &amp; contact inquiries
              </span>

            </div>


            {/* Concierge hours */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">

              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                Concierge Hours
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                24 / 7 Live
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                Every day of the year
              </span>

            </div>


            {/* Languages */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">

              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                Languages
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                5 Spoken
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                EN • ZH • JA • FR • ES
              </span>

            </div>


            {/* WhatsApp reply */}
            <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 backdrop-blur-sm">

              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                WhatsApp Reply
              </span>

              <strong className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                5 Minutes
              </strong>

              <span className="text-[10px] text-slate-400 block mt-0.5">
                Typical instant reply time
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          SECTION 1: CONTACT FORM + CONTACT CHANNELS
      ====================================================== */}

      <section className="resort-section bg-white dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">

        <div className="resort-container">

          <div id="contact-form" className="contact-panel scroll-mt-24">

            {/* ==================================================
                LEFT CONTACT INFORMATION
            ================================================== */}

            <div className="contact-aside">

              <div className="contact-aside-overlay" />

              <div className="contact-aside-content">

                {/* Intro */}
                <div>

                  <span className="contact-aside-eyebrow">
                    <Headphones className="w-3.5 h-3.5" />

                    Concierge Desk
                  </span>

                  <h3 className="contact-aside-title">
                    A gentle conversation is the first step toward serenity.
                  </h3>

                  <p className="contact-aside-text">
                    Our multilingual hosts craft every detail of your retreat, from sunrise rituals to private
                    dining beneath the stars.
                  </p>

                </div>


                {/* ==================================================
                    CONTACT CHANNELS
                ================================================== */}

                <div className="contact-channel-list">

                  {contactChannels.map((c, idx) => (

                    <a
                      key={idx}
                      href={c.action}
                      target={
                        c.action.startsWith('http')
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        c.action.startsWith('http')
                          ? 'noreferrer'
                          : undefined
                      }
                      className="contact-channel hover:translate-x-1 transition-transform"
                    >

                      {/* Icon */}
                      <div className={`contact-channel-icon ${toneMap[c.tone]}`}>
                        {c.icon}
                      </div>


                      {/* Contact information */}
                      <div className="min-w-0 flex-1">

                        <div className="contact-channel-label">
                          {c.label}
                        </div>

                        <div className="contact-channel-value">
                          {c.value}
                        </div>

                        <div className="contact-channel-sub">
                          {c.sub}
                        </div>

                      </div>


                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />

                    </a>

                  ))}

                </div>


                {/* ==================================================
                    HOURS + RATING
                ================================================== */}

                <div className="contact-meta-row">

                  <div className="contact-meta-box">

                    <Clock className="w-4 h-4 text-sky-500" />

                    <div>

                      <div className="contact-meta-title">
                        Front Desk Hours
                      </div>

                      <div className="contact-meta-sub">
                        Open 24 / 7 · Every day
                      </div>

                    </div>

                  </div>


                  <div className="contact-meta-box">

                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />

                    <div>

                      <div className="contact-meta-title">
                        4.98 Guest Rating
                      </div>

                      <div className="contact-meta-sub">
                        300+ verified reviews
                      </div>

                    </div>

                  </div>

                </div>


                {/* ==================================================
                    SOCIAL LINKS
                ================================================== */}

                <div className="contact-social-row">

                  <span className="contact-social-label">
                    Follow the sanctuary
                  </span>

                  <div className="flex items-center gap-2">

                    {socials.map((s, idx) => (

                      <a
                        key={idx}
                        href="#"
                        aria-label={s.label}
                        className="contact-social-btn"
                      >
                        {s.icon}
                      </a>

                    ))}

                  </div>

                </div>

              </div>

            </div>


            {/* ==================================================
                RIGHT CONTACT FORM
            ================================================== */}

            <div className="contact-form-col">

              <div className="mb-6">

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  Send a Message to the Host Team
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Share your dates and preferences — we'll tailor a bespoke proposal just for you.
                </p>

              </div>


              {/* ==================================================
                  SUCCESS MESSAGE
              ================================================== */}

              {formSent ? (

                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-300 dark:border-emerald-800 text-center space-y-3 animate-in fade-in zoom-in-95 duration-200">

                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center">

                    <CheckCircle className="w-7 h-7" />

                  </div>

                  <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                    Your Message Has Been Received
                  </h4>

                  <p className="text-xs text-emerald-800 dark:text-emerald-300">
                    Thank you for reaching out. Our concierge team will reply within 2 hours, and an instant
                    WhatsApp confirmation is on its way.
                  </p>

                  <button
                    type="button"
                    onClick={() => setFormSent(false)}
                    className="px-5 py-2 bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-xl border border-emerald-300 hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                /* ==================================================
                   CONTACT FORM
                ================================================== */

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Name */}
                    <div className="contact-field">

                      <label className="contact-label">
                        Full Name
                      </label>

                      <div className="contact-input-wrap">

                        <User className="contact-input-icon" />

                        <input
                          type="text"
                          required
                          placeholder="e.g. Eleanor Vance"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          className="contact-input"
                        />

                      </div>

                    </div>


                    {/* Email */}
                    <div className="contact-field">

                      <label className="contact-label">
                        Email Address
                      </label>

                      <div className="contact-input-wrap">

                        <Mail className="contact-input-icon" />

                        <input
                          type="email"
                          required
                          placeholder="eleanor@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          className="contact-input"
                        />

                      </div>

                    </div>

                  </div>


                  {/* Phone + Arrival + Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {/* Phone */}
                    <div className="contact-field">

                      <label className="contact-label">
                        Phone
                      </label>

                      <div className="contact-input-wrap">

                        <Phone className="contact-input-icon" />

                        <input
                          type="tel"
                          required
                          placeholder="+1 555 000 1234"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          className="contact-input"
                        />

                      </div>

                    </div>


                    {/* Arrival */}
                    <div className="contact-field">

                      <label className="contact-label">
                        Arrival Date
                      </label>

                      <div className="contact-input-wrap">

                        <Calendar className="contact-input-icon" />

                        <input
                          type="date"
                          value={formData.arrival}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              arrival: e.target.value,
                            })
                          }
                          className="contact-input"
                        />

                      </div>

                    </div>


                    {/* Guests */}
                    <div className="contact-field">

                      <label className="contact-label">
                        Guests
                      </label>

                      <div className="contact-input-wrap">

                        <Users className="contact-input-icon" />

                        <select
                          value={formData.guests}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              guests: e.target.value,
                            })
                          }
                          className="contact-select"
                        >

                          <option value="1">
                            1 Guest
                          </option>

                          <option value="2">
                            2 Guests
                          </option>

                          <option value="3">
                            3 Guests
                          </option>

                          <option value="4">
                            4 Guests
                          </option>

                          <option value="5+">
                            5+ (Group)
                          </option>

                        </select>

                      </div>

                    </div>

                  </div>


                  {/* Nature of inquiry */}
                  <div className="contact-field">

                    <label className="contact-label">
                      Nature of Inquiry
                    </label>

                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value,
                        })
                      }
                      className="contact-select"
                    >

                      <option>
                        General Stay &amp; Suite Reservations
                      </option>

                      <option>
                        Custom Mindful Wellness Program
                      </option>

                      <option>
                        Private Dining &amp; Special Occasions
                      </option>

                      <option>
                        Airport Transfer Assistance
                      </option>

                      <option>
                        Group Reservations &amp; Retreats
                      </option>

                      <option>
                        Dietary or Accessibility Requirements
                      </option>

                    </select>

                  </div>


                  {/* Message */}
                  <div className="contact-field">

                    <label className="contact-label">
                      Your Message
                    </label>

                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about your upcoming dates, special preferences, or questions..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="contact-textarea"
                    />

                  </div>


                  {/* Submit + WhatsApp buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-submit-btn w-full sm:w-auto disabled:opacity-60"
                    >
                      <Send className="w-4 h-4" />

                      {isSubmitting
                        ? 'Sending…'
                        : 'Send Concierge Inquiry'}
                    </button>


                    {/* Error message */}
                    {submissionError && (
                      <span
                        role="alert"
                        className="text-xs text-red-600"
                      >
                        {submissionError}
                      </span>
                    )}


                    {/* WhatsApp */}
                    <a
                      href="https://wa.me"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-whatsapp-btn w-full sm:w-auto justify-center"
                    >
                      <MessageSquare className="w-4 h-4" />

                      Chat on WhatsApp

                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                  </div>


                  {/* Privacy message */}
                  <p className="text-[11px] text-slate-400 text-center pt-2">

                    By submitting, you agree to our{' '}

                    <a
                      href="#privacy"
                      className="underline hover:text-sky-500"
                    >
                      Privacy Policy
                    </a>

                    . We never share your details with third parties.

                  </p>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          SECTION 2: GUEST CARE DEPARTMENTS
      ====================================================== */}

      <section className="resort-section">

        <div className="resort-container">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">

            <div className="section-badge">
              <Headphones className="w-3.5 h-3.5" />

              Dedicated Guest Care Teams
            </div>

            <h2 className="section-title">
              Reach the Right Team Directly
            </h2>

            <p className="section-description">
              Six specialized departments ready to personalize every detail of your retreat, from arrival logistics
              to celebration planning.
            </p>

          </div>


          {/* Department cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {departments.map((dept, idx) => (

              <div
                key={idx}
                className="resort-card p-6 flex flex-col justify-between group"
              >

                <div>

                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-slate-800 shadow-sm flex items-center justify-center mb-4 border border-sky-100 dark:border-slate-700 group-hover:scale-110 transition-transform">
                    {dept.icon}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {dept.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {dept.desc}
                  </p>

                </div>


                {/* Department email */}
                <a
                  href={`mailto:${dept.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline border-t border-slate-100 dark:border-slate-800 pt-3 mt-auto"
                >
                  <Mail className="w-3.5 h-3.5" />

                  {dept.email}
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          SECTION 3: GLOBAL TIME ZONES
      ====================================================== */}

      <section className="resort-section bg-sky-50/40 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">

        <div className="resort-container">

          <div className="resort-card p-8 sm:p-10 bg-gradient-to-br from-sky-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border-2 border-sky-200 dark:border-slate-700">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Information */}
              <div className="lg:col-span-6 space-y-4">

                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-100/80 dark:bg-sky-950 px-3 py-1 rounded-full">

                  <Globe2 className="w-3.5 h-3.5" />

                  Global Guest Care

                </div>


                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Open 24 Hours, Across Every Time Zone
                </h3>


                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our concierge hosts operate around the clock so guests in every continent can reach us during
                  their waking hours. Live front desk staffing continues seamlessly through the night with
                  dedicated overnight hosts for arrival changes and wellness requests.
                </p>


                {/* Small information cards */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">

                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">

                    <strong className="text-slate-900 dark:text-white block text-sm mb-0.5">
                      24/7 Overnight Host
                    </strong>

                    <span className="text-slate-500 dark:text-slate-400">
                      Night arrival assistance
                    </span>

                  </div>


                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">

                    <strong className="text-slate-900 dark:text-white block text-sm mb-0.5">
                      5 Languages
                    </strong>

                    <span className="text-slate-500 dark:text-slate-400">
                      Fluent multilingual staff
                    </span>

                  </div>

                </div>

              </div>


              {/* Current times */}
              <div className="lg:col-span-6">

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg space-y-3">

                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">

                    <Clock className="w-3.5 h-3.5 text-sky-500" />

                    Current Times Around the World

                  </div>


                  {timeZones.map((zone, idx) => (

                    <div
                      key={idx}
                      className="flex items-center justify-between py-2.5 border-b border-slate-100 dark:border-slate-700 last:border-b-0"
                    >

                      <div>

                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {zone.city}
                        </div>

                        <div className="text-[11px] text-slate-400">
                          {zone.tz}
                        </div>

                      </div>


                      <div className="text-lg font-extrabold text-sky-600 dark:text-sky-400">
                        {zone.time}
                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          SECTION 4: CONTACT FAQ
      ====================================================== */}

      <section className="resort-section">

        <div className="resort-container max-w-3xl">

          {/* FAQ heading */}
          <div className="text-center mb-10">

            <div className="section-badge">

              <HelpCircle className="w-3.5 h-3.5" />

              Guest Communication FAQ

            </div>

            <h2 className="section-title">
              Contact &amp; Concierge Questions
            </h2>

            <p className="section-description">
              Quick answers regarding response times, transport coordination, and special requirements.
            </p>

          </div>


          {/* FAQ list */}
          <div className="space-y-3">

            {contactFaqs.map((faq) => (

              <div
                key={faq.id}
                className="faq-accordion-item"
              >

                {/* FAQ question */}
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

                    <span>{faq.q}</span>

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


                {/* FAQ answer */}
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


      {/* ======================================================
          CALL TO ACTION
      ====================================================== */}

      <section className="resort-section pt-0 pb-16">

        <div className="resort-container text-center">

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">

              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/60">

                <Sparkles className="w-3.5 h-3.5" />

                We Are Ready for You

              </div>


              <h3 className="text-2xl sm:text-4xl font-extrabold">
                Prefer to Speak Right Now?
              </h3>


              <p className="text-xs sm:text-sm text-slate-300">
                Our concierge hosts are standing by around the clock to answer your call or WhatsApp message.
              </p>


              {/* CTA buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">

                {/* Call button */}
                <a
                  href="tel:+18008803569"
                  className="py-3 px-6 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-sky-500/25 transition-all cursor-pointer flex items-center gap-2"
                >

                  <Phone className="w-4 h-4" />

                  <span>
                    Call +1 (800) 880-FLOW
                  </span>

                </a>


                {/* Explore rooms */}
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
                  Explore Ocean Villas
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};