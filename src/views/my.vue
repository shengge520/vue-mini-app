<template>
<div class="me">
  <herder-two :title='newTitle'></herder-two>
  <!-- 头部公共组件 -->
  <div class="logos">
    <div class="logos_all">
      <div class="logos_img">
        <img src="@/assets/img/header.png">
      </div>
      <div class="logos_name">测试</div>
    </div>
    <div class="dingdan" @click="order">
      <div class="dingdan_left">
        <i class="iconfont icondingdan1"></i>
      </div>
      <div class="dingdan_right">
        我的订单
      </div>
    </div>
    <div class="dingdan" @click="dizhi">
      <div class="dingdan_left dz">
        <i class="iconfont iconjiudian"></i>
        <span class="gl">选择地址</span>
      </div>
      <div class="dingdan_right">
        <!-- 地址组件 -->
        <div>{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</div>
      </div>
    </div>
    <div class="dingdan" @click="guanyu">
      <div class="dingdan_left">
        <i class="iconfont iconyijianfankui"></i>
      </div>
      <div class="dingdan_right">
        联系我
      </div>
    </div>
    <!-- 时间选择 -->
    <div class="dingdan" @click="open('picker1')">
      <div class="dingdan_left dz">
        <i class="iconfont iconyuyuedingdan"></i>
        <span class="gl">日期选择</span>
      </div>
      <div class="dingdan_right">
        {{date1}}
      </div>
    </div>
    <!-- 时间 -->

    <mt-datetime-picker ref="picker1" v-model="pickerVisible" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="
  handleChange
">
    </mt-datetime-picker>

    <!-- 地址 -->
    <div>
      <mt-popup v-model="popupVisible" position="bottom">
        <div class="top">
          <div class="top_left" @click="close">
            取消
          </div>
          <div class="top_tight" @click="close">
            确定
          </div>
        </div>
        <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
      </mt-popup>
    </div>
  </div>
  <!-- 底部组件 -->
  <footer-bar class="footer"></footer-bar>
</div>
</template>

<script>
// 引入组件
import Footer from "../components/FooterBar.vue";
// 引入组件
import headerTwo from "../components/headerTwo.vue";
// 弹出框
// 地址三级联动json数据
import {
  MessageBox,
  Popup
} from "mint-ui";
import myaddress from "../../static/data/address3.json";
export default {
  // 开始
  components: {
    "footer-bar": Footer,
    'herder-two': headerTwo
  },
  name: "my",
  data() {
    return {
      newTitle: '个人中心',
      pickerVisible: '',
      date1: new Date().toISOString(new Date()).slice(0, 10), //默认显示的日期
      value: null,
      value1: new Date().toISOString(new Date()).slice(0, 10), //默认选中的日期
      //show: true,
      startDate: new Date("1995"), //表示开始的最小日期
      endDate: new Date(), //表示开始的最大日期
      popupVisible: false, //这个是控制弹出框的显示隐藏
      shareVisible: false, //分享
      // 地址
      myAddressSlots: [{
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],
      myAddressProvince: "省",
      myAddressCity: "市",
      myAddresscounty: "区/县"
    };
  },
  methods: {
    //获取地区列表
    onMyAddressChange(picker, values) {
      if (myaddress[values[0]]) {
        //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        this.myAddressProvince = values[0];
        this.myAddressCity = values[1];
        this.myAddresscounty = values[2];
      }
    },
    //订单
    order: function() {
      this.$router.push({
        path: "all_order"
      });
    },
    // index: function() {
    //   console.log(this.$store.state.count);
    // },
    // jia: function() {
    //   this.$store.commit("add");
    //   console.log(this.$store.state.count);
    //   // body...
    // },
    // jian: function() {
    //   this.$store.commit("reduce");
    //   console.log(this.$store.state.count);
    //   // body...
    // },
    // 关于
    guanyu: function() {
      MessageBox({
        title: "微信",
        message: "wf1656667614",
        showCancelButton: true
      });
    },
    //地址管理
    dizhi: function() {
      var _this = this;
      console.log(_this.popupVisible);
      _this.popupVisible = true;
    },
    // 关闭
    close: function() {
      var _this = this;
      _this.popupVisible = false;
    },
    // 分享开启和关闭
    share: function() {
      var _this = this;
      _this.shareVisible = true;
    },

    // 日期
    open(picker) {
      this.$refs[picker].open();
    },
    // 时间选择
    handleChange(value) {
      console.log(value, "value");
      var d = new Date(value);
      // youWant=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      var youWant =
        d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      console.log("", youWant);
      console.log(new Date().toISOString(value).slice(0, 10));
      this.date1 = youWant;
      //this.show = true;
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      //vue里面全部加载好了再执行的函数  （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = 0;
      // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
      //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
    });
  }
}
</script>

<style scoped>
.mint-popup-bottom {
  width: 100%;
  height: 30vh;
}

.top {
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  background: #fff;
  color: #353535;
  font-size: 0.32rem;
  border-bottom: 1px solid #eeeeee;
}

.dz {
  display: flex;
  align-items: center;
}

.gl {
  padding-left: 0.2rem;
}

.logos_name {
  padding-left: 0.2rem;
}

body {
  background: #eee;
}

.logos_all {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  background: #ffffff;
  margin-top: 1rem;
}

.logos_img {
  height: 1.8rem;
  width: 1.8rem;
}

.logos_img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.dingdan {
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.2rem 0.5rem;
}

.dingdan_left i {
  font-size: 0.65rem;
  color: #fe498f;
}

.dingdan_right {
  padding-left: 0.3rem;
}

#index {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.getout {
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.32rem;
  color: red;
  padding: 0.2rem 0.5rem;
  background: #fff;
}
</style>
