<template>
    <!-- 合作伙伴轮播 -->
    <div class="partner">
        <div class="partner-wrap">
            <div class="title">
                <h2>多<span>+</span>合作伙伴</h2>
                <p><span>COOPERATION</span></p>
            </div>
            <div id="partner-carousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#partner-carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#partner-carousel" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-wrap">
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/logo-1.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/logo-2.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/logo-3.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/logo-4.png')" alt=""></div>
                            <div><img class="d-block w-100 slide-img" :src="require('../images/logo-5.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/logo-6.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/logo-7.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/logo-8.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/patner1.png')" alt=""></div>
                            <div><img class="d-block w-100 slide-img" :src="require('../images/patner2.png')" alt=""></div>
                        </div>
                        
                    </div>
                     <div class="carousel-item">
                        <div class="carousel-wrap">
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/patner3.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/patner4.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/patner5.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/patner6.png')" alt=""></div>
                            <div><img class="d-block w-100 slide-img" :src="require('../images/patner10.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/patner7.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/patner8.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/patner9.png')" alt=""></div>
                            <div class="carousel-item-box"><img class="d-block w-100 slide-img" :src="require('../images/patner11.png')" alt=""></div>
                            <div><img class="d-block w-100 slide-img" :src="require('../images/patner13.png')" alt=""></div>
                        </div>    
                    </div>
                </div>
                <div class="carousel-control">
                    <a class="carousel-control-prev" href="#partner-carousel" role="button" data-slide="prev">
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#partner-carousel" role="button" data-slide="next">
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>          
    </div>
</template>

<script>
import '../assets/style/titCommon.less'
import $ from 'jquery'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    name:'partner'
}
</script>

<style scoped lang="less">
    .partner{
        padding-bottom:50px;
    }
    .partner-wrap,{
        width:1200px;
        margin:0 auto;
    }
    .title{
        p{
            height:69.8px;
        }
    }
    #partner-carousel{
        width:1440px;
        overflow: hidden;
        margin-left: 50%;
        transform: translateX(-50%);
        height:322px;
        .carousel-inner{
            width:2880px;
            display:flex;
            //transition: transform 3s;
        }
        .carousel-inner .carousel-item{
            width:1440px;
        }
        .carousel-wrap{
            width:1200px;
            display:flex;
            flex-wrap:wrap;
            justify-content: center;
            margin:0 auto;
            &>div{
                width:224px;
                height:125px;
                margin-bottom:20px;
            }
            div.carousel-item-box{
                margin-right:20px;
            }
        }
    }
    .carousel-control-next, .carousel-control-prev {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        text-align: center;
        opacity:1;  
        color:#8989A1;
    }
    .carousel-control-next{
        background: url('../images/icon-r.png');
    }
    .carousel-control-prev{
        background: url('../images/icon-z.png');
    }
     .carousel-control-prev:hover{
        background: url('../images/icon-l-active.png');
    }
    .carousel-control-next:hover{
        background: url('../images/icon-y.png');
    }
    .carousel-indicators{
        bottom:0;
        margin-bottom:0;
        li{
            width:12px;
            height:12px;
            border: 1px solid #9DA3B4;
            border-radius:50%;
            background: transparent;
        }
        li.active{
            background: #2CBB55;
            border:none;
        }
    }
</style>