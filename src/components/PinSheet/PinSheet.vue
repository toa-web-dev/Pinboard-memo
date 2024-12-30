<script setup>
import initDragging from "../../util/DragAndDrop";
import { onMounted, ref } from "vue";

let $pin, $sheet, $board;

const pinRef = ref(null);

onMounted(() => {
    if (pinRef.value) {
        $pin = pinRef.value;
        $sheet = $pin.closest(".sheet");
        $board = $sheet.closest(".board");
    }
});

const isPinMenuVisible = ref(false);
function handleToggleMenu() {
    isPinMenuVisible.value = !isPinMenuVisible.value;
}

function handlePointerdown(e) {
    const downTime = e.timeStamp

    const pointerUpHandler = (e) => handlePointerup(e, downTime);

    function handlePointerup(e, downTime) {
        const upTime = e.timeStamp
        const duration = upTime - downTime
        console.log("시간차", duration)
        if (duration < 1500) {
            console.log("이동")
        } else {
            console.log("연결")
        }
        pinRef.value.removeEventListener("pointerup", pointerUpHandler)
    }

    pinRef.value.addEventListener("pointerup", pointerUpHandler)

}

</script>

<template>
    <div class="sheet">
        <div class="pin-wrapper">
            <div ref="pinRef" class="pin" @pointerdown="(e) => handlePointerdown(e)"></div>
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
            cursor: grab;
            margin: auto;
            transform: translateY(-8px);
        }
    }
}
</style>
