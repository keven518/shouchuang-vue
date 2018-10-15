<!--  -->
<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar.vue'
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

  components: {
    Navbar
  }
}

</script>
<style lang='scss' scoped>
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>