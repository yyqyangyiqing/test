<template>
    <div class="home">
        <Swipe :banner='$store.state.banner' dataName='home'></Swipe>
    </div>
</template>
<script>
import Swipe from '../components/swipe';
import * as types from '../store/types'
export default {
    
    components:{
        Swipe
    },
    mounted(){
        this.$store.dispatch(types.UPDATE_BANNER)
    }

}
</script>