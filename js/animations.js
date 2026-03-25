/* ==========================================================================
   ANIMATIONS.JS — IntersectionObserver Scroll Reveal & Counter
   ========================================================================== */

const ScrollAnimations = (() => {
  let observer;

  function init() {
    // Scroll reveal
    observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    // Number counters
    const counterObserver = new IntersectionObserver(handleCounters, {
      threshold: 0.5
    });

    document.querySelectorAll('[data-count]').forEach(el => {
      counterObserver.observe(el);
    });
  }

  function handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Optionally stop observing after reveal
        // observer.unobserve(entry.target);
      }
    });
  }

  function handleCounters(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCount(entry.target);
      }
    });
  }

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  return { init };
})();
