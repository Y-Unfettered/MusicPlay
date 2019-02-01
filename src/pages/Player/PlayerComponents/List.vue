<template>
    <div class="list" v-if="this.$store.state.playListState">
        <div class="list-nav" v-show="!this.$store.state.RollTime">
            <div class="left-icon">
                <div class="iconfont play-icon">&#xe62d;</div>
            </div>
            <div class="right-p">
                <p>列表总数（{{this.$store.state.getMusicList.length}}）</p>
            </div>
            <div class="clear">
                <div class="iconfont clear-icon">&#xe617;</div>
                <p>清空</p>
            </div>
        </div>
        <div class="list-nav-fixed" v-show="this.$store.state.RollTime">
            <div class="left-icon">
                <div class="iconfont play-icon">&#xe62d;</div>
            </div>
            <div class="right-p">
                <p>列表总数（{{this.$store.state.getMusicList.length}}）</p>
            </div>
            <div class="clear">
                <div class="iconfont clear-icon">&#xe617;</div>
                <p>清空</p>
            </div>
        </div>
        <div class="list-content">
            <ul>
                <li v-for="(item,index) in this.$store.state.getMusicList" :key="index" @click="getMusicID(item.id,index)">
                    <div class="list-index">
                       <p>{{index + 1}}</p> 
                    </div>
                    <p class="music-name">{{item.MusicName}}</p>
                    <p class="music-player">{{item.MusicPlayer}}</p>
                </li>
                <div class="null"></div>
            </ul>
        </div>
        <div class="close" @click="changeListindex">
            <p>关闭</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { getMusicUrl } from "API/GetData";
export default {
    name:"PlayerList",
    data(){
        return{}
    },
    methods:{
        changeListindex(){
            this.$store.state.playListState = !this.$store.state.playListState
            this.$store.commit("setplayListState",this.$store.state.playListState)
        },
        handleScroll(){
            let top = Math.ceil(document.documentElement.scrollTop) 
            if(top > 280){
                this.$store.state.RollTime = true
                this.$store.commit("setRollTime",this.$store.state.RollTime)
            } else{
                this.$store.state.RollTime = false
                this.$store.commit("setRollTime",this.$store.state.RollTime)
            }
        },
        getMusicID(id,index){
            console.log(id,index)
            var playing = this.$store.state.getMusicList[index];
            this.$store.commit("setMusicPlaying", playing);
            getMusicUrl(id).then(res => {
                res.data.data.forEach(element => {
                    this.$store.commit("setgitMusicSrc", element.url);
                });
            })
            this.$store.state.playListState = !this.$store.state.playListState
            this.$store.commit("setplayListState",this.$store.state.playListState)
        }
    },
    created(){
        // this.getMusicID(id)
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll)
    }
    
    
}
</script>

<style lang='stylus' scoped>
.list
    width 100%
    height 100%
    position absolute
    top 50%
    background-color #fff
    .list-nav 
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        .left-icon 
            width: 1rem;
            height: 1rem;
            float: left;
            .play-icon 
                text-align: center;
                font-size: 0.5rem;
        .right-p
            display inline-block
        .clear
            width 2rem
            height 1rem
            line-height 1rem
            float right 
            .clear-icon
                font-size: 0.5rem;
                padding-left .3rem
                float left
            p
                float left
                padding-left .15rem
    .list-nav-fixed
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        position fixed
        top 0
        background-color #fff
        .left-icon 
            width: 1rem;
            height: 1rem;
            float: left;
            .play-icon 
                text-align: center;
                font-size: 0.5rem;
        .right-p
            display inline-block
        .clear
            width 2rem
            height 1rem
            line-height 1rem
            float right 
            .clear-icon
                font-size: 0.5rem;
                padding-left .3rem
                float left
            p
                float left
                padding-left .15rem
    .list-content 
        width: 7.5rem;
        ul 
            width: 7.2rem;
            margin: 0 auto;
            background-color #fff
            li 
                height: 1.1rem;
                border-top: 0.01rem solid #ccc;
                border-bottom: 0.01rem solid #ccc;
                .list-index
                    float left
                    width 1.1rem
                    height 1.1rem
                    margin-right .2rem
                    text-align center
                    line-height 1.1rem
                    p
                        font-size .32rem
                .music-name 
                    width: 5.39rem;
                    height: 0.61rem;
                    color: rgba(80, 80, 80, 1);
                    font-size: 0.3rem
                    line-height: 0.61rem;
                    text-align: left;
                    white-space: nowrap;
                .music-player 
                    width: 5.39rem;
                    height: 0.3rem;
                    color: rgba(153, 153, 153, 1);
                    font-size: 0.23rem;
                    line-height: 0.3rem;
                    text-align: left;
                    white-space: nowrap;
            .null
                height 0.82rem
                background-color #fff
    .close
        width 100%
        height 0.82rem
        line-height 0.82rem
        text-align center
        background-color #ccc
        font-size: 0.28rem;
        color #fff
        position fixed
        bottom 0
</style>
