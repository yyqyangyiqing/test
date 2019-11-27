<template>
    <div class="car">
        
        <div v-for="(item,index) of $store.state.shopcar" :key="item.id">
            <img :src='item.detail.auth_icon' alt="">
             <p>{{index+1}}/种类:{{item.title}}</p>
            
             <div class='box' >
              <van-button type="warning" @click="changeItem({id:item.id,num:-1})">-</van-button>       {{item.number}}
                <van-button type="warning" style="margin-left:0.5rem" @click="changeItem({id:item.id,num:1})">+</van-button>
             </div>
            

        </div>
        <van-submit-bar
  :price= this.totalprice
  button-text="提交订单"
  @submit="onSubmit"
  style="bottom:6rem"
/>

    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
import { Dialog } from 'vant';
import { CHANGE_ITEM } from '../store/types';
export default {
    data(){
        return{
           
        }
    },
    computed:{
        
        ...mapState(['shopcar']),
        totalprice :function(){
            let totalprice = 0;
            this.$store.state.shopcar.forEach(element => {
                totalprice += element.price *element.number
                
            }); return totalprice
        },
        // num :function(){
        //     num = this.$store.state.shop
        // }
    },
    methods:{
        onSubmit(){
             Dialog({ message: '已下单' });
        },
        ...mapActions(['changeItem']),
    
    }
}
</script>