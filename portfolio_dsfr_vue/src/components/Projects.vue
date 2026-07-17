<script setup>
import { ref } from 'vue'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const activeProject = ref(null)
const modalOpen = ref(false)

function openProject(project) {
  activeProject.value = project
  modalOpen.value = true
}

function closeProject() {
  modalOpen.value = false
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="fr-container">
      <div class="section-header">
        <span class="section-num">01.</span>
        <h2 class="fr-h2">Projets</h2>
      </div>

      <div class="fr-grid-row fr-grid-row--gutters">
        <ProjectCard
          v-for="project in projects"
          :key="project.num"
          :project="project"
          @open="openProject"
        />
      </div>
    </div>
  </section>

  <ProjectModal :open="modalOpen" :project="activeProject" @close="closeProject" />
</template>
