<template>
  <div class="header">
    <div class="logo">
      <router-link to="/"><img src="../../assets/logo.png"></router-link>
    </div>
    <ul class="nav">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/case/">案例</router-link>
      </li>
      <li>
        <router-link to="/designer/">设计师</router-link>
      </li>
      <li>
        <router-link to="/estate/">热装楼盘</router-link>
      </li>
      <li>
        <router-link to="/villa/">别墅软装</router-link>
      </li>
      <li>
        <router-link to="/about/">关于</router-link>
      </li>
    </ul>
    <div class="tel">
      <img src="../../assets/tel.png"><h3 class="num">400-650-2118</h3>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Header',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    height: 100px;
    width: 100%;
    min-width: 1200px;
    padding: 0 5%;
    background: #eee;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    .router-link-exact-active{
      color: #d70060;
    }
    .logo{
      width: 15%;
      max-height: 100%;
      line-height: 100px;
      display: inline-block;
      float: left;
      img{
        width: 70%;
      }
    }
    .nav{
      width: 70%;
      height: 100%;
      line-height: 100px;
      display: inline-block;
      float: left;
      text-align: center;
      li{
        display: inline-block;
        line-height: 1;
        padding: 0.3em 1em;
      }
    }
    .tel{
      width: 15%;
      height: 100%;
      line-height: 100px;
      display: inline-block;
      text-align: right;
      float: left;
      img{
        max-height: 100%;
        line-height: 100px;
        max-width: 20%;
        width: 1.5em;
        display: inline-block;
      }
      .num{
        display: inline-block;
        max-width: 80%;
        height: 100%;
        line-height: 100px;
      }
    }
  }
</style>
