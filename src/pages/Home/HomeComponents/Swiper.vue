<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imageUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        direction: "horizontal",
        paginationClickable: true, //点击index
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 3000, //自动轮播 速度
        autoplayDisableOnInteraction: false, //滑动后继续轮播
        loop: true //循环
      },
    };
  },
};
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.swiper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.swiper {
  overflow: hidden;
  width: 100%;
  height 2.76rem
  background-color: $bgColor;
}

.swiper-img {
  width: 100%;
  height 100%
}
</style>
