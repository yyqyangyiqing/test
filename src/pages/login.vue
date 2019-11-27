<template>
  <div class="login">
    <div class="loginbox">
          <div class="name">登陆</div>

       <el-form ref="loginFormRef" >
        <el-form-item>
          <el-input v-model="username">
            <i slot="prefix" class="el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="password">
            <i slot="prefix" class="el-icon-lock"></i>
          </el-input>
        </el-form-item>
          <el-row>
            <el-col push="4">
              <router-link  to="/reg">
              <el-button type="primary" style="margin-right:0.7rem">注册</el-button>
              </router-link>
              <el-button type="success" @click="login">登录</el-button>
              <el-button type="info">重置</el-button>
            </el-col>
          </el-row>
      </el-form>


    </div>


  </div>
</template>

<style scoped>

.login{
    background: pink;height:100%;width: 100%;position: relative;
  }

.loginbox{position: absolute;width:20rem;height:16rem;left: 50%;top: 50%;margin-left: -10rem;margin-top:-13rem}
 .el-form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }

.loginbox .name{text-align: center;font:24px/24px ''}
</style>

<script>
import axios from 'axios';
import * as types from '../store/types'
export default {
  
  data() {
    return {
      // 用户登录表单数据对象(用户名、密码)
    
        username: '',
        password: '',
        errMess:''
      
    }
  },
  methods:{
    login(){
      this.$store.dispatch('UPDATE_USER',{
        username:this.username,
        password:this.password
      })



      
    .then(
        res=>{
        
          
          res.err===0?this.$router.push('/user'):this.errMess=res.msg;
        
        }
      )

    }
  }
}


</script>