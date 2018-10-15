<!--  -->
<template>
  <div class="panel">
    <div class="img-box">
      <img :src="communityData.picUrl"></div>
      <div class="story-g-info">
        <p class="story-intro" @click="sendPost">{{communityData.createTime|timefilter3}}</p>
        <p class="story-name">{{communityData.title}}</p>
        <p class="story-intro">{{communityData.pageDescription}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
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

  methods: {
    sendPost() {
      axios({
        url: 'http://localhost:3000/user/register',
        method: 'post',
        data: {
          userName: 'keven',
          password: 'this.password'
        }
      })
      .then(res => {
        console.log('res: ', res)
        if(res.data.code == 200) {
          Toast.success(res.data.message)
        }else{
          console.log('err: ', res.data.message)
          Toast.fail('注册失败')
        }
      })
      .catch((err) => {
        console.log('err: ', err)
      })
    }
  },

  components: {}
}

</script>
<style lang='scss' scoped>
.panel{
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
  .img-box {
    height: 80px;
    background: #ccc;
    width: 40%;
    float: left;
    position: relative;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .story-g-info {
    float: left;
    width: 60%;
    max-height: 100px;
    padding-left: 16px;
    box-sizing: border-box;
    p {
      height: 26px;
      line-height: 26px;
      text-align: left;
      overflow: hidden;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      &.story-intro {
        font-size: 12px;
        height: auto;
        color: #8f8f94;
      }
    }
  }
}
</style>