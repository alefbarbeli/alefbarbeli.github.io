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
let runId = 0;

const clearTypingTimer = () => {
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }
};

const onInit = () => {
  const currentRunId = ++runId;
  const items = Array.isArray(props.items) ? props.items : [];
  clearTypingTimer();
  typing.value = '';

  if (!items.length) {
    return;
  }

  let currentText = '';
  let count = 0;
  let index = 0;
  let isReverse = false;

  const schedule = (callback, delay) => {
    timerId = setTimeout(() => {
      if (currentRunId !== runId) return;
      callback();
    }, delay);
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

watch(
  () => props.items,
  () => {
    onInit();
  },
  { deep: true }
);

onBeforeUnmount(() => {
  clearTypingTimer();
  runId++;
});
</script>

<style scoped>
p {
  color: #f1f1f1;
  font-size: 24px;
  font-weight: 200;
  line-height: 30px;
  height: 30px;
  padding: 0;
}
</style>
