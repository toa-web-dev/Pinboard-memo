<script setup>
import initDragging from "../../util/DragAndDrop";
const emit = defineEmits(["handlePinMenuBtn"]);

function handleClick(func) {
    switch (func) {
        case "changeColor":
            emit("handlePinMenuBtn", changeColor);
            break;
        case "moveSheet":
            emit("handlePinMenuBtn", moveSheet);
            break;
        case "linkPins":
            emit("handlePinMenuBtn", linkPins);
            break;
        default:
            break;
    }

    function changeColor() {
        console.log("change color");
    }
    function moveSheet([$pin, $sheet, $board]) {
        console.log("move");
        initDragging([$pin, $sheet, $board]);
    }
    function linkPins() {
        console.log("link pins");
    }
}
</script>
<template>
    <div>
        <div class="bubble">
            <ul>
                <li v-on:click="() => handleClick('changeColor')">색 바꾸기</li>
                <li v-on:click="() => handleClick('moveSheet')">옮기기</li>
                <li v-on:click="() => handleClick('linkPins')">메모 연결하기</li>
            </ul>
        </div>
        <div class="tail"></div>
    </div>
</template>

<style scoped>
.bubble {
    background-color: whitesmoke;
    border-radius: 1rem;
    overflow: hidden;

    & ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 0;
        margin: 0;

        & li {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
            cursor: pointer;

            &:hover {
                background-color: lightgray;
            }
        }  }
}

.tail {}
</style>
