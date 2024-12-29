<script setup>
defineProps({
    message: String,
    index: Number,
});
const placeHolder = "기억 할 항목 입력";
</script>

<template>
    <div>
        <p>메시지:{{ message ? message : placeHolder }} 인덱스:{{ index }}</p>
    </div>
</template>

<style scoped></style>
