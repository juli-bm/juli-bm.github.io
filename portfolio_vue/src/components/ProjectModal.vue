<script setup>
defineProps({
  project: { type: Object, required: true },
})
defineEmits(['close'])

const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-card">
      <button class="modal-close" aria-label="Fermer" @click="$emit('close')">✕</button>
      <img :src="`${base}${project.img}`" :alt="`Aperçu du projet ${project.title}`" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.desc }}</p>
      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      </div>
      <div class="about-actions">
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener"
          class="btn btn-primary"
        >{{ project.linkLabel }}</a>
      </div>
    </div>
  </div>
</template>
