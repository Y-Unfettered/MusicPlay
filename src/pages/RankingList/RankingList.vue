<template>
  <div class="rankinglist">
    <ranking-list-nav></ranking-list-nav>
    <ranking-list-banner :list ="bannerImg"></ranking-list-banner>
    <ranking-list-list :list ="songList"></ranking-list-list>
    <ranking-list-loading v-if="this.$store.state.PlayListDataLoadingCompleted"></ranking-list-loading>
  </div>
</template>

<script>
import RankingListNav from "@/pages/RankingList/RankingListComponents/Nav";
import RankingListBanner from "@/pages/RankingList/RankingListComponents/Banner";
import RankingListList from "@/pages/RankingList/RankingListComponents/List";
import RankingListLoading from "./../common/Loading"
import axios from "axios";
import { getSonglist } from "API/GetData";
export default {
  name: "FM",
  data() {
    return {
        songList:[],
        bannerImg:''
    };
  },
  components: {
    RankingListNav,
    RankingListBanner,
    RankingListList,
    RankingListLoading
  },
  mounted() {
    this.getListData();
  },
  methods: {
    getListData() {
      const id = this.$route.params.id;
      getSonglist(id).then(res => {
        const list = res.data.playlist.tracks;
        const banner = res.data.playlist.coverImgUrl
        this.bannerImg = banner;
        this.songList = list.splice(0);
      });
    },
    DataLoadingCompletedState(){
        if(this.bannerImg == '' || !this.songList.length ){
          this.$store.state.PlayListDataLoadingCompleted = true
          this.$store.commit("setPlayListDataLoadingCompleted",this.$store.state.PlayListDataLoadingCompleted)
        }else{
          this.$store.state.PlayListDataLoadingCompleted = false
          this.$store.commit("setPlayListDataLoadingCompleted",this.$store.state.PlayListDataLoadingCompleted)
        }
    }
  },
  beforeUpdate(){
    this.DataLoadingCompletedState()
  },
  updated(){
    this.DataLoadingCompletedState()
  },
  beforeDestroy() {
    this.songList.splice(0,this.songList.length)
    this.$store.state.PlayListDataLoadingCompleted = true
    this.$store.commit("setPlayListDataLoadingCompleted",this.$store.state.PlayListDataLoadingCompleted)
  }
};
</script>

<style lang='stylus' scoped>
</style>
