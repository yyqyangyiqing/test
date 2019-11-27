import{UPDATE_BANNER,UPDATE_HOME,UPDATE_MARKET,CHANGE_ITEM,ADD_ITEM,UPDATE_USER,CLEAR_USER,VIEW_VLOADING,VIEW_Bhead,UPDATE_DETAIL} from './types'



export default {
    [UPDATE_BANNER]:(state,payload)=>state.banner =payload,
    [UPDATE_HOME]:(state,payload)=>state.list =payload,
    [UPDATE_MARKET]:(state,payload)=>state.market =payload,
    [CHANGE_ITEM]:(state,payload)=>state.shopcar =payload,
    [ADD_ITEM]:(state,payload)=>state.shopcar=payload,
    [UPDATE_USER]:(state,payload)=>state.user=payload,
    [CLEAR_USER]:(state,payload) =>{
        window.localStorage.removeItem('old_app');
        state.user = {err:1}
    },
    [VIEW_VLOADING] :(state,payload) => state.loading = payload,
    [VIEW_Bhead]:(state,payload)=>state.bhead = payload,
    [UPDATE_DETAIL]:(state,payload)=>state.detail = payload,

}