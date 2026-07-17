<script setup>
defineProps({
  project: { type: Object, required: true },
})
defineEmits(['open'])

const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="fr-col-12 fr-col-sm-6 fr-col-md-4">
    <div
      class="fr-card fr-enlarge-link fr-card--no-arrow js-project-card"
      role="button"
      tabindex="0"
      @click="$emit('open', project)"
      @keyup.enter="$emit('open', project)"
      @keyup.space.prevent="$emit('open', project)"
    >
      <div class="fr-card__body">
        <div class="fr-card__content">
          <h3 class="fr-card__title">
            <span :aria-label="`Voir ${project.title}`">{{ project.title }}</span>
          </h3>
          <p class="fr-card__desc">{{ project.shortDesc }}</p>
        </div>
        <div class="fr-card__footer">
          <div class="card-tags-row">
            <span v-for="tag in project.tags" :key="tag" class="fr-tag fr-tag--sm">{{ tag }}</span>
          </div>
        </div>
      </div>
      <div class="fr-card__header">
        <div class="fr-card__img-wrap">
          <span class="fr-badge card-img-badge">{{ project.badge }}</span>
          <img :src="`${base}${project.cardImg}`" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>
