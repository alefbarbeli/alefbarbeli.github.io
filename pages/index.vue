<template>
  <div id="started" class="section started">
    <div class="h-title glitch-effect" data-text="Alef Barbeli"><span>Alef Barbeli</span></div>
    <Type :items="items"/>
    <a href="#about" class="mouse_btn" aria-label="Scroll down">
      <span class="ion ion-mouse"></span>
    </a>
  </div>

  <SectionAbout id="about" />

  <SectionResume />

  <SectionSkills />

  <SectionServices />
</template>

<script setup>

const items = ref([
  'São Paulo/ SP - Brasil',
  'Desenvolvedor Front-End',
  'Especialista e-commerce',
  'Vue, Angular, React',
  'HTML5, CSS3, ES6, API Rest',
])
</script>
