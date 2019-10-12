<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <div class="title">
          <span>Jimmy 测验小站</span>
        </div>
      </div>
    </div>

    <div>
      <router-view :key="$route.path"></router-view>
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
