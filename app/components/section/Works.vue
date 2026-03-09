<template>
  <div class="section works">
    <div class="content">
      <div class="title">
        <div class="title_inner">{{ $t('portfolio.featuredCases') }}</div>
      </div>

      <div class="filter-menu">
        <div class="filters">
          <div class="btn-group">
            <button
              v-for="filter in categoryFilters"
              :key="filter.value"
              :class="{ active: activeCategory === filter.value }"
              type="button"
              @click="activeCategory = filter.value"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>
      </div>

      <div class="box-items">
        <BoxItem v-for="(item, i) in filteredWorks" :key="i" :item="item" />
      </div>

      <p v-if="!filteredWorks.length" class="empty-state">
        {{ $t('portfolio.noResults') }}
      </p>

      <div class="clear"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
type WorkItem = Record<string, any>;

const { t, locale } = useI18n();

const activeCategory = ref('all');

const { data: localizedWorks } = await useAsyncData(
  () => `portfolio-works-${locale.value}`,
  () =>
    $fetch<WorkItem[]>('/api/portfolio', {
      params: { locale: locale.value }
    }),
  {
    default: () => [],
    watch: [locale]
  }
);

const categories = computed(() => {
  const values = new Set<string>();
  for (const item of localizedWorks.value as WorkItem[]) {
    const category = item.category ?? item.meta?.category;
    if (category) {
      values.add(category);
    }
  }
  return Array.from(values).sort((a, b) => a.localeCompare(b));
});

const categoryFilters = computed(() => [
  { value: 'all', label: t('portfolio.filters.all') },
  ...categories.value.map((category) => ({ value: category, label: category }))
]);

const filteredWorks = computed(() => {
  if (activeCategory.value === 'all') {
    return localizedWorks.value || [];
  }

  return (localizedWorks.value || []).filter((item: WorkItem) => {
    const category = item.category ?? item.meta?.category;
    return category === activeCategory.value;
  });
});

watch(categories, (next) => {
  if (activeCategory.value === 'all') return;
  if (!next.includes(activeCategory.value)) {
    activeCategory.value = 'all';
  }
});
</script>

<style>
.box-items {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (max-width: 580px) {
  .box-items {
    grid-template-columns: 1fr;
  }
}

.filter-menu .btn-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-menu .btn-group button {
  border: 1px solid #5d5d5d;
  background: transparent;
  color: #f1f1f1;
  padding: 0.4rem 0.8rem;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.04em;
  cursor: pointer;
}

.filter-menu .btn-group button.active {
  border-color: #e5495e;
  box-shadow: inset 0 -8px 0 rgb(229 73 94 / 35%);
}

.empty-state {
  margin-top: 1rem;
  color: #d6d6d6;
  font-size: 13px;
  text-transform: uppercase;
}

.category {
  margin: 0 0 10px 0;
  display: inline-block;
  font-size: 11px;
  color: #f1f1f1;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: inset 0 -6px 0 #e5495e;
}
</style>
