<script setup>
const props = defineProps({
  open: { type: Boolean, required: true },
  project: { type: Object, default: null },
})
defineEmits(['close'])

const base = import.meta.env.BASE_URL
</script>

<template>
  <dialog class="fr-modal" :class="{ 'fr-modal--opened': open }" aria-labelledby="modal-title">
    <div class="fr-container fr-container--fluid fr-container-md">
      <div class="fr-grid-row fr-grid-row--center">
        <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
          <div class="fr-modal__body">
            <div class="fr-modal__header">
              <button aria-controls="project-modal" title="Fermer" type="button" class="fr-btn--close fr-btn" @click="$emit('close')">Fermer</button>
            </div>
            <div v-if="project" class="fr-modal__content">
              <p class="fr-text--sm fr-text--mention">{{ project.num }}.</p>
              <h3 id="modal-title" class="fr-modal__title">{{ project.title }}</h3>
              <img
                v-if="project.modalImg"
                :src="`${base}${project.modalImg}`"
                :alt="project.title"
                class="fr-responsive-img"
                style="margin-bottom: 1rem"
              />
              <p style="white-space: pre-line">{{ project.desc }}</p>
              <div class="modal-tags">
                <span v-for="tag in project.tags" :key="tag" class="fr-tag fr-tag--sm">{{ tag }}</span>
              </div>
              <a
                v-if="project.link"
                :href="project.link"
                class="fr-btn"
                target="_blank"
                rel="noopener"
              >{{ project.linkLabel || 'Visiter le site' }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>
