<template>
  <div id="started" class="section started">
    <div class="h-title glitch-effect" data-text="Alef Barbeli"><span>Alef Barbeli</span></div>
    <Type :items="items"/>
    <a href="#about" class="mouse_btn" :aria-label="$t('ui.scrollDown')">
      <Icon class="ion" name="lucide:mouse" />
    </a>
  </div>

  <div id="content">
    <div class="content-about">
      <SectionAbout id="about" />
    </div>

    <div class="content-resume">
      <SectionResume />
    </div>

    <div class="content-skills">
      <SectionSkills />
    </div>

    <div class="content-services">
      <SectionServices />
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
    align-items: start;
    grid-template-areas: 
      "about resume"
      "skills resume"
      "services resume";
    padding: 0 4rem;
    gap: 2rem;
  }

  #content .content-about {
    grid-area: about;
  }

  #content .content-resume {
    grid-area: resume;
  }

  #content .content-skills {
    grid-area: skills;
  }

  #content .content-services {
    grid-area: services;
  }

  @media (max-width: 1023px) {
    #content {
      grid-template-columns: 1fr;
      grid-template-areas:
        "about"
        "resume"
        "skills"
        "services";
    }
  }
</style>
