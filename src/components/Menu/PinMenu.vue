<script setup>

const emit = defineEmits(["handlePinMenuBtn"]);

function handleClick() {

    function changeColor() {
        console.log("change color");
    }
    function moveSheet() {
        console.log("move");

    }
    function linkPins() {
        console.log("link pins");
    }

    emit("handlePinMenuBtn", [changeColor, moveSheet, linkPins]);
}
</script>
<template>
    <div>
        <div class="bubble">
            <ul>
                <li @click="() => handleClick('changeColor')">색 바꾸기</li>
                <!-- <li @click="() => handleClick('moveSheet')">옮기기</li> -->
                <li @click="() => handleClick('linkPins')">메모 연결하기</li>
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
        }
    }
}

.tail {}
</style>
