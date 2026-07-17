<script setup>
defineProps({
  project: { type: Object, required: true },
})
defineEmits(['open'])
</script>

<template>
  <div
    class="project-card"
    role="button"
    tabindex="0"
    @click="$emit('open', project)"
    @keyup.enter="$emit('open', project)"
  >
    <span class="project-num">{{ project.num }}</span>
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-desc">{{ project.shortDesc }}</p>
    <div class="project-tags">
      <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
    </div>
  </div>
</template>
