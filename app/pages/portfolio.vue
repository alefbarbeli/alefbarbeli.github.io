<template>
  <div class="portfolio">
    <!-- Started -->
    <div class="section started">
      <div class="h-title glitch-effect" data-text="Portfolio">Portfolio</div>
      <div class="h-subtitle">
        <p><NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="portfolio">Portfolio</NuxtLink></p>
      </div>
      <span class="typed-bread"></span>
      <a href="#works" class="mouse_btn" aria-label="Scroll down">
        <span class="ion ion-mouse"></span>
      </a>
    </div>

    <SectionWorks id="works" />
  </div>
</template>
