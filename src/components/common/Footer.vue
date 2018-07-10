<template>
  <div class="footer">
    <div class="links">
      <p class="txt">友情链接:</p>
      <ul class="interlink">
        <li>
          <router-link to="/xxx">xxx</router-link>
        </li>
        <li>
          <router-link to="/xxx">xxx</router-link>
        </li>
        <li>
          <router-link to="/xxx">xxx</router-link>
        </li>
        <li>
          <router-link to="/xxx">xxx</router-link>
        </li>
        <li>
          <router-link to="/xxx">xxx</router-link>
        </li>
      </ul>
    </div>
    <div class="copyright">
      <p>@copyright</p>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Footer',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .footer{
    width: 100%;
    height: 90px;
    padding: 0 5%;
    background: #ddd;
    .links{
      width: 100%;
      height: 60px;
      line-height: 70px;
      .txt{
        width: 20%;
        height: 100%;
        text-align: right;
        float: left;
      }
      .interlink{
        width: 60%;
        height: 100%;
        float: left;
        text-align: center;
        li{
          display: inline-block;
          line-height: 1;
          padding: 0.3em 1.5em;
        }
      }
    }
    .copyright{
      width: 100%;
      height: 30px;
      line-height: 1;
      text-align: center;
    }
  }
</style>
