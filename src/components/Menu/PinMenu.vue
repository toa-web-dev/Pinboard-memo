<script setup>
import { defineEmits } from "vue";
function handleClick(type) {
    const emit = defineEmits(["handleMove", "handleChangeColor", "handleLinkpins"]);

    switch (type) {
        case "move":
            console.log("옮기기");
            emit("handleMove", null);
            break;
        case "changeColor":
            console.log("색 바꾸기");
            emit("handleChangeColor", null);
            break;
        case "linkPins":
            console.log("메모 연결하기");
            emit("handleLinkpins", null);
            break;
        default:
            break;
    }
}
</script>
<template>
    <div>
        <div class="bubble">
            <ul>
                <li v-on:click="() => handleClick('move')">옮기기</li>
                <li v-on:click="() => handleClick('changeColor')">색 바꾸기</li>
                <li v-on:click="() => handleClick('linkpins')">메모 연결하기</li>
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
.tail {
}
</style>
