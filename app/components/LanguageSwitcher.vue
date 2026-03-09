<template>
  <div class="language-switcher" aria-label="Language Switcher">
    <template v-for="(loc, index) in locales" :key="loc.code">
      <NuxtLink
        :to="switchLocalePath(loc.code)"
        class="lang-link"
        :class="{ active: loc.code === locale }"
      >
        {{ getLocaleLabel(loc) }}
      </NuxtLink>
      <span v-if="index < locales.length - 1" class="lang-separator">/</span>
    </template>
  </div>
</template>

<script setup lang="ts">
type LocaleOption = {
  code: string;
  language?: string;
  name?: string;
};

const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

function getLocaleLabel(loc: LocaleOption) {
  if (loc.language) {
    return loc.language.split('-')[0].toUpperCase();
  }
  return loc.code.toUpperCase();
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.35rem;
  align-items: center;
}

.lang-link {
  text-transform: uppercase;
  color: #f1f1f1;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.lang-link:hover {
  opacity: 1;
}

.lang-link.active {
  opacity: 1;
  color: #e5495e;
}

.lang-separator {
  opacity: 0.7;
  font-size: 12px;
}
</style>
