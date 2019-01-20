<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-navs></home-navs>
    
    
    
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import HomeSwiper from "./HomeComponents/Swiper";
import HomeNavs from "./HomeComponents/Navs";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNavs
  }
};
</script>

<style lang='stylus' scoped>

</style>
