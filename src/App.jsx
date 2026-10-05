import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

// Resort Sections
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AboutPage } from './pages/AboutPage';
import { RoomsSection } from './components/RoomsSection';
import { RoomsPage } from './pages/RoomsPage';
import { BeachSection } from './components/BeachSection';
import { BeachPage } from './pages/BeachPage';
import { AmenitiesSection } from './components/AmenitiesSection';
import { AmenitiesPage } from './pages/AmenitiesPage';
import { GallerySection } from './components/GallerySection';
import { GalleryPage } from './pages/GalleryPage';
import { DiningSection } from './components/DiningSection';
import { ReviewsSection } from './components/ReviewsSection';
import { DiningReviewsPage } from './pages/DiningReviewsPage';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { LocationFAQPage } from './pages/LocationFAQPage';
import { ContactSection } from './components/ContactSection';
import { ContactPage } from './pages/ContactPage';
import { LegalSection } from './components/LegalSection';
import { FooterSection } from './components/FooterSection';

// Modals
import { RoomDetailModal } from './components/modals/RoomDetailModal';
import { BookingRequestModal } from './components/modals/BookingRequestModal';
import { DiningReservationModal } from './components/modals/DiningReservationModal';
import { BookingConfirmationModal } from './components/modals/BookingConfirmationModal';

import { ShareModal } from './components/modals/ShareModal';
import { PhotoModal } from './components/modals/PhotoModal';

// Data & Types
import { INITIAL_ENTRIES } from './data/journalData';
import { RESORT_ROOMS } from './data/resortData';

import { playChime } from './utils/audio';
import { postApi } from './utils/api';
import { Check, Sparkles } from 'lucide-react';

