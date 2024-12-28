<script setup>
import Board from "./components/Board/Board.vue";
import PinSheet from "./components/PinSheet/PinSheet.vue";
import Memo from "./components/PinSheet/contents/Memo.vue";
import Menu from "./components/Menu/Menu.vue";
</script>

<template>
    <div class="container">
        <aside :style="{ display: 'contents' }">
            <Menu class="left"></Menu>
            <div class="right"></div>
        </aside>

        <Board class="center">
            <PinSheet>
                <Memo message="이전에 쓴 메모"></Memo>
            </PinSheet>
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
