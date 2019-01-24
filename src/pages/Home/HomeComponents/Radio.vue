<template>
  <div class="radio">
    <div class="radio-nav">主播电台 ></div>
    <div class="radio-items">
      <ul>
        <li v-for="item in radioData" :key="item.id">
          <div class="radio-item-img">
            <img :src="item.picUrl" alt>
            <div class="radio-item-name">{{item.program.mainSong.artists[0].name}}</div>
          </div>
          <div class="radio-item-introduce">
            <p>{{item.program.mainSong.name}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {getFM} from "../../../API/GetData";
export default {
  name: "HomeRadio",
  data() {
    return {
      radioData: []
    }   
  },
  created() {
    this._getFM();
  },
  methods: {
    _getFM() {
      getFM().then(res => {
        let list = res.data.result;
        this.radioData = list.splice(0);
      });
    }
  }
};
</script>

<style lang='stylus' scoped>
.radio {
  width: 100%;
  height: 7.9rem;

  .radio-nav {
    width: 7.2rem;
    height: 0.9rem;
    text-indent: 0.23rem;
    color: rgba(80, 80, 80, 1);
    font-size: 0.32rem;
    line-height: 0.9rem;
    text-align: left;
  }

  .radio-items {
    width: 2.36rem;
    height: 3.38rem;

    ul {
      list-style: none;
      width: 7.2rem;
      margin-left: 0.1rem;

      li {
        float: left;
        margin-left: 0.04rem;
      }
    }

    .radio-item-img {
      width: 2.36rem;
      height: 2.36rem;
      background-color: rgba(238, 238, 238, 1);
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .radio-item-name {
        position: absolute;
        bottom: 0;
        left 0.1rem
        width: 2.36rem;
        height: 0.45rem;
        color: #fff;
        font-size: 0.25rem;
        text-align: left;
      }
    }

    .radio-item-introduce {
      width: 2.36rem;
      height: 1rem;
      overflow: hidden;

      p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          padding: 6px 2px 0 6px;
          line-height: 1.2;
          font-size: 13px;
      }
    }
  }
}
</style>
