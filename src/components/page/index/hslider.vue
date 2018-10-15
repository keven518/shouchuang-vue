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
import advertsList from '@/common/mooc/getAdByPlace.json'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
export default {
  props: [],

  data () {
    return {
      options: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      advertsList: [],
      items: [{
        // href: '/home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t14554/107/2216340839/36640/ecbf2d05/5a785d72Nec40e2bb.jpg?width=750&height=320'
      },{
        // href: '/home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t16213/283/2014672290/33503/a5e64858/5a785d99N5cd3136f.jpg?width=750&height=320'
      },{
        // href: '/home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t19342/207/437037473/41615/a77ec600/5a785db6N33b8cc7d.jpg?width=750&height=320'
      },{
        // href: '/home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t16486/292/2052342436/22366/2af9a69d/5a785dd3Nb5e10fbd.jpg?width=750&height=320'
      }],
      enters: [{
        href: '//jrappgw.jd.com/resources/downloadApp.html?id=473&activityid=226&sid=&qingfrom=url',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        title: '优惠券'
      },{
        href: '//wyyl.jd.com/static/page/html/index.html?sid=&qingfrom=url',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
        title: '领红包'
      },{
        href: '//m.jr.jd.com/spe/qyy/hzq/index.html?usertype=1176&mz&sid=&qingfrom=url#/',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
        title: '抢钢镚'
      },{
        href: '//jrappgw.jd.com/resources/downloadApp.html?id=308&activityid=224&sid=&qingfrom=url',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132',
        title: '领京豆'
      },{
        href: '//plogin.m.jd.com/user/login.action?v=t&appid=100&returnurl=https%3A%2F%2Fm.jr.jd.com%2Fjdbt%2FraiseAmount%2Findex.html',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        title: '白条提额'
      }],
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
<style lang='scss'>
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