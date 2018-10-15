<!--  -->
<template>
  <div>
    <box gap="10px 10px">
    <group>
      <x-input title="用户名" v-model="name"></x-input>
      <x-input title="密码" type="password" v-model="password"></x-input>
    </group>
    <group>
      <x-button type="primary">提交</x-button>
    </group>
    </box>
  </div>
</template>

<script>
import { Box, Group, XInput, XButton } from 'vux'
export default {
  name: '',

  data () {
    return {
      name: '',
      password: ''
    };
  },

  created(){},

  mounted(){},

  watch: {},

  computed: {},

  methods: {},

  components: {
    Box,
    Group,
    XInput,
    XButton
  }
}

</script>
<style lang='scss' scoped>
</style>