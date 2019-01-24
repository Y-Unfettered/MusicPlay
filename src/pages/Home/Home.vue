<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-navs></home-navs>
    <home-recommend></home-recommend>
    <home-sole></home-sole>
    <home-radio></home-radio>
    <home-mv></home-mv>
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import HomeSwiper from "./HomeComponents/Swiper";
import HomeNavs from "./HomeComponents/Navs";
import HomeRecommend from "./HomeComponents/Recommend";
import HomeSole from "./HomeComponents/Sole";
import HomeRadio from "./HomeComponents/Radio";
import HomeMv from "./HomeComponents/Mv";
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
    HomeRadio,
    HomeMv,
  }
};
</script>

<style lang='stylus' scoped>

</style>
