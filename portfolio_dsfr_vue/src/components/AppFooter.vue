<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <footer class="fr-footer" role="contentinfo" id="footer">
    <div class="fr-container">
      <div class="fr-footer__body">
        <div class="fr-footer__brand fr-enlarge-link">
          <a href="#home" title="Retour à l'accueil" class="fr-footer__brand-link" aria-label="Juliette Mouillac — Retour à l'accueil">
            <img :src="`${base}images/logo_repu_mouillac.svg`" alt="Logo du DSFR" class="fr-logo" />
          </a>
        </div>

        <div class="fr-footer__content">
          <ul class="fr-footer__content-list">
            <li class="fr-footer__content-item">
              <a class="fr-footer__content-link" href="mailto:mouillacjuliette@gmail.com">
                mouillacjuliette@gmail.com
              </a>
            </li>
            <li class="fr-footer__content-item">
              <a class="fr-footer__content-link" href="https://www.linkedin.com/in/juliette-mouillac/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/juliette-mouillac/
              </a>
            </li>
            <li class="fr-footer__content-item">
              <a class="fr-footer__content-link" href="https://github.com/juli-bm" target="_blank" rel="noopener noreferrer">
                github.com/juli-bm
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="fr-footer__bottom">
        <ul class="fr-footer__bottom-list">
          <li class="fr-footer__bottom-item">
            <a class="fr-footer__bottom-link" href="#">Accessibilité : partiellement conforme</a>
          </li>
        </ul>
        <div class="fr-footer__bottom-copy">
          <p>© 2026 Juliette Mouillac</p>
        </div>
      </div>
    </div>
  </footer>
</template>
