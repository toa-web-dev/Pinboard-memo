<script setup></script>

<template>
    <div id="Board" class="board">
        <slot></slot>
    </div>
</template>

<style scoped>
.board {
    width: 100%;
    height: 70%;
    background-image: url("/src/assets/board.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}
</style>
