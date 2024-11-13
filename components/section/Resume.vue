<template>
  <div id="resume" class="section resume">
    <div class="content">
      <div class="cols">
        <!-- Experience Section -->
        <div class="col col-md">
          <div class="title">
            <div class="title_inner">{{ $t('resume.sections.experience') }}</div>
          </div>
          <div class="resume-items">
            <div
                v-for="(item, index) in $tm('resume.experiences')"
                :key="index"
                class="resume-item"
                :class="{ active: index === 0 }"
            >
              <div class="date">{{ $rt(item.date) }}</div>
              <div class="name">{{ $rt(item.name) }}</div>
              <p>{{ $rt(item.description) }}</p>
            </div>
          </div>
        </div>
        <!-- Education Section -->
        <div class="col col-md">
          <div class="title">
            <div class="title_inner">{{ $t('resume.sections.education') }}</div>
          </div>
          <div class="resume-items">
            <div
                v-for="(item, index) in $tm('resume.education')"
                :key="index"
                class="resume-item"
            >
              <div class="date">{{ $rt(item.date) }}</div>
              <div class="name">{{ $rt(item.name) }}</div>
              <p>{{ $rt(item.description) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
