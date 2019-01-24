<template>
    <div class="interface">
        <div class="interface-top">
            <div class="player-pointer">
                <img src="https://music.163.com/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862" alt="">
            </div>
            <div class="player-record">
                <img src="" alt="">
            </div>
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
                    <li class="iconfont" v-if="state" @click="changeState()">&#xe62c;</li>
                    <li class="iconfont" v-else  @click="changeState()">&#xe62d;</li>
                    <li class="iconfont">&#xe632;</li>
                    <li class="iconfont">&#xe615;</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"PlayerInterface",
    data(){
        return{
            state:false
        }
    },
    methods:{
        changeState(){
            return this.state = !this.state
        }
    }

}
</script>

<style lang='stylus' scoped>
.interface
    width 100%
    height 100%
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
