<template>
    <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/news">热点</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to='/market'>商城</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/user">用户</van-tabbar-item>
</van-tabbar>


</template>


<script>

    export default {
  data() {
    return {
      active: 0
    }
  }
}


</script>