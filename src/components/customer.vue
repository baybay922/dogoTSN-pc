<template>
    <div class="Customer ">
        <div class="calling">
            <div class="iconbox" onclick="NTKF.im_openInPageChat()">
              <div class="calling-icon icon1"></div>
              <a href="#">联系客服</a>
            </div>
            <div class="icon2">
              <div class="erweima">
                <img src="../images/erweima.png" alt="">
              </div>
            </div>
            <div class="iconbox" @click="backTop()">
              <div class="calling-icon icon3"></div>
              <div class="back-top">返回顶部</div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
    export default {
        name:"customer",
        methods:{
          backTop(){
              if ($('html').scrollTop()) {
                  $('html').animate({ scrollTop: 0 }, 1000);
                  return false;
              }
              $('body').animate({ scrollTop: 0 }, 1000);
              return false;            
              
          }
        }
    }
</script>

<style scoped lang="less">
.calling{
  width:44px;
  position: fixed;
  top: 50%;
  right:0;
  margin-top: -66px;
  .calling-icon{
    width:44px;
    height:44px;
    background-size: 100% 100%;
  }
  .iconbox{
    width:140px;
    height: 44px;
    display:flex;
    transition:transform 0.8s;
    a,.back-top{
      flex:1;
      background: #1FA646;
      color:#fff;
      font-size:14px;
      line-height:44px;
      text-align: center;
      text-decoration: none;
      font-weight: bold;
    }
  }
  .iconbox:hover{
    transform:translateX(-96px);
  }
  .icon1{
    background:url('../images/customer.png');
    background-size: 100% 100%;   
  }
  .erweima{
    position: absolute;
    right: 0;
    top: -153px;
    width:265px;
    height:261px;
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0);
    -o-transform: translate3d(100%, 0, 0);
    -moz-transform: translate3d(100%, 0, 0);
    -ms-transform: translate3d(100%, 0, 0);
    transition: opacity 0.8s;
    img{
      width: 100%;
    }
  }
  .icon2:hover{
    .erweima{
      right:50px;
      opacity: 1;
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(100%, 0, 0);
    }
  }
  .icon2{
    width:44px;
    height:44px;
    background:url('../images/QRcode.png');
    background-size: 100% 100%;
    margin:1px 0;
    position:relative;
  }
  
  .icon3{
    background:url('../images/top.png');
    background-size: 100% 100%;
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>