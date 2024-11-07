<template>
    <p>{{ typing }}</p>
</template>

<script setup>
    const props = defineProps({
        items: Array
    })
    const typing = ref(props.items[0]);

    const onInit = () => {
        let items = props.items;

        let app = '';
        let count = 0;
        let index = 0;
        let indexStart;
        let indexEnd;
        let isReverse = false;

        function typingEffect() {
            typing.value = app;

            let text = items[index];
            if (count <= text.length) {
                setTimeout(function () {
                    indexStart = 0;
                    indexEnd = (isReverse) ? text.length - count : count;
                    let output = text.substring(indexStart, indexEnd);
                    app = output;
                    count++;
                    typingEffect();
                }, Math.floor(Math.random(10) * 100));
            }
            else {
                isReverse = !isReverse;
                count = 0;
                if (!isReverse)
                    index = (index + 1 < items.length) ? index + 1 : 0;
                setTimeout(function () {
                    app = '';
                    typingEffect();
                }, (isReverse) ? 2000 : 150);
            }
        }

        setTimeout(() => {
            typingEffect();
        }, 1000); // Adjust the delay time in milliseconds as needed
    }

    onMounted(() => {
        onInit();
    });
</script>

<style scoped>
    p{
        color: #000;
        font-size: 24px;
        font-weight: bold;
        line-height: 30px;
        height: 30px;
        padding: 0;
    }
</style>
