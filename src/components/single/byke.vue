<template>
  <div class="m">
      <div class="sp">
          <img v-bind:src='imgurl' alt="">  <!--商品组件-->
      </div>
    <div class="lp">
        <div class="pp">
            <p>{{product_name}}</p>
        </div>
        <div class="zs">
            <div class="cc">
                <p>￥{{every_price}}</p>
            </div>
            <div class="che">
                <span id="s1" @click='add'>+</span>
                <p>{{info.ocount}}</p>
                <span id="s2" @click='del' v-bind:class="{dis:disable_flag}">-</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name:"byke",
  data(){
      return{
          imgurl:'',   //图片地址
          product_name:'',
          allprice:'',     //总价
          every_price:'',   //单价
          disable_flag:false,
      }
  },
  methods:{
      add:function(){
          if(this.info.ocount>=0){
              this.disable_flag=false;
          }
          this.info.ocount++;
          let allprice = Number(this.info.ocount)  * Number(this.every_price);
          this.set_todb(this.info.product_id,this.info.ocount,allprice);
          this.$emit('updata',{}); //向父组件传递更新总金额
      },
      del:function(){
          if(this.info.ocount>=1)
          {
            this.info.ocount--;
             let allprice = Number(this.info.ocount)  * Number(this.every_price);
            this.set_todb(this.info.product_id,this.info.ocount,allprice);
            this.$emit('updata',{}); //向父组件传递更新总金额
            if(this.info.ocount==0)
            {
                this.disable_flag = true;
            }
          }
      },
      set_todb:function(pid,count,allprice){                   //将修改的数据传到数据库
          let url = "/toorderdb?pid="+pid+"&count="+count+"&allprice="+allprice;
          axios.get(url).then(function(res){
           //console.log(res);
      }).catch(function(e){;})
      }
  },
  mounted(){
      let that = this;
      let url = "/bykegood?id="+this.info.product_id;
      //console.log(url);
      axios.get(url).then(function(res){
          that.imgurl = res.data[0].product_img_url;
          that.product_name = res.data[0].product_name;
      }).catch(function(e){;});
      that.every_price = this.info.price;
  },
  props:["info"], //接收从父组件传递的数据对象
}
</script>

<style scoped>
.m{
    width: 96%;
    height:1.8rem;  
    padding:2%;
    border-bottom: 1px solid rgb(240,240,240);
}
.sp{
    height:100%;
    width:1.8rem;
    float: left;
}
.sp img{
    width:100%;
    height: 100%;
    vertical-align: top; 
    border-radius: 3px;
}
.lp{
    height:1.8rem;
    margin-left: 1.8rem;
}
.pp{
    width: 100%;
    height: 50%;
}
.pp p{
    height: .7rem;
    font-size: .2rem;
    padding: .1rem .2rem .1rem .2rem;
    line-height: .35rem;
    color: rgb(100,100,100);
}
#pr{
    background-color: cadetblue;
    color: white;
    padding: 0 .1rem 0 .1rem;
    border-radius: 1rem;
}
.zs{
    width: 96%;
    height: 50%;
    padding:0 2% 0 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.zs .cc{
    width: 1.8rem;
    height: .5rem;
}
.cc p{
    width: 100%;
    height: 100%;
    font-size: .25rem;
    line-height: .5rem;
    color: red;
}
.zs .che{
    width: 1.5rem;
    height: .45rem;
    font-size: .3rem;
    border: 1px solid rgb(220,220,220);
    display: flex;
    flex-direction: row;
    border-radius: 1rem;
}
.che span{
    display: block;
    width:.5rem;
    height: .45rem;
    line-height: .45rem; 
    text-align: center;
    color: rgb(50,50,50);
}
.dis{
    background-color: rgb(240,240,240);
}
#s1{
    border-right: 1px solid rgb(220,220,220);
    border-radius: 1rem 0 0 1rem;
   
}
#s2{
      border-left: 1px solid rgb(220,220,220);
      border-radius: 0 1rem 1rem 0;
}
.che p{
    width: .5rem;
    line-height: .45rem;
    font-size: .22rem;
    color: rgb(50,50,50);
    text-align: center;

}
</style>

