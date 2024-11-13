<template>
  <div class="portfolio">
    <!-- Started -->
    <div class="section started">
      <div class="h-title glitch-effect" data-text="Portfolio">Portfolio</div>
      <div class="h-subtitle">
        <p><NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="portfolio">Portfolio</NuxtLink></p>
      </div>
      <span class="typed-bread"></span>
      <a href="#works" class="mouse_btn" aria-label="Scroll down">
        <span class="ion ion-mouse"></span>
      </a>
    </div>

    <!-- Works -->
    <div id="works" class="section works">
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

          <BoxItem v-for="i in 6" :key="i" />

        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
