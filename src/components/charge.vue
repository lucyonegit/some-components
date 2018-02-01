<template>
 <div class="main" >
    <div class="top"><p>产品列表</p></div>
    <sel v-bind:nlist='list' v-on:getid="getgoods" id="sel" ></sel>         <!--滚动选择栏组件--> 
    <goodres v-bind:goodid='ids' id="good"></goodres>   <!--商品列表栏组件--> 
 </div> 
</template>
<script>
import sel from './sellectcharge/sel'
import goodres from './sellectcharge/goods'
export default {
  name:"ww",
  data(){
    return{
      ids:3,
      list:0,
    }
  },
  methods:{
    getgoods:function(data){
      this.ids = data.nowid;
      this.list = data.nowlist;
      localStorage.setItem('clickid', data.nowid); //保存商品列表状态
      localStorage.setItem('nowlist', data.nowlist); //保存滚动栏状态
    },
  },
  created(){
    if(localStorage.getItem('clickid') && localStorage.getItem('nowlist')){
      this.ids = localStorage.getItem('clickid')    //获取商品列表状态
      this.list = localStorage.getItem('nowlist'); //获取滚动栏状态
    }
    else{;}
  },
  mounted(){
    //this.ids = localStorage.getItem('clickid'); //获取状态
  },
  components:{sel,goodres},
  
}
</script>
<style scoped>
.main{
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;

}
.top{
  width: 100%;
  height: .8rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: cadetblue;
}

.top p{
  line-height: .8rem;
  text-align: center;
  color: white;
  font-size: .22rem;
}
#sel{
  position: absolute;
  width: 30%;
  top: .8rem;
  left: 0;
  bottom: .9rem;
  overflow: scroll;
   border-right: 1px solid rgb(235,235,235);
}
#good{
  position: absolute;
  width: 70%;
  top: .8rem;
  left: 30%;
  bottom: .9rem;
  overflow: scroll;
}



</style>
