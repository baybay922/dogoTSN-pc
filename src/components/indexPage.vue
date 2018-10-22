<template>
  <!-- 首页 -->
  <div class="index">
    <League />
    <Navbar />
    <MyCarousel/>   
    <Service />
    <Advantage/>
    <Increase />
    <Admission />
    <Partner />
    <Process />
  </div>
</template>

<script>
import MyCarousel from './common/myCarousel' //轮播
import Service from './service' //服务
import Partner from './partner' //合作伙伴轮播
import Process from './process' //步骤
import Admission from './admission' //商家入驻
import Advantage from './advantage' //优势
import Increase from './increase' //计算器
import League from './league' //加盟
import Navbar from './common/navbar'
export default {
  name: 'indexPage',
  components:{
    Navbar,
    MyCarousel,
    Service,
    Admission,
    Partner,
    Process,
    Advantage,
    Increase,
    League
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .index{
    background:#000;
  }
</style>
