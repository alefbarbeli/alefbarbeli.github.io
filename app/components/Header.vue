<template>
  <header>
    <div class="head-top">
      <a aria-label="Toggle menu" class="menu-btn" href="#">
        <span></span>
      </a>
      <div class="top-menu">
        <ul>
          <li>
            <NuxtLink class="lnk" :to="localePath('/')">Alef</NuxtLink>
          </li>
          <li>
            <NuxtLink class="lnk" :to="localePath('/portfolio')">Portfolio</NuxtLink>
          </li>
          <li>
            <NuxtLink class="lnk" :to="localePath('/contato')">Contato</NuxtLink>
          </li>
          <li class="lang-item">
            <LanguageSwitcher />
          </li>
          <li>
            <NuxtLink class="btn" external target="_blank" to="/resume-en.pdf">Download CV</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>

</template>
<script lang="ts" setup>
const localePath = useLocalePath();
</script>
