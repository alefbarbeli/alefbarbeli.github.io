<template>
  <div class="language-switcher">
    <button
        v-for="loc in locales"
        :key="loc.code"
        @click="switchLocale(loc.code)"
        :class="{ active: loc.code === locale }"
    >
      {{ loc.name }}
    </button>
  </div>
</template>

<script setup>
const { setLocale, locales } = useI18n()

function switchLocale(lang) {
  setLocale(lang)
}
</script>

<style scoped>
.language-switcher button {
  margin-right: 10px;
}
.language-switcher .active {
  font-weight: bold;
}
</style>