export function App() {
  // Journal entries state
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('strongme_entries');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_ENTRIES;
      }
    }
    return INITIAL_ENTRIES;
  });

  const [activeEntryId, setActiveEntryId] = useState('entry-today');

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('strongme_theme') || 'light';
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', saved);
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    return saved;
  });
  const [fontStyle, setFontStyle] = useState('sans');
  const [paperStyle, setPaperStyle] = useState('ruled');

  // Multi-page routing state ('home' | 'about' | 'rooms' | 'beach' | 'amenities' | 'gallery' | 'dining-reviews' | 'location-faq' | 'contact')
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#about-page') return 'about';
      if (hash === '#rooms-page') return 'rooms';
      if (hash === '#beach-page') return 'beach';
      if (hash === '#amenities-page') return 'amenities';
      if (hash === '#gallery-page') return 'gallery';
      if (hash === '#dining-page' || hash === '#reviews-page' || hash === '#dining-reviews-page') return 'dining-reviews';
      if (hash === '#location-page' || hash === '#faq-page' || hash === '#location-faq-page') return 'location-faq';
      if (hash === '#contact-page') return 'contact';
    }
    return 'home';
  });

  // Resort State
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState(RESORT_ROOMS[0]);
  const [previewRoom, setPreviewRoom] = useState(null);
  const [reserveVenue, setReserveVenue] = useState(null);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Modals state
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isBookingRequestOpen, setIsBookingRequestOpen] = useState(false);
  const [isDiningModalOpen, setIsDiningModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  // Toast
  const [toastMessage, setToastMessage] = useState(null);
  const [copied, setCopied] = useState(false);

  // Sea-wave preloader: brief splash, then fade once the page is ready
  const [booting, setBooting] = useState(true);
  const [bootGone, setBootGone] = useState(false);

  useEffect(() => {
    const minSplash = window.setTimeout(() => setBooting(false), 1600);
    const unmount = window.setTimeout(() => setBootGone(true), 2500);
    return () => {
      window.clearTimeout(minSplash);
      window.clearTimeout(unmount);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('strongme_entries', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('strongme_theme', theme);
  }, [theme]);

  // Sync back/forward browser history
  useEffect(() => {
    const onLocationChange = () => {
      const hash = window.location.hash;
      if (hash === '#about-page') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#rooms-page') {
        setCurrentPage('rooms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#beach-page') {
        setCurrentPage('beach');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#amenities-page') {
        setCurrentPage('amenities');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#gallery-page') {
        setCurrentPage('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#dining-page' || hash === '#reviews-page' || hash === '#dining-reviews-page') {
        setCurrentPage('dining-reviews');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#location-page' || hash === '#faq-page' || hash === '#location-faq-page') {
        setCurrentPage('location-faq');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact-page') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        if (hash && hash !== '#') {
          setTimeout(() => handleScrollToSection(hash.substring(1)), 100);
        }
      }
    };

    window.addEventListener('popstate', onLocationChange);
    window.addEventListener('hashchange', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('hashchange', onLocationChange);
    };
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const activeEntry = entries.find((e) => e.id === activeEntryId) || entries[0];

  const handleUpdateActiveEntry = (updatedFields) => {
    setEntries((prev) =>
      prev.map((item) =>
        item.id === activeEntry.id ? { ...item, ...updatedFields } : item
      )
    );
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'warm' : theme === 'warm' ? 'dark' : 'light';
    setTheme(nextTheme);
    showToast(`Switched to ${nextTheme.toUpperCase()} theme`);
  };

  const handleCopyQuote = () => {
    const textToCopy = `"${activeEntry.quote}" — StrongMe Sanctuary (${activeEntry.fullDate})`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    showToast(<><i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Daily reflection copied to clipboard!</>);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateHome = (sectionId) => {
    setCurrentPage('home');
    if (sectionId) {
      window.history.pushState(null, '', `#${sectionId}`);
      setTimeout(() => {
        handleScrollToSection(sectionId);
      }, 80);
    } else {
      window.history.pushState(null, '', '#');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateAbout = () => {
    setCurrentPage('about');
    window.history.pushState(null, '', '#about-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateRooms = () => {
    setCurrentPage('rooms');
    window.history.pushState(null, '', '#rooms-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateBeach = () => {
    setCurrentPage('beach');
    window.history.pushState(null, '', '#beach-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAmenities = () => {
    setCurrentPage('amenities');
    window.history.pushState(null, '', '#amenities-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateGallery = () => {
    setCurrentPage('gallery');
    window.history.pushState(null, '', '#gallery-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateDiningReviews = () => {
    setCurrentPage('dining-reviews');
    window.history.pushState(null, '', '#dining-reviews-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateLocationFAQ = () => {
    setCurrentPage('location-faq');
    window.history.pushState(null, '', '#location-faq-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateContact = () => {
    setCurrentPage('contact');
    window.history.pushState(null, '', '#contact-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookStay = () => {
    setCurrentPage('contact');
    window.history.pushState(null, '', '#contact-page');
    setTimeout(() => {
      const form = document.getElementById('contact-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);
  };

  const handleNavigateSection = (sectionId) => {
    if (currentPage !== 'home') {
      handleNavigateHome(sectionId);
    } else {
      handleScrollToSection(sectionId);
    }
  };

  const handleSelectRoomForBooking = (room) => {
    setSelectedRoomForBooking(room);
    setIsBookingRequestOpen(true);
  };

  const handleSubmitRoomReservation = async (request) => {
    const result = await postApi('reservations', request);
    const checkInDate = new Date(`${request.checkIn}T12:00:00`);
    const checkOutDate = new Date(`${request.checkOut}T12:00:00`);
    const nights = Math.round((checkOutDate - checkInDate) / 86400000);
    const subtotal = selectedRoomForBooking.price * nights;
    const taxes = Math.round(subtotal * 0.1);
    handleCompleteBooking({
      room: selectedRoomForBooking,
      checkIn: request.checkIn,
      checkOut: request.checkOut,
      guests: Number(request.adults) + Number(request.children),
      nights,
      total: subtotal + taxes,
      discount: 0,
      addons: [],
    });
    setIsBookingRequestOpen(false);
    showToast(result.message);
  };

  const handleOpenRoomModal = (room) => {
    setPreviewRoom(room);
    setIsRoomModalOpen(true);
  };

  const handleReserveTable = (venue) => {
    setReserveVenue(venue);
    setIsDiningModalOpen(true);
  };

  const handleConfirmDining = async (details) => {
    const result = await postApi('dining-reservations', {
      fullName: details.fullName,
      mobileNumber: details.mobileNumber,
      venue: details.venue.name,
      venueType: details.venue.type,
      date: details.date,
      time: details.time,
      guests: details.guests,
      specialRequests: details.specialRequests,
    });
    playChime();
    confetti({ particleCount: 50 });
    showToast(result.message);
  };

  const handleInquireExperience = (exp) => {
    handleScrollToSection('contact');
    showToast(`Inquiring about ${exp.title}. Our concierge is ready!`);
  };

  const handleCompleteBooking = (details) => {
    setConfirmedBooking(details);
    setIsConfirmationModalOpen(true);
    playChime();
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#22c0f6', '#f59e0b', '#10b981', '#a855f7'],
    });
  };

  const handleSendMessage = async (formData) => {
    const result = await postApi('inquiries', formData);
    playChime();
    showToast(result.message);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-sky-200 selection:text-sky-900">
      {/* SEA WAVE PRELOADER */}
      {!bootGone && <Preloader fading={!booting} />}

      {/* 1. NAVBAR */}
      <Navbar
        currentTheme={theme}
        onToggleTheme={handleToggleTheme}
        onBookNowClick={handleBookStay}
        currentPage={currentPage}
        onNavigateHome={handleNavigateHome}
        onNavigateAbout={handleNavigateAbout}
        onNavigateRooms={handleNavigateRooms}
        onNavigateBeach={handleNavigateBeach}
        onNavigateAmenities={handleNavigateAmenities}
        onNavigateGallery={handleNavigateGallery}
        onNavigateDiningReviews={handleNavigateDiningReviews}
        onNavigateLocationFAQ={handleNavigateLocationFAQ}
        onNavigateContact={handleNavigateContact}
        onNavigateSection={handleNavigateSection}
      />

      {currentPage === 'about' ? (
        /* ================= ABOUT MULTI-PAGE VIEW ================= */
        <main className="flex-1">
          <AboutPage 
            onNavigateHome={handleNavigateHome} 
            onNavigateSection={handleNavigateSection} 
          />
        </main>
      ) : currentPage === 'rooms' ? (
        /* ================= ROOMS MULTI-PAGE VIEW ================= */
        <main className="flex-1">
          <RoomsPage
            onNavigateHome={handleNavigateHome}
            onNavigateSection={handleNavigateSection}
            onSelectRoomForBooking={handleSelectRoomForBooking}
            onOpenRoomModal={handleOpenRoomModal}
          />
        </main>
      ) : currentPage === 'beach' ? (
        /* ================= BEACH MULTI-PAGE VIEW ================= */
        <main className="flex-1">
          <BeachPage
            onNavigateHome={handleNavigateHome}
            onNavigateSection={handleNavigateSection}
            onInquireExperience={handleInquireExperience}
          />
        </main>
      ) : currentPage === 'amenities' ? (
        /* ================= AMENITIES MULTI-PAGE VIEW ================= */
        <main className="flex-1">
          <AmenitiesPage
            onNavigateHome={handleNavigateHome}
            onNavigateSection={handleNavigateSection}
          />
        </main>
      ) : currentPage === 'gallery' ? (
        /* ================= GALLERY MULTI-PAGE VIEW ================= */
        <main className="flex-1">
          <GalleryPage
            onNavigateHome={handleNavigateHome}
            onNavigateSection={handleNavigateSection}
          />
        </main>
      ) : (currentPage === 'dining-reviews' || currentPage === 'dining' || currentPage === 'reviews') ? (
        /* ================= DINING & REVIEWS COMBINED MULTI-PAGE VIEW ================= */
        <main className="flex-1">
          <DiningReviewsPage
            onNavigateHome={handleNavigateHome}
            onNavigateSection={handleNavigateSection}
            onReserveTable={handleReserveTable}
          />
        </main>
      ) : (currentPage === 'location-faq' || currentPage === 'location' || currentPage === 'faq') ? (
        /* ================= LOCATION & FAQ COMBINED MULTI-PAGE VIEW ================= */
        <main className="flex-1">
          <LocationFAQPage
            onNavigateHome={handleNavigateHome}
            onNavigateSection={handleNavigateSection}
          />
        </main>
      ) : currentPage === 'contact' ? (
        /* ================= CONTACT MULTI-PAGE VIEW ================= */
        <main className="flex-1">
          <ContactPage
            onNavigateHome={handleNavigateHome}
            onNavigateSection={handleNavigateSection}
            onSendMessage={handleSendMessage}
          />
        </main>
      ) : (
        /* ================= HOME MULTI-SECTION VIEW ================= */
        <main className="flex-1">
          {/* 2. HERO (with Live Skeuomorphic Journal Notebook) */}
          <HeroSection
            activeEntry={activeEntry}
            onUpdateEntry={handleUpdateActiveEntry}
            fontStyle={fontStyle}
            paperStyle={paperStyle}
            onOpenPhotoModal={() => setIsPhotoOpen(true)}
            onOpenShareModal={() => setIsShareOpen(true)}
            onCopyQuote={handleCopyQuote}
          />

          {/* 3. ABOUT SECTION (Preview with full page link) */}
          <AboutSection onOpenFullAboutPage={handleNavigateAbout} />

          {/* 4. ROOMS (Preview with full page link) */}
          <RoomsSection
            onSelectRoomForBooking={handleSelectRoomForBooking}
            onOpenRoomModal={handleOpenRoomModal}
            onOpenFullRoomsPage={handleNavigateRooms}
          />

          {/* 5. BEACH EXPERIENCE (Preview with full page link) */}
          <BeachSection
            onInquireExperience={handleInquireExperience}
            onOpenFullBeachPage={handleNavigateBeach}
          />

          {/* 6. AMENITIES (Preview with full page link) */}
          <AmenitiesSection onOpenFullAmenitiesPage={handleNavigateAmenities} />

          {/* 7. GALLERY (Preview with full page link) */}
          <GallerySection onOpenFullGalleryPage={handleNavigateGallery} />

          {/* 8. DINING (Preview with full page link) */}
          <DiningSection
            onReserveTable={handleReserveTable}
            onOpenFullDiningReviewsPage={handleNavigateDiningReviews}
          />

          {/* 9. REVIEWS (Preview with full page link) */}
          <ReviewsSection onOpenFullDiningReviewsPage={handleNavigateDiningReviews} />

          {/* 10. LOCATION (Preview with full page link) */}
          <LocationSection onOpenFullLocationFAQPage={handleNavigateLocationFAQ} />

          {/* 11. FAQ (Preview with full page link) */}
          <FAQSection onOpenFullLocationFAQPage={handleNavigateLocationFAQ} />

          {/* 12. CONTACT */}
          <ContactSection
            onSendMessage={handleSendMessage}
            onOpenFullContactPage={handleNavigateContact}
          />

          {/* 13. PRIVACY POLICY & TERMS OF SANCTUARY */}
          <LegalSection />
        </main>
      )}

      {/* 14. FOOTER */}
      <FooterSection 
        onNavigateAbout={handleNavigateAbout}
        onNavigateRooms={handleNavigateRooms}
        onNavigateBeach={handleNavigateBeach}
        onNavigateAmenities={handleNavigateAmenities}
        onNavigateGallery={handleNavigateGallery}
        onNavigateDiningReviews={handleNavigateDiningReviews}
        onNavigateLocationFAQ={handleNavigateLocationFAQ}
        onNavigateContact={handleNavigateContact}
        onNavigateSection={handleNavigateSection}
      />

      {/* MODALS */}
      <RoomDetailModal
        room={previewRoom}
        isOpen={isRoomModalOpen}
        onClose={() => setIsRoomModalOpen(false)}
        onBookRoom={(room) => {
          setIsRoomModalOpen(false);
          handleSelectRoomForBooking(room);
        }}
      />

      <BookingRequestModal
        room={selectedRoomForBooking}
        isOpen={isBookingRequestOpen}
        onClose={() => setIsBookingRequestOpen(false)}
        onSubmit={handleSubmitRoomReservation}
      />

      <DiningReservationModal
        venue={reserveVenue}
        isOpen={isDiningModalOpen}
        onClose={() => setIsDiningModalOpen(false)}
        onConfirmReservation={handleConfirmDining}
      />

      <BookingConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        details={confirmedBooking}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        entry={activeEntry}
        onCopyQuote={handleCopyQuote}
        copied={copied}
      />

      <PhotoModal
        isOpen={isPhotoOpen}
        onClose={() => setIsPhotoOpen(false)}
        entry={activeEntry}
        onUpdateImage={(newImage, caption) => {
          handleUpdateActiveEntry({
            image: newImage,
            ...(caption ? { caption } : {}),
          });
          showToast(<><i className="fa-solid fa-camera" aria-hidden="true"></i> Inspiration artwork updated!</>);
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="strongme-toast">
          {toastMessage.includes('copied') || toastMessage.includes('exported') || toastMessage.includes('confirmed') ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Sparkles className="w-4 h-4 text-amber-300" />
          )}
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
