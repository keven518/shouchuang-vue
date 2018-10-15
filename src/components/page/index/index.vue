<!--  -->
<template>
  <div>
    <Slider />
    <div class="service-item">
      <div class="service-box">
        <a href="http://119.3.58.254:9999/h5/service/cleanUp.jsp">
          <i><img src="http://119.3.58.254:9999/h5/static/img/cleaning.png"></i> 
          <div class="txt">保洁</div>
        </a>
      </div> 
      <div class="service-box">
        <a href="http://119.3.58.254:9999/h5/service/laundry.jsp">
          <i><img src="http://119.3.58.254:9999/h5/static/img/wash.png"></i> 
          <div class="txt">洗衣</div>
        </a>
      </div> 
      <div class="service-box">
        <a href="http://119.3.58.254:9999/h5/service/life.jsp">
          <i>
            <img src="http://119.3.58.254:9999/h5/static/img/life.png">
          </i> 
          <div class="txt">生活</div>
        </a>
      </div> 
      <div class="service-box">
        <a href="http://119.3.58.254:9999/h5/service/merchant.jsp">
          <i><img src="http://119.3.58.254:9999/h5/static/img/commercial.png"></i> 
          <div class="txt">商户</div>
        </a>
      </div>
    </div>
    <div class="slide-touch">
      <ul>
        <li v-for="(item, i) of roomTypeRecommendList" :key="i">
          <a @click="toRoomType(item.roomTypeId)">
            <img :src="item.picUrl==null?'/static/img/NaI/250-166.jpg':item.picUrl" alt="">
            <em><img src="/static/img/img1_cover.png" alt=""></em>
            <div class="content-box">
              <div class="roomtype-name">{{item.roomTypeName}}</div>
              <div class="roomtype-address" v-if="item.hotelInfo.address!=null">{{item.hotelInfo.address}}</div>
            </div>
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import roomTypeRecommendList from '@/common/mooc/getRoomTypeRecommendList.json'
import Slider from './hslider'
import axios from 'axios'
export default {
  name: '',

  data () {
    return {
      roomTypeRecommendList: []
    };
  },

  created(){
    this.getRoomTypeRecommendList()
  },

  mounted(){},

  watch: {},

  computed: {},

  methods: {
    getRoomTypeRecommendList() {
      console.log('roomTypeRecommendList: ', roomTypeRecommendList)
      this.roomTypeRecommendList = roomTypeRecommendList.data.roomTypes
      // axios({
      //   url: 'https://www.easy-mock.com/mock/5b8fc14106b4621da8247b73/shouchuang/getRoomTypeRecommendList',
      //   method: 'get'
      // })
      // .then(res => {
      //   console.log('res-getRoomTypeRecommendList: ', res)
      //   console.log('res.data.code-getRoomTypeRecommendList: ', res.data.code)
      //   this.roomTypeRecommendList = res.data.data.roomTypes
      //   // if(res.data.code === ERR_OK) {
      //   //   console.log(res.data.data.slider)
      //   //   this.recommends = res.data.data.slider
      //   // }
      // })
    },
    toRoomType(){
      console.log('toRoomType')
    }
  },

  components: {
    Slider
  }
}

</script>
<style lang='scss' scoped>

.service-item {
  height: 60px;
  width: 100%;
  display: flex;
  .service-box {
    background: #e1e1e1;
    height: 100%;
    flex: 1;
    a {
      height: 100%;
      color: #000;
      display: flex;
      text-decoration: none;
      flex-direction: column;
      justify-content: center;
      i {
        height: 24px;
        margin-top: 6px;
        img {
          height: 100%;
          width: auto;
          margin: auto;
          display: inherit;
        }
      }
      .txt {
        text-align: center;
        line-height: 20px;
        margin-top: 4px;
        font-size: 14px;
      }
    }
  }
}
.slide-touch{
  width: 100%;
  padding-bottom: 56px;
  ul{
    width: 100%;
    li{
      width: 100%;
      position: relative;
      img{
        width: 100%;
      }
      em{
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        opacity: 1;
        width: 100%;
        height: 100%;
        transition: 0.4s linear;
        img{
          height: 100%;
          width: 100%;
        }
      }
      .content-box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .roomtype-name {
          height: 36px;
          line-height: 36px;
          text-align: center;
          font-size: 26px;
          width: 100%;
          color: #fff;
        }
        .roomtype-address {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
}
</style>