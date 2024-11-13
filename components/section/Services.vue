<script lang="ts">
import { defineComponent } from 'vue';

interface ServiceItem {
  icon: string;
  name: string;
  description: string;
}

export default defineComponent({
  computed: {
    serviceItems(): ServiceItem[] {
      return this.$tm('services.items') as ServiceItem[];
    }
  }
});
</script>

<template>
  <div id="service" class="section service">
    <div class="content">
      <div class="title">
        <div class="title_inner">{{ $t('services.title') }}</div>
      </div>
      <div class="service-items">
        <div
            class="service-item"
            v-for="(item, index) in serviceItems"
            :key="index"
        >
          <div class="icon">
            <span :class="$rt(item.icon)"></span>
          </div>
          <div class="name">{{ $rt(item.name) }}</div>
          <p>{{ $rt(item.description) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
