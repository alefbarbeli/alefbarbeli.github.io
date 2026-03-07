<template>
  <p>{{ typing }}</p>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

const typing = ref('');
let timerId = null;

const onInit = () => {
  const items = props.items;

  if (!items.length) {
    typing.value = '';
    return;
  }

  let currentText = '';
  let count = 0;
  let index = 0;
  let isReverse = false;

  const schedule = (callback, delay) => {
    timerId = setTimeout(callback, delay);
  };

  const typingEffect = () => {
    typing.value = currentText;

    const text = items[index];
    if (count <= text.length) {
      schedule(() => {
        const indexStart = 0;
        const indexEnd = isReverse ? text.length - count : count;
        currentText = text.substring(indexStart, indexEnd);
        count++;
        typingEffect();
      }, Math.floor(Math.random() * 100));
      return;
    }

    isReverse = !isReverse;
    count = 0;

    if (!isReverse) {
      index = index + 1 < items.length ? index + 1 : 0;
    }

    schedule(() => {
      currentText = '';
      typingEffect();
    }, isReverse ? 2000 : 150);
  };

  schedule(() => {
    typingEffect();
  }, 1000);
};

onMounted(() => {
  onInit();
});

onBeforeUnmount(() => {
  if (timerId) {
    clearTimeout(timerId);
  }
});
</script>

<style scoped>
p {
  color: #f1f1f1;
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  height: 30px;
  padding: 0;
}
</style>
