/* ==========================================================================
   APP.JS — Main Entry Point, Initialize All Modules
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Loading screen
  const loader = document.querySelector('.loader');
  const progress = document.querySelector('.loader__progress');
  let loadProgress = 0;

  function updateLoader() {
    loadProgress += Math.random() * 25 + 10;
    if (loadProgress > 100) loadProgress = 100;
    if (progress) progress.style.width = loadProgress + '%';

    if (loadProgress >= 100) {
      setTimeout(() => {
        if (loader) loader.classList.add('hidden');
        document.body.style.overflow = '';
        initModules();
      }, 400);
    } else {
      setTimeout(updateLoader, 200 + Math.random() * 300);
    }
  }

  // Prevent scroll during loading
  document.body.style.overflow = 'hidden';
  updateLoader();

  function initModules() {
    // Initialize all modules
    Particles.init();
    Navigation.init();
    ScrollAnimations.init();
    Typewriter.init();
    I18n.init();

    // Language toggle button event
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => I18n.toggle());
    }



    // Hero scroll indicator click
    const scrollIndicator = document.querySelector('.hero__scroll');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
      scrollIndicator.style.cursor = 'pointer';
    }
  }
});
