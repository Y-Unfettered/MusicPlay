<template>
    <div class="Navs">
        <router-link class="nasicon" v-for="item in list" :key="item.id" tag="div"
        :to="'/RankingList/'+item.id">
            <div class="nasiconbox">
                <!-- v-for 循环出icon的unicode编码 使用v-html解决 -->
                <span class="iconfont nacs-icons" v-html="item.navsIcon"></span>
            </div>
            <span class="navs-span">{{item.navIiem}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'HomeNavs',
    props: {
        list: Array
    },
    data(){
        return{}
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl';
    .Navs
        width 100%
        overflow hidden
        border-bottom 0.02rem solid #ccc
        .nasicon
            float left
            width 33.3%
            background-color #fff
            margin-bottom .5rem
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
