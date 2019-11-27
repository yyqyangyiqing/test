<template>
  <div id="app">
    <Head v-if="bhead"></Head>
   <router-view v-loading="loading"></router-view>
   <Foot></Foot>
  </div>
</template>

<script>

import Home from './pages/home';
import News from './pages/news';
import Foot from './components/foot';
import User from './pages/user';
import Market from './pages/market';
import Goods from './pages/goods';
import Car from './pages/car';
import store from './plugins/vuex';
import { mapState } from 'vuex';
import Head from './components/head'
// import NewsDetail from "./pages/newsdetail";
export default {
  // data(){
  //   return{
  //     loading: store.state.vloading
  //   }
  // },
  name: 'app',
  components: {
   Home,News,Foot,User,Market,Goods,Car,Head
  },
  watch:{
    $route:{
      handler(nextRouter,prevRouter){
          let path = nextRouter.path
          if(/home|login|reg/.test(path)){
            store.commit('VIEW_Bhead',false)
          }else{
            store.commit('VIEW_Bhead',true)
          }
          
      }
    }
  },
  computed:mapState(['loading','bhead'])
  // mounted(){
  //   console.log(this.loading)
  // }
}
</script>

<style>
html,body,#app{

 height: 100%;

}
</style>
