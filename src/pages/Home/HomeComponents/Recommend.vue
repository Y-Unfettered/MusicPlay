<template>
  <div class="recommend">
    <div class="recommend-nav">推荐歌单 ></div>
    <div class="recommend-items">
      <swiper>
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="recommend-item" v-for="item in page" :key="item.id">
            <div class="recommend-item-img">
              <img class="recommend-item-imgSrc" :src="item.picUrl" alt>
              <div class="recommend-item-listen">
                <span class="iconfont recommend-item-icon">&#xe61b;</span>
                <span class="recommend-item-num">{{Math.floor(item.playCount / 10000) }}万</span>
              </div>
            </div>
            <div class="recommend-item-reason">
              <span class="recommend-item-reason-span">{{item.name}}</span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  },
  data() {
    return {};
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 6);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang='stylus' scoped>
.recommend-items >>> .swiper-container {
  width: 100%;
  height: 7.8rem;
}

.recommend {
  width: 100%;
  height: 7.8rem;
  overflow: hidden;

  .recommend-nav {
    width: 7.2rem;
    height: 0.9rem;
    text-indent: 0.23rem;
    color: rgba(80, 80, 80, 1);
    font-size: 0.32rem;
    line-height: 0.9rem;
    text-align: left;
  }

  .recommend-items {
    height: 7.13rem;

    .recommend-item {
      width: 2.36rem;
      height: 3.44rem;
      margin-left: 0.11rem;
      display: inline-block;

      .recommend-item-img {
        width: 2.36rem;
        height: 2.36rem;
        background-color: rgba(238, 238, 238, 1);
        border-radius: 0.2rem;
        overflow: hidden;
        position: relative;

        .recommend-item-imgSrc {
          width: 100%;
          height: 100%;
        }

        .recommend-item-listen {
          width: 1.37rem;
          height: 0.56rem;
          float: right;
          line-height: 0.56rem;
          position: absolute;
          right: 0rem;
          top: 0rem;

          .recommend-item-icon {
            width: 0.34rem;
            height: 0.34rem;
            font-size: 0.34rem;
            color: #fff;
          }

          .recommend-item-num {
            width: 0.95rem;
            height: 0.56rem;
            color: #fff;
            font-size: 0.27rem;
            line-height: 0.56rem;
            text-align: left;
          }
        }
      }

      .recommend-item-reason {
        width: 2.36rem;
        height: 1.08rem;

        .recommend-item-reason-span {
          width: 2.36rem;
          height: 1.08rem;
          color: #000;
          font-size: 0.25rem;
          padding: 0.1rem 0 0 0.08rem;
          display: flex;
          justify-content: space-around;
          line-height: 0.36rem;
          text-align: left;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
}
</style>
