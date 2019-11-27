import * as types from './types';
import axios from '../plugins/axios';

export default {
    [types.UPDATE_BANNER]:({commit,state},payload)=>{
        axios({
            url:'/mock/home',
            params:{
                _limit:10
            }
        }).then(
            res=>commit(types.UPDATE_BANNER,res.data.data)
        )
    },
    [types.UPDATE_HOME]:({commit,state},payload)=>{
        axios({
            url:'/mock/home',
            params:{
                _limit:36
            }
        }).then(
            res=>commit(types.UPDATE_HOME,res.data.data)
        )
    }, 
    [types.UPDATE_MARKET]:({commit,state},payload)=>{
        axios({
            url:'/mock/home',
            params:{
                _limit:36
            }
        }).then(
            res=>commit(types.UPDATE_MARKET,res.data.data)
        )
    },
    changeItem:({commit,state},payload)=>{
        state.shopcar.forEach((item,index) => {
         if(item.id == payload.id){
            if(item.number<=0){
                state.shopcar.splice(index,1)
            }else{
                item.number+=payload.num
            }
         }
        });
        commit(types.CHANGE_ITEM,[...state.shopcar])
    },
    addItem:({commit,state},payload)=>{
        let arr=[...state.shopcar];
        let find=false;
        arr.forEach((item,index)=>{
            if(item.id==payload.id){
                if(payload.number){item.number+=payload.number}else{
                    item.number++
                }
                
                find=true
            }
        });
        if(!find){
            if(payload.number){arr.push(payload)}
            else{
                payload.number=1    ;
            arr.push(payload);
            }
            
            
        };
        commit(types.ADD_ITEM,arr)
    },
    [types.UPDATE_USER]: ({commit,state},payload)=>{
        let {username,password} =payload;
        return axios({
            url:'/mock/login',
            method:'post',
            data:{
                username:username,password:password
            }
        }).then(
            res=>{
                commit('UPDATE_USER',res.data);
                window.localStorage.setItem('old_app',JSON.stringify(res.data))

                return {err:res.data.err,msg:res.data.msg}
            }
        )
    },
    [types.UPDATE_DETAIL]:({commit,state},payload)=>{
        let {dataName,id} = payload;
        axios({
            url:'/mock/'+dataName+'/'+id

        }).then(
            res=>commit(types.UPDATE_DETAIL,res.data.data)
        )
    }








}