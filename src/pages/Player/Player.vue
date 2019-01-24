<template>
  <div class="player">
      <player-header></player-header>
      <player-interface></player-interface>
  </div>
</template>

<script>
import PlayerHeader from "./PlayerComponents/Header";
import PlayerInterface from "./PlayerComponents/Interface";
export default {
  name: "Palyer",
  data() {
    return {};
  },
  components: {
    PlayerHeader,
    PlayerInterface,
  }
};
</script>

<style lang='stylus' scoped>
.player
    width 100%
    height 100vh 
    overflow hidden
    background-color #ccc
</style>
