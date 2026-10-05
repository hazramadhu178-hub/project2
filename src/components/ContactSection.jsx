import React, { useState } from 'react';

import {
  Sparkles,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
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
} from 'lucide-react';


// Contact Section
export const ContactSection = ({
  onSendMessage,
  onOpenFullContactPage,
}) => {

  // Form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Stay & Suite Reservations',
    message: '',
  });

  // Form status
  const [formSent, setFormSent] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError('');

    try {
      // Send form data
      await onSendMessage(formData);

      // Clear form after successful submit
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Stay & Suite Reservations',
        message: '',
      });

      // Show success message
      setFormSent(true);

      // Hide success message after 4 seconds
      setTimeout(() => setFormSent(false), 4000);

    } catch (error) {

      // Show error message
      setSubmissionError(
        error.message || 'Your inquiry could not be sent.'
      );

    } finally {

      // Stop loading state
      setIsSubmitting(false);
    }
  };


  // Contact information
  const contactChannels = [
    {
      icon: <Phone className="w-5 h-5" />,
      tone: 'sky',
      label: 'Call / WhatsApp',
      value: '+1 (800) 880-FLOW',
      sub: 'Available 24 hours daily',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      tone: 'amber',
      label: 'Email Concierge',
      value: 'concierge@strongmeresort.com',
      sub: 'Reply within 2 hours',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      tone: 'emerald',
      label: 'Estate Location',
      value: '88 Sunflower Bluff Road',
      sub: 'Azure Peninsula • Private Gated Estate',
    },
  ];


  // Social media icons
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


  // Different colors for contact icons
  const toneMap = {
    sky: 'bg-sky-100 dark:bg-sky-950 text-sky-600',
    amber: 'bg-amber-100 dark:bg-amber-950 text-amber-600',
    emerald: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600',
  };


  return (
    <section
      id="contact"
      className="resort-section contact-section"
    >
      <div className="resort-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            24/7 Sanctuary Concierge
          </div>

          <h2 className="section-title">
            Let's Plan Your Season of Stillness
          </h2>

          <p className="section-description">
            Whether arranging airport transfers, planning bespoke wellness rituals, or answering dietary
            inquiries, our dedicated hosts are at your quiet service — day and night.
          </p>

        </div>


        {/* Main Contact Panel */}
        <div className="contact-panel">

          {/* Left Information Column */}
          <div className="contact-aside">

            <div className="contact-aside-overlay" />

            <div className="contact-aside-content">

              {/* Concierge Information */}
              <div>

                <span className="contact-aside-eyebrow">
                  <Headphones className="w-3.5 h-3.5" />
                  Concierge Desk
                </span>

                <h3 className="contact-aside-title">
                  A gentle conversation is the first step toward serenity.
                </h3>

                <p className="contact-aside-text">
                  Our multilingual hosts craft every detail of your retreat, from sunrise rituals to private dining
                  beneath the stars.
                </p>

              </div>


              {/* Contact Channels */}
              <div className="contact-channel-list">

                {contactChannels.map((c, idx) => (
                  <div
                    key={idx}
                    className="contact-channel"
                  >

                    {/* Contact Icon */}
                    <div
                      className={`contact-channel-icon ${toneMap[c.tone]}`}
                    >
                      {c.icon}
                    </div>

                    {/* Contact Details */}
                    <div className="min-w-0">

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

                  </div>
                ))}

              </div>


              {/* Opening Hours + Rating */}
              <div className="contact-meta-row">

                {/* Front Desk */}
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


                {/* Guest Rating */}
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


              {/* Social Media */}
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


          {/* Right Form Column */}
          <div className="contact-form-col">

            {/* Form Heading */}
            <div className="mb-6">

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Send a Message to the Host Team
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Share your dates and preferences — we'll tailor a bespoke proposal just for you.
              </p>

            </div>


            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Full Name */}
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


              {/* Phone + Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

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


                {/* Nature of Inquiry */}
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
                      General Stay & Suite Reservations
                    </option>

                    <option>
                      Custom Mindful Wellness Program
                    </option>

                    <option>
                      Private Dining & Special Occasions
                    </option>

                    <option>
                      Airport Transfer Assistance
                    </option>

                    <option>
                      Group Reservations & Retreats
                    </option>
                  </select>

                </div>

              </div>


              {/* Message */}
              <div className="contact-field">

                <label className="contact-label">
                  Your Message
                </label>

                <textarea
                  rows={4}
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


              {/* Submit + Messages */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-submit-btn disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  Send Concierge Inquiry
                </button>


                {/* Error Message */}
                {submissionError && (
                  <span
                    role="alert"
                    className="text-xs text-red-600"
                  >
                    {submissionError}
                  </span>
                )}


                {/* Success Message */}
                {formSent && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 animate-in fade-in duration-300">

                    <CheckCircle className="w-4 h-4" />

                    Message sent — we'll reply shortly!

                  </span>
                )}


                {/* WhatsApp Button */}
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-whatsapp-btn"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                  <ArrowUpRight className="w-3 h-3" />
                </a>

              </div>

            </form>

          </div>

        </div>


        {/* Full Contact Page Button */}
        {onOpenFullContactPage && (
          <div className="mt-12 text-center">

            <button
              type="button"
              onClick={onOpenFullContactPage}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/60 text-xs sm:text-sm font-bold border border-sky-200/80 dark:border-sky-800/60 transition-all cursor-pointer shadow-sm hover:shadow"
            >
              <span>
                Explore Complete Contact &amp; Concierge Desk →
              </span>
            </button>

          </div>
        )}

      </div>
    </section>
  );
};