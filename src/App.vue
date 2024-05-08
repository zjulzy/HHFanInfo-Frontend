<script setup>
import { onMounted } from 'vue';
import HelloWorld from './pages/HelloWorld.vue'
const websiteName = 'HimeHinaFanInfo'
onMounted(() => {
  console.log('mounted')
  // this.$router.push('/')
})
</script>

<template>
  <!-- <HelloWorld :msg=websiteName /> -->
  <router-view></router-view>
</template>

<style>
body{
  background-image: url('./assets/background.jpg');
}
</style>
