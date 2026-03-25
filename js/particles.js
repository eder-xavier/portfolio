/* ==========================================================================
   PARTICLES.JS — Canvas-based Star/Particle System
   ========================================================================== */

const Particles = (() => {
  let canvas, ctx;
  let particles = [];
  let mouseX = 0, mouseY = 0;
  let rafId = null;

  const CONFIG = {
    count: 120,
    maxSize: 2.5,
    minSize: 0.3,
    speed: 0.15,
    parallaxFactor: 0.02,
    connectDistance: 120,
    connectOpacity: 0.06,
    colors: [
      'rgba(123, 104, 238, ',   // purple
      'rgba(74, 144, 217, ',    // blue
      'rgba(240, 192, 64, ',    // gold
      'rgba(224, 168, 96, ',    // amber
      'rgba(255, 107, 157, ',   // pink
      'rgba(240, 240, 245, ',   // white
    ]
  };

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * (CONFIG.maxSize - CONFIG.minSize) + CONFIG.minSize;
      this.baseSize = this.size;
      this.speedX = (Math.random() - 0.5) * CONFIG.speed;
      this.speedY = (Math.random() - 0.5) * CONFIG.speed;
      this.color = CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];
      this.twinkleSpeed = Math.random() * 0.02 + 0.005;
      this.twinkleOffset = Math.random() * Math.PI * 2;
      this.opacity = Math.random() * 0.7 + 0.3;
      this.baseOpacity = this.opacity;
    }

    update(time) {
      // Movement
      this.x += this.speedX;
      this.y += this.speedY;

      // Parallax response to mouse
      const dx = mouseX - canvas.width / 2;
      const dy = mouseY - canvas.height / 2;
      this.x -= dx * CONFIG.parallaxFactor * (this.size / CONFIG.maxSize) * 0.01;
      this.y -= dy * CONFIG.parallaxFactor * (this.size / CONFIG.maxSize) * 0.01;

      // Twinkle
      this.opacity = this.baseOpacity + Math.sin(time * this.twinkleSpeed + this.twinkleOffset) * 0.3;
      this.size = this.baseSize + Math.sin(time * this.twinkleSpeed * 0.5 + this.twinkleOffset) * 0.3;

      // Wrap around edges
      if (this.x < -10) this.x = canvas.width + 10;
      if (this.x > canvas.width + 10) this.x = -10;
      if (this.y < -10) this.y = canvas.height + 10;
      if (this.y > canvas.height + 10) this.y = -10;
    }

    draw() {
      const alpha = Math.max(0, Math.min(1, this.opacity));
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(0.1, this.size), 0, Math.PI * 2);
      ctx.fillStyle = this.color + alpha + ')';
      ctx.fill();

      // Glow effect for larger particles
      if (this.baseSize > 1.5) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color + (alpha * 0.1) + ')';
        ctx.fill();
      }
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.connectDistance) {
          const opacity = (1 - dist / CONFIG.connectDistance) * CONFIG.connectOpacity;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(123, 104, 238, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update(time);
      p.draw();
    });

    drawConnections();
    rafId = requestAnimationFrame(animate);
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function handleMouse(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function init() {
    canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    resize();

    // Adjust particle count for mobile
    const count = window.innerWidth < 768 ? Math.floor(CONFIG.count / 2) : CONFIG.count;
    particles = Array.from({ length: count }, () => new Particle());

    window.addEventListener('resize', () => {
      resize();
      // Reposition particles that went off-screen
      particles.forEach(p => {
        if (p.x > canvas.width) p.x = Math.random() * canvas.width;
        if (p.y > canvas.height) p.y = Math.random() * canvas.height;
      });
    });

    window.addEventListener('mousemove', handleMouse);

    animate(0);
  }

  function destroy() {
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', handleMouse);
  }

  return { init, destroy };
})();
