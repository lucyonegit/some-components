<template>
  <ul>
      <li v-for="(v,index) in li" v-bind:key="index" @click="getgoods(v.category_id,index)" v-bind:class="{dack:index==ss}">{{v.category_name}}</li>
  </ul>
</template>
<script>
import axios from "axios";
export default {
  name:"cbl",
  data(){
      return {
          li:[],
          goods:[],
          ss:0,
      }
  },
  props:['nlist'],
  methods:{
      getgoods:function(id,index){
         this.$emit('getid',{nowid:id,nowlist:index}); //向父组件传递id值
         this.ss = index;//改变背景颜色
      },
  },
 
  mounted(){
      let that = this;
      axios.get('/list').then(function (res) {
         that.li = res.data;
        //console.log(res);
        }).catch(function (err) 
        {
            console.log(err);
        });
        this.ss = this.nlist;//改变背景颜色
  },
}
</script>
<style scoped>
    ul li{
        color: rgb(130,130,130);
        font-size: .2rem;
        width: 100%;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
        border-bottom:1px solid rgb(235,235,235);
    }
    .dack{
        background-color: rgb(240,240,240);
    }
</style>
