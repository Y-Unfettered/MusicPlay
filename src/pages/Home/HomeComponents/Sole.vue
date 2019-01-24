<template>
  <div class="sole">
    <div class="sole-nav">独家放送 ></div>
    <div class="sole-item" v-for="item in soleData" :key="item.id">
      <div class="sole-item-img">
        <img :src="item.picUrl" alt>
      </div>
      <div class="sole-item-name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSole",
  data() {
    return {
      soleData: [
        {
          id: 6251137633,
          url: "42043101",
          picUrl:
            "http://p1.music.126.net/yIaJZ3z3_yWzYjZ3nZjaWA==/109951163802246003.jpg",
          sPicUrl:
            "http://p1.music.126.net/rK1jlhY1U5FQ9peIjNU_Ew==/109951163802243565.jpg",
          type: 24,
          copywriter: "温柔女声弹唱陈绮贞《Self》 这个冬天给你温暖",
          name: "温柔女声弹唱陈绮贞《Self》 这个冬天给你温暖",
          eventUserId: 42043101,
          width: 1920,
          videoId: "5ED5A6B90BB3E07C09BD8C19EA802C4C",
          eventType: 39,
          alg: "featured",
          height: 1080
        },
        {
          id: 6248459119,
          url: "68497830",
          picUrl:
            "http://p1.music.126.net/Rv-8mu4MR0VMMOeI8AGpDg==/109951163802234931.jpg",
          sPicUrl:
            "http://p1.music.126.net/gv3Mgpje0m6F_2Ispiq3wg==/109951163802232477.jpg",
          type: 24,
          copywriter: "琴声和歌声的完美搭配 更加温柔的《年少有为》",
          name: "琴声和歌声的完美搭配 更加温柔的《年少有为》",
          eventUserId: 68497830,
          width: 640,
          videoId: "EFB750BBC0BF68EB605DED204FDB2949",
          eventType: 39,
          alg: "featured",
          height: 360
        },
        {
          id: 6256280672,
          url: "122602621",
          picUrl:
            "http://p1.music.126.net/Ya92-2WuikZcXDd4d6f8LQ==/109951163802234388.jpg",
          sPicUrl:
            "http://p1.music.126.net/_Ut8FDoglBkLEx4Bt_JXQQ==/109951163802234893.jpg",
          type: 24,
          copywriter: "彩虹合唱团演绎日语经典 送给还在追梦的我们",
          name: "彩虹合唱团演绎日语经典 送给还在追梦的我们",
          eventUserId: 122602621,
          width: 640,
          videoId: "CC7802E122EFD2541E228607B224854E",
          eventType: 39,
          alg: "featured",
          height: 360
        }
      ]
    };
  }
};
</script>

<style lang='stylus' scoped>
.sole {
  width: 100%;
  height: 9.85rem;

  .sole-nav {
    width: 7.2rem;
    height: 0.9rem;
    text-indent: 0.23rem;
    color: rgba(80, 80, 80, 1);
    font-size: 0.32rem;
    line-height: 0.9rem;
    text-align: left;
  }

  .sole-item {
    width: 7.2rem;
    height: 3.03rem;
    margin-left .13rem

    .sole-item-img {
      width: 7.2rem;
      height: 2.36rem;
      border-radius .1rem
      overflow hidden
    }

    .sole-item-img img {
      width: 100%;
      height: 2.36rem;
    }

    .sole-item-name {
      width: 100%;
      height: 0.67rem;
      color: #000;
      font-size: 0.25rem;
      line-height: 0.67rem;
      text-align: left;
    }
  }
}
</style>
