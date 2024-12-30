<script setup>
import PinMenu from "../Menu/PinMenu.vue";
import { onMounted, ref } from "vue";

const pinRef = ref(null);
const isPinMenuVisible = ref(false);
let $pin, $sheet, $board;
onMounted(() => {
    if (pinRef.value) {
        $pin = pinRef.value;
        $sheet = $pin.closest(".sheet");
        $board = $sheet.closest(".board");
    }
});
function handdleToggleMenu() {
    isPinMenuVisible.value = !isPinMenuVisible.value;
}
function handlePinMenuBtn(callback) {
    callback([$pin, $sheet, $board]);
    handdleToggleMenu();
}

</script>

<template>
    <div class="sheet">
        <div class="pin-wrapper">
            <PinMenu class="pin-menu" @handlePinMenuBtn="handlePinMenuBtn"
                :style="{ visibility: isPinMenuVisible ? 'visible' : 'hidden' }" />
            <div ref="pinRef" class="pin" @click="handdleToggleMenu"></div>
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
            transform: translateY(-8px);  }
    }
}
</style>
