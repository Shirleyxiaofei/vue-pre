<template>
  <div class="test">
    <h1><router-link to="/" exact>返回首页</router-link></h1>
    <h1>404</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  name: 'to404',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
