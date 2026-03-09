<template>
  <header>
    <div class="head-top">
      <a :aria-label="$t('ui.toggleMenu')" class="menu-btn" href="#">
        <span></span>
      </a>
      <div class="top-menu">
        <ul>
          <li>
            <NuxtLink class="lnk" :to="localePath('/')">Alef</NuxtLink>
          </li>
          <li>
            <NuxtLink class="lnk" :to="localePath('/portfolio')">{{ $t('nav.portfolio') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="lnk" :to="localePath('/contato')">{{ $t('nav.contact') }}</NuxtLink>
          </li>
          <li class="lang-item">
            <LanguageSwitcher />
          </li>
          <li>
            <a class="btn" target="_blank" rel="noopener noreferrer" :href="resumeUrl">{{ $t('about.downloadCV') }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>

</template>
<script lang="ts" setup>
const localePath = useLocalePath();
const withBaseAsset = useBaseAsset();
const resumeUrl = computed(() => withBaseAsset('/resume-en.pdf'));
</script>
