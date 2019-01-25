<template>
  <div class="rankinglist">
    <ranking-list-nav></ranking-list-nav>
    <ranking-list-banner :list ="bannerImg"></ranking-list-banner>
    <ranking-list-list :list ="songList"></ranking-list-list>
  </div>
</template>

<script>
import RankingListNav from "@/pages/RankingList/RankingListComponents/Nav";
import RankingListBanner from "@/pages/RankingList/RankingListComponents/Banner";
import RankingListList from "@/pages/RankingList/RankingListComponents/List";
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
    RankingListList
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
        console.log(this.songList)
      });
    }
  }
};
</script>

<style lang='stylus' scoped>
</style>
