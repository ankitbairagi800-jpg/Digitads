/* =====================================================
   DIGITALADS — main.js | Shared UI Logic
   thedigitalads.in | Production-ready, minimal JS
   ===================================================== */

(function () {
  'use strict';

  /* ===== NAVBAR SCROLL EFFECT ===== */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ===== MOBILE HAMBURGER MENU ===== */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen.toString());
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on nav link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ===== ACTIVE NAV STATE (auto-detect current page) ===== */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === currentPage);
  });

  /* ===== SCROLL TO TOP BUTTON ===== */
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===== HOMEPAGE CONTACT FORM (index.html) ===== */
  const homeForm = document.getElementById('contactForm');
  const homeSuccess = document.getElementById('formSuccess');
  if (homeForm && homeSuccess) {
    homeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = homeForm.querySelector('#name');
      const phone = homeForm.querySelector('#phone');
      const service = homeForm.querySelector('#service');
      let valid = true;
      [name, phone, service].forEach(f => {
        if (!f || !f.value.trim()) {
          valid = false;
          if (f) f.style.borderColor = '#ff4444';
        } else {
          f.style.borderColor = '';
        }
      });
      if (!valid) return;
      homeForm.style.display = 'none';
      homeSuccess.style.display = 'block';
    });
  }

  /* ===== LAZY-LOAD IMAGES ===== */
  if ('IntersectionObserver' in window) {
    const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    lazyImgs.forEach(img => imgObserver.observe(img));
  }

  /* ===== ANIMATE ON SCROLL (lightweight intersection observer) ===== */
  if ('IntersectionObserver' in window) {
    const animatables = document.querySelectorAll('.service-card, .why-card, .testimonial-card, .industry-card, .case-card, .blog-card, .faq-contact-card, .why-contact-item');
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    animatables.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      animObserver.observe(el);
    });
  }

  /* ===== STATS COUNTER ANIMATION ===== */
  const statNumbers = document.querySelectorAll('.stat-number, .faq-stat-num');
  if (statNumbers.length && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => countObserver.observe(el));
  }

  function animateCounter(el) {
    const raw = el.textContent.trim();
    const numMatch = raw.match(/[\d.]+/);
    if (!numMatch) return;
    const target = parseFloat(numMatch[0]);
    const suffix = raw.replace(numMatch[0], '');
    const prefix = raw.slice(0, raw.indexOf(numMatch[0]));
    const duration = 1400;
    const start = performance.now();
    const isDecimal = target % 1 !== 0;

    function update(time) {
      const elapsed = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const current = isDecimal ? (target * eased).toFixed(1) : Math.round(target * eased);
      el.textContent = prefix + current + suffix;
      if (elapsed < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

})();
