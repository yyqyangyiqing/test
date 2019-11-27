<template>
    <div class="detail" v-if="this.detail.id">
            <el-page-header @back="goBack" content="详情页面">
            </el-page-header>
        
            
                <img :src='this.detail.detail.auth_icon' alt="" style="width:25rem;height:25rem">
                <br/>
                <div>{{this.detail.des}}</div>
                <br/>
                <br/>
                <div>{{this.detail.detail.content}}</div>

            
        


    </div>
</template>

<script>
import axios from "axios";
import {mapActions, mapState} from 'vuex'
export default {
    // data(){
    //     return{
    //         detail:{}
    //     }
    // },
    created(){
        // axios({
        //     url:'/mock/'+this.$route.query.dataName+'/'+this.$route.params.id

        // }).then(
        //     res=>{
        //         this.detail=res.data.data
        //     }
        // )
        this.$store.dispatch('UPDATE_DETAIL',{id:this.$route.params.id,dataName:this.$route.query.dataName})



    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    },
    computed:mapState(['detail'])
}
</script>