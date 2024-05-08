<script setup>
import { ref } from 'vue'
import HHheader from '../components/Header.vue'
import HHCarousel from '../components/Carousel.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <HHheader />
  <h1 style="background-color: rgba(200, 200, 200, 0.2);margin:0">{{ msg }}</h1>
  <el-container class = "main-container">
    <el-header class = "header">Header</el-header>
    <el-main class = "main">
      <HHCarousel />
      <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>
          himehina himehina himehina
          himehina himehina himehina
          himehina himehina himehina
          himehina himehina himehina
          himehina himehina himehina
          himehina himehina himehina
        </p>
      </div>
      <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX 
  </p>
  <p class="read-the-docs">who is himehina who is himehina who is himehina who is himehina </p></el-main>
    <el-footer>himehina himehina himehina himehina himehina himehina</el-footer>
  </el-container>

  

  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.main-container {
  background-color: #f0f0f0c0;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 80%;
  margin: 0 10%;
  
}
div {
  border: 2px dashed var(--el-border-color);
}
.main{
  width: 100%;
}
.header{
  width: 100%;
  
}
</style>
