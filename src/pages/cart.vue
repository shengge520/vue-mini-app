<template>
  <div class="cards">
    <!-- 公共部分 -->
    <header-one :title="newTitle"></header-one>
    <div class="zanwu"></div>
    <div class="all">
      <div class="cards_con" v-for="(car,index) in carts" :key="index">
        <div class="cards_con_select mui-input-row mui-checkbox">
          <input name="checkbox1" value="Item 1" type="checkbox" checked>
        </div>
        <div class="cards_con_left">
          <img v-bind:src="car.imgone" alt="">
        </div>
        <div class="cards_con_right">
          <div class="cards_con_right_up">
            <div class="cards_con_right_up_left">
              {{car.name}}
            </div>
            
          </div>
          <div class="cards_con_mid">
            ￥ <span class="price">{{car.price}}</span>
          </div>
          <div class="cards_cons">
            <div class="cards_cons_down">
            <div class="jian" @click="reduce(index)">
              <!-- <div class="jian" @click="jian(car.id)"> -->
              <i class="iconfont icon-jian ins"></i>
            </div>
            <input type="text" v-model="car.value" class="mid">
            <div class="jia" @click="add(index)">
              <!-- <div class="jia" @click="jia(car.id)"> -->
              <i class="iconfont icon-jia ins"></i>
            </div>
            </div>
            <div class="cards_cons_del" @click="$store.commit('shanchu')">
                 <img src="../../static/images/shanchu.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 没数据的时候 -->
    <div class="gwc" v-if="!carts.length">
      <div class="gwc_imgs">
        <!-- <i class="iconfont icon-konggouwuche ic"></i> -->
        <img src="../../static/images/no-order.png" class="no-img">
        <div class="go" @click="go">去逛逛</div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="btn">
      <div class="btn_left">
       <div class="mui-input-row mui-checkbox">
          <input name="checkbox1" value="Item 1" type="checkbox" checked>
        </div>全选
      </div>
      <div class="btn_mid" @click="go">
        <div class="btn_mid_left">总计:</div>
        <span class="pri">{{results}}</span><span class="heji">元</span>
      </div>
      <button class="btn_right" @click="$store.commit('settlement')">
        购买
      </button>
    </div>
    <!-- 底部组件 -->
    <!-- <footer-bar class="footer"></footer-bar> -->
  </div>
</template>

<script>
  // 引入vuex快捷写法
  import { mapState, mapMutations, mapGetters } from 'vuex'
  // 引入组件
  import header from '../components/headerOne.vue'
  export default {
    // 开始
    components: {
      'header-one': header
    },
    data() {
      return {
        results: '',
        newTitle:'购物车'
      }
    },
    computed: {
      carts() {
        console.log(this.$store.state.carts)
        //这里是计算价格
        var sum = 0
        for (var i = 0; i < this.$store.state.carts.length; i++) {
          sum +=
            this.$store.state.carts[i].value * this.$store.state.carts[i].price
        }
        this.results = sum
        return this.$store.state.carts
      }
    },
    methods: {
      ...mapMutations([
        'reduce', //减
        'add' //加
      ]),
      // ...mapGetters([
      //   'heji'
      // ]),
      //返回
      fanhui: function() {
        this.$router.go(-1)
      },
      // 去逛逛
      go: function() {
        var _this = this
        _this.$router.push({ path: 'main' })
      }
    }
  }
</script>
<style scoped>
header{
  font-size: 0.32rem;
}
.title{
      display: inline-block;
    padding-left: 0.2rem;
    background: #00cccc;
    color:#fff;
}
  .no-img {
    width: 3rem;
    height: 4rem;
  }
  .jian,
  .jia {
    border: 1px solid #eee;
    padding: 0 0.13rem;
  }
  .cards_top {
    height: 0.88rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 0.88rem;
    font-size: 0.32rem;
    z-index: 999;
    background: #eee;
  }
  .zanwu {
    margin-top: 0.9rem;
  }
  .cards_con {
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.2rem 0.2rem;
    background: #ffffff;
  }
  .cards_con_select{
    width:0.5rem;
height:2.5rem;
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;

  }
  .cards_con_left {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
  }
  .cards_con_left img {
    width: 100%;
    height: 100%;
  }
  .cards_con_right_up {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.3rem;
  }
  .cards_con_right {
    display: flex;
    flex-direction: column;
    padding-left: 0.2rem;
    width: 4rem;
  }
  .cards_con_mid {
    padding: 10px 0;
    color: #fe498f;
  }
  .price {
    font-size: 0.4rem;
  }
  .ins {
    font-size: 0.46rem;
  }

  .cards_cons{
    display: flex;
    justify-content: space-between;
  }
  .cards_cons_down {
    display: flex;
    align-items: center;
  }
  .cards_cons_del{
    display: flex;
    width:32px;
    height: 32px;
  }
  .cards_cons_del img{
    width:100%;
    height:100%;
  }

  .mid {
    width: 0.8rem;
    text-align: center;
    font-size: 0.4rem;
    border: none;
    /* margin: 0 0.2rem; */
  }
  .gwc {
    position: fixed;
    top: 1rem;
    left: 0;
    width: 100%;
    height: 90vh;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ic {
    font-size: 2rem;
    color: #fe498f;
  }
  .go {
    text-align: center;
    margin: 0.2rem auto 0;
    font-size: 0.2rem;
    color: #fff;
    background: #fe498f;
    padding: 0.2rem;
    border-radius: 0.5rem;
  }
  .btn {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #ffffff;
    border-top: 1px solid #eee;
  }
  .btn_left {
    display: flex;
    justify-content: flex-start;
    padding-left: 0.2rem;
  }
  .btn_mid {
    display: flex;
    justify-content: flex-start;
    color: #ff4c4c;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.35rem;
    text-align: center;
  }
  .btn_mid_left{
    display: flex;
    color: #666666;
  }
  .btn_right {
    display: flex;
    justify-content: center;
    color: #fff;
    width: 2.1rem;
    height: 0.88rem;
    background: #ff4c4c;
    line-height: 0.88rem;
    font-size: 0.32rem;
    border-radius: 10px;
    border:none;
  }
  .pri {
    font-size: 0.45rem;
    padding-left: 5px;
    color:#ff4c4c;
  }
  .heji {
    color: #ff4c4c;
    font-size: 0.3rem;
    padding-left: 4px;
  }
</style>
