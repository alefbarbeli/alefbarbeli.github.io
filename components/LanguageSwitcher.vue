<template>
  <img
    v-for="loc in locales"
    :key="loc.code"
    @click="switchLocale(loc.code)"
    :alt="loc.name"
    class="flag"
    :class="{ hidden: loc.code === locale }"
    :src="`/${loc.code}.svg`"
    width="30"
    height="20"
  />
</template>

<script setup>
const {setLocale, locales, locale} = useI18n()

function switchLocale(lang) {
  setLocale(lang)
}
</script>

<style scoped>
.flag {
  cursor: pointer;
}
</style>
