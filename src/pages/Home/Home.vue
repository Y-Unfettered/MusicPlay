<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperImgs"></home-swiper>
    <home-navs :list ="navsDatas"></home-navs>
    <home-recommend :list="recommendData"></home-recommend>
    <home-sole :list="soleData"></home-sole>
    <home-radio :list="radioData"></home-radio>
    <home-mv :list="mvData"></home-mv>
    <home-loading v-if="this.$store.state.HomeDataLoadingCompleted"></home-loading>
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
import HomeLoading from "./../common/Loading"
import axios from "axios";
import { getBanner, getSole, getPersonalized, getFM, getMv } from "API/GetData";
export default {
  name: "Home",
  data() {
    return {
      swiperImgs: [],
      soleData: [],
      recommendData: [],
      radioData: [],
      mvData: [],
      navsDatas: [
        { navIiem: "云音乐新歌榜", navsIcon: "&#xe672;", id: 0 },
        { navIiem: "云音乐飙升榜", navsIcon: "&#xe674;", id: 3 },
        { navIiem: "云音乐热歌榜", navsIcon: "&#xe673;", id: 1 }
      ]
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNavs,
    HomeRecommend,
    HomeSole,
    HomeRadio,
    HomeMv,
    HomeLoading
  },
  created() {
    this._getBanner();
    this._getSole();
    this._getRecommend();
    this._getFM();
    this._getMv();
    this.getMusicList();
  },
  methods: {
    _getBanner() {
      getBanner().then(res => {
        const list = res.data.banners;
        this.swiperImgs = list.splice(0);
      });
    },
    _getSole() {
      getSole().then(res => {
        let list = res.data.result;
        this.soleData = list.splice(0);
      });
    },
    _getRecommend() {
      getPersonalized().then(res => {
        let list = res.data.result;
        this.recommendData = list.splice(0);
      });
    },
    _getFM() {
      getFM().then(res => {
        let list = res.data.result;
        this.radioData = list.splice(0);
      });
    },
    _getMv() {
            getMv().then(res => {
                let list = res.data.result;
                this.mvData = list.splice(0);
            });
    },
    DataLoadingCompletedState(){
        if(!this.swiperImgs.length || !this.soleData.length || !this.recommendData.length  || !this.radioData.length || !this.mvData.length){
          this.$store.state.HomeDataLoadingCompleted = true
          this.$store.commit("setHomeDataLoadingCompleted",this.$store.state.HomeDataLoadingCompleted)
        }else{
          this.$store.state.HomeDataLoadingCompleted = false
          this.$store.commit("setHomeDataLoadingCompleted",this.$store.state.HomeDataLoadingCompleted)
        }
    },
    getMusicList(){
      axios.get('https://wd5641080783zkrsci.wilddogio.com/MusicList.json')
          .then(res => this.playListState = res.data)
          .then(data => {
            let ListArray = []
            for(let key in data){
              ListArray.push(data[key])
            }
            this.$store.commit("setgetMusicList",ListArray)
          })
    }
  },
  beforeUpdate(){
    this.DataLoadingCompletedState()
  }
};
</script>

<style lang='stylus' scoped>
</style>
