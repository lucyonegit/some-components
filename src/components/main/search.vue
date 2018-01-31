<template>
    <div class="m_top">
        <div class="f">
             <input type="text" placeholder="请输入商品名称...">
             <img src="../../image/main_top/se.png" alt="search">
        </div>
        <div class="n">
            <img src="../../image/main_top/mess.png" alt="mess">
            <a href="#">消息</a>    
        </div>  
    </div>
</template>
<script>
export default {
  name:'top'
}
</script>

<style scoped>
.m_top{
    width: 100%;
    height: .8rem;
    overflow: hidden;
    background-color: cadetblue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
.f{
    width: 60%;
    height: .5rem;
    margin-left: .5rem;
    background-color: white;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    line-height: .3rem;
     border-radius: 1rem;
  }
.f input{
    width: 80%;
    height: 100%;
    padding: 0 0 0 .2rem;
    border: 0;
    outline: none;
   
  }
.f img{
    width:0.3rem;
    height: .3rem;
    margin: 0.1rem 0.1rem 0.1rem 0.1rem;
}
.n{
    width: .5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.n img{
    width: .3rem;
    height: .3rem;
}
.n a{
    font-size: .12rem;
    color: white;
}

</style>


