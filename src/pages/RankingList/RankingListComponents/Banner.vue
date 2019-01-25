<template>
    <div class="banner">
        <img src="" alt="">
        <p>根据你的音乐口味生成，每天6：00更新</p>
    </div>
</template>

<script>
export default {
    name:"RankingListBanner"
}
</script>

<style lang='stylus' scoped>
.banner
    width 100%
    height 3.6rem
    background-color #ccc
    overflow hidden
    position relative
    img 
        width 100%
        height 100%
    p
        width: 100%;
        height: 0.79rem;
        position absolute
        bottom 0
        text-indent: 0.23rem;
        color: rgba(80, 80, 80, 1);
        font-size: 0.23rem;
        line-height: 0.79rem;
        text-align: left;
</style>
