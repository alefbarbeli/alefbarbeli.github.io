<script setup lang="ts">
const { t } = useI18n();

defineProps({
  item: {
    type: Object,
    required: true
  }
});

const getItemPath = (item: Record<string, any>) => item.path || item._path || null;
</script>

<template>
  <div class="box-item f-code">
    <div class="box-content">
      <div class="image">
        <NuxtLink v-if="getItemPath(item)" :to="getItemPath(item)">
          <img :alt="item.title" :src="item.meta?.image || item.image">
        </NuxtLink>
        <img v-else :alt="item.title" :src="item.meta?.image || item.image">
      </div>
      <div class="desc">
        <div class="category">{{ item.category || item.meta?.category }}</div>
        <h4 v-if="getItemPath(item)">
          <NuxtLink :to="getItemPath(item)">{{ item.title }}</NuxtLink>
        </h4>
        <h4 v-else>{{ item.title }}</h4>
        <span class="name">{{ item.stack }}</span>
        <p>
          {{ item.description }}
        </p>
        <div class="actions">
          <NuxtLink
            v-if="getItemPath(item)"
            :to="getItemPath(item)"
            class="btn"
            :data-text="t('portfolio.viewDetails')"
          >
            {{ t('portfolio.viewDetails') }}
          </NuxtLink>
          <a
            v-if="item.projectUrl"
            :aria-label="`${t('portfolio.viewProject')} ${item.title}`"
            class="btn"
            :data-text="t('portfolio.viewProject')"
            :href="item.projectUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('portfolio.viewProject') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.box-item {
  height: 100%;
}

.box-content {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  border: 2px solid rgb(229 73 94 / 35%);
  background: rgb(255 255 255 / 2%);
  transition: all 300ms;
}

.box-content:hover {
  background: rgb(0 0 0);
  box-shadow: -10px 10px 0px #ffffff, -8px 8px 0px #ffffff, -6px 6px 0px #ffffff, -4px 4px 0px #ffffff, -2px 2px 0px #ffffff;
}

.box-item:hover .desc .name {
  color: #e5495e;
}

.box-item .desc .name {
  display: block;
  color: #f1f1f1;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
}

.image {
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.desc {
  padding: 1rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  flex: 1;
}

.desc h4 {
  display: block;
  color: #f1f1f1;
  font-size: 17px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0;
  line-height: normal;
}

.desc h4 a {
  color: inherit;
  text-decoration: none;
}

.desc p {
  margin: 0;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
</style>
