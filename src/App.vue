<script setup>
import Board from "./components/Board/Board.vue";
import PinSheet from "./components/PinSheet/PinSheet.vue";
import Memo from "./components/PinSheet/contents/Memo.vue";
import Menu from "./components/Menu/Menu.vue";
import { ref } from "vue";

const handleAddMemo = (payload) => {
    boardContents.value.push(null);
};

const boardContents = ref(["메모"]);
</script>

<template>
    <div class="container">
        <aside :style="{ display: 'contents' }">
            <Menu class="left" @addMemo="handleAddMemo"></Menu>
            <div class="right"></div>
        </aside>

        <Board class="center">
            <template v-for="(content, index) in boardContents" :key="index">
                <PinSheet>
                    <Memo :message="content" :index="index"></Memo>
                </PinSheet>
            </template>
        </Board>
    </div>
</template>

<style scoped>
.container {
    max-width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(100px, 1fr) minmax(0, 8fr) minmax(100px, 1fr);
    grid-template-areas: "left center right";
}
.left {
    grid-area: left;
}
.right {
    grid-area: right;
}
.center {
    grid-area: center;
    align-self: center;
}
</style>
