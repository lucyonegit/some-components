<template>
  <div id="tt">
   <router-view id="rou"/>
   <bottombar id="bot"></bottombar>    <!--底部导航组件-->
  </div>
</template>
<script>
import bottombar from './components/main/bottom_bar';

export default {
  name: 'App',
  components:{bottombar},
}
</script>

<style>
#tt{
  height: 100%;
}
#rou{
  overflow: scroll;
  height: 100%;
  
}
#bot{
  position: fixed;
  bottom: 0;
  z-index: 10000;
}
</style>
