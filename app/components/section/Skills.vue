<template>
  <div id="skills" class="section skills">
    <div class="content">
      <div class="title">
        <div class="title_inner">Skills</div>
      </div>
      <div class="skills">
        <ul>
          <li v-for="(skill, index) in skills" :key="`${skill}-${index}`">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const { data: skills } = await useFetch<string[]>('/api/sections/skills', {
  query: computed(() => ({ locale: locale.value })),
  watch: [locale],
  default: () => []
});
</script>
