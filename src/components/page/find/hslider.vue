<!--  -->
<template>
  <article>
    <swiper :options='options'>
      <swiper-slide v-for='item in advertsList' :key="item.href">
        <router-link :to="item.url">
          <img :src="item.picUrl" alt="" class="slide-img" />
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>     
    </swiper>   
  </article>
</template>

<script>
import advertsList from '@/common/mooc/getFindAd.json'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
export default {
  props: [],

  data () {
    return {
      options: {
        autoplay: true,
        loop: false,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      advertsList: [],
    };
  },

  created(){
    this.getAdByPlace();
  },

  mounted(){},

  watch: {},

  computed: {},

  methods: {
    getAdByPlace() {
      console.log('advertsList: ', advertsList)
      this.advertsList = advertsList.data.advertsList
      // axios({
      //   url: 'https://www.easy-mock.com/mock/5b8fc14106b4621da8247b73/shouchuang/getAdByPlace',
      //   method: 'get'
      // })
      // .then(res => {
      //   console.log('res: ', res)
      //   console.log('res.data.code: ', res.data.code)
      //   this.advertsList = res.data.data.advertsList
      //   // if(res.data.code === ERR_OK) {
      //   //   console.log(res.data.data.slider)
      //   //   this.recommends = res.data.data.slider
      //   // }
      // })
    }
  },

  components: {
    swiper, 
    swiperSlide
  }
}

</script>
<style lang='scss' scoped>
// @import '~swiper/dist/css/swiper.css'
@import "styles/element.scss";  
.swiper-slide{
  a.router-link-exact-active{
    img{
      width: 100%;
    }
  }      
}
.swiper-pagination> .swiper-pagination-bullet{
  width: 6px;
  height: 6px;
}
.slide-img{
  width: 100%;
}

.list {
  @include list(row);
  background: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;
  a{
    text-decoration: none;
  }
  .item{
    text-align: center;
    img{
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4{
      font-size: 26px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>