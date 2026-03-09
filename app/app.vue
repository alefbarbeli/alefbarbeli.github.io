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

    <SpeedInsights />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
const withBaseAsset = useBaseAsset();

useSeoMeta({
  title: 'Alef Barbeli, Front-end Developer',
  ogTitle: 'Alef Barbeli, Front-end Developer',
  description: 'Portfolio and Resume of Alef Barbeli, Front-end Developer',
  ogDescription: 'Portfolio and Resume of Alef Barbeli, Front-end Developer',
  ogImage: withBaseAsset('/profile.jpg'),
  twitterCard: 'summary_large_image',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
})
</script>

<style>
.wrapper {
  overflow: auto;
  position: fixed;
  z-index: 4;
  background-color: #3e3e3e;
  top: 1rem;
  left: 1rem;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scroll-behavior: smooth;
}

.container {
  position: relative;
  overflow: hidden;
  background: #ffffff;
  margin: 1rem;
  height: calc(100vh - 2rem);
  width: calc(100vw - 2rem);
  z-index: 10;
}

.container:before {
  content: "";
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 3;
  top: 0;
  left: 0;

  background: #12c2e9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(-45deg, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(-45deg, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-size: 400% 400%;
  -webkit-animation: Gradient 7s ease infinite;
  -moz-animation: Gradient 7s ease infinite;
  animation: Gradient 7s ease infinite;
}

@media (min-width: 768px) {
  .container {
    margin: 2rem;
    height: calc(100vh - 4rem);
    width: calc(100vw - 4rem);
  }
  .wrapper {
    top: 2rem;
    left: 2rem;
    width: calc(100% - 4rem);
    height: calc(100% - 4rem);
  }
}

@media (min-width: 1024px) {
  .container {
    margin: 3rem;
    height: calc(100vh - 6rem);
    width: calc(100vw - 6rem);
  }
  .wrapper {
    top: 3rem;
    left: 3rem;
    width: calc(100% - 6rem);
    height: calc(100% - 6rem);
  }
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}

@keyframes Gradient {
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}
</style>
