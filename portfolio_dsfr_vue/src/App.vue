<script setup>
import { ref, computed, watchEffect, onMounted, onUnmounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import AppFooter from './components/AppFooter.vue'

const theme = ref(localStorage.getItem('dsfr-theme') || 'system')
const mobileNavOpen = ref(false)

const systemPrefersDark = ref(
  window.matchMedia('(prefers-color-scheme: dark)').matches
)

const appliedTheme = computed(() =>
  theme.value === 'system' ? (systemPrefersDark.value ? 'dark' : 'light') : theme.value
)

watchEffect(() => {
  document.documentElement.setAttribute('data-fr-theme', appliedTheme.value)
  document.documentElement.setAttribute('data-fr-scheme', theme.value)
  localStorage.setItem('dsfr-theme', theme.value)
})

watchEffect(() => {
  document.body.classList.toggle('mobile-nav-open', mobileNavOpen.value)
  document.body.style.overflow = mobileNavOpen.value ? 'hidden' : ''
})

let mql
function onSchemeChange(event) {
  systemPrefersDark.value = event.matches
}

onMounted(() => {
  mql = window.matchMedia('(prefers-color-scheme: dark)')
  mql.addEventListener('change', onSchemeChange)
})

onUnmounted(() => {
  mql?.removeEventListener('change', onSchemeChange)
})
</script>

<template>
  <AppHeader v-model:theme="theme" v-model:mobileNavOpen="mobileNavOpen" />
  <main>
    <Hero />
    <Projects />
    <About />
  </main>
  <AppFooter />
</template>
