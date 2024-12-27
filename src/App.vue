<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Board from './components/Board/Board.vue';
import PinSheet from './components/PinSheet/PinSheet.vue';
import Memo from './components/PinSheet/contents/Memo.vue';
</script>

<template>
  <div class="container">
    <Board> //v-for로 PinSheet 컴포넌트를 여러 개 생성
      <PinSheet>
        <Memo></Memo>
      </PinSheet>
    </Board>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}
</style>
