<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-navs></home-navs>
    <home-recommend></home-recommend>
    <home-sole></home-sole>
    <home-radio></home-radio>
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import HomeSwiper from "./HomeComponents/Swiper";
import HomeNavs from "./HomeComponents/Navs";
import HomeRecommend from "./HomeComponents/Recommend";
import HomeSole from "./HomeComponents/Sole";
import HomeRadio from "./HomeComponents/Radio";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNavs,
    HomeRecommend,
    HomeSole,
    HomeRadio
  }
};
</script>

<style lang='stylus' scoped>

</style>
