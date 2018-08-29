<!--  -->
<template>
  <div class="footer">
    <a class="nav-box">
        <i class="iconfont icon-shouye"></i>
        <div class="nav-txt">首页</div>
    </a>
    <a class="nav-box">
        <i class="iconfont icon-faxian"></i>
        <div class="nav-txt">发现</div>
    </a>
    <div class="nav-t">
        <div class="nav-t-box" ></div>
    </div>
    <a class="nav-box">
        <i class="iconfont icon-fuwu"></i>
        <div class="nav-txt">服务</div>
    </a>
    <a class="nav-box">
        <i class="iconfont icon-my1"></i>
        <div class="nav-txt">我的</div>
    </a>
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