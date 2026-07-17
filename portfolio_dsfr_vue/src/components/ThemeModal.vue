<script setup>
const props = defineProps({
  open: { type: Boolean, required: true },
  modelValue: { type: String, required: true }, // 'light' | 'dark' | 'system'
})
const emit = defineEmits(['close', 'update:modelValue'])

const options = [
  { value: 'light', label: 'Thème clair' },
  { value: 'dark', label: 'Thème sombre' },
  { value: 'system', label: 'Système', hint: 'Utilise les paramètres système' },
]
</script>

<template>
  <dialog class="fr-modal" :class="{ 'fr-modal--opened': open }" aria-labelledby="fr-theme-modal-title">
    <div class="fr-container fr-container--fluid fr-container-md">
      <div class="fr-grid-row fr-grid-row--center">
        <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
          <div class="fr-modal__body">
            <div class="fr-modal__header">
              <button title="Fermer" type="button" class="fr-btn--close fr-btn" @click="$emit('close')">Fermer</button>
            </div>
            <div class="fr-modal__content">
              <h1 id="fr-theme-modal-title" class="fr-modal__title">Paramètres d'affichage</h1>
              <div class="fr-display">
                <fieldset class="fr-fieldset">
                  <legend class="fr-fieldset__legend--regular fr-fieldset__legend">
                    Choisissez un thème pour personnaliser l'apparence du site.
                  </legend>
                  <div v-for="opt in options" :key="opt.value" class="fr-fieldset__element">
                    <div class="fr-radio-group">
                      <input
                        :id="`fr-radios-theme-${opt.value}`"
                        type="radio"
                        name="fr-radios-theme"
                        :value="opt.value"
                        :checked="modelValue === opt.value"
                        @change="$emit('update:modelValue', opt.value)"
                      />
                      <label class="fr-label" :for="`fr-radios-theme-${opt.value}`">
                        {{ opt.label }}
                        <span v-if="opt.hint" class="fr-hint-text">{{ opt.hint }}</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>
