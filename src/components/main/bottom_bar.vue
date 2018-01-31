<template>    <!--底部导航栏组件-->
   <div class="bot">
       <router-link to="/index" class="a">
           <img src="../../image/bottom_bar/main.png" alt="">
           <span>主页</span>
       </router-link>
       <router-link to="/charge" class="a">
            <img src="../../image/bottom_bar/goods.png" alt="">
             <span>分类</span>
       </router-link>
        <router-link to="/goodsbyke" class="a">
           <img src="../../image/bottom_bar/apply.png" alt="">
           <span>购物车</span>
       </router-link>
        <router-link to="/pcenter" class="a">
           <img src="../../image/bottom_bar/pcenter.png" alt="">
           <span>个人中心</span>
       </router-link>
    </div>
</template>

<script>
export default {
  name:'bottom_bar',
}
</script>

<style scoped>
    .bot{
        width: 100%;
        height: .9rem;
        background-color:cadetblue;
        display: flex;
        flex-direction: row;
    }
    .a{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        justify-content: center;
    }
    .bot span{
        font-size: 0.13rem;
        color: white;
        margin-top: .04rem;
    }
    .bot img{
        width: 0.35rem;
        height: 0.35rem;
    }
</style>




