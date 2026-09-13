document.addEventListener('DOMContentLoaded', () => {

    // Efeito de Fade-in para as seções
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // observa em relação ao viewport
        rootMargin: '0px',
        threshold: 0.1 // aciona quando 10% da seção estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // para de observar depois de animar
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});