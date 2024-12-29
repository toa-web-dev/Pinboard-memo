<script setup>
defineProps({
    message: String,
    index: Number,
});
const placeHolder = "기억 할 항목 입력";
</script>

<template>
    <div class="memo">
        <p>메시지:{{ message ? message : placeHolder }} 인덱스:{{ index }}</p>
    </div>
</template>

<style scoped>
.memo {
    padding: 2rem 1rem 1rem 1rem;
}
</style>
