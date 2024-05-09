<template>
  <div class="carousel">
    <el-carousel :interval="3000" arrow="always">
      <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
        <!-- Your carousel item content here -->
        <img :src="item.image" alt="Carousel Item" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        {
          image: "/src/assets/官方轮播1.png",
          title: "Item 1",
          description: "Description for Item 1",
        },
        {
          image: "/src/assets/官方轮播1.png",
          title: "Item 2",
          description: "Description for Item 2",
        },
        // Add more carousel items as needed
      ],
    };
  },
};
</script>

<style scoped>
.carousel {
  /* Add your custom styles for the carousel container */
  padding: 16px;
}
</style>
