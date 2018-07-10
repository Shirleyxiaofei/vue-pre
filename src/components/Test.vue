<template>
  <div class="test">
    <h1><router-link to="/" exact>返回首页</router-link></h1>
    <h1><router-link to="/test/details/">test details</router-link></h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  name: 'Test',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.test{
  background: #ead;
}

</style>
