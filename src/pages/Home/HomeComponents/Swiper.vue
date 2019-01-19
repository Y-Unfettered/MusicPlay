<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in swiperImgs" :key="item.id">
        <img class="swiper-img" :src="item.ImgSrc">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        direction: "horizontal",
        paginationClickable: true, //点击index
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 3000, //自动轮播 速度
        autoplayDisableOnInteraction: false, //滑动后继续轮播
        loop: true //循环
      },
      swiperImgs: [
        {
          ImgSrc: `http://bmob-cdn-21722.b0.upaiyun.com/2018/10/08/473888234037873e80997ff9b9e800c2.jpg`,
          id: 0
        },
        {
          ImgSrc: `http://bmob-cdn-21722.b0.upaiyun.com/2018/10/08/a2d87af240a5fccc80ec11f3fa46cc4e.png`,
          id: 1
        },
        {
          ImgSrc: `http://bmob-cdn-21722.b0.upaiyun.com/2018/10/08/cb33b499401d7220806958b141e8b9f8.jpg`,
          id: 2
        }
      ]
    };
  }
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
  height: 0;
  padding-bottom: 40%;
  background-color: $bgColor;
}

.swiper-img {
  width: 100%;
}
</style>
