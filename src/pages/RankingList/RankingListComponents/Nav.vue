<template>
    <div class="nav">
        <div class="left-icon">
            <router-link class="iconfont back-icon" to="/" tag="div">&#xe62a;</router-link>
        </div>
        <div class="center-p">
            <p>歌单</p>
        </div>
        <div class="right-icon">
            <router-link class="iconfont player-icon" to="/player" tag="div">&#xe673;</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'RankingListNav'
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';
.nav
    width 100%
    height 1rem
    display: flex;
    line-height: 1rem;
    background-color $bgColor
    color: #fff;
    .left-icon
        margin-left .1rem
        width 1rem
        float left
        .back-icon
            text-align: center
            font-size: .5rem
    .center-p
        width 5.4rem
        height 1rem
        line-height 1rem
        text-align center
        font-size 0.32rem
    .right-icon
        width 1rem
        .player-icon
            text-align: center
            font-size: .5rem
</style>
