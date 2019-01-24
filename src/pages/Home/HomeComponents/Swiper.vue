<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in swiperImgs" :key="item.id">
        <img class="swiper-img" :src="item.picUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios'
import {getBanner} from "../../../API/GetData";
export default {
  name: "HomeSwiper",
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
      swiperImgs: [ ]
    };
  },
  created() {
    this._getBanner();
  },
  methods: {
    _getBanner() {
      getBanner().then(res => {
        let list = res.data.banners;
        this.swiperImgs = list.splice(0);
        // console.log(this.swiperImgs)
      });
    }
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
  padding-bottom: 46%;
  background-color: $bgColor;
}

.swiper-img {
  width: 100%;
  height 100%
}
</style>
