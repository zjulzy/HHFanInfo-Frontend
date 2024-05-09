<script setup>
import { ref } from "vue";
import HHheader from "../components/Header.vue";
import HHCarousel from "../components/Carousel.vue";
import HHInfoPanel from "../components/HHInfoPanel.vue";
import HHTwitterPanel from "../components/HHTwitterPanel.vue";

defineProps({
  msg: String,
});
const himehinaImgUrl = "/src/assets/hugeHimeHina.png";
const count = ref(0);
</script>

<template>
  <HHheader />
  <h1 style="background-color: rgba(200, 200, 200, 0.2); margin: 0">
    {{ msg }}
  </h1>
  <el-container class="main-container">
    <el-main class="main">
      <el-row>
        <el-col :span="6">
          <!-- 此处为巨大himehina -->
          <el-image :src="himehinaImgUrl" style="width: 100%" :fit="fill" />
        </el-col>
        <el-col :span="18">
          <el-row>
            此处为粉丝基数以及倒计时 <br />
            此处为粉丝基数以及倒计时 <br />
            此处为粉丝基数以及倒计时 <br />
            此处为粉丝基数以及倒计时 <br />
            此处为粉丝基数以及倒计时 <br />
          </el-row>

          <el-row>
            此处为链接以及官方动态 <br />
            此处为链接以及官方动态<br />
            此处为链接以及官方动态<br />
            此处为链接以及官方动态<br />
            此处为链接以及官方动态<br />
            此处为链接以及官方动态<br />
          </el-row>

          <HHCarousel />
        </el-col>
      </el-row>

      
      <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>
          himehina himehina himehina himehina himehina himehina himehina
          himehina himehina himehina himehina himehina himehina himehina
          himehina himehina himehina himehina
        </p>
      </div>
      <HHInfoPanel />
      <HHTwitterPanel />
    </el-main>
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
  min-height: 100vh;
  width: 90%;
  margin: 0 5%;
}
div {
  border: 2px dashed var(--el-border-color);
}
.main {
  width: 100%;
}
.header {
  width: 100%;
}

.el-col {
    align-self: center;
}
</style>
