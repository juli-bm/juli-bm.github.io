<script setup>
import { ref } from 'vue'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const activeProject = ref(null)
</script>

<template>
  <section id="projects">
    <div class="section-header">
      <span class="section-num">01</span>
      <h2 class="section-title">Projets</h2>
    </div>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.num"
        :project="project"
        @open="activeProject = $event"
      />
    </div>
  </section>

  <ProjectModal
    v-if="activeProject"
    :project="activeProject"
    @close="activeProject = null"
  />
</template>
