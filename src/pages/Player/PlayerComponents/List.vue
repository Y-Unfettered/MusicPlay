<template>
    <div class="list" v-if="this.$store.state.playListState">
        <div class="list-nav">
            <div class="left-icon">
                <div class="iconfont play-icon">&#xe62d;</div>
            </div>
            <div class="right-p">
                <p>列表总数（100）</p>
            </div>
            <div class="clear">
                <div class="iconfont clear-icon">&#xe617;</div>
                <p>清空</p>
            </div>
        </div>
        <div class="list-content">
            <ul>
                <li>
                    <div class="list-index">1</div>
                    <p class="music-name">气愤了</p>
                    <p class="music-player">xiaoking</p>
                </li>
            </ul>
        </div>
        <div class="close" @click="changeListindex">
            <p>关闭</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"PlayerList",
    data(){
        return{
            playList:[]
        }
    },
    methods:{
        changeListindex(){
            this.$store.state.playListState = !this.$store.state.playListState
            this.$store.commit("setplayListState",this.$store.state.playListState)
        }
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
    .list-content 
        width: 7.5rem;
        ul 
            width: 7.2rem;
            margin: 0 auto;
            li 
                height: 1.1rem;
                border-top: 0.01rem solid #ccc;
                border-bottom: 0.01rem solid #ccc;
                .list-index
                    float left
                    width .94rem
                    height 1.1rem
                    line-height 1.1rem
                    text-align center
                    font-size .3rem
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
