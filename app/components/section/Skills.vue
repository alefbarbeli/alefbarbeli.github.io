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

type SkillsDoc = {
  items?: Record<string, string[]>;
};

const { data: skillsDoc } = await useAsyncData('skills-section', () =>
  queryCollection('sections').where('section', '=', 'skills').first()
);

const skills = computed(() => {
  const doc = skillsDoc.value as SkillsDoc | null;
  if (!doc?.items) {
    return [];
  }

  return doc.items[locale.value] ?? doc.items.br ?? [];
});
</script>
