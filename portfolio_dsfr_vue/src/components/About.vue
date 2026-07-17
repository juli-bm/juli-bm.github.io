<script setup>
const skills = [
  'Figma', 'HTML', 'CSS/SCSS', 'JavaScript', 'Vue.js', 'PHP', 'TWIG',
  'Visual Studio Code', 'GitHub', 'WordPress', 'Symfony', 'Docker',
  'RGAA 4.1.2', 'DSFR',
]

const base = import.meta.env.BASE_URL
</script>

<template>
  <section id="about" class="about-section">
    <div class="fr-container">
      <div class="section-header">
        <span class="section-num">02.</span>
        <h2 class="fr-h2">À Propos</h2>
      </div>

      <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-12 fr-col-md-7">
          <p>
            Étudiante en master Web éditorial et stratégie UX, je m'intéresse à la conception
            d'expériences numériques accessibles, utiles et adaptées aux besoins des
            utilisateurs.
          </p>
          <p>
            Mon intérêt pour le numérique s'accompagne d'une curiosité plus large pour les
            domaines créatifs. Le design, les arts, l'architecture et les jeux vidéo constituent
            autant de sources d'inspiration qui nourrissent ma pratique de l'UX et de l'UI
            design.
          </p>
          <p>
            À travers mes projets, je cherche à concilier analyse des besoins, accessibilité et
            qualité de l'expérience utilisateur afin de concevoir des interfaces à la fois
            fonctionnelles et agréables à utiliser.
          </p>
          <div class="fr-btns-group fr-btns-group--inline about-cta-group">
            <a href="#projects" class="fr-btn">Mes Projets</a>
            <a :href="`${base}pdf/cv_juliette_mouillac.pdf`" class="fr-btn fr-btn--secondary" target="_blank" rel="noopener">Mon CV</a>
          </div>
        </div>

        <div class="fr-col-12 fr-col-md-5">
          <div class="about-right-inner">
            <img :src="`${base}images/juli_bg.webp`" alt="Photo de Juliette Mouillac" class="about-photo" />
            <div>
              <p class="skills-label">Compétences et outils</p>
              <div class="skills-tags">
                <span v-for="skill in skills" :key="skill" class="fr-tag fr-tag--sm">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
