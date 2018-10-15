<!--  -->
<template>
  <div class="top-banner">
    <img src="http://119.3.58.254:9999/h5/static/img/server-1.jpg">
    <div class="repair-btn">
      <img src="http://119.3.58.254:9999/h5/static/img/repair-img.png">
    </div>
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
.top-banner {
  width: 100%;
  position: relative;
  padding-bottom: 40px;
  img{
    width: 100%;
  }
  .repair-btn {
    height: 80px;
    width: 80px;
    position: absolute;
    right: 10px;
    bottom: -25px;
  }
}
</style>