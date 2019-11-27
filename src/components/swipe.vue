<template>
    <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item of $store.state.banner" :key ='item.id'><img :src="item.detail.auth_icon" alt=""></van-swipe-item>
  <!-- <van-swipe-item><img src="../assets/img/2.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="../assets/img/3.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="../assets/img/4.jpg" alt=""></van-swipe-item> -->
</van-swipe>



    </div>
</template>
<script>
export default {
    props:['banner','dataName']
}
</script>


<style  scoped>
.banner img{
    width:100%;height:20rem
}
</style>