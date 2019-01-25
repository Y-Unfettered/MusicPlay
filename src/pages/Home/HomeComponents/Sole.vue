<template>
  <div class="sole">
    <div class="sole-nav">独家放送 ></div>
    <div class="sole-item" v-for="item in list" :key="item.id">
      <div class="sole-item-img">
        <img :src="item.picUrl" alt>
      </div>
      <div class="sole-item-name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSole",
  props: {
    list: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang='stylus' scoped>
.sole {
  width: 100%;
  height: 9.85rem;

  .sole-nav {
    width: 7.2rem;
    height: 0.9rem;
    text-indent: 0.23rem;
    color: rgba(80, 80, 80, 1);
    font-size: 0.32rem;
    line-height: 0.9rem;
    text-align: left;
  }

  .sole-item {
    width: 7.2rem;
    height: 3.03rem;
    margin-left .13rem

    .sole-item-img {
      width: 7.2rem;
      height: 2.36rem;
      border-radius .1rem
      overflow hidden
    }

    .sole-item-img img {
      width: 100%;
      height: 2.36rem;
    }

    .sole-item-name {
      width: 100%;
      height: 0.67rem;
      color: #000;
      font-size: 0.25rem;
      line-height: 0.67rem;
      text-align: left;
    }
  }
}
</style>
