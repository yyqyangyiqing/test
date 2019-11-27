import axios from 'axios';
import Vue from 'vue';

import vm from '../main';
import store from '../plugins/vuex'


//设置拦截器
//  添加一个请求的拦截
axios.interceptors.request.use(function (config) {
    // 在这里设置通用的请求头 设置好以后每一次发送就不需要携带了
    //设置通用的基础连接 baseUrl
    //强制设置提交方式 这些配置 写成对象 对象名就是config
    //config==axios({配置})
    //config.headers={'x-Requested-With':'XMLHttpRequest'}

    //在这里修改bLoading = true
    store.commit('VIEW_VLOADING',true)
   
    console.log(1)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// 添加一个响应的拦截
axios.interceptors.response.use(function (response) {
    // Do something with response data

    //这里修改bLoading = false
    store.commit('VIEW_VLOADING',false)
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });


  Vue.prototype.axios = axios; //实例属性

window.axios = axios

export default axios;
