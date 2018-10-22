<template>
    <!-- 服务 -->
    <div class="service">
        <div class="title">
            <h2>多<span>+</span>提供的服务</h2>
            <p><span>SERVICE</span></p>
        </div>
        <div class="platform">
            <div class="platform-box">
                <h3>服务领域</h3>
                <p>医美 • 大健康</p>
                <div class="mark">
                    <h3>服务领域</h3>
                    <h4>医美 • 大健康</h4>
                    <span></span>
                    <p>多加网秉持“共创、共建、共享、共生”的核心理念，致力于大健康产业领域的优势资源整合和价值运营。</p>
                    <div class="eyes"></div>
                </div>
            </div>
            <div class="platform-box">
                <h3>面向人群</h3>
                <p>医院 • 医生 • 高端客户经理人</p>
                <div class="mark">
                    <h3>面向人群</h3>
                    <h4>医院 • 医生 • 高端客户经理人</h4>
                    <span></span>
                    <p>服务人群主要为医院、医生、医美、大健康领域从业者，以及非医美领域拥有高端客户的经理人等。</p>
                    <div class="eyes"></div>
                </div>
            </div>
            <div class="platform-box">
                <h3>产品体系</h3>
                <p>医美 • 大健康 • 金融 • 保险</p>
                <div class="mark">
                    <h3>产品体系</h3>
                    <h4>医美 • 大健康 • 金融 • 保险</h4>
                    <span></span>
                    <p>产品体系涵盖医美、大健康领域各项目服务，同时引进金融、保险、法律等与平台协同发展，以期在大健康领域建立全产业链“生态圈”。</p>
                    <div class="eyes"></div>    
                </div>
            </div>
            <div class="platform-box" style="width:49%">
                <h3>服务流程</h3>
                <p>标准化服务流程 • 24小时运营保障</p>
                <div class="mark">
                    <h3>服务流程</h3>
                    <h4>标准化服务流程 • 24小时运营保障</h4>
                    <span></span>
                    <p>平台形成了在线浏览产品、线上下单、线下服务客户、获取收益等一整套标准化服务流程，提供24小时运营保障。</p>
                    <div class="eyes"></div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/style/titCommon.less'
    export default {
        name:"service"
    }
</script>

<style scoped lang="less">
.service{
    width:1200px;
    margin: 0 auto 60px;
    .platform{
        display:flex;
        margin:0 auto;
        justify-content: center;
        flex-wrap: wrap;
    }
    
}
.platform-box{
    width:49%!important;
    height:350px;
    position: relative;
    background: url('../images/image1.png') no-repeat center center;
    background-size: 100% 100%;
    padding:0;
    border-radius: 10px;
    &:nth-child(1){
        margin-right:6px;
        margin-bottom:6px;
    }
    &:nth-child(2){
        background: url('../images/image2.png') no-repeat center center;
        margin-bottom:6px;
        background-size: 100% 100%;
    }
    &:nth-child(3){
        margin-right:6px;
        background: url('../images/image3.png') no-repeat center center;
        background-size: 100% 100%;
    }
    &:nth-child(4){
        background: url('../images/image4.png') no-repeat center center;
        background-size: 100% 100%;
    }
    &>h3{
            font-size: 20px;
            color: #FFFFFF;
            line-height:32px;
            margin:48.2px 0 7px 48px;
    }
    &>p{
        font-size: 16px;
        color: #9DA3B4;
        line-height:22px;
        margin-left:48px;
    }
}
.platform-box:hover{
    .mark{
       opacity: 1;
    }
}
.mark{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    border-radius: 10px;
    box-sizing: border-box;
    padding:46px;
    background: #1D1D28;
    border: 2px solid #2CBB55;
    opacity: 0;
    transition: opacity 0.8s;
    -webkit-transition: opacity 0.8s;
    &>p{
        font-size: 16px;
        color: #9DA3B4;
        line-height: 22px;
    }
    &>span{
        display:inline-block;
        width:40px;
        height:2px;
        background-image: linear-gradient(-135deg, #2CBB55 0%, #2CBB86 100%);
        margin:30.8px 0 28.2px;
    }
    &>h3{
        font-size: 20px;
        color: #FFFFFF;
        line-height: 32px;
        margin-bottom:7px;
    }
    &>h4{
        font-size: 16px;
        color: #9DA3B4;
        line-height: 22px
    }
    .eyes{
        width:65px;
        height:60px;
        background: url('../images/copy.png') no-repeat center right;
        float:right;
    }
}
@media screen and (max-width:998px){
    .platform{
        display:block;
    }
    .platform-child{
        margin:0 auto 20px;
    }
}
@media screen and (max-width:480px){
    .platform-child{
        width:80%;
    }
}
// @media screen and (max-width: 992px){
        
//     }
</style>