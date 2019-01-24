<template>
    <div class="mv">
        <div class="mv-nav">推荐MV ></div>
        <div class="mv-items">
            <ul>
                <li v-for="item in mvData" :key="item.id">
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
    data(){
        return{
            mvData:[
                        {
            "id": 10847667,
            "type": 5,
            "name": "Sola",
            "copywriter": "编辑推荐：Luis Fonsi新单曲《Sola》MV公开！ ",
            "picUrl": "http://p1.music.126.net/a0hgZrRN3mufRwQTzF0GAw==/109951163813481908.jpg",
            "canDislike": false,
            "duration": 205000,
            "playCount": 2833,
            "subed": false,
            "artists": [
                {
                    "id": 38154,
                    "name": "Luis Fonsi"
                }
            ],
            "artistName": "Luis Fonsi",
            "artistId": 38154,
            "alg": "featured"
        },
        {
            "id": 10851201,
            "type": 5,
            "name": "Kimagure Gumo",
            "copywriter": "编辑推荐：《Kimagure Gumo (気まぐれ雲)》预告PV上线！",
            "picUrl": "http://p1.music.126.net/SrvH2rUyn8oSFZ8SJpnz5A==/109951163811903706.jpg",
            "canDislike": false,
            "duration": 158000,
            "playCount": 174990,
            "subed": false,
            "artists": [
                {
                    "id": 31328211,
                    "name": "大野奈々"
                }
            ],
            "artistName": "大野奈々",
            "artistId": 31328211,
            "alg": "featured"
        },
        {
            "id": 10851206,
            "type": 5,
            "name": "火车向南  思念向北",
            "copywriter": "最新热门MV推荐",
            "picUrl": "http://p2.music.126.net/mu4JWwzoQaN96gjJA1SIFg==/109951163812196916.jpg",
            "canDislike": true,
            "duration": 240000,
            "playCount": 5958,
            "subed": false,
            "artists": [
                {
                    "id": 12094215,
                    "name": "李冬"
                }
            ],
            "artistName": "李冬",
            "artistId": 12094215,
            "alg": "hot_server"
        },
        {
            "id": 10848644,
            "type": 5,
            "name": "I Don't Remember Me (Before You) [Live]",
            "copywriter": "最新热门MV推荐",
            "picUrl": "http://p2.music.126.net/mIxg405q3TCmhKgbP7_BBw==/109951163812438578.jpg",
            "canDislike": true,
            "duration": 222000,
            "playCount": 2255,
            "subed": false,
            "artists": [
                {
                    "id": 1131021,
                    "name": "Brothers Osborne"
                }
            ],
            "artistName": "Brothers Osborne",
            "artistId": 1131021,
            "alg": "hot_server"
        }
            ]
        }
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
