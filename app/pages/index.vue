<template>
  <div id="started" class="section started">
    <div class="h-title glitch-effect" data-text="Alef Barbeli"><span>Alef Barbeli</span></div>
    <Type :items="items"/>
    <a href="#about" class="mouse_btn" :aria-label="$t('ui.scrollDown')">
      <span class="ion ion-mouse"></span>
    </a>
  </div>

  <div id="content">
    <div>
      <SectionAbout id="about" />

      <SectionSkills />

      <SectionServices />
    </div>
    <div>
      <SectionResume />
    </div>

  </div>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n();

const items = computed(() => {
  const raw = tm('home.items') as unknown;
  if (!Array.isArray(raw)) {
    return [];
  }
  return raw.map((item) => rt(item));
});
</script>

<style lang="postcss">
#content {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
