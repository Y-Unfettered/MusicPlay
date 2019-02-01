<template>
    <div class="interface" v-if="!this.$store.state.RollTime">
        <div class="interface-top">
            <div class="player-pointer">
                <img src="https://music.163.com/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862" alt="">
            </div>
            <div :class="this.$store.state.playState ? 'player-record rotate-running' : 'player-record rotate-paused'">
                <img :src="this.$store.state.MusicPlaying.MusicBG" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"PlayerInterface",
    data(){
        return{}
    }
}
</script>

<style lang='stylus' scoped>
.interface
    width 100%
    height 100%
    position fixed
    top 1rem;
    .interface-top
        width 100%
        height 9rem
        position relative
        overflow hidden
        .player-pointer
            width 2rem
            height 3rem
            position absolute
            left 3.3rem
            z-index 1
            img 
                width 100%
                height 100%
        .player-record
            width 4rem
            height 4rem
            position absolute
            top 1.6rem
            left 0.4rem
            border 1.3rem solid #000
            border-radius 50%
            overflow hidden
            img 
                width 100%
                height 100%
        .rotate-running
            animation: Move 10s linear;
            animation-iteration-count: infinite;
            animation-play-state:running;
        .rotate-paused
            animation: Move 10s linear;
            animation-iteration-count: infinite;
            animation-play-state:paused;
        @keyframes Move {
			0% {
				transform: rotate(0deg)
			}
			100% {
				transform: rotate(360deg)
			}
		}
</style>
