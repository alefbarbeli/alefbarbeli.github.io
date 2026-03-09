<template>
  <div class="portfolio">
    <div class="section started">
      <div class="h-title glitch-effect" :data-text="$t('portfolio.title')">{{ $t('portfolio.title') }}</div>
      <div class="h-subtitle">
        <p><NuxtLink to="/">{{ $t('portfolio.breadcrumbHome') }}</NuxtLink> / <NuxtLink to="/portfolio">{{ $t('portfolio.title') }}</NuxtLink></p>
      </div>
      <span class="typed-bread"></span>
      <a href="#works" class="mouse_btn" aria-label="Scroll down">
        <span class="ion ion-mouse"></span>
      </a>
    </div>

    <SectionWorks id="works" />
  </div>
</template>
