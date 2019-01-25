<template>
  <div class="player">
      <player-header></player-header>
      <player-interface></player-interface>
      <player-list></player-list>
      <player-loading></player-loading>
  </div>
</template>

<script>
import PlayerHeader from "./PlayerComponents/Header";
import PlayerInterface from "./PlayerComponents/Interface";
import PlayerList from "./PlayerComponents/List";
import PlayerLoading from "./../common/Loading"
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

};
</script>

<style lang='stylus' scoped>
.player
    width 100%
    height 100vh 
    overflow hidden
    background-color #ccc
</style>
