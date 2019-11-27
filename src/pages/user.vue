<template>
    <div class="user" >
         <el-row class="demo-avatar demo-basic" style="margin-top:1.6rem">
    <el-col :span="24">
      <div class="sub-title" style="width:100%;text-align:center;font-size:24px;color:red">{{user.nikename}}</div>
      <div class="demo-basic--circle">
        <div class="block" style="display: flex"><el-avatar :size="80" :src="user.icon" style="margin: auto"></el-avatar></div>
    
      </div>
    </el-col>  
    
  </el-row>

  <van-panel title="关注" desc="最近一年" :status=user.follow>
  
</van-panel>
<van-panel title="粉丝" desc="最近1年" :status=user.fans>
 
</van-panel>
<van-panel title="上次在线" desc="最近5年" :status='user.time |data'>
  
</van-panel>
 <el-button type="danger" @click='logout'>注销</el-button>

    </div>
</template>
<script>
import axios from 'axios';
import store from '../plugins/vuex';
import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
          // user:{},
        
     
      }
    },
    beforeRouteEnter(to,from,next){//前置守卫不能拿到$store  所以要用import手动引入store实例
        // axios({
        //     url:'/mock/user'
        // }).then(
        //     res=>res.data.err===0?next(_this=>_this.user=res.data.data):next('/login')
        // )
      store.state.user.err===0?next() : next('/login')




    },
    computed:mapGetters(['user']),
    methods:{
      logout(){
        this.$store.commit('CLEAR_USER');
        this.$router.push('/login')

      }
    }





  }
</script>
<style >



</style>