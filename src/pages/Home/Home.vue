<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    
    
    
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import HomeSwiper from "./HomeComponents/Swiper";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style lang='stylus' scoped>

</style>
