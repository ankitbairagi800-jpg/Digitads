/* ============================================================
   DIGITALADS — thedigitalads.in | main.js
   Fixed hamburger menu + all page JS
   ============================================================ */

(function() {
  'use strict';

  /* ─── NAVBAR SCROLL ─── */
  var navbar = document.getElementById('navbar');
  var scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', function() {
    var scrolled = window.scrollY > 80;
    if (navbar) navbar.classList.toggle('scrolled', scrolled);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('active', scrolled);
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── HAMBURGER + MOBILE NAV ─── */
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('navMenu');

  // Inject close button inside mobile nav if not already there
  if (navMenu && !document.querySelector('.nav-close')) {
    var closeBtn = document.createElement('button');
    closeBtn.className = 'nav-close';
    closeBtn.setAttribute('aria-label', 'Close menu');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    navMenu.appendChild(closeBtn);

    closeBtn.addEventListener('click', closeMobileNav);
  }

  function openMobileNav() {
    if (!navMenu || !hamburger) return;
    navMenu.classList.add('active');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  function closeMobileNav() {
    if (!navMenu || !hamburger) return;
    navMenu.classList.remove('active');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      if (navMenu && navMenu.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  // Close nav when a link is clicked
  if (navMenu) {
    navMenu.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        closeMobileNav();
      });
    });
  }

  // Close nav when clicking outside (on overlay)
  document.addEventListener('click', function(e) {
    if (navMenu && navMenu.classList.contains('active')) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMobileNav();
      }
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMobileNav();
  });

  /* ─── ACTIVE NAV LINK (based on current page) ─── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav-link[data-page]');
  navLinks.forEach(function(link) {
    if (link.getAttribute('data-page') === currentPage ||
        (currentPage === '' && link.getAttribute('data-page') === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ─── FAQ ACCORDION ─── */
  document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function() {
      var item = this.parentElement;
      var isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item.open').forEach(function(openItem) {
        if (openItem !== item) openItem.classList.remove('open');
      });

      // Toggle current
      item.classList.toggle('open', !isOpen);
    });
  });

  /* ─── CONTACT FORM (homepage) ─── */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = this.querySelector('[type="submit"]');
      if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
      }
      // Simulate send (replace with Formspree fetch in production)
      setTimeout(function() {
        if (contactForm) contactForm.style.display = 'none';
        var success = document.getElementById('formSuccess');
        if (success) success.classList.add('active');
      }, 1200);
    });
  }

  /* ─── CONTACT PAGE FORM (contact.html) ─── */
  var cpForm = document.getElementById('contactPageForm');
  var cpSuccess = document.getElementById('cpFormSuccess');

  if (cpForm && cpSuccess) {

    function validateField(field) {
      var group = field.closest('.form-group');
      var valid = field.checkValidity() && field.value.trim() !== '';
      if (group) group.classList.toggle('has-error', !valid);
      field.classList.toggle('error', !valid);
      return valid;
    }

    cpForm.querySelectorAll('input[required], select[required]').forEach(function(field) {
      field.addEventListener('blur', function() { validateField(field); });
      field.addEventListener('input', function() {
        if (field.closest('.form-group') && field.closest('.form-group').classList.contains('has-error')) {
          validateField(field);
        }
      });
    });

    cpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var allValid = true;
      cpForm.querySelectorAll('input[required], select[required]').forEach(function(field) {
        if (!validateField(field)) allValid = false;
      });
      if (!allValid) return;

      var btn = cpForm.querySelector('[type="submit"]');
      if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
      }

      setTimeout(function() {
        cpForm.style.display = 'none';
        cpSuccess.style.display = 'block';
        cpSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 1200);
    });
  }

  /* ─── BLOG FILTER BUTTONS ─── */
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
      var cat = this.getAttribute('data-cat');
      document.querySelectorAll('.blog-card').forEach(function(card) {
        if (cat === 'all' || card.getAttribute('data-cat') === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ─── FAQ CATEGORY FILTER ─── */
  document.querySelectorAll('.faq-cat-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.faq-cat-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
      var cat = this.getAttribute('data-cat');
      document.querySelectorAll('.faq-group').forEach(function(group) {
        if (cat === 'all' || group.getAttribute('data-cat') === cat) {
          group.style.display = '';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  /* ─── SCROLL REVEAL (lightweight) ─── */
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .why-card, .testimonial-card, .industry-card, .case-card, .blog-card').forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      revealObserver.observe(el);
    });
  }

})();
