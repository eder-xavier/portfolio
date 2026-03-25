/* ==========================================================================
   NAVIGATION.JS — Smooth Scroll, Sticky Nav, Mobile Menu
   ========================================================================== */

const Navigation = (() => {
  let nav, hamburger, navLinks, links, backToTop;
  let sections = [];
  let ticking = false;

  function init() {
    nav = document.querySelector('.nav');
    hamburger = document.querySelector('.nav__hamburger');
    navLinks = document.querySelector('.nav__links');
    links = document.querySelectorAll('.nav__link[href^="#"]');
    backToTop = document.querySelector('.back-to-top');
    sections = document.querySelectorAll('.section[id]');

    if (!nav) return;

    // Smooth scroll for nav links
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          closeMobileMenu();
        }
      });
    });

    // Hamburger toggle
    if (hamburger) {
      hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Back to top
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Scroll events
    window.addEventListener('scroll', onScroll, { passive: true });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
      if (navLinks && navLinks.classList.contains('open') &&
          !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Initial state
    onScroll();
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNavBar();
        updateActiveSection();
        updateBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  }

  function updateNavBar() {
    if (!nav) return;
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  function updateActiveSection() {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  function updateBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  function toggleMobileMenu() {
    if (!hamburger || !navLinks) return;
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    if (!hamburger || !navLinks) return;
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }

  return { init };
})();
