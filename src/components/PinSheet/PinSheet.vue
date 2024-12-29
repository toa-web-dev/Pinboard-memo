<script setup>
// import initDragging from "../../util/DragAndDrop";
import PinMenu from "../Menu/PinMenu.vue";
import { onMounted, ref } from "vue";

const pinRef = ref(null);

onMounted(() => {
    if (pinRef.value) {
        const $pin = pinRef.value;
        const $sheet = $pin.closest(".sheet");
        const $board = $sheet.closest(".board");
        // initDragging($pin, $sheet, $board);
    }
});
</script>

<template>
    <div class="sheet">
        <div class="pin-wrapper">
            <PinMenu class="pin-menu" />
            <div ref="pinRef" class="pin"></div>
        </div>
        <slot></slot>
    </div>
</template>

<style scoped>
.sheet {
    position: relative;
    display: inline-block;
    min-width: 100px;
    max-width: 300px;
    height: 100px;
    max-height: 300px;
    background-color: yellow;

    .pin-wrapper {
        position: absolute;
        width: 100%;

        .pin-menu {
            position: absolute;
            bottom: calc(100% + 12px);
            /* display: none; */
        }

        .pin {
            width: 24px;
            height: 24px;
            background-color: red;
            border-radius: 100%;
            cursor: pointer;
            margin: auto;
            transform: translateY(-8px);
        }
    }
}
</style>
