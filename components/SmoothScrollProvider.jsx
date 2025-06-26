"use client";

import { useEffect } from 'react';

export default function SmoothScrollProvider() {
  useEffect(() => {
    console.log('🔧 SmoothScrollProvider initialized');
    
    // Ensure CSS smooth scroll is disabled for custom control
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Ultra-smooth scroll implementation from scratch
    const createSmoothScroll = () => {
      // Custom smooth scroll function with perfect centering
      window.smoothScrollToSection = (sectionId) => {
        console.log(`🚀 SMOOTH SCROLL INITIATED for: ${sectionId}`);
        console.log(`📍 Current scroll position: ${window.pageYOffset}`);
        
        const section = document.getElementById(sectionId);
        if (!section) {
          console.error(`❌ Section ${sectionId} not found`);
          return;
        }

        const navbar = document.querySelector('nav');
        const navHeight = navbar ? navbar.offsetHeight : 80;
        const viewportHeight = window.innerHeight;
        const isMobile = window.innerWidth < 640;
        
        console.log(`📱 Device: ${isMobile ? 'Mobile' : 'Desktop'}, NavHeight: ${navHeight}, ViewportHeight: ${viewportHeight}`);
        
        // Find the content element to center for each section
        let contentElement = section;
        
        // Select the main content for better centering
        if (sectionId === 'about') {
          // Look for the about card with backdrop-blur
          const aboutCard = section.querySelector('.backdrop-blur-xl');
          if (aboutCard) {
            contentElement = aboutCard;
            console.log('✅ Found About card with backdrop-blur');
          } else {
            // Fallback to any content container
            const container = section.querySelector('.content-container') || section.querySelector('.page-container');
            if (container) {
              contentElement = container;
              console.log('✅ Found About container fallback');
            }
          }
        } else if (sectionId === 'projects') {
          // Look for projects content - try multiple selectors including marquee
          const projectsContainer = section.querySelector('[class*="marquee"]') ||
                                   section.querySelector('.w-full') || 
                                   section.querySelector('.content-container') ||
                                   section.querySelector('.grid') ||
                                   section.querySelector('h2');
          if (projectsContainer) {
            contentElement = projectsContainer;
            console.log('✅ Found Projects container');
          }
        } else if (sectionId === 'contact') {
          // Look for contact card
          const contactCard = section.querySelector('.backdrop-blur-xl') ||
                              section.querySelector('.content-container') ||
                              section.querySelector('.max-w-');
          if (contactCard) {
            contentElement = contactCard;
            console.log('✅ Found Contact card');
          }
        }
        
        // Get content position and size
        const contentRect = contentElement.getBoundingClientRect();
        const contentTop = contentRect.top + window.pageYOffset;
        const contentHeight = contentRect.height;
        
        console.log(`📏 Content - Top: ${contentTop}, Height: ${contentHeight}`);
        
        // Calculate centered position with enhanced precision
        let targetPosition;
        
        if (isMobile) {
          // Mobile: Position content optimally below navbar
          targetPosition = contentTop - navHeight - 20;
          console.log(`📱 Mobile positioning: ${targetPosition}`);
        } else {
          // Desktop: Calculate ultra-precise center
          const availableHeight = viewportHeight - navHeight;
          
          if (contentHeight <= availableHeight * 0.92) {
            // Content fits comfortably - center it perfectly
            const extraSpace = availableHeight - contentHeight;
            const centerOffset = extraSpace / 2;
            targetPosition = contentTop - navHeight - centerOffset;
            
            console.log(`🖥️ Desktop centering - Available: ${availableHeight}, Extra: ${extraSpace}, Center offset: ${centerOffset}, Base: ${targetPosition}`);
            
            // Fine-tuned visual balance adjustments
            if (sectionId === 'about') {
              targetPosition -= 40; // Better centering for about section
              console.log(`🎨 About visual adjustment: ${targetPosition}`);
            } else if (sectionId === 'projects') {
              targetPosition -= 80; // Better centering for marquee layout
              console.log(`🎨 Projects visual adjustment: ${targetPosition}`);
            } else if (sectionId === 'contact') {
              targetPosition -= 5; // Minimal adjustment for perfect balance
              console.log(`🎨 Contact visual adjustment: ${targetPosition}`);
            }
          } else {
            // Large content - position optimally at top
            targetPosition = contentTop - navHeight - 30;
            console.log(`📏 Large content positioning: ${targetPosition}`);
          }
        }
        
        // Ensure we stay within bounds
        const maxScroll = document.documentElement.scrollHeight - viewportHeight;
        const originalTarget = targetPosition;
        targetPosition = Math.max(0, Math.min(targetPosition, maxScroll));
        
        console.log(`🎯 Final target: ${targetPosition} (was ${originalTarget}), maxScroll: ${maxScroll}`);

        // Ultra-smooth animation parameters
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        
        // Skip animation if distance is very small
        if (Math.abs(distance) < 10) {
          window.scrollTo(0, targetPosition);
          console.log('✅ Small distance - instant scroll');
          return;
        }
        
        // More cinematic duration calculation
        const duration = Math.min(2500, Math.max(1200, Math.abs(distance) * 3));
        
        console.log(`🎬 Animation - Start: ${startPosition}, Distance: ${distance}, Duration: ${duration}ms`);
        
        let startTime = null;
        let isScrolling = false;

        // Prevent other scroll events during animation
        const preventScroll = (e) => {
          if (isScrolling) {
            e.preventDefault();
          }
        };

        // Perfect easing function for ultra-cinematic smoothness
        const easeInOutQuint = (t) => {
          return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
        };

        const animateScroll = (currentTime) => {
          if (startTime === null) {
            startTime = currentTime;
            isScrolling = true;
            // Temporarily disable wheel/touch scroll during animation
            window.addEventListener('wheel', preventScroll, { passive: false });
            window.addEventListener('touchmove', preventScroll, { passive: false });
          }
          
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          const easeProgress = easeInOutQuint(progress);

          // High precision scrolling
          const currentPosition = startPosition + distance * easeProgress;
          window.scrollTo(0, Math.round(currentPosition));

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            // Re-enable scroll events
            isScrolling = false;
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
            console.log(`✅ Scroll complete to ${sectionId}`);
          }
        };

        requestAnimationFrame(animateScroll);
      };
    };

    // Initialize smooth scroll
    createSmoothScroll();

    // Clean up on unmount
    return () => {
      delete window.smoothScrollToSection;
    };
  }, []);

  return null;
}
