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

<style lang="scss">
@import 'assets/scss/animate.scss';
@import 'assets/scss/glitche-basic.scss';
@import 'assets/scss/glitche-layout.scss';
@import 'assets/scss/ionicons.scss';
@import 'assets/scss/magnific-popup.scss';
</style>