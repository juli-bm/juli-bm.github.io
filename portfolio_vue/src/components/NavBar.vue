<script setup>
defineProps({
  dark: { type: Boolean, required: true },
})
defineEmits(['toggle-theme'])
</script>

<template>
  <nav>
    <ul>
      <li><a href="#home">Accueil</a></li>
      <li class="sep">✿</li>
      <li><a href="#projects">Projets</a></li>
      <li class="sep">✿</li>
      <li><a href="#about">À propos</a></li>
    </ul>
    <button
      id="theme-toggle"
      :aria-label="dark ? 'Passer en thème clair' : 'Passer en thème sombre'"
      @click="$emit('toggle-theme')"
    >
      {{ dark ? '☀️' : '🌙' }}
    </button>
  </nav>
</template>
