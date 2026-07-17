<script setup>
import { ref, watchEffect } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import AppFooter from './components/AppFooter.vue'

const dark = ref(localStorage.getItem('theme') === 'dark')

watchEffect(() => {
  document.documentElement.classList.toggle('dark', dark.value)
  localStorage.setItem('theme', dark.value ? 'dark' : 'light')
})

function toggleTheme() {
  dark.value = !dark.value
}
</script>

<template>
  <NavBar :dark="dark" @toggle-theme="toggleTheme" />
  <Hero />
  <div class="stitch-divider"></div>
  <Projects />
  <div class="stitch-divider"></div>
  <About />
  <div class="stitch-divider"></div>
  <AppFooter />
</template>
