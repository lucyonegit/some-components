<template>
  <div>
    <div class="top"><p>购物车</p></div>
    <div class="gwc">
      <byke v-for='(v,index) in data' v-bind:info='v' v-bind:key='index' v-on:updata="getall"></byke>
      <div class="buy">
        <span>合计:￥{{all}}</span>
        <p>去结账</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import byke from "./single/byke"
export default {
  name:'goodsbyke',
  data(){
    return{
      data:[],
      all:0,
    }
  },
  methods:{
      getall:function(){
          let that = this;
          
          axios.get('/goodbyke').then(function(res)
          {
           // console.log(res.data);
            var a = 0;
            for(var s=0;s<res.data.length;s++)
            {
              a += Number(res.data[s].total_price);
            }
            console.log(a);
           that.all = a;
          }).catch(function(e){;})  
    }
  },
  components:{byke},
  mounted(){
    let that = this;
    axios.get('/goodbyke').then(function(res){
      that.data = res.data;
      console.log(res.data);
    }).catch(function(e){;});
    this.getall();
  }
}
</script>
<style scoped>
.top{
  width: 100%;
  height: .8rem;
  background-color: cadetblue;
  position: fixed;
  z-index: 1000;
  top: 0;
}
.top p{
  width: 100%;
  line-height: .8rem;
  text-align: center;
  font-size: .22rem;
  color: white;
}
.gwc{
  position: absolute;   /*设置内容区域*/
  top: .8rem;
  bottom: .9rem;    /* header与footer */
  padding-bottom: .8rem;
  z-index: 1;
  width: 100%;
  overflow: scroll;
}
.buy{
  width: 100%;
  height: .8rem;
  position: fixed;
  bottom: .9rem;
  background-color:rgb(243, 243, 243);
  display: flex;
  flex-direction: row;

}
.buy span{
  font-size: .28rem;
  line-height: .8rem;
  padding-left: .5rem;
  flex-grow: 3;
  color: rgb(60,60,60);
  border-top: 1px solid rgb(205, 209, 211);
}
.buy p{
  font-size: .30rem;
  line-height: .8rem;
  text-align: center;
  flex-grow: 1;
  color: white;
  background-color: rgb(65, 98, 189);
}
</style>

