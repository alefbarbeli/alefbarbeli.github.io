<template>
  <div id="app">

    <!-- Container -->
    <div class="container">
      
      <!-- Wrapper -->
      <div class="wrapper">

        <Header />
        <transition :name="transitionName" mode="out-in">
          <router-view/>
        </transition>
        <Footer />
      
      </div>
      
    </div>
  </div>
</template>


<script>
import Header from '@/components/general/Header.vue'
import Footer from '@/components/general/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      transitionName: 'fade'
    }
  },
  // beforeRouteUpdate (to, from, next) {
    //   const toDepth = to.path.split('/').length
  //   const fromDepth = from.path.split('/').length
  //   this.transitionName = toDepth < fromDepth ? 'fade' : 'fade'
  //   next()
  // }
}
</script>

<style lang="scss">
@import 'src/assets/scss/animate.scss';
@import 'src/assets/scss/glitche-basic.scss';
@import 'src/assets/scss/glitche-layout.scss';
// @import 'src/assets/scss/ionicons.scss';
@import 'src/assets/scss/magnific-popup.scss';
</style>