<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../image/banner/1.jpg" alt="1"></div>
        <div class="swiper-slide"><img src="../../image/banner/2.jpg" alt="2"></div>
        <div class="swiper-slide"><img src="../../image/banner/3.jpg" alt="3"></div>
        <div class="swiper-slide"><img src="../../image/banner/4.jpg" alt="4"></div>
        <div class="swiper-slide"><img src="../../image/banner/5.jpg" alt="5"></div>
    </div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
</template>

<script>

import Swiper from '../../../static/js/swiper.min.js'
    
export default {
 mounted(){
    var swiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    autoplay: {
        disableOnInteraction: false,
     },
    loop: true,
    autoHeight: true, //高度随内容变化
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })       
}
}
</script>

<style scoped>
@import url('../../../assets/css/swiper.min.css');
.swiper-container {
    width: 100%;
    height: 3rem;
}
.swiper-container img{
  width: 100%;
  height: 100%;
}
</style>




