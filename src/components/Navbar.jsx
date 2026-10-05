import React, { useState, useEffect } from 'react';
import {
  BicepsFlexed,
  Sun,
  Moon,
  Sunrise,
  Menu,
  X,
  CalendarCheck
} from 'lucide-react';

export const Navbar = ({
  currentTheme,
  onToggleTheme,
  onBookNowClick,
  currentPage = 'home',
  onNavigateHome,
  onNavigateAbout,
  onNavigateRooms,
  onNavigateBeach,
  onNavigateAmenities,
  onNavigateGallery,
  onNavigateDiningReviews,
  onNavigateLocationFAQ,
  onNavigateContact,
  onNavigateSection,
}) => {

  // Mobile menu open/close
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Which section is currently active on the home page
  const [activeSection, setActiveSection] = useState('hero');

  // All navigation items
  const navItems = [
    { label: 'Home', href: '#hero', pageKey: 'home' },
    { label: 'About', href: '#about', pageKey: 'about' },
    { label: 'Rooms', href: '#rooms', pageKey: 'rooms' },
    { label: 'Beach', href: '#beach', pageKey: 'beach' },
    { label: 'Amenities', href: '#amenities', pageKey: 'amenities' },
    { label: 'Gallery', href: '#gallery', pageKey: 'gallery' },
    { label: 'Dining & Reviews', href: '#dining', pageKey: 'dining-reviews' },
    { label: 'Location & FAQ', href: '#location', pageKey: 'location-faq' },
    { label: 'Contact', href: '#contact', pageKey: 'contact' },
  ];

  // --------------------------------------------------
  // Detect current page / section
  // --------------------------------------------------

  useEffect(() => {

    // If we are on a separate page,
    // make that page active in the navbar.
    if (currentPage === 'about') {
      setActiveSection('about');
      return;
    }

    if (currentPage === 'rooms') {
      setActiveSection('rooms');
      return;
    }

    if (currentPage === 'beach') {
      setActiveSection('beach');
      return;
    }

    if (currentPage === 'amenities') {
      setActiveSection('amenities');
      return;
    }

    if (currentPage === 'gallery') {
      setActiveSection('gallery');
      return;
    }

    if (
      currentPage === 'dining-reviews' ||
      currentPage === 'dining' ||
      currentPage === 'reviews'
    ) {
      setActiveSection('dining-reviews');
      return;
    }

    if (
      currentPage === 'location-faq' ||
      currentPage === 'location' ||
      currentPage === 'faq'
    ) {
      setActiveSection('location-faq');
      return;
    }

    if (currentPage === 'contact') {
      setActiveSection('contact');
      return;
    }

    // ----------------------------------------------
    // Detect section while scrolling on home page
    // ----------------------------------------------

    const handleScroll = () => {

      // Current scroll position
      const scrollY = window.scrollY;

      // Get section IDs from navigation items
      const sections = navItems
        .filter(i => !i.pageKey || i.pageKey === 'home')
        .map(item => item.href.substring(1));

      // Check sections from bottom to top
      for (const sectionId of sections.reverse()) {

        const element = document.getElementById(sectionId);

        // If the section is currently visible,
        // make it the active section.
        if (element && scrollY >= element.offsetTop - 150) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    // Listen for page scrolling
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Remove scroll listener when component is removed
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [navItems, currentPage]);


  // --------------------------------------------------
  // Handle navigation click
  // --------------------------------------------------

  const handleNavClick = (item) => {

    // Close mobile menu after clicking a link
    setMobileMenuOpen(false);

    // About page
    if (item.pageKey === 'about') {
      if (onNavigateAbout) onNavigateAbout();
      return;
    }

    // Rooms page
    if (item.pageKey === 'rooms') {
      if (onNavigateRooms) onNavigateRooms();
      return;
    }

    // Beach page
    if (item.pageKey === 'beach') {
      if (onNavigateBeach) onNavigateBeach();
      return;
    }

    // Amenities page
    if (item.pageKey === 'amenities') {
      if (onNavigateAmenities) onNavigateAmenities();
      return;
    }

    // Gallery page
    if (item.pageKey === 'gallery') {
      if (onNavigateGallery) onNavigateGallery();
      return;
    }

    // Dining & Reviews page
    if (item.pageKey === 'dining-reviews') {
      if (onNavigateDiningReviews) onNavigateDiningReviews();
      return;
    }

    // Location & FAQ page
    if (item.pageKey === 'location-faq') {
      if (onNavigateLocationFAQ) onNavigateLocationFAQ();
      return;
    }

    // Contact page
    if (item.pageKey === 'contact') {
      if (onNavigateContact) onNavigateContact();
      return;
    }

    // Home
    if (item.pageKey === 'home') {

      // If we are on another page,
      // navigate back to home.
      if (currentPage !== 'home') {

        if (onNavigateHome) {
          onNavigateHome();
        }

      } else {

        // Already on home, so scroll to hero
        const target = document.querySelector('#hero');

        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }

      return;
    }

    // ------------------------------------------------
    // Section links
    // ------------------------------------------------

    const sectionId = item.href.substring(1);

    // If we are on another page,
    // go back home and open the section.
    if (currentPage !== 'home') {

      if (onNavigateHome) {
        onNavigateHome(sectionId);
      }

    } else {

      // If parent provided a navigation function,
      // use it.
      if (onNavigateSection) {

        onNavigateSection(sectionId);

      } else {

        // Otherwise scroll directly to the section
        const target = document.querySelector(item.href);

        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };


  // --------------------------------------------------
  // Check if a navigation item is active
  // --------------------------------------------------

  const isItemActive = (item) => {

    if (currentPage === 'about') {
      return item.pageKey === 'about';
    }

    if (currentPage === 'rooms') {
      return item.pageKey === 'rooms';
    }

    if (currentPage === 'beach') {
      return item.pageKey === 'beach';
    }

    if (currentPage === 'amenities') {
      return item.pageKey === 'amenities';
    }

    if (currentPage === 'gallery') {
      return item.pageKey === 'gallery';
    }

    if (
      currentPage === 'dining-reviews' ||
      currentPage === 'dining' ||
      currentPage === 'reviews'
    ) {
      return item.pageKey === 'dining-reviews';
    }

    if (
      currentPage === 'location-faq' ||
      currentPage === 'location' ||
      currentPage === 'faq'
    ) {
      return item.pageKey === 'location-faq';
    }

    if (currentPage === 'contact') {
      return item.pageKey === 'contact';
    }

    // Home page
    if (currentPage === 'home') {

      // Separate pages should not be active
      if (item.pageKey && item.pageKey !== 'home') {
        return false;
      }

      // Home button is active when hero is active
      if (item.pageKey === 'home') {
        return activeSection === 'hero';
      }

      // Section is active when its ID matches
      return activeSection === item.href.substring(1);
    }

    return false;
  };


  // --------------------------------------------------
  // Navbar UI
  // --------------------------------------------------

  return (
    <header className="strongme-header">

      {/* Brand */}
      <div className="flex items-center gap-6">

        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();

            if (currentPage !== 'home') {

              if (onNavigateHome) {
                onNavigateHome();
              }

            } else {

              const target = document.querySelector('#hero');

              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
          className="strongme-brand"
        >

          {/* Brand Icon */}
          <div className="brand-icon-box">
            <BicepsFlexed
              className="w-5 h-5 text-slate-700 dark:text-sky-400"
              strokeWidth={2.4}
            />
          </div>

          {/* Brand Name */}
          <span className="brand-title">
            StrongMe
          </span>

        </a>


        {/* Desktop Navigation */}
        <nav className="nav-links hidden lg:flex">

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
              className={`nav-item ${
                isItemActive(item) ? 'active' : ''
              }`}
            >
              {item.label}
            </a>
          ))}

        </nav>

      </div>


      {/* Right Side Controls */}
      <div className="header-actions">

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={onToggleTheme}
          title={`Switch theme (Current: ${currentTheme})`}
          className="header-action-btn p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-transform active:scale-90"
        >

          {/* Light Theme */}
          {currentTheme === 'light' && (
            <Sun className="w-4 h-4 text-amber-500" />
          )}

          {/* Warm Theme */}
          {currentTheme === 'warm' && (
            <Sunrise className="w-4 h-4 text-orange-500" />
          )}

          {/* Dark Theme */}
          {currentTheme === 'dark' && (
            <Moon className="w-4 h-4 text-sky-400" />
          )}

        </button>


        {/* Book Now Button */}
        <button
          type="button"
          onClick={onBookNowClick}
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-sky-500/20 transition-all cursor-pointer active:scale-95"
        >
          <CalendarCheck className="w-4 h-4" />
          Book Stay
        </button>


        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="nav-hamburger lg:hidden"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >

          {/* Show X when menu is open */}
          {mobileMenuOpen ? (

            <X className="w-5 h-5" />

          ) : (

            // Show hamburger when menu is closed
            <Menu className="w-5 h-5" />

          )}

        </button>

      </div>


      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="nav-drawer lg:hidden">

          <nav className="nav-drawer-links">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className={`nav-drawer-link ${
                  isItemActive(item) ? 'active' : ''
                }`}
              >
                {item.label}
              </a>
            ))}

          </nav>


          {/* Mobile Reserve Button */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onBookNowClick();
            }}
            className="nav-drawer-cta"
          >
            <CalendarCheck className="w-4 h-4" />
            Reserve Your Sanctuary
          </button>

        </div>
      )}

    </header>
  );
};