<template>
    <div class="goods" v-if='detail.id'>
        <img :src="this.detail.detail.auth_icon" alt="" style="display:block;
        width:50%;margin:0 auto;margin-top:2rem;height:10rem">
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
         

        <van-goods-action style="bottom:6rem">
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="gocar" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addItem(detail)" />
            <van-goods-action-button type="danger" text="立即购买" @click="gocar" />
        </van-goods-action>

    </div>
</template>
<script>
import axios from "axios";
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            detail:{},
            num: 1
        }
    },
    created(){
        axios({
            url:'/mock/home'+'/'+this.$route.params.id

        }).then(
            res=>{
                this.detail=res.data.data
            }
        )
    },
    methods:{
        handleChange(value) {
            this.detail.number=this.num
      },
       onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
      gocar(){
        this.$router.push('/car')
    },
    ...mapActions(["addItem"]),
  
     
    }
      
    
}
</script>