<template>
 <div class="main" >
  <div class="it" v-for="(v,index) in rec" v-bind:key='index'>
    <div class="pic"><img v-bind:src='v.product_img_url' alt="p"></div>
    <div class="pro"></div>
  </div>
 </div>
</template>
<script>
import axios from 'axios'
export default {
  name:"ww",
  data(){
    return {
      rec:[],
    }
  },
  mounted(){
    let that = this;
    axios.get('/charge').then(function(res)
    {
      that.rec = res.data;
      //console.log(res.data);
      
    }).catch(function(err){;})
  }
}
</script>
<style scoped>
.main{
  margin: 0;
  padding: 0;
}
.ss{
  font-size: .14rem;
}

.it{
  width: 100%;
  height: 1.3rem;

 padding: 0.05rem 0 0 0.05rem;
}
.pic{
  width: 1.3rem;
  height: 1.3rem;
  float: left;
}
.pic img{
  width: 100%;
  height: 100%;
}
.pro{
    width:100%;
    height: 100%;

    margin-left: 1.3rem;
}

</style>
