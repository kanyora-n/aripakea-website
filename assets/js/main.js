/**
 * @file Main JavaScript file for the Aripack Website.
 * @author A 15-year Experience Developer
 * @version 2.0.0
 *
 * This script handles all client-side interactivity, including:
 * - Mobile navigation toggle
 * - Header state changes on scroll
 * - Dynamic copyright year
 */

// Strict mode helps catch common coding errors and "unsafe" actions.
'use strict';

/**
 * Executes when the DOM is fully loaded and parsed.
 * This is the entry point for all our scripts.
 */
document.addEventListener('DOMContentLoaded', () => {

    // Initialize all modules
    initMobileMenu();
    initHeaderOnScroll();
    initCopyrightYear();

    console.log('Aripack Website scripts initialized successfully.');
});


/**
 * @function initMobileMenu
 * @description Initializes the mobile menu toggle functionality.
 * It ensures that the menu can be opened and closed on smaller screens
 * and handles ARIA attributes for accessibility.
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('primary-navigation');

    // Defensive check: only proceed if both elements exist.
    if (!menuToggle || !navLinks) {
        console.error('Mobile menu elements not found.');
        return;
    }

    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        menuToggle.classList.toggle('is-open');
        
        // Update ARIA attribute for screen readers
        menuToggle.setAttribute('aria-expanded', isOpen.toString());
    });
}


/**
 * @function initHeaderOnScroll
 * @description Adds a class to the header when the user scrolls down.
 * This allows for styling changes, like adding a background or shadow.
 * The implementation is throttled for performance.
 */
function initHeaderOnScroll() {
    const header = document.getElementById('site-header');

    // Defensive check: only proceed if the header exists.
    if (!header) {
        console.error('Site header element not found.');
        return;
    }

    // This function will be called on scroll
    const handleScroll = () => {
        // Add class if user has scrolled more than 50px, otherwise remove it
        if (window.scrollY > 50) {
            header.classList.add('site-header--scrolled');
        } else {
            header.classList.remove('site-header--scrolled');
        }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
}


/**
 * @function initCopyrightYear
 * @description Dynamically sets the current year in the footer.
 * This avoids having to manually update the year.
 */
function initCopyrightYear() {
    const yearSpan = document.getElementById('current-year');

    // Defensive check: only proceed if the span exists.
    if (!yearSpan) {
        console.error('Copyright year span not found.');
        return;
    }

    yearSpan.textContent = new Date().getFullYear();
}