<template>
  <div id="app">

    <!-- Container -->
    <div class="container">

      <!-- Wrapper -->
      <div class="wrapper">

        <Header />
        <!-- <transition :name="transitionName" mode="out-in"> -->
          <NuxtPage />
        <!-- </transition> -->
        <Footer />

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Alef Barbeli, Front-end Developer',
  ogTitle: 'Alef Barbeli, Front-end Developer',
  description: 'Portfolio and Resume of Alef Barbeli, Front-end Developer',
  ogDescription: 'Portfolio and Resume of Alef Barbeli, Front-end Developer',
  ogImage: '/profile.jpg',
  twitterCard: 'summary_large_image',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
})
</script>

<style lang="scss">
@import 'assets/scss/animate.scss';
@import 'assets/scss/glitche-basic.scss';
@import 'assets/scss/glitche-layout.scss';
@import 'assets/scss/ionicons.scss';
@import 'assets/scss/magnific-popup.scss';
</style>
