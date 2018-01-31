<template>
  <div class="p">
      <p v-if="goods.length==0">暂无数据...</p>
      <p v-for="(it,index) in goods" v-bind:key="index">{{it.product_name}}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name:"cbl",
  data(){
    return {
      x:1,
      goods:[],
    }
  },
  props:['goodid'],
  methods:{
    getdata:function()
    {
      let that = this;
      let url = "./good?id="+this.goodid;
      axios.get(url).then(function(res)
      {
          that.goods = res.data;
      }).catch(function(e){;})
    }
  },
  mounted(){
    this.getdata();
  },
  watch:{
    goodid:function(){
      this.getdata();
    },
  }
  
}
</script>
<style scoped>
.p{
  font-size: .15rem;
}
</style>
