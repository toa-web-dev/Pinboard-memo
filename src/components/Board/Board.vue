<script setup></script>

<template>
    <div id="board" class="board">
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
