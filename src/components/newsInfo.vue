<template>
    <!-- 新闻详情页 -->
    <div class="news-info">
        <Navbar />
        <div class="menu">
            <span @click="goBackNews()">新闻资讯 > </span><b>资讯详情页</b>
        </div>
        <div class="news-info-wrap">
            <h3>医美大健康万亿产业共享发展论坛暨多加网发布会进入全面筹备期</h3>
            <p>2017-04-20</p>
            <dl>
                <!-- <dt></dt> -->
                <dd>
                    <p>近日，由国内首创医美大健康领域互联网平台——多加网主办的“医美大健康万亿产业共享发展论坛暨多加网发布会“已进入全面筹备期。大会将于2018年6月10日在中国北京人民大会堂正式召开。</p>
                    <p>会议将邀请吴祖泽、郭树忠、张明徽、赵延勇、陈敏亮、张亚洁等众多医美大健康领域的专家。开设圆桌论坛深入探讨“医美大健康宏观发展趋势及可持续性增长“；发布定位”医美大健康领域阿里巴巴“的多加网络协同服务平台的背景及愿景；举行多加网合作伙伴签约暨多加网启动仪式；邀请行业伙伴共同探讨”医美机构管理之变革与创新”“医美行业未来商业模式及发展形态”等内容。</p>
                    <p>此次大会，是医美大健康领域具有里程碑意义的盛典，必将促进行业快速、有序、健康的发展。据多加网负责人介绍，大会的筹备工作正在紧张有序地进行，届时，必将为医美大健康行业揭开崭新的篇章。</p>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import Navbar from './common/navbar'
    export default {
        name:'newsInfo',
        components:{
            Navbar
        },
        methods:{
            goBackNews(){
                this.$router.push('/news')
            }
        }
    }
</script>

<style scoped lang="less">
    .news-info{
        width:100%;
    }
    .menu{
        width:1200px;
        margin: 120px auto 0;
        padding-bottom:20px;
        border-bottom: 1px solid #363645;
        span{
            font-size: 20px;
            color: #9DA3B4;
            letter-spacing: 0.5px;
            line-height: 28px;
            position: relative;
            margin-left:30px;
            cursor: pointer;
            &:before{
                width:16px;
                height:16px;
                display: inline-block;
                content:'';
                position: absolute;
                background:#2CBB55;
                border-radius:50%;
                top: 6px;
                left: -30px;
            }
        }
        b{
            font-size: 20px;
            color:#2CBB55;;
            letter-spacing: 0.5px;
            line-height: 28px;
            font-weight: normal;
        }
    }
    .news-info-wrap{
        width:900px;
        margin:0 auto;
        text-align: center;
        h3{
            margin:40px 0 8px;
            font-size: 24px;
            color: #FFFFFF;
            line-height: 33px;
        }
        p{
            font-size: 16px;
            color: #FFFFFF;
            line-height: 22px;
            margin-bottom:40px;
        }
        dl{
            margin-bottom:0;
            dt{
                width:900px;
                height:300px;
                background: url('../images/news1.png') no-repeat center;
                background-size: 100%;
            }
            dd{
                margin-bottom:0;
                font-size: 14px;
                color: #9DA3B4;
                padding:30px 0;
                line-height: 20px;
                text-align:left;
                p{
                    text-indent: 2em;
                    margin-bottom:15px;
                }
            }
        }
    }
</style>