<template>
  <div>
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
#rou{
  overflow: hidden;
  padding-bottom: 1rem;
}
#bot{
  position: fixed;
  bottom: 0;
}
</style>
