<script setup>
import { ref } from 'vue'
import ThemeModal from './ThemeModal.vue'

const theme = defineModel('theme', { type: String, required: true })
const mobileNavOpen = defineModel('mobileNavOpen', { type: Boolean, required: true })

const translateOpen = ref(false)
const themeModalOpen = ref(false)

const base = import.meta.env.BASE_URL

function closeMobileNav() {
  mobileNavOpen.value = false
}

function toggleMobileNav() {
  mobileNavOpen.value = !mobileNavOpen.value
}
</script>

<template>
  <header role="banner" class="fr-header">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">

          <div class="fr-header__brand fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <a href="#home" title="Juliette Mouillac — Retour à l'accueil" aria-label="Juliette Mouillac — Retour à l'accueil">
                  <img :src="`${base}images/logo_repu_mouillac.svg`" alt="Logo du DSFR" class="fr-logo" />
                </a>
              </div>
            </div>
          </div>

          <div class="fr-header__tools">
            <button
              type="button"
              id="mobile-nav-toggle"
              class="fr-btn fr-btn--tertiary-no-outline mobile-nav-toggle"
              :class="mobileNavOpen ? 'fr-icon-close-line' : 'fr-icon-menu-fill'"
              :aria-expanded="mobileNavOpen"
              aria-controls="mobile-nav-panel"
              aria-label="Ouvrir le menu"
              title="Menu"
              @click="toggleMobileNav"
            ></button>
            <div class="fr-header__tools-links" id="mobile-nav-panel">
              <ul class="fr-btns-group fr-btns-group--inline">
                <li>
                  <button
                    class="fr-btn fr-btn--tertiary-no-outline fr-icon-theme-fill"
                    type="button"
                    aria-label="Paramètres d'affichage"
                    title="Paramètres d'affichage"
                    @click="themeModalOpen = true"
                  ></button>
                </li>
                <li>
                  <div class="fr-translate fr-nav">
                    <div class="fr-nav__item">
                      <button
                        class="fr-translate__btn fr-btn fr-btn--tertiary"
                        :aria-expanded="translateOpen"
                        title="Sélectionner une langue"
                        type="button"
                        @click="translateOpen = !translateOpen"
                      >FR<span class="fr-hidden-lg">&nbsp;- Français</span></button>
                      <div class="fr-collapse fr-translate__menu fr-menu" :class="{ 'fr-collapse--expanded': translateOpen }">
                        <ul class="fr-menu__list">
                          <li><a class="fr-translate__language fr-nav__link" hreflang="fr" lang="fr" href="#" aria-current="true">FR - Français</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    class="fr-btn fr-btn--tertiary fr-btn--icon-left fr-icon-palette-line"
                    id="creative-toggle"
                    href="https://juli-bm.github.io/"
                    aria-label="Voir la version créative de mon portfolio"
                    title="Version créative"
                  >Créative</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="fr-header__menu fr-header__menu--full-width">
      <div class="fr-container">
        <nav class="fr-nav" role="navigation" aria-label="Menu principal">
          <ul class="fr-nav__list">
            <li class="fr-nav__item"><a class="fr-nav__link" href="#home" aria-current="page" @click="closeMobileNav">Accueil</a></li>
            <li class="fr-nav__item"><a class="fr-nav__link" href="#projects" @click="closeMobileNav">Projets</a></li>
            <li class="fr-nav__item"><a class="fr-nav__link" href="#about" @click="closeMobileNav">À Propos</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <ThemeModal
    :open="themeModalOpen"
    v-model="theme"
    @close="themeModalOpen = false"
  />
</template>
