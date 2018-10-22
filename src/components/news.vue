<template>
    <!-- 新闻资讯 -->
    <div class="news">
        <Navbar/>
        <div class="banner">
            <div class="banner-left">
                <h3>All the Cutting-Edge Information is Here!</h3>
                <!-- <H3>ALL THE CUTTING-EDGE INFORMATION IS HERE!</H3> -->
                <p>平台动态</p>
            </div>
        </div>
        <div class="infomation">
             <div class="title">
                <h2>新闻资讯</h2>
                <p style="height:60px;"><span>NEWS</span></p>
            </div>
            <div class="info-wrap">
                <a href="http://vcbeat.net/NzQwZWE1OWYxYWQxYjk0MGJjODhkNTdmZWQ3MGNlYjc" target="view_window" class="news-info">
                    <dl class="left">
                        <dt><img :src="require('../images/newsImage.png')" alt=""></dt>
                        <dd>
                            <h3>为加速AI医学影像落地，学术与产业界将如何合作？</h3>
                            <small>2018-06-20</small>
                            <p>柏视医疗与清华大学统计学研究中心联合举办的“智能医学影像分析研讨会” 在紫光国际会议中心举行。这次会议汇集了长期从事医学影像智能分析的国内外顶级专家，
                                是一次医学影像AI科学研究与应用前沿探讨的思想盛宴。</p>
                            <a href="http://vcbeat.net/NzQwZWE1OWYxYWQxYjk0MGJjODhkNTdmZWQ3MGNlYjc" target="view_window" class="more">阅读详情<span></span></a>
                        </dd>
                    </dl>
                </a>
                <div class="right">
                    <a v-for="(item,index) in newsList" :key="index" :href="item.url" target="view_window"><span>{{item.time}}</span>{{item.title}}</a>
                </div>  
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import '../assets/style/titCommon.less'
    import Navbar from './common/navbar.vue'
    export default {
        name:"news",
        data(){
            return{
                newsList:[{
                    url:"http://vcbeat.net/NmZkYjRiNTIzMDNkYTAxYThkZTU4YTYxNGE0MmUzYmY",
                    time:"2018-06-20",
                    title:'坐标无锡，全国医院物联网大会即将迎来首秀'
                },{
                    url:"http://vcbeat.net/NTQyOWYwZmI3ZTg2YzFjMTY2MDYyZDgzMzJmZWY2ODM",
                    time:"2018-06-15",
                    title:'肿瘤新药Opdivo在中国正式获批，首个PD-1单抗药物即将登陆！'
                },{
                    url:"http://www.nbd.com.cn/articles/2018-06-10/1224813.html",
                    time:"2018-06-10",
                    title:'医美大会发出成都宣言 凝聚产业发展共识'
                },{
                    url:"http://finance.eastmoney.com/news/1355,20180413856544841.html",
                    time:"2018-04-13",
                    title:'医美机构比医生多：月入十万司空见惯 注册医生缺口仍然巨大'
                },{
                    url:"http://news.sina.com.cn/c/2018-01-07/doc-ifyqiwuw7637571.shtml",
                    time:"2018-01-07",
                    title:'科普医美知识 中国整形美容协会启动“医美大百科”项目'
                }]
            }
        },
        components:{
            Navbar
        },
        methods:{
    
        }
    }
</script>

<style scoped lang="less">
    .banner{
        width:1440px;
        height:260px;
        background: url('../images/bj1.png') no-repeat center;
        background-size: 100%;
        margin:0 auto;
        display:flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding:0 120px;
        .banner-left{
            height:100%;
            h3{
                font-size: 32px;
                color: #FFFFFF;
                letter-spacing: 0;
                line-height: 36px;
                padding:121px 0 6px;
            }
            p{
                font-size: 20px;
                color: #FFFFFF;
                letter-spacing: 0;
                line-height: 36px;
                margin-bottom:0;
            }
        }
    }
    .infomation{
        width:1440px;
        background: url('../images/bj-2.png') no-repeat center;
        background-size: 100%;
        margin:0 auto;
        height: 526px;
    }
    .news-info{
        display:block;
        text-decoration: none;
    }
    .info-wrap{
        margin: 0 auto;
        width:1200px;
        display:flex;
       //align-items: center;
        dl{
            width:600px;
            display: flex;
            margin-bottom:0;
            dt{
                width:240px;
                height:240px;
                img{
                    width:100%;
                }
            }
            dd{
                width:360px;
                box-sizing: border-box;
                padding:20px;
                margin-bottom:0;
                h3{
                    font-size: 16px;
                    color: #E7E7E7;
                    line-height: 22px;
                    margin-bottom:8px;
                    // overflow: hidden;
                    // text-overflow: ellipsis;
                    // white-space: nowrap;
                }
                small,p{
                    font-size: 12px;
                    color: #9DA3B4;
                    letter-spacing: 0.65px;
                    line-height:17px;
                }
                p{
                    margin-top:14px;
                    margin-bottom:0;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;

                    display: -o-box;
                    -o-line-clamp: 3;
                    -o-box-orient: vertical;

                    display: -moz-box;
                    -moz-line-clamp: 3;
                    -moz-box-orient: vertical;

                    display: -ms-box;
                    -ms-line-clamp: 3;
                    -ms-box-orient: vertical;
                }
            }
        }
    }
    .info-wrap .right{
        margin-bottom:0;
        a{
            display:block;
            padding:16px 20px;
            width:100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12px;
            color: #9DA3B4;
            letter-spacing: 0.65px;
            text-decoration: none;
            span{
                margin-right:10px;
            }
        }
        a:hover{
            background: #2CBB55;
            color:#FFFFFF;
        }
    }
    .more{
        display:block;
        width:96px;
        height:24px;
        border:1px solid #363645;
        font-size: 12px;
        color: #2CBB55;
        letter-spacing: 0.65px;
        display: flex;
        align-items: center;
        justify-content: center;
        float: right;
        margin-top:64px;
        text-decoration: none;
        span{
            display:inline-block;
            width:12px;
            height:100%;
            background: url('../images/Arrow.png') no-repeat center;
            background-size: 12px;
            margin-left:10.6px;
        }
    }
</style>