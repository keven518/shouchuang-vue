<!--  -->
<template>
  <div class="panel">
    <h2 class="title-box">
      <span class="txt">{{mainTitle}}</span> 
      <a class="more" :href="url">更多 </a>
    </h2>
    <div class="subhead">{{subhead}}</div>
  </div>
</template>

<script>
export default {
  props: {
    mainTitle: {
      type: String,
      default: ''
    },
    subhead: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
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
.panel{
  background: #fff;
  padding: 0 12px;
  .title-box{
    height: 40px;
    line-height: 40px;
    padding: 4px 0 0 0;
    .txt {
      font-size: 20px;
      font-weight: bold;
      color: #444444;
      float: left;
    }
    .more {
      text-decoration: none;
      float: right;
      background: -webkit-linear-gradient(left, #ABB4BE , #6C7C8B);
      background: -o-linear-gradient(right, #ABB4BE, #6C7C8B);
      background: -moz-linear-gradient(right, #ABB4BE, #6C7C8B);
      background: linear-gradient(to right, #ABB4BE , #6C7C8B);
      line-height: 30px;
      color: #fff;
      padding: 0 20px;
      border-radius: 18px;
      margin-top: 5px;
    }
  }
  .subhead {
    font-size: 14px;
    color: #bebebe;
    line-height: 20px;
    padding: 0 0 16px 0;
  }
}
</style>