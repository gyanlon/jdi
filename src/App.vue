<template>
  <div id="app">
    <div>
      <div class="header">
        <div class="title">
          <span>Jimmy 测验小站</span>
        </div>
      </div>
    </div>

    <div>
      <router-view :key="$route.path" v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
		startTest () {
      
		}
  },
  created:function(){
       this.$router.push('menu'); // 页面加载时跳转
  },
  data() {
    return {
      isRouterAlive : true
    }
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.title {
    line-height: 60px;
    height: 60px;
}
</style>
