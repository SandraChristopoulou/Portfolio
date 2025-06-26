/**
 * Simple and reliable smooth scroll utility
 */

export const scrollToCenterSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (!section) {
    console.error(`Section ${sectionId} not found`);
    return;
  }

  const navbarHeight = window.innerWidth >= 640 ? 80 : 64;
  const isMobile = window.innerWidth < 640;
  
  // Get section position
  const sectionRect = section.getBoundingClientRect();
  const sectionTop = sectionRect.top + window.pageYOffset;
  
  // Calculate scroll position with simple, reliable logic
  let scrollPosition;
  
  if (isMobile) {
    // Mobile: Simple top alignment with navbar spacing
    scrollPosition = sectionTop - navbarHeight - 20;
  } else {
    // Desktop: Center the section with some top margin
    const viewportHeight = window.innerHeight;
    const availableHeight = viewportHeight - navbarHeight;
    const sectionHeight = sectionRect.height;
    
    if (sectionHeight < availableHeight * 0.8) {
      // Section fits well - center it
      const centerOffset = (availableHeight - sectionHeight) / 2;
      scrollPosition = sectionTop - navbarHeight - centerOffset;
    } else {
      // Large section - use top alignment
      scrollPosition = sectionTop - navbarHeight - 40;
    }
  }
  
  // Ensure valid position
  scrollPosition = Math.max(0, scrollPosition);
  
  // Simple, smooth scroll animation
  const startY = window.pageYOffset;
  const distance = scrollPosition - startY;
  
  // Adaptive duration based on distance - longer for bigger jumps
  let duration;
  if (Math.abs(distance) < 300) {
    duration = 600; // Short scroll
  } else if (Math.abs(distance) < 800) {
    duration = 1000; // Medium scroll
  } else {
    duration = 1400; // Long scroll
  }
  
  let startTime = null;

  // Smooth easing function for natural movement
  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const animate = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);
    
    const currentY = startY + (distance * eased);
    window.scrollTo(0, currentY);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

export default scrollToCenterSection;
