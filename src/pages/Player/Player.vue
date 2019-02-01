<template>
  <div class="player">
    <div class="background" :style="{ background : 'url(' + this.$store.state.MusicPlaying.MusicBG + ')', backgroundRepeat: 'no-repeat',backgroundPosition: 'center', backgroundSize: 'cover'}"></div>
    <player-header></player-header>
    <player-interface ref="mychild"></player-interface>
    <play-audio></play-audio>
    <player-list></player-list>
    <player-loading v-if="this.$store.state.HomeDataLoadingCompleted"></player-loading>
  </div>
</template>

<script>
import PlayerHeader from "./PlayerComponents/Header";
import PlayerInterface from "./PlayerComponents/Interface";
import PlayerList from "./PlayerComponents/List";
import PlayerLoading from "./../common/Loading";
import PlayAudio from "./PlayerComponents/audio";
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
    PlayerLoading,
    PlayAudio
  },
  created() {
    var playing = this.$store.state.getMusicList[this.$store.state.defaultIndex];
    this.$store.commit("setMusicPlaying", playing);
    const id = this.$store.state.MusicPlaying.id;
    getMusicUrl(id).then(res => {
      res.data.data.forEach(element => {
        this.$store.commit("setgitMusicSrc", element.url);
      });
    })
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
  },
};
</script>

<style lang='stylus' scoped>
.player {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position relative
}
.player .background{
  position:absolute;
	top:0;
	right:0;
	bottom:0;
	left:0;
  z-index:-1;
  -webkit-filter:blur(.1rem);
	filter:blur(.1rem);
}
.player .background::before{
  content:'';
	position:absolute;
	top:0;
	right:0;
	bottom:0;
	left:0;
	z-index:0;
  background-color rgba(22,22,22,0.3)
  -webkit-filter:blur(.1rem);
	filter:blur(.1rem);
}
</style>
