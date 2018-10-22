<template>  
    <!-- 商家入驻 -->
    <div class="admission">
        <div class="admission-wrap">
            <div class="title">
                <h2>医院 & 医生专享</h2>
                <p style="height:69.8px;"><span>HOSPITAL ONLY</span></p>
            </div>
            <div class="admission-box">
                <dl class="admission-box-type margin-box" >
                    <dd>
                        <p>只对高端机构、医生专家开放接入，提升合作机构高端定位及品牌溢价</p>
                        <h3>高端定位</h3>
                    </dd>
                    <dt><img :src="require('../images/admission6.png')" alt=""></dt>  
                </dl>
                <dl class="admission-box-type margin-box" >
                    <dd>
                        <p>对接优质渠道商，让高端客户群找到与之消费能力匹配的真正好产品</p>
                        <h3>拓客增收</h3>
                    </dd>
                    <dt><img :src="require('../images/admission4.png')" alt=""></dt>  
                </dl>
                <dl class="admission-box-type margin-box" >
                    <dd>
                        <p>分期付服务，避免客户流失；免息授信，为您业务发展提供资金保障</p>
                        <h3>金融保障</h3>
                    </dd>
                    <dt><img :src="require('../images/admission5.png')" alt=""></dt>  
                </dl>
                <dl class="admission-box-type" >
                    <dt><img :src="require('../images/admission1.png')" alt=""></dt>  
                    <dd>
                        <h3>金牌服务</h3>
                        <p>平台为客户定制餐饮、住宿、交通、娱乐等线下服务体验，降低运营成本</p>
                    </dd>
                </dl>
                <dl class="admission-box-type" >
                    <dt><img :src="require('../images/admission2.png')" alt=""></dt>  
                    <dd>
                        <h3>学术交流</h3>
                        <p>汇集全球顶尖的科研专家与医生，不定期举办高端学术交流分享</p>
                    </dd>
                </dl>
                <dl class="admission-box-type" >
                    <dt><img :src="require('../images/admission3.png')" alt=""></dt>  
                    <dd>
                        <h3>减少开支</h3>
                        <p>科学合规的财税结构，有效避免各项税费支出</p>
                    </dd>
                </dl>
            </div>
            <div class="line">
                <img :src="require('../images/line.png')" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/style/titCommon.less'
    export default {
        name:"admission"
    }
</script>

<style scoped lang="less">
.admission{
    background: #272734;
    .title p{
        height:69.8px;
    }
    .admission-wrap{
        width:1200px;
        margin:0 auto;
        position: relative;
    }
}
.admission-box{
    display:flex;
    margin:0 auto;
    padding-bottom:60px;
    flex-wrap:wrap;
    width:100%;
    justify-content: center;
    dl{
        width:334px;
        text-align: center;
        margin-bottom:0;
        z-index: 2222;
        dd{
            margin-bottom:0;
            h3{
                margin:18px 0 10px;
                font-size: 16px;
                color: #FFFFFF;
            }
            p{
                width:225px;
                font-size: 14px;
                color: #9DA3B4;
                line-height:20px;
                margin:0 auto 0;
            }
        }
        dt{
            width:90px;
            height:90px;
            margin:0 auto;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
            -webkit-transition: all .3s ease-in-out;
            -moz-transition: all .3s ease-in-out;
            -ms-transition: all .3s ease-in-out;
            -o-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;
            img{
                width:100%;
                height:100%;
            }
        }
        dt:hover{
           -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -ms-transform: scale(1.2);
            -o-transform: scale(1.2);
            transform: scale(1.2);
            -webkit-transition: all .3s ease-in-out;
            -moz-transition: all .3s ease-in-out;
            -ms-transition: all .3s ease-in-out;
            -o-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;
        }
    }
}   
dl.margin-box{
    margin-bottom:147px;
    h3{
        margin:10px 0 18px!important;
    }
}
.line{
    width:1158px;
    height:246px;
    position: absolute;
    top:334px;
    left: 19px;
}
</style>