<template>
    <div class="af-contato">
        <!-- Started -->
        <div class="section started">
          <div class="h-title glitch-effect" :data-text="$t('contact.title')">{{ $t('contact.title') }}</div>
          <div class="h-subtitle">
            <p><NuxtLink :to="localePath('/')">{{ $t('portfolio.breadcrumbHome') }}</NuxtLink> / <NuxtLink :to="localePath('/contato')">{{ $t('contact.title') }}</NuxtLink></p>
          </div>
          <span class="typed-bread"></span>
          <a href="#contact" class="mouse_btn" :aria-label="$t('ui.scrollDown')">
            <Icon class="ion" name="lucide:mouse" />
          </a>
        </div>


        <SectionContact id="contact" />
    </div>
</template>
<script setup lang="ts">
const localePath = useLocalePath();
</script>
