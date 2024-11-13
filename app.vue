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

<style>
.wrapper {
  overflow: auto;
  position: fixed;
  z-index: 4;
  background-color: #3e3e3e;
  top: 3rem;
  left: 3rem;
  width: calc(100% - 6rem);
  height: calc(100% - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scroll-behavior: smooth;
}

.container {
  position: relative;
  margin: 3rem;
  overflow: hidden;
  background: #ffffff;
  height: calc(100vh - 6rem);
  width: calc(100vw - 6rem);
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

@media (max-width: 840px) {
  .container {
    margin: 15px;
  }
}
</style>
