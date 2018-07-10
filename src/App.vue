<template>
  <div id="app">
    <Header/>
    <div class="section">
      <router-view/>
      <h1 v-for="i in 10" v-bind:key="i" :style="{textAlign: 'center'}">{{i}}</h1>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default {
  name: 'App',
  components: {Header, Footer}
}
</script>

<style lang="scss">
  .section{
    padding-top: 100px;
    width: 100%;
    background: #fff;
  }
</style>
