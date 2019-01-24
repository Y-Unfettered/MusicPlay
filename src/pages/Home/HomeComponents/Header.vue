<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe740;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe62f;</span>
        输入歌名/歌手</div>
    <router-link class="header-right" to="/Player">
        <span class="iconfont arrow-icon">&#xe673;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {};
  }
};
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl';
    .header
        display flex
        height .86rem
        line-height .86rem
        background-color $bgColor
        color #fff
        .header-left
            margin-left .1rem
            width .8rem
            float left
            .back-icon
                text-align: center
                font-size: .5rem
        .header-input
            flex 1
            height .64rem
            line-height .64rem
            margin-top .11rem
            margin-left .1rem
            padding-left .2rem
            background-color #fff
            border-radius .1rem
            color #ccc
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff
            .arrow-icon
                font-size: .6rem
</style>

