<script setup>
import initDragging from "../../util/DragAndDrop";
import { onMounted, ref } from "vue";

const pinRef = ref(null);

onMounted(() => {
    if (pinRef.value) {
        initDragging(pinRef.value);
    }
});
</script>

<template>
    <div class="sheet">
        <div ref="pinRef" class="pin" />
        <slot></slot>
    </div>
</template>

<style scoped>
.sheet {
    display: inline-block;
    min-width: 100px;
    max-width: 300px;
    height: 100px;
    max-height: 300px;
    background-color: yellow;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 1rem 1rem 1rem;
}
.pin {
    width: 24px;
    height: 24px;
    background-color: red;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -25%);
    cursor: move;
}
</style>
