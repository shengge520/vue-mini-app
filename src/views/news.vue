<!--
 * @Author: MonkeyFirst
 * @LastEditors: MonkeyFirst
 * @Date: 2021-04-08 17:56:37
 * @LastEditTime: 2021-04-13 10:18:47
 * @Email: 1656667614@qq.com
 * @FilePath: \vue-mini-app\src\pages\news.vue
 * @Description: 
-->
<template>
  <div class="news_details">
    <div class="news_title">
      <i class="iconfont icon-fanhui" @click="fanhui"></i>
      新闻详情
      </div>
    <div class="details_con" v-for="(item,index) in newsdetails" :key="index">
      <div class="details_p">
        {{item.title}}
      </div>
      <div class="details_p">
        {{item.time}}
      </div>
      {{newsdetails.boxs}}
      <div class="cona_item" v-for="(box,index) in newsdetails[0].boxs" :key="index">
        <div class="details_p">
          {{box.p}}
        </div>
        <div class="details_img">
          <img v-bind:src="box.imgs" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {toolList} from "@/mock/shopList.js";
  export default {
    data() {
      return {
        newsdetails: toolList,
      }
    },
    created: function() {},
    mounted: function() {
    },
    methods: {
      fanhui:function(){
          var _this = this
        _this.$router.push({ path: 'main' })
      }
    }
  }
</script>
<style scoped>
  .news_title {
    height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.2rem;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 0.3rem;
    z-index: 999;
    background: #ffffff;
    width: 98%;
  }
  .details_con {
    margin-top: 1.2rem;
    padding: 0.2rem;
    background: #ffffff;
  }
  .details_p {
    font-size: 0.3rem;
  }
  .details_img img {
    width: 100%;
    height: 100%;
  }
</style>
