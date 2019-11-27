
    <!-- <div class="news"> -->
        <!-- <ul style="overflow:hidden" class="list-group">
            <li v-for="(item,index) of this.list" :key="item.id" style="width:50%;height:240px;float:left" class="list-group-item list-group-item-info">


                <div>{{index+1}}</div>
                <router-link :to="'/newsdetail/'+item.id+'?dataName=home'">
                <img :src="item.detail.auth_icon" alt="" style="width:150px">
                </router-link>
                
                
                <div>{{item.des}}</div>
                <div>{{item.time | data}}</div>

            </li>
        </ul> -->
        <!-- <el-table :list="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                    height="auto"
                    border
                    stripe
                    style="width: 100%"
                    >
                    <el-table-column prop="name" label="name" width="280">
            </el-table-column>
                    
        </el-table>

        <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[1, 3, 5, 8]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totalNum">
            </el-pagination>
          </div>


    </div>
</template>

<script src='../assets/bootstrap-3.3.7-dist/js/jquery.js'></script>
<script src='../assets/bootstrap-3.3.7-dist/js/bootstrap.min.js'></script>


<style scoped>
@import url('../assets/bootstrap-3.3.7-dist/css/bootstrap.min.css');
</style>
    




<script>




import axios from 'axios'
export default {
    data(){
        return{
            list:[],
            currentPage: 1,//默认显示第一页
                pageSize:1,//默认每页显示10条
                totalNum: 1000 //总页数
        }
    },
    mounted(){
        axios({
            
            url:'/mock/home',
            params:{_page:1,_limit:36}
        }).then(
            res=>{
                console.log(res)
                this.list=res.data.data
                
            
            }
        )
    },
    methods:{

 handleSizeChange(val) {
                   console.log(`每页 ${val} 条`);
                   this.pageSize = val;    //动态改变
                },
                handleCurrentChange(val) {
                   console.log(`当前页: ${val}`);
                   this.currentPage = val;    //动态改变
                },
    },
   
                created(){
            this.totalNum=this.list.length;
        }

    
}
</script> -->
<template>
    <div class="news">
        <el-table :data="$store.state.list.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%;text-align:center" >
            
            <el-table-column  label="标题" width="180" align='center'>
                   <template   slot-scope="scope">
                <router-link :to="'/newsdetail/'+scope.row.id+'?dataName=home'" v-html="scope.row.title">  
                </router-link>
               </template>
                
            </el-table-column>
            <el-table-column  prop="detail.auth" label="作者" width="180" align='center'>
                <template   slot-scope="scope">
                <router-link :to="'/newsdetail/'+scope.row.id+'?dataName=home'" v-html="scope.row.detail.auth">  
                </router-link>
               </template>
            </el-table-column>
            <el-table-column  label="图片" style="width:5rem" align='center'>
                <template   slot-scope="scope"> 
                    <router-link :to="'/newsdetail/'+scope.row.id+'?dataName=home'" >           
                    <img :src="scope.row.detail.auth_icon"  min-width="70" height="70" />
                    </router-link>
                 </template>

               
            </el-table-column>
             <!-- <el-table-column  label="详情"  >
                 <template   slot-scope="scope"> 
                      <router-link :to="'/newsdetail/'+scope.row.id+'?dataName=home'" class="btn btn-warning">
                      点击查看
                      </router-link>
                 </template>

             </el-table-column> -->

            
        </el-table>
        <div class="pagination">
            <el-pagination 
                @size-change="handleSizeChange" 
                @current-change="handleCurrentChange" 
                :current-page="currentPage" 
                :page-sizes="[5, 10, 20, 40]" 
                :page-size="pagesize" 
                layout="total, sizes,prev, pager, next" 
                :total="$store.state.list.length" 
                prev-text="上一页" 
                next-text="下一页">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    import * as types from '../store/types'
    export default {
        name: "app",
        data() {
            return {        
                currentPage: 1, //默认显示页面为1
                pagesize: 5, //    每页的数据条数
                 //需要data定义一些，tableData定义一个空数组，请求的数据都是存放这里面
            }
        },
        mounted() {
            // this.getData();
            this.$store.dispatch(types.UPDATE_HOME)
        },
        methods: {
            // getData() {
            //     axios({url:'/mock/home'}).then(response => {
            //         console.log(response.data);
            //         this.tableData = response.data.data;
            //     }, response => {
            //         console.log("error");
            //     });
            // },
            //每页下拉显示数据
            handleSizeChange: function(size) {
                this.pagesize = size;
                /*console.log(this.pagesize) */
            },
            //点击第几页
            handleCurrentChange: function(currentPage) {
                this.currentPage = currentPage;
                /*console.log(this.currentPage) */
            },

        }
    }
</script>
<style scoped>
/* @import url('../assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'); */

</style>
