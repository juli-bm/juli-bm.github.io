(function () {
  'use strict';

  /* Theme toggle: DSFR reads document.documentElement[data-fr-theme] */
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    var root = document.documentElement;
    var stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      root.setAttribute('data-fr-theme', stored);
    }
    updateThemeIcon();

    themeToggle.addEventListener('click', function () {
      var current = root.getAttribute('data-fr-theme');
      var isDark = current
        ? current === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
      var next = isDark ? 'light' : 'dark';
      root.setAttribute('data-fr-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    var isDark = document.documentElement.getAttribute('data-fr-theme') === 'dark';
    themeToggle.classList.toggle('fr-icon-sun-line', !isDark);
    themeToggle.classList.toggle('fr-icon-moon-line', isDark);
  }

  /* Mobile burger menu: same open/close/icon-swap pattern as the creative portfolio */
  var mobileNavToggle = document.getElementById('mobile-nav-toggle');
  if (mobileNavToggle) {
    var closeMobileNav = function () {
      document.body.classList.remove('mobile-nav-open');
      mobileNavToggle.setAttribute('aria-expanded', 'false');
      mobileNavToggle.classList.add('fr-icon-menu-fill');
      mobileNavToggle.classList.remove('fr-icon-close-line');
      document.body.style.overflow = '';
    };

    mobileNavToggle.addEventListener('click', function () {
      var isOpen = document.body.classList.toggle('mobile-nav-open');
      mobileNavToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileNavToggle.classList.toggle('fr-icon-menu-fill', !isOpen);
      mobileNavToggle.classList.toggle('fr-icon-close-line', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.querySelectorAll('.fr-header__menu--full-width .fr-nav__link').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });
  }

  /* Project cards open a shared detail modal populated from data-* attributes.
     DSFR renders .fr-modal via its own "disclosure" controller (aria-controls),
     not the native <dialog> show/close API, so we drive it through the hidden
     trigger button rather than calling showModal()/close() directly. */
  var modalTrigger = document.getElementById('project-modal-trigger');
  var modalNum = document.getElementById('modal-num');
  var modalTitle = document.getElementById('modal-title');
  var modalImg = document.getElementById('modal-img');
  var modalDesc = document.getElementById('modal-desc');
  var modalTags = document.getElementById('modal-tags');
  var modalLink = document.getElementById('modal-link');

  function openProjectModal(card) {
    modalNum.textContent = card.dataset.num ? card.dataset.num + '.' : '';
    modalTitle.textContent = card.dataset.title || '';
    modalDesc.textContent = card.dataset.desc || '';

    if (card.dataset.img) {
      modalImg.src = card.dataset.img;
      modalImg.alt = card.dataset.title || '';
      modalImg.style.display = '';
    } else {
      modalImg.style.display = 'none';
    }

    modalTags.innerHTML = '';
    (card.dataset.tags || '').split(',').filter(Boolean).forEach(function (tag) {
      var span = document.createElement('span');
      span.className = 'fr-tag fr-tag--sm';
      span.textContent = tag.trim();
      modalTags.appendChild(span);
    });

    if (card.dataset.link) {
      modalLink.href = card.dataset.link;
      modalLink.textContent = card.dataset.linkLabel || 'Visiter le site';
      modalLink.style.display = '';
    } else {
      modalLink.style.display = 'none';
    }

    modalTrigger.click();
  }

  document.querySelectorAll('.js-project-card').forEach(function (card) {
    card.addEventListener('click', function () {
      openProjectModal(card);
    });
    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProjectModal(card);
      }
    });
  });
})();
