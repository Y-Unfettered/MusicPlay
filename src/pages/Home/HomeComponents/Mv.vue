<template>
    <div class="mv">
        <div class="mv-nav">推荐MV ></div>
        <div class="mv-items">
            <ul>
                <li v-for="item in list" :key="item.id">
                    <img :src="item.picUrl" alt="">
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeMv",
    props: {
        list: Array
    },
    data(){
        return{}
    }
}
</script>

<style lang='stylus' scoped>
.mv
    width 100%
    height 7.36rem
    .mv-nav
        width: 7.2rem;
        height: 0.9rem;
        text-indent: 0.23rem;
        color: rgba(80, 80, 80, 1);
        font-size: 0.32rem;
        line-height: 0.9rem;
        text-align: left;
    .mv-items
        width 100%
        height 6.46rem
        ul 
            width 100%
            li 
                float left
                width: 3.53rem;
                height: 3.11rem;
                margin-left .13rem
                img 
                    width: 3.53rem;
                    height: 2.03rem;
                p 
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    padding: 6px 2px 0 6px;
                    line-height: 1.2;
                    font-size: 13px;
</style>
