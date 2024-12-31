<script setup>
import initDrag from "../../util/DragAndDrop";
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

function handlePointerdown(event) {
    const downTime = event.timeStamp;
    document.addEventListener("pointermove", checkTimeforFunc);
    function checkTimeforFunc(event) {
        // 다운타임 측정 시작 후 1500ms가 지나기 전에 포인터가 움직이면 드래그로 판단. 1500ms가 지나면 연결로 판단.
        const moveTime = event.timeStamp;
        if (moveTime - downTime < 1500) {
            initDrag( $sheet, $board);
        } else {
            // 핀연결(e);
        }
        console.log("차이: ", moveTime - downTime);
        document.removeEventListener("pointermove", checkTimeforFunc);
    }
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
