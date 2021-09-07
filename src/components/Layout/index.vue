<template>
    <div class="layout-container">
        <Header/>
        <div>
            <Menu></Menu>
        </div>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Header from 'components/Header'
import Menu from 'components/Menu'
export default {
  components: {
    Header,
    Menu,
  }
}
</script>

<style>
.container{
  margin-top: 48px;
  height: calc(100% - 48px);
  overflow: auto;
}
</style>