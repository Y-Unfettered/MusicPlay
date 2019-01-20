<template>
    <div class="Navs">
        <div class="nasicon" v-for="item in navsDatas" :key="item.id">
            <div class="nasiconbox">
                <!-- v-for 循环出icon的unicode编码 使用v-html解决 -->
                <span class="iconfont nacs-icons" v-html="item.navsIcon"></span>
            </div>
            <span class="navs-span">{{item.navIiem}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeNavs',
    data(){
        return{
            navsDatas:[
                {navIiem:"私人FM",navsIcon:"&#xe65b;",id:0},
                {navIiem:"每日歌曲推荐",navsIcon:"&#xe674;",id:1},
                {navIiem:"云音乐热歌榜",navsIcon:"&#xe673;",id:2},
            ]
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl';
    .Navs
        width 100%
        height 0
        padding-bottom 34%
        overflow hidden
        border-bottom 0.02rem solid #ccc
        .nasicon
            float left
            width 33.3%
            padding-bottom 33.3%
            background-color #fff
            text-align center
            .nasiconbox
                width: 1.13rem;
                height: 1.13rem;
                margin .5rem auto .1rem
                color: rgba(80, 80, 80, 1);
                background-color: $bgColor;
                border-radius: 0.56rem;
                font-size: 0.32rem;
                line-height: 1.13rem;
                text-align: center;
                .nacs-icons
                    width: 0.59rem;
                    height: 0.59rem;
                    left: 45rem;
                    top: 265.37rem;
                    font-size: 0.59rem;
                    color: rgba(255, 255, 255, 1)
                    .navs-span
                        width: 2.41rem;
                        height: 0.68rem;
                        top: 304.38rem;
                        color: rgba(80, 80, 80, 1);
                        font-size: 0.27rem;
                        line-height: 0.68rem;
                        text-align: center
</style>
