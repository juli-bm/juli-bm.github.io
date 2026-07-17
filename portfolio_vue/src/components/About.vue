<script setup>
const skills = [
  'Figma', 'HTML', 'CSS/SCSS', 'JavaScript', 'Vue.js', 'PHP',
  'Twig', 'WordPress', 'Symfony', 'Docker', 'GitHub',
]

const stats = [
  { num: '3', desc: 'Projets réels de sites web et applications' },
  { num: '2', desc: 'Audits complets en environnement professionnel' },
  { num: '10+', desc: 'Wireframes et maquettes conçues' },
]

const base = import.meta.env.BASE_URL
</script>

<template>
  <section id="about">
    <div class="about-left">
      <div class="section-header">
        <span class="section-num">02</span>
        <h2 class="section-title">À propos</h2>
      </div>
      <p class="about-text">
        Hello ! Je m'appelle <strong :style="{ color: 'var(--main)' }">Juliette Mouillac</strong>
        — actuellement en dernière année de master web éditorial et stratégie UX, je suis
        passionnée depuis quelques années par le développement web, plus particulièrement par
        le processus de recherches et d'études des besoins utilisateurs.
      </p>
      <p class="about-text">
        Quand je ne crée pas des sites web pour mes études, vous pouvez me trouver en train
        de… créer :) Que ce soit en mode, en arts, en architecture, ou même dans les jeux
        vidéo, la créativité est un pilier dans ma vie depuis 2003.
      </p>
      <div class="about-actions">
        <a href="#projects" class="btn btn-primary">Mes projets</a>
        <a :href="`${base}pdf/cv_juliette_mouillac.pdf`" class="btn btn-outline">Mon CV</a>
      </div>
    </div>

    <div class="about-right">
      <div class="photo-stitch">
        <img :src="`${base}images/juli_bg.jpg`" alt="Photo de Juliette Mouillac" />
      </div>
      <div class="skills-block">
        <p class="skills-label">Compétences et outils</p>
        <div class="skills-list">
          <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
        </div>
      </div>
      <div class="stat-row">
        <div v-for="stat in stats" :key="stat.desc" class="stat-item">
          <p class="stat-num">{{ stat.num }}</p>
          <p class="stat-desc">{{ stat.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
