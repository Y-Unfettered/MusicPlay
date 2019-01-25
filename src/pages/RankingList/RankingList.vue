<template>
    <div class="rankinglist">
        <ranking-list-nav></ranking-list-nav>
        <ranking-list-banner></ranking-list-banner>
        <ranking-list-list></ranking-list-list>
    </div>
</template>

<script>
import RankingListNav from '@/pages/RankingList/RankingListComponents/Nav'
import RankingListBanner from '@/pages/RankingList/RankingListComponents/Banner'
import RankingListList from '@/pages/RankingList/RankingListComponents/List'
export default {
    name:"FM",
    data(){
        return{

        }
    },
    components:{
        RankingListNav,
        RankingListBanner,
        RankingListList
    }
}
</script>

<style lang='stylus' scoped>

</style>
