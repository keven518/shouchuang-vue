<!--  -->
<template>
  <div>
    <h2 :class="$style.title">kewen</h2>
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
<style module>
.title{
  color: #900;
  font-size: 36px;
}
</style>