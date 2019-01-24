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
                <span class="recommend-item-num">250万</span>
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
  data() {
    return {
      recommendData: [
        {
          id: 2498061427,
          type: 0,
          name: "经典复刻 | 那些惊艳耳朵的神级翻唱",
          copywriter: "编辑推荐：每首经典翻唱，都值得单曲循环",
          picUrl:
            "http://p2.music.126.net/TMDY2r1kCaX8_MS2X-Ttpw==/109951163795225836.jpg",
          canDislike: false,
          playCount: 3862944,
          trackCount: 100,
          highQuality: false,
          alg: "featured"
        },
        {
          id: 956988504,
          type: 0,
          name: "灵性口哨·高频律感 | 将质感上升置顶",
          copywriter: "编辑推荐：清脆的口哨声穿入耳膜，灵性俏皮",
          picUrl:
            "http://p2.music.126.net/HQvYacN4DT_VR6AFMGBR0A==/109951163804391001.jpg",
          canDislike: false,
          playCount: 1127093.9,
          trackCount: 32,
          highQuality: false,
          alg: "featured"
        },
        {
          id: 2369772502,
          type: 0,
          name: "高 级 感 vlog 纯音乐 BGM",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/vLSB9-NGsd4CLYf_4ShGww==/109951163609572271.jpg",
          canDislike: true,
          playCount: 6663253,
          trackCount: 56,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2620713775,
          type: 0,
          name: "《成年人脆弱疗愈指南》",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/EnVO9LS9xGf2yUqCxyrOHA==/109951163791290294.jpg",
          canDislike: true,
          playCount: 3132019.5,
          trackCount: 36,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2616332564,
          type: 0,
          name: "生活没那么简单 也没那么糟糕",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/7bGJGafdq5f0KSZ1-75n1g==/109951163791508435.jpg",
          canDislike: true,
          playCount: 3783765.8,
          trackCount: 43,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2614841256,
          type: 0,
          name: "给那些回不去又遥远的乡愁",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/A6I-QOF_h2AkBA6eN7hbGw==/109951163781590817.jpg",
          canDislike: true,
          playCount: 1644834,
          trackCount: 27,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2541689977,
          type: 0,
          name: "轻电子丨我的宇宙里为你藏有无数个温柔星球",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/NM7JAcBneHhIJvbENIY48A==/109951163754375759.jpg",
          canDislike: true,
          playCount: 593727.44,
          trackCount: 50,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 308213605,
          type: 0,
          name: "适合视频剪辑BGM的音乐",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/iQdBR7LiiMXmAKSSWse-KA==/109951162956237599.jpg",
          canDislike: true,
          playCount: 47778072,
          trackCount: 394,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2559679362,
          type: 0,
          name: "『乡味90代』怡情绘色之典",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/5T3DBxfV3AswvuZGM4v5HQ==/109951163729686724.jpg",
          canDislike: true,
          playCount: 348262.6,
          trackCount: 100,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 498708023,
          type: 0,
          name: "民谣200首【精选】",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/MFpiR-S03RVac8RyAgf8Qw==/3253454911828684.jpg",
          canDislike: true,
          playCount: 65236664,
          trackCount: 200,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2379996972,
          type: 0,
          name: "「新」滚石杂志:史上最伟大的500张唱片",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/JXt48S_zn_AuSW-znE5n5A==/109951163792015763.jpg",
          canDislike: true,
          playCount: 309316,
          trackCount: 500,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2201879658,
          type: 0,
          name: "你的青春里有没有属于你的一首歌？",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/wpahk9cQCDtdzJPE52EzJQ==/109951163271025942.jpg",
          canDislike: true,
          playCount: 76281680,
          trackCount: 134,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2620408346,
          type: 0,
          name: "把歌名中的某个字改成“盘”会怎样？",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/I01TQEnbxVz5CMvPWeui8g==/109951163789880050.jpg",
          canDislike: true,
          playCount: 2106810.8,
          trackCount: 116,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 111221399,
          type: 0,
          name: "那些好听到发疯的粤语歌",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/_MQPs_M-xvWtDQa_v1SvQw==/3382097768268687.jpg",
          canDislike: true,
          playCount: 107382704,
          trackCount: 416,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 368529707,
          type: 0,
          name: "前奏直接秒杀的纯音乐",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/Y3rXiAWKw75VUjvMBQsxUA==/1424967077460786.jpg",
          canDislike: true,
          playCount: 100415688,
          trackCount: 232,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 37432514,
          type: 0,
          name: "那些只听前奏就中毒的英文歌",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg",
          canDislike: true,
          playCount: 127470280,
          trackCount: 17,
          highQuality: true,
          alg: "cityLevel_unknow"
        },
        {
          id: 823754244,
          type: 0,
          name: "90后的回忆杀 - 『持续更新』",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/O3mY0Bpdes7O96W-xDlDTA==/109951163044734870.jpg",
          canDislike: true,
          playCount: 62885452,
          trackCount: 554,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 457914491,
          type: 0,
          name: "测试耳机的解析度【耳机福利】",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/e7wJNsY5n3S57EihNAuJzA==/109951162957746916.jpg",
          canDislike: true,
          playCount: 17913530,
          trackCount: 483,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2585465480,
          type: 0,
          name: "此生多少情与仇，只愿与你长相守",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/JmvcSq1Jh65HNlUQBIy6rA==/109951163793559872.jpg",
          canDislike: true,
          playCount: 1949595.8,
          trackCount: 115,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 819412098,
          type: 0,
          name: "【日常实用】Pr视频剪辑适用BGM",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/zxjfSlONBN0i4ygolxizWw==/109951163129081741.jpg",
          canDislike: true,
          playCount: 11254403,
          trackCount: 157,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2118951725,
          type: 0,
          name: "2018网络红歌",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/pMRi2zv6Cp0SoEFzA2yL-Q==/19128203788989932.jpg",
          canDislike: true,
          playCount: 23317932,
          trackCount: 248,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 917794768,
          type: 0,
          name: "翻唱简史：日本四百首",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/NczCuurE5eVvObUjssoGjQ==/109951163788653124.jpg",
          canDislike: true,
          playCount: 4875859,
          trackCount: 840,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2552262199,
          type: 0,
          name: "冬日取暖Tips | 和我谈一场暖冬的恋爱吧",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/gNDczjbg80Qz-I3JXI5s_A==/109951163754431631.jpg",
          canDislike: true,
          playCount: 2409722.8,
          trackCount: 100,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2580215512,
          type: 0,
          name: "落幕2018│年度欧美旋律 渗透人心的音韵♬",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/22K5U7sb8vm-VVluceGHXw==/109951163758907200.jpg",
          canDislike: true,
          playCount: 1056886.1,
          trackCount: 100,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 360062344,
          type: 0,
          name: "世界上很好听的纯音乐（经典不朽）",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/92NWlGo76ha-if-WMK3vCg==/1410673428769729.jpg",
          canDislike: true,
          playCount: 71508320,
          trackCount: 202,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 53950976,
          type: 0,
          name: "适合读书时听的欧美小调",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/1AzqNV58StMax27Ntgu0sw==/2909307767267846.jpg",
          canDislike: true,
          playCount: 15809496,
          trackCount: 109,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 75182300,
          type: 0,
          name: "评论过万的英文歌与潜力股",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/gzsxh-u0mN_OtdrjpbfI8w==/7842816441775262.jpg",
          canDislike: true,
          playCount: 37478596,
          trackCount: 112,
          highQuality: true,
          alg: "cityLevel_unknow"
        },
        {
          id: 1982383224,
          type: 0,
          name: "百首良曲|刷（抄）作业必备燃曲",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/L2_vOL34ViULROFAkxy6Bg==/18825838092987338.jpg",
          canDislike: true,
          playCount: 54440224,
          trackCount: 145,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 306397077,
          type: 0,
          name: "【节奏控】那些超带感的音乐（典藏版）",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/RnOZHM0BNxXuy-RwQQI5BA==/3313928048221849.jpg",
          canDislike: true,
          playCount: 191261824,
          trackCount: 281,
          highQuality: false,
          alg: "cityLevel_unknow"
        },
        {
          id: 2495236849,
          type: 0,
          name: "走自己的路，做最好的自己",
          copywriter: "热门推荐",
          picUrl:
            "http://p2.music.126.net/RFq8VEGd_n0XVFqj_jVSLQ==/109951163799530121.jpg",
          canDislike: true,
          playCount: 1253953.2,
          trackCount: 100,
          highQuality: false,
          alg: "cityLevel_unknow"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.recommendData.forEach((item, index) => {
        const page = Math.floor(index / 6);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  beforeMount() {
    var initText = this.recommendData;
    function init(initText) {
      initText.forEach((item, index) => {
        var str = item.name;
        if (str.length > 17) {
            str = str.substr(0, 17) + "...";
            item.name = str
        }
      });
      return initText
    }
    init(initText);
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
          padding: .1rem 0 0 0.08rem
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
