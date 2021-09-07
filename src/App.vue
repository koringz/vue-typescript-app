<template>
  <div id="app">
    <Header/>
    <div class="container">
        <keep-alive>
          <router-view />
        </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from 'components/Header'
export default {
  components: {
    Header,
  }
}
</script>

<style>
html,
body,
#app {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow: auto;
}
.container{
  margin-top: 48px;
  height: calc(100% - 48px);
  overflow: auto;
}

</style>
