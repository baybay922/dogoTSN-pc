<template>
  <div id="app">
    <!-- <Navbar/> -->
    <router-view/>
    <Customer />
    <Footer/>
  </div>
</template>

<script>
//import Navbar from './components/common/navbar'
import Customer from './components/customer' //客服
import Footer from './components/footer'
export default {
  name: 'App',
  components:{
    //Navbar,
    Customer,
    Footer
  }
}
</script>

<style lang="less">


</style>
