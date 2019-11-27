<template>
  <div class="login">
    <div class="loginbox">
      <div class="name" >注册</div>

      <el-form ref="loginFormRef">
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
          <el-col push="11">
            <el-button type="primary" @click="reg">注册</el-button>
            <!-- <el-button type="success">登录</el-button> -->
            <el-button type="info">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.login {
  background: pink;
  height: 100%;
  width: 100%;
  position: relative;
}

.loginbox {
  position: absolute;
  width: 20rem;
  height: 16rem;
  left: 50%;
  top: 50%;
  margin-left: -10rem;
  margin-top: -13rem;
}
.el-form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.loginbox .name {
  text-align: center;
  font: 24px/24px "";
}
</style>

<script>
import axios from "axios";
import { Dialog } from 'vant';
export default {
  data() {
    return {
      // 用户登录表单数据对象(用户名、密码)

      username: "",
      password: "",
      errMess:""
    };
  },
  methods: {
    reg() {
      // let formData = new FormData();
      // formData.append("username", this.username);
      // formData.append("password", this.password);
        
      axios({
        url: "/mock/reg",
        method: "post",
        data: {
           username:this.username,password:this.password
        }
      }).then(
          res=>{
              
              if(res.data.err===0){
                 Dialog({ message: '注册成功' });
                  this.$router.push('/login')
              }else{
                  this.errMess=res.data.msg
                   Dialog({ message: '注册失败,用户名必须为aa' });
              }
          }
      )
    }
  }
};
</script>