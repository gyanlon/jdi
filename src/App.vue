<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <div class="title">
          <span>Jimmy 测验小站</span>
        </div>
      </div>
    </div>

    <div class="aboutme" style="“”">
      <h2 class="ab_title" style=" color: blue; cursor: wait; " @click="startTest">新的测验</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
		startTest () {
      
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
  margin-top: 60px;
}
</style>
