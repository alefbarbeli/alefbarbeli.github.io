<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>


<template>
  <div class="box-item f-code">
    <div class="box-content">
      <div class="image">
        <img :alt="item.title" :src="item.image">
      </div>
      <div class="desc">
        <div class="category">{{ item.category }}</div>
        <h4 class="">{{ item.title }}</h4>
        <a :aria-label="`Open popup for ${item.stack}`" class="name">
          {{ item.stack }}</a>
        <p>
          {{ item.description }}
        </p>
        <a :aria-label="`View Project ${item.title}`" class="btn" data-text="View Project" :href="item.projectUrl">View Project</a>
      </div>
    </div>
  </div>
</template>

<style>
.box-content {
  display: flex;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  position: relative;
}
.box-content:after {
  content: '';
  position: absolute;
  bottom: 0;
  width: calc(100% - 4rem);
  margin: 0 2rem;
  height: 1px;
  background-color: #e5495e;
}
.box-item:last-child .box-content:after {
  content: none;
}

.box-item:hover .desc .name {
  color: #e5495e;
}

.box-item .desc .name {
  height: 40px;
  display: block;
  color: #f1f1f1;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
}

.image img {
  width: 100%;
  height: auto;
}

.desc {
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.desc h4 {
  display: block;
  color: #f1f1f1;
  font-size: 17px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 15px 0;
  line-height: normal;
}

.desc p {
  margin-top: 15px;
}

</style>
