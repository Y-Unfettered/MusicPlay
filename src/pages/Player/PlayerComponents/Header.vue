<template>
    <div class="header">
        <div class="header-left" @click="getBack">
            <div class="iconfont back-icon">&#xe62a;</div>
        </div>
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
        getBack(){
            this.$router.go(-1)
        }
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
