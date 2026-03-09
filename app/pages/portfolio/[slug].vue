<script setup lang="ts">
import {
  resolveLocalizedPortfolioDocBySlug
} from '~/utils/portfolio-content';

const route = useRoute();
const { locale, locales, defaultLocale } = useI18n();
const localePath = useLocalePath();

const slug = computed(() => String(route.params.slug || ''));

const { data: contentDoc } = await useAsyncData(
  () => `portfolio-doc-${slug.value}-${locale.value}`,
  async () => {
    const docs = await queryCollection('portfolio').all();
    return resolveLocalizedPortfolioDocBySlug(docs as Record<string, any>[], slug.value, {
      locale: String(locale.value),
      defaultLocale: String(defaultLocale),
      locales: locales.value as any[]
    });
  }
);

if (!contentDoc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Portfolio item not found', fatal: true });
}

useSeoMeta({
  title: () => `${contentDoc.value?.title || 'Portfolio'} - Alef Barbeli`,
  description: () => String(contentDoc.value?.description || ''),
  ogImage: () => String(contentDoc.value?.meta?.image || contentDoc.value?.image || '/profile.jpg')
});

const image = computed(() => contentDoc.value?.image || contentDoc.value?.meta?.image || '/profile.jpg');
const category = computed(() => contentDoc.value?.category || contentDoc.value?.meta?.category);
const stack = computed(() => contentDoc.value?.stack || contentDoc.value?.meta?.stack);
const tags = computed(() => contentDoc.value?.tags || contentDoc.value?.meta?.tags || []);
</script>

<template>
  <article class="portfolio-post">
    <div class="section started">
      <div class="h-title">{{ contentDoc?.title }}</div>
      <div class="h-subtitle">
        <p>
          <NuxtLink :to="localePath('/')">{{ $t('portfolio.breadcrumbHome') }}</NuxtLink>
           / <NuxtLink :to="localePath('/portfolio')">{{ $t('portfolio.title') }}</NuxtLink>
        </p>
      </div>
      <span class="typed-bread"></span>
      <a href="#contact" class="mouse_btn" aria-label="Scroll down">
        <span class="ion ion-mouse"></span>
      </a>
    </div>

    <div class="section">
      <div class="content">
        <div class="back-link">
          <NuxtLink :to="localePath('/portfolio')">← {{ $t('portfolio.title') }}</NuxtLink>
        </div>

        <div class="post-header">
          <p v-if="category" class="post-category">{{ category }}</p>
          <h1>{{ contentDoc?.title }}</h1>
          <p class="post-description">{{ contentDoc?.description }}</p>

          <div class="post-meta">
            <span v-if="stack">{{ stack }}</span>
          </div>

          <div v-if="tags.length" class="post-tags">
            <span v-for="tag in tags" :key="tag">{{ tag }}</span>
          </div>
        </div>

        <div class="post-cover">
          <img :src="image" :alt="contentDoc?.title">
        </div>

        <div class="post-body">
          <ContentRenderer v-if="contentDoc?.body" :value="contentDoc" />
          <p v-else>
            {{ contentDoc?.description }}
          </p>
        </div>
      </div>
    </div>

  </article>
</template>

<style scoped>
.portfolio-post {
  padding-bottom: 2rem;
}

.back-link {
  margin-bottom: 1rem;
}

.back-link a {
  color: #f1f1f1;
  text-decoration: none;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.post-header h1 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
}

.post-category {
  margin: 0 0 0.6rem;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #f1f1f1;
  display: inline-block;
  box-shadow: inset 0 -8px 0 rgb(229 73 94 / 35%);
}

.post-description {
  margin: 0.9rem 0;
  max-width: 70ch;
}

.post-meta {
  font-size: 13px;
  color: #cfcfcf;
}

.post-tags {
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.post-tags span {
  border: 1px solid rgb(229 73 94 / 45%);
  padding: 0.2rem 0.5rem;
  font-size: 11px;
  text-transform: uppercase;
}

.post-cover {
  margin: 1.3rem 0;
  border: 2px solid rgb(229 73 94 / 35%);
}

.post-cover img {
  width: 100%;
  max-height: 460px;
  object-fit: cover;
}

.post-body {
  line-height: 1.7;
  font-size: 16px;
}
</style>
