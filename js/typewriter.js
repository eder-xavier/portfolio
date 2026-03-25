/* ==========================================================================
   TYPEWRITER.JS — Hero Typing Animation
   ========================================================================== */

const Typewriter = (() => {
  let element = null;
  let titles = [];
  let currentIndex = 0;
  let currentChar = 0;
  let isDeleting = false;
  let timeoutId = null;

  const CONFIG = {
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseAfterType: 2000,
    pauseAfterDelete: 500,
  };

  function type() {
    if (!element) return;

    const currentTitle = titles[currentIndex];

    if (!isDeleting) {
      // Typing
      currentChar++;
      element.textContent = currentTitle.substring(0, currentChar);

      if (currentChar === currentTitle.length) {
        // Finished typing, pause then start deleting
        timeoutId = setTimeout(() => {
          isDeleting = true;
          type();
        }, CONFIG.pauseAfterType);
        return;
      }

      timeoutId = setTimeout(type, CONFIG.typeSpeed + Math.random() * 40);
    } else {
      // Deleting
      currentChar--;
      element.textContent = currentTitle.substring(0, currentChar);

      if (currentChar === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % titles.length;
        timeoutId = setTimeout(type, CONFIG.pauseAfterDelete);
        return;
      }

      timeoutId = setTimeout(type, CONFIG.deleteSpeed);
    }
  }

  function init() {
    element = document.getElementById('typewriter');
    if (!element) return;

    const currentLang = localStorage.getItem('portfolio-lang') || 'en';
    updateTitles(currentLang);
    type();
  }

  function updateTitles(lang) {
    if (lang === 'pt') {
      titles = [
        'Engenheiro de Software',
        'Pesquisador em Astrofísica',
        'Mestrando em Computação',
        'Entusiasta de IA & Machine Learning'
      ];
    } else {
      titles = [
        'Software Engineer',
        'Astrophysics Researcher',
        'MSc Student in Computing',
        'AI & Machine Learning Enthusiast'
      ];
    }
    // Reset animation
    if (element) {
      currentIndex = 0;
      currentChar = 0;
      isDeleting = false;
      if (timeoutId) clearTimeout(timeoutId);
      element.textContent = '';
      type();
    }
  }

  function destroy() {
    if (timeoutId) clearTimeout(timeoutId);
  }

  return { init, destroy, updateTitles };
})();
