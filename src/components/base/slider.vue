<!--  -->
<template>
  <section :class="cname">
    <slot></slot>       
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    cname: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false,
        }
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
    };
  },

  components: {
    swiper, 
    swiperSlide
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style lang='scss' scoped>
// @import '~swiper/dist/css/swiper.css'
</style>