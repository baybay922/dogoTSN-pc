<template>
    <!-- 页脚 -->
    <div class="footer">
        <div class="top">
            <div class="left">
                <dl>
                    <dt><img :src="require('../images/f-logo1.png')" alt=""></dt>
                    <dd>
                        <h3>多加网络协同服务平台</h3>
                        <p>DUOJIA NETWORK COOPERATIVE SERVICE PLATFORM</p>
                    </dd>
                </dl>
                <!-- <div class="icon">
                    <i class="wechat"></i>
                    <i class="qq"></i>
                    <i class="sina"></i>
                </div> -->
            </div>
            <div class="right">
                <ul class="right-list">
                    <!-- <li><a href="/newsInfo?ind=2">新闻动态</a></li> -->
                    <li><router-link to="/news">平台动态</router-link></li>
                    <li><router-link to="/contactUs">联系我们</router-link></li>
                    <li><a href="http://company.zhaopin.com/CZ641507330.html" target="view_window">招贤纳士</a></li>
                </ul>
                <ul class="right-list">
                    <li v-for="(item,index) in footNav" :key="index" @click="scrollTo(index)">
                        <a>{{item}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <h3><i class="icon-call"></i>400-111-6369</h3>
                <p>客服中心唯一官方热线</p>
            </div>
            <dl class="right">
                <dd>
                    <p>多加网络协同服务平台 | 叁生众康生物科技有限公司</p>
                    <p>京ICP备18016677 Copyright ©2018 多加网络协同服务平台</p>
                    <p>扫一扫关注多加网络协同服务平台</p>
                </dd>
                <dt>
                    <img :src="require('../images/f-logo2.png')" alt="">
                </dt>
            </dl>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name:"footerPage",
        data(){
            return {
                footNav:['企业简介','企业历程','管理团队','企业文化']
            }
        },
        methods:{
            scrollTo(ind){
                let path = {path:"/aboutUs",query:{index:ind}}
                this.$router.push(path);
                if(this.$route.path === '/aboutUs'){
                    $('#aboutUs').children('a').addClass('router-link-exact-active router-link-active');
                    let DivArr = $('.about-us').children().slice(2);
                    $('html,body').animate({'scrollTop':($(DivArr[ind]).offset().top -60) + 'px'},800)
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .footer{
        box-sizing: border-box;
        // padding:0 219px;
        background: #000000;
        
        .bottom{
            display:flex;
            justify-content: space-between;
            padding:40px 0 60px;
            align-items: center;
            width:1200px;
            margin-left:50%;
            transform:translateX(-50%);
            .left{
                h3{
                    font-size: 30px;
                    color: #FBC700;
                    display:flex;
                    align-items: center;
                    .icon-call{
                        width:30px;
                        height:30px;
                        display:inline-block;
                        background: url('../images/tel.png') ;
                        background-size: 100% 100%;
                        margin-right:10px;
                    }
                }
                p{
                    font-size: 14px;
                    color: #9DA3B4;
                }
            }
            .right{
                display:flex;
                align-items: center;
                margin-bottom:0;
                dd{
                    margin-bottom:0;
                    margin-right:20px;
                    p{
                        text-align:right;
                        font-size: 14px;
                        line-height:20px;
                        color: #9DA3B4;
                        margin-bottom:8px;
                    }
                }
                dt{
                    img{
                        width:98px;
                    }
                }
            }
        }
    }
    .top{
        width:1200px;
        margin-left:50%;
        transform:translateX(-50%);
        border-bottom: 1px solid #363645;
        padding-top:40px;
        display:flex;
        justify-content: space-between;
        //align-items: center;
    }
    .left{
        dl{
            display:flex;
            align-items: center;
            img{
                width:73px;
                height:61px;
            }
            dd{
                margin-left:15px;
                margin-bottom:0;
                h3{
                    font-size: 16px;
                    color: #FFFFFF;
                    margin-bottom:6px;
                }
                p{
                    font-size: 12px;
                    color: #9DA3B4;
                    margin-bottom:0;
                    line-height: 17px;
                }
            }
        }
        .icon{
            color:#fff;
            margin:39px 0 30px;
            i{
                display:inline-block;
                width:40px;
                height:40px;
                text-align: center;
                line-height:40px;
                border:1px solid  #484855;;
                border-radius: 50%;
                font-style:normal;
                margin-right:10px;

            }
            .wechat{
                background: url('../images/wechat.png');
                background-size: 100% 100%;
            }
            .qq{
                background:url('../images/qq.png');
                background-size: 100% 100%;
            }
            .sina{
                background:url('../images/sina.png');
                background-size: 100% 100%;
            }
        }
    }
    .right{
        display:flex;
        .right-list{
            &:nth-child(1){
                margin-right:80px; 
            }
            li{
                margin-bottom:10px;
                a{
                    font-size: 14px;
                    color: #9DA3B4;
                    cursor:pointer;
                }
                a:hover{
                    text-decoration: none;
                }
            }
        }
    }
    @media screen and (max-width:1500px){
        .footer{
            padding:0 100px;
        }
    }
    @media screen and (max-width:1200px){
        .footer{
            padding:0 30px 20px;
            .left{
                img{
                    width:40px!important;
                }
            }
            .right-list{
                margin-right: 20px!important;
            }
        }
    }
    @media screen and (max-width: 700px){
        .footer{
            .top{
                display:block;
            }
            .bottom{
                display: block;
            }
        }
    }
    @media screen and (max-width: 778px){
        .footer{
            .bottom{
                display: block;
                .left{
                    display:flex;
                    align-items: center;
                    h3,p{
                        padding:0;
                    }
                    h3{
                        font-size:24px;
                    }
                    p{
                        line-height: 36px;
                        margin-left: 10px;
                    }
                }
                .right{
                    dd p{
                        text-align:left;
                        margin-bottom:0;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 480px){
        .footer .bottom .right p{
            font-size:12px;
        }
    }
</style>