<template>
  <div>
      <top id="to"></top>                   <!--顶部搜索框组件-->
      <banner id="ban"></banner>              <!--轮播组件-->
  </div>
</template>

<script>

import top from './main/search';  
import banner from './main/banner'
export default {
  name: 'index',
  components:{top,banner}
}

</script>

<style>
#to{
  position: fixed;
  top: 0;
  z-index: 10000;
}
#ban{
  margin-top: .8rem;
}

</style>

