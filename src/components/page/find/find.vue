<!--  -->
<template>
  <div class="page">
    <Slider />
    <title-panel mainTitle='社区活动' subhead='年轻人的能量场' url='www.baidu.com'/>
    <activities :activitiesList='communityActivities' :componentName='componentName1'/>
    <title-panel mainTitle='Hé 系青年故事' subhead='年轻人的能量场' url='www.baidu.com'/>
    <activities :activitiesList='communityActivities' :componentName='componentName2' />
  </div>
</template>

<script>
import communityActivities from '@/common/mooc/getCommunityActivities.json'
import Slider from './hslider'
import titlePanel from './title-panel'
import activities from './activities'
export default {
  name: '',

  data () {
    return {
      communityActivities: [],
      componentName1: 'communityActivities',
      componentName2: 'story'
    };
  },

  created(){
    this.getCommunityActivities()
  },

  mounted(){},

  watch: {},

  computed: {},

  methods: {
    getCommunityActivities() {
      this.communityActivities = communityActivities.data.helpCenters
    }
  },

  components: {
    Slider,
    titlePanel,
    activities
  }
}

</script>
<style lang='scss' scoped>
.page{
  padding-bottom: 56px;
}
</style>