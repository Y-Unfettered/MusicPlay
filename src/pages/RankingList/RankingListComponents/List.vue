<template>
  <div class="list">
    <div class="list-nav" @click="setMusicList">
      <div class="left-icon">
        <div class="iconfont play-icon">&#xe62d;</div>
      </div>
      <div class="right-p">
        <p>播放全部</p>
      </div>
    </div>
    <div class="list-content">
      <ul>
        <li v-for="(item,index) in list" :key="item.id">
          <div class="list-index">{{index+1}}</div>
          <p class="music-name">{{item.al.name}}</p>
          <p class="music-player">{{item.ar[0].name}} - {{item.al.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RankingListList",
  props: {
    list: Array 
  },
  data(){
    return{

    }
  },
  methods:{
    setMusicList(){
      const MusicList = this.list
      MusicList.forEach(el => {
        const MusicItem = { 
          id : el.id,
          MusicName : el.al.name,
          MusicPlayer : el.ar[0].name,
          MusicBG : el.al.picUrl
        }
        axios.post('https://wd5641080783zkrsci.wilddogio.com/MusicList.json',MusicItem)
          .then(function (response) {})
          .catch(function (error) {
            console.log(error);
          });
      });
      console.log('set list 200')
    },
  }
};
</script>

<style lang='stylus' scoped>
.list
    width: 100%;
    height: 100%;
    .list-nav 
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        .left-icon 
            width: 1rem;
            height: 1rem;
            float: left;
            .play-icon 
                text-align: center;
                font-size: 0.5rem;
    .list-content 
        width: 7.5rem;
        ul 
            width: 7.2rem;
            margin: 0 auto;
            li 
                height: 1.1rem;
                border-top: 0.01rem solid #ccc;
                border-bottom: 0.01rem solid #ccc;
                .list-index
                    float left
                    width .94rem
                    height 1.1rem
                    line-height 1.1rem
                    text-align center
                    font-size .3rem
                .music-name 
                    width: 5.39rem;
                    height: 0.61rem;
                    color: rgba(80, 80, 80, 1);
                    font-size: 0.3rem
                    line-height: 0.61rem;
                    text-align: left;
                    white-space: nowrap;
                .music-player 
                    width: 5.39rem;
                    height: 0.3rem;
                    color: rgba(153, 153, 153, 1);
                    font-size: 0.23rem;
                    line-height: 0.3rem;
                    text-align: left;
                    white-space: nowrap;
</style>
