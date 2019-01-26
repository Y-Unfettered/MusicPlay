<template>
  <div class="player">
    <player-header></player-header>
    <player-interface></player-interface>
    <player-list></player-list>
    <player-loading v-if="this.$store.state.HomeDataLoadingCompleted"></player-loading>
  </div>
</template>

<script>
import PlayerHeader from "./PlayerComponents/Header";
import PlayerInterface from "./PlayerComponents/Interface";
import PlayerList from "./PlayerComponents/List";
import PlayerLoading from "./../common/Loading";
import { getMusicUrl } from "API/GetData";
import axios from "axios";
export default {
  name: "Palyer",
  data() {
    return {};
  },
  components: {
    PlayerHeader,
    PlayerInterface,
    PlayerList,
    PlayerLoading
  },
  created() {
    var defaultIndex = 0;
    var playing = this.$store.state.getMusicList[defaultIndex];
    this.$store.commit("setMusicPlaying", playing);
    const id = this.$store.state.MusicPlaying.id;
    getMusicUrl(id).then(res => {
      res.data.data.forEach(element => {
        this.$store.commit("setgitMusicSrc", element.url);
      });
    });
    this.DataLoadingCompletedState();
  },
  methods: {
    DataLoadingCompletedState() {
      var arr = Object.keys(this.$store.state.MusicPlaying);
      if (!arr.length) {
        this.$store.state.HomeDataLoadingCompleted = true;
        this.$store.commit(
          "setHomeDataLoadingCompleted",
          this.$store.state.HomeDataLoadingCompleted
        );
      } else {
        this.$store.state.HomeDataLoadingCompleted = false;
        this.$store.commit(
          "setHomeDataLoadingCompleted",
          this.$store.state.HomeDataLoadingCompleted
        );
      }
    }
  }
};
</script>

<style lang='stylus' scoped>
.player {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #ccc;
}
</style>
