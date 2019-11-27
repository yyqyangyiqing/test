<template>
    <div class="market">
    <van-card
  
  :price="item.price"
  :desc="item.des"  
  :title="item.title"
  :thumb="item.detail.auth_icon"
    v-for="item of $store.state.market"
    :key='item.id'
    @click-thumb= 'godetail(item.id)'
    :num= 'number(item.id)'

/>

</div>
</template>

<script>
import * as types from '../store/types'
export default {
    mounted(){
        this.$store.dispatch(types.UPDATE_MARKET);
        
    },
    methods:{
        godetail:function(key){
            console.log(key)
            this.$router.push('/goods/'+key+'?dataName=shop')
        }
    },
    computed:{
        number:function(){
            return function(e){
                let num = 0;
                 this.$store.state.shopcar.forEach(
                 item=>{
                     if(e = item.id){
                         num =  item.number
                     }
                 }
             )
             return num
            }
        }
    }
}
</script>


