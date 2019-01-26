<template>
    <div class="interface" v-if="!this.$store.state.RollTime">
        <div class="interface-top">
            <div class="player-pointer">
                <img src="https://music.163.com/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862" alt="">
            </div>
            <div class="player-record" :style="{ 'background': 'url(' + this.$store.state.MusicPlaying.MusicBG + ') no-repeat center center', 'background-size': '100% 100%'}"></div>
        </div>
        <div class="interface-bottom">
            <div class="ProgressBar">
                <div class="ProgressBar-null"></div>
                <div class="ProgressBar-solid"></div>
            </div>
            <div class="Controller">
                <ul>
                    <li class="iconfont">&#xe62e;</li>
                    <li class="iconfont">&#xe631;</li>
                    <li class="iconfont" v-if="this.$store.state.playState" @click="changeState()">&#xe62c;</li>
                    <li class="iconfont" v-else  @click="changeState()">&#xe62d;</li>
                    <li class="iconfont">&#xe632;</li>
                    <li class="iconfont" @click="changeListState()">&#xe615;</li>
                </ul>
            </div>
        </div>
        <audio ref="audio" @click="startPlayOrPause"  @pause="onPause" @play="onPlay" :src="this.$store.state.gitMusicSrc"></audio>
    </div>
</template>

<script>
import axios from "axios";
import { getMusicUrl } from "API/GetData";
export default {
    name:"PlayerInterface",
    data(){
        return{}
    },
    methods:{
        changeState(){
            this.$store.state.playState = !this.$store.state.playState
            this.$store.commit("setPlayState",this.$store.state.playState)
            this.startPlayOrPause()
        },
        changeListState(){
            this.$store.state.playListState = !this.$store.state.playListState
            this.$store.commit("setplayListState",this.$store.state.playListState)
        },
        //控制音频的播放与暂停
        startPlayOrPause () {
            return this.$store.state.playState ? this.play() : this.pause()
        },
        // 播放音频
        play () {
            this.$refs.audio.play()
        },
        // 暂停音频
        pause () {
            this.$refs.audio.pause()
        },
        // 当音频播放
        onPlay () {
            this.$store.state.playState = true
        },
        // 当音频暂停
        onPause () {
            this.$store.state.playState = false
        }
    },
    mounted(){
        // this.$store.commit("setMusicPlaying",)
        // const id = this.$store.state.MusicPlaying.id
        // getMusicUrl(id).then(res =>{
        //         res.data.data.forEach(element => {
        //             console.log(element.url)
        //             this.$store.commit("setgitMusicSrc",element.url)
        //         });
        // })
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
    .interface-bottom
        width 100%
        height 3.3rem
        .ProgressBar
            width 100%
            height 1rem
            padding-left .1rem
            position relative
            .ProgressBar-null
                width 7rem
                height .1rem
                background-color #fff
                border-radius .1rem
                position absolute
                top 50%
                left 50%
                transform translate(-50%,-50%)
            .ProgressBar-solid
                width 0rem
                height .1rem
                border-radius .1rem
                background-color #000
                position absolute
                top 50%
                left 4%
                transform translate(0%,-50%)
        .Controller
            width 100%
            height 2.32rem
            ul
                width 100%
                padding-top .5rem
                li
                    float left
                    width 20%
                    text-align center
                    font-size 1rem

</style>
