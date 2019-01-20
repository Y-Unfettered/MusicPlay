<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-navs></home-navs>
    <home-recommend></home-recommend>
    
    
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import HomeSwiper from "./HomeComponents/Swiper";
import HomeNavs from "./HomeComponents/Navs";
import HomeRecommend from "./HomeComponents/Recommend";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNavs,
    HomeRecommend
  }
};
</script>

<style lang='stylus' scoped>

</style>
