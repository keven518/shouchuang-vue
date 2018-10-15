<!--  -->
<template>
  <div class="panel">
    <div class="img-box">
      <img :src="communityData.picUrl">      
    </div> 
    <div class="store-info">
      <p class="store-name">{{communityData.title}}</p> 
      <p class="store-intro">{{communityData.pageDescription}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    communityData: {
      type: Object,
      default: {}
    },
    componentName: {
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
  .img-box{
    img{
      width: 100%;
    }
  }
  .store-info {
    height: 60px;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    p.store-name {
      margin-bottom: 10px;
      font-size: 16px;
      color: #333;
      height: 28px;
      line-height: 28px;
      text-align: left;
      overflow: hidden;
    }
    p.store-intro {
      height: 28px;
      line-height: 28px;
      text-align: left;
      overflow: hidden;
    }
  }
}
</style>