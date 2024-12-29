<script setup>
import { defineEmits } from "vue";

// 정의한 이벤트 이름
const emit = defineEmits(["addMemo"]);

const handleClick = () => {
    emit("addMemo", null);
};
</script>

<template>
    <div>
        <ul>
            <li v-on:click="handleClick">add MEMO</li>
        </ul>
    </div>
</template>

<style scoped></style>
