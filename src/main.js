import Vue from 'vue'
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './plugins/router';
import store from './plugins/vuex'



Vue.use(Vant);


Vue.config.productionTip = false;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(ElementUI);

Vue.use(Element, { size: 'small', zIndex: 3000 });


//全局注册过滤器
import filters from './filters/index';
for(var key in filters){   //filters 此时结构是 变量:函数
  Vue.filter(key,filters[key])//左K 右函数
}

//同步状态管理和localhost (取localhost)
let local = window.localStorage.getItem('old_app')
if(local){
  store.commit('UPDATE_USER',JSON.parse(local))// 这个动作是直接访问 mutations 直接修改state 这时local还是字符串 要转成对象
}









let vm = new Vue({
  render: h => h(App),
  router,store
}).$mount('#app');

export default vm
