<template>
    <div class="header">
        <router-link class="header-left" to="/">
            <div class="iconfont back-icon">&#xe62a;</div>
        </router-link>
        <div class="header-music">
            <p>晴天</p>
            <p>周杰伦</p>
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
        
    }
}
</script>

<style lang='stylus' scoped>
.header
    width 100%
    height 1rem
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
        width 1rem
        height 1rem
        padding-left 3rem
        p 
            font-size: 0.32rem;
            line-height: .5rem;
            text-align: center;
            color #fff
    
</style>
