<template>
  <div>
      <div class="tt">
        <div class="main">
              <img src="../image/pcenter/Smile.png" alt="userimg" id="s1">
              <p>您还没有登录呢</p>
              <img src="../image/pcenter/more.png" alt="more" id="s2">
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name:"pcenter"
}
</script>
<style scoped>
.tt{
  width: 100%;
  height: 2.5rem;
  background-color: rgb(66, 169, 230);
   display: flex;
  flex-direction: row;
  align-items: center;
 
}
.main{
  width: 95%;
  height: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
#s1{
  width: .8rem;
  height: .8rem;
  border-radius: 100%;

}
.tt p{
  font-size: .25rem;
  margin-left: -1.2rem;
  color: white;
}
#s2{
  width: .4rem;
  height: .4rem;

  border-radius: 100%;
}

</style>
