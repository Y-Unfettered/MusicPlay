<template>
    <div class="header">
        <div class="header-left" @click="getBack">
            <div class="iconfont back-icon">&#xe62a;</div>
        </div>
        <div class="header-music">
            <p>{{this.$store.state.MusicPlaying.MusicName}}</p>
            <p>{{this.$store.state.MusicPlaying.MusicPlayer}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'PlayerHeader',
    data(){
        return{

        }
    },
    methods:{
        getBack(){
            this.$store.state.playListState = false
            this.$store.commit("setplayListState",this.$store.state.playListState)
            this.$router.go(-1)
        }
    }
}
</script>

<style lang='stylus' scoped>
.header
    width 100%
    height 1rem
    position fixed
    top 0
    .header-left
        width 1rem
        height 1rem
        line-height 1rem
        float left
        .back-icon
            text-align center
            font-size .54rem
            color #fff
    .header-music
        width 5rem
        height 1rem
        margin 0 auto 
        p 
            font-size: 0.32rem;
            line-height: .5rem;
            text-align: center;
            color #fff
    
</style>
