<script setup lang="ts">
const birthDate = new Date('1994-01-11');
const currentAge = computed(() => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
});
</script>

<template>
  <div class="section about">
    <div class="content">
      <div class="title">
        <div class="title_inner">{{ $t('about.title') }}</div>
      </div>
      <div class="image">
        <NuxtImg alt="" width="100" height="100" src="/profile.jpg" />
      </div>
      <div class="desc">
        <p v-for="paragraph in $tm('about.description')" :key="paragraph">
          {{ $rt(paragraph) }}
        </p>
        <div class="info-list">
          <ul>
            <li>
              <strong>{{ $t('about.info.name') }}:</strong>
              {{ $t('about.info.valueName') }}
            </li>
            <li>
              <strong>{{ $t('about.info.age') }}:</strong>
              {{ currentAge }} {{ $t('about.info.valueAge') }}
            </li>
            <li>
              <strong>{{ $t('about.info.job') }}:</strong>
              {{ $t('about.info.valueJob') }}
            </li>
            <li>
              <strong>{{ $t('about.info.location') }}:</strong>
              {{ $t('about.info.valueLocation') }}
            </li>
            <li>
              <strong>{{ $t('about.info.email') }}:</strong>
              {{ $t('about.info.valueEmail') }}
            </li>
          </ul>
        </div>
        <div class="bts">
          <NuxtLink class="btn fill" external target="_blank" to="/resume-en.pdf">
            {{ $t('about.downloadCV') }}
          </NuxtLink>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
