<!--  -->
<template>
  <div class="page">
    <ad />
    <notice />
    <service-page />
  </div>
</template>

<script>
import ad from './ad'
import notice from './notice'
import servicePage from './servicePage'
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
    ad,
    notice,
    servicePage
  }
}

</script>
<style lang='scss' scoped>
</style>