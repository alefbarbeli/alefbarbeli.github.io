<script setup lang="ts">
const { tm } = useI18n()

const experiences = computed(() => {
  return tm('resume.experiences') as Array<{
    name?: string;
    date?: string;
    location?: string;
    description?: string;
  }>;
});
</script>

<template>
  <div id="resume" class="section resume">
    <div class="content">
      <div class="title">
        <div class="title_inner">{{ $t('resume.sections.experience') }}</div>
      </div>
      <div class="resume-items">
        <div
            v-for="(item, index) in experiences"
            :key="index"
            :class="{ active: index === 0 }"
            class="resume-item"
        >
          <div v-if="item.name" class="name">
            {{ $rt(item.name) }}
          </div>
          <div v-if="item.date" class="date">
            <span class="ion ion-calendar"></span>
            {{ $rt(item.date) }}
          </div>
          <div v-if="item.location" class="location">
            <span class="ion ion-location"></span>
            {{ $rt(item.location) }}
          </div>
          <p v-if="item.description">
            {{ $rt(item.description) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
