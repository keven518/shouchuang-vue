<!--  -->
<template>
  <div class="footer">
    <router-link tag="div" class="nav-box" to="/mainPage/index">
        <i class="iconfont icon-shouye"></i>
        <div class="nav-txt">首页</div>
    </router-link>
    <router-link tag="div" class="nav-box" to="/mainPage/find">
        <i class="iconfont icon-faxian"></i>
        <div class="nav-txt">发现</div>
    </router-link>
    <router-link tag="div" class="nav-t" to="/roomList">
        <div class="nav-t-box" ></div>
    </router-link>
    <router-link tag="div" class="nav-box" to="/mainPage/service">
        <i class="iconfont icon-fuwu"></i>
        <div class="nav-txt">服务</div>
    </router-link>
    <router-link tag="div" class="nav-box" to="/mainPage/myCenter">
        <i class="iconfont icon-my1"></i>
        <div class="nav-txt">我的</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
    };
  },

  created(){},

  mounted(){},

  watch: {},

  computed: {},

  methods: {},

  components: {}
}

</script>
<style lang='scss' scoped>
.footer{
  height: 56px;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  background: url(~assets/img/line-0.png) top left repeat-x #fff;
  display: flex;
  .nav-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    &.router-link-active{
      color: #97415E;
    }
    &.router-link-active:after {
      content: "";
      width: 10px;
      height: 10px;
      background: #97415E;
      position: absolute;
      left: 0px;
      right: 0px;
      margin: auto;
      border-radius: 6px;
      bottom: -6px;
    }
    i {
      text-align: center;
      line-height: 30px;
    }
    .nav-txt{
      text-align: center;
      font-size: 14px;
      line-height: 1;
    }
  }
  .nav-t {
    width: 90px;
    height: 100%;
    position: relative;
    .nav-t-box {
      position: absolute;
      width: 90px;
      height: 87px;
      background: url(~assets/img/nav-T.png) center 1px no-repeat;
      background-size: 120%;
      top: -38px;
    }
  }
  
}
</style>