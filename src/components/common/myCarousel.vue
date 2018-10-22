<template>
    <div class="bannerbox">
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0"></li>
                    <li data-target="#carousel" data-slide-to="1" class="active"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item">
                    <img class="d-block w-100 slide-img" src="../../images/bg.png" alt="First slide">
                </div>
                <div class="carousel-item active">
                    <img class="d-block w-100 slide-img" src="../../images/banner-0.png" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 slide-img" src="../../images/banner2.png" alt="Third slide">
                </div>
            </div>
            <div class="carousel-control">
                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div class="logo-title">
            <div class="content">
                <div class="border-box"></div>
                <div class="content-box">
                    <h1>让14亿中国人<span>多加健康</span></h1>
                    <p>医美大健康领域综合服务平台</p>
                    <p>顶级医疗团队 + 高端客源 + 标准化服务流程 + 多元收益模式</p>
                    <button @click="joinIn()">立即加盟</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import $ from 'jquery'
    export default {
        name:"myCarousel",
        methods:{
            joinIn(){
               this.$store.commit('changeShow')
            }
        }
        
    }
</script>

<style scoped lang="less">
    .bannerbox{
        position: relative;
    }
    .bannerbox:hover{
        .carousel-control{
            display:block;
        }
    }
    .carousel-item{
        height:560px;
    }
    .slide-img{
        width:100%;
        height:100%;
    }
    .carousel-control{
        display:none;
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
    .slide .carousel-indicators{
        bottom: 22px
    }
    .carousel-control-next{
        background: url('../../images/icon-r.png');
    }
    .carousel-control-prev{
        background: url('../../images/icon-z.png');
    }
    .carousel-control-prev:hover{
        background: url('../../images/icon-l-active.png');
    }
    .carousel-control-next:hover{
        background: url('../../images/icon-y.png');
    }

    .carousel-indicators{
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
   
    .content{
        // position: absolute;
        // top: 164px;
        // left:219px;
        display:flex;

        .border-box{
            width:110px;
            height:300px;
            background: url('../../images/border.png')
        }
        .content-box{
            width:466px;
            color: #FFFFFF;
            height:110px;
            margin-left: -69px;
            h1{
                font-size: 36px;
                font-weight: 200;
                margin:57px 0 24px;
                span{
                    color:#FBC700;
                    font-weight: 400;
                }
            }
            p{
                font-size: 16px;
                margin-bottom:6px;
            }
            button{
                width:140px;
                height:40px;
                background-image: linear-gradient(-135deg, #2CBB55 0%, #2CBB86 100%);
                line-height:40px;
                font-size: 16px;
                color: #FFFFFF;
                margin-top:8px;
                font-weight:bold;
                outline: none;
            }
        }
    }
    .logo-title{
        width: 1200px;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        bottom: 0;
        right: 0;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
    }
</style>