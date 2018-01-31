<template>
  <ul>
      <li v-for="(v,index) in li" v-bind:key="index" @click="getgoods(v.category_id)">{{v.category_name}}</li>
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
      }
  },
   methods:{
      getgoods:function(id){
         this.$emit('getid',id); //向父组件传递id值
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
  }
}
</script>
<style scoped>
    ul li{
        font-size: .2rem;
        width: 100%;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
        border-bottom:1px solid rgb(235,235,235);
    }
</style>
