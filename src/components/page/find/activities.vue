<!--  -->
<template>
  <div class="group">
    <component :is="componentName" v-for="(item, i) in activitiesList" :key="i" :communityData="item"/>
  </div>
</template>

<script>
import communityActivities from './communityActivities'
import story from './story'
export default {
  props: {
    activitiesList: {
      type: Array,
      default: []
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

  components: {
    communityActivities,
    story
  }
}

</script>
<style lang='scss' scoped>
.group{  
  background: #fff;
  padding: 0 12px;
}
</style>