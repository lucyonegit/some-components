<template>
  <div class="p">
    <p v-if="goods.length==0">暂无相关商品...</p>
    <div class="tu" v-for="(data,index) in goods" v-bind:key="index" >
       <keep-alive>
        <router-link to="./goodxq">
            <img v-bind:src="data.product_img_url" alt="">
            <p>{{data.product_name}}</p>
        </router-link>
      </keep-alive>
    </div>
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
  created(){
    // this.getdata();
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.p p{
  margin:  .2rem auto;
}

.tu{
  width: 50%;
}
.tu img{
  display: block;
  width: 90%;
  margin-left: 5%;
  margin-top: .1rem;
  height: auto;
}
.tu a{
  color: rgb(120,120,120);
}
.tu p{
  padding: .1rem;
  height: .5rem;
  width: 100%;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
