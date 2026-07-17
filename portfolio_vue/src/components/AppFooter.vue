<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <p class="footer-name">Juliette Mouillac</p>
    <div class="availability">Disponible</div>
    <div class="contact-links">
      <a href="mailto:mouillacjuliette@gmail.com">
        <span class="link-label">Email</span>mouillacjuliette@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/juliette-mouillac/" target="_blank" rel="noopener">
        <span class="link-label">LinkedIn</span>linkedin.com/in/juliette-mouillac/
      </a>
      <a href="https://github.com/juli-bm" target="_blank" rel="noopener">
        <span class="link-label">GitHub</span>github.com/juli-bm
      </a>
    </div>
    <p>© {{ year }} Juliette Mouillac</p>
  </footer>
</template>
