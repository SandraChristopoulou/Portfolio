import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scroll function
    const smoothScrollTo = (targetId, offset = 0) => {
      const target = document.getElementById(targetId);
      if (!target) return;

      const navbarHeight = window.innerWidth >= 640 ? 80 : 64;
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth < 640;

      // Find the best element to center on
      let elementToCenter = target;
      
      // Look for main content containers
      const selectors = [
        '.backdrop-blur-xl',
        '.content-container > div',
        'h2',
        '.w-full',
        '.rounded-xl'
      ];

      for (const selector of selectors) {
        const element = target.querySelector(selector);
        if (element) {
          elementToCenter = element;
          break;
        }
      }

      const rect = elementToCenter.getBoundingClientRect();
      const elementTop = rect.top + window.pageYOffset;
      const elementHeight = rect.height;

      let scrollPosition;

      if (isMobile) {
        // Mobile: Simple top alignment
        scrollPosition = elementTop - navbarHeight - 20;
      } else {
        // Desktop: True centering
        const availableHeight = viewportHeight - navbarHeight;
        const centerOffset = (availableHeight - elementHeight) / 2;

        if (elementHeight > availableHeight * 0.85) {
          // Element too tall - align to top
          scrollPosition = elementTop - navbarHeight - 40;
        } else {
          // Perfect center
          scrollPosition = elementTop - navbarHeight - centerOffset;
        }
      }

      // Apply additional offset
      scrollPosition += offset;
      scrollPosition = Math.max(0, scrollPosition);

      // Smooth scroll with custom slower easing
      const startPosition = window.pageYOffset;
      const distance = scrollPosition - startPosition;
      const duration = Math.min(2500, Math.abs(distance) * 2); // Much slower duration
      let startTime = null;

      const easeInOutSine = (t) => {
        return -(Math.cos(Math.PI * t) - 1) / 2;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutSine(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Add smooth scroll to all navigation links
    const addSmoothScrollToLinks = () => {
      const links = document.querySelectorAll('button[onclick*="handleScroll"], a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            smoothScrollTo(targetId);
          }
        });
      });
    };

    // Initialize smooth scrolling
    addSmoothScrollToLinks();

    // Re-initialize when content changes
    const observer = new MutationObserver(addSmoothScrollToLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useSmoothScroll;
