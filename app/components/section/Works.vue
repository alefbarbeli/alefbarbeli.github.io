<template>
<div class="section works">
    <div class="content">
      <div class="title">
        <div class="title_inner">Cases de Destaque</div>
      </div>
      <div class="filter-menu">
        <div class="filters">
          <div class="btn-group">
            <label data-text="Webstore"><input type="checkbox" value="f-webstore">Webstore</label>
            <label data-text="Code"><input type="checkbox" value="f-code">Code</label>
            <label data-text="Loja Integrada"><input type="checkbox" value="f-integrada">Loja Integrada</label>
            <label data-text="Mockups"><input type="checkbox" value="f-woo">WooCommerce</label>
          </div>
        </div>
      </div>
      <div class="box-items">

        <BoxItem v-for="(item, i) in works" :key="i" :item="item" />

      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: works } = await useAsyncData('index-blogs', () =>
  queryCollection('portfolio').limit(3).all()
)
if (!works.value) {
  throw createError({ statusCode: 404, statusMessage: 'blogs posts not found', fatal: true })
}
</script>

<style>
/* 9. Box Items */
.box-items {
  position: relative;
  overflow: hidden;
}

@media (max-width: 580px) {
  .box-items {
    margin-left: 0;
  }
}

.category {
  margin: 0 0 10px 0;
  display: inline-block;
  font-size: 11px;
  color: #f1f1f1;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: inset 0 -6px 0px #e5495e;
  -moz-box-shadow: inset 0 -6px 0px #e5495e;
  -webkit-box-shadow: inset 0 -6px 0px #e5495e;
  -khtml-box-shadow: inset 0 -6px 0px #e5495e;
}
</style>
