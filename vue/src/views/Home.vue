<template>
  <div class="section started">
    <div class="centrize full-width">
      <div class="vertical-center">
        <div class="started-content">

          <div class="h-title glitch-effect" data-text="Alef Barbeli"><span>Alef Barbeli</span></div>
          <Type :items="items"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Type from '@/components/general/Type.vue'

export default {
  components: {
    Type
  },
  data() {
    return {
      items: [
        'São Paulo/ SP - Brasil',
        'Desenvolvedor Front-End',
        'Especialista e-commerce',
        'Vue, Angular, React',
        'HTML5, CSS3, ES6, API Rest',
      ]
    }
  }
}
</script>