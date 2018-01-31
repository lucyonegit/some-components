<template>
 <div class="main" >
    <div class="top"></div>
    <sel v-on:getid="getgoods" id="sel"></sel>         <!--滚动选择栏组件--> 
    <goodres  v-bind:goodid='ids' id="good"></goodres>   <!--商品列表栏组件--> 
 </div> 
</template>
<script>
import sel from './sellectcharge/sel'
import goodres from './sellectcharge/goods'
export default {
  name:"ww",
  data(){
    return{
      ids:1,
    }
  },
  methods:{
    getgoods:function(data){
      this.ids = data;
    },
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
  opacity: 0.4;
  background-color: cadetblue;
}
#sel{
  position: absolute;
  width: 30%;
  top: .8rem;
  left: 0;
  bottom: .9rem;
  overflow: scroll;
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
