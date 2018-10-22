<template>
    <!-- 关于我们 -->
    <div class="about-us">
        <Navbar />
        <div class="banner">
           <h2>Be Simple, Happy and Passionate, Join us!</h2>
           <!-- <h2>BE SIMPLE, HAPPT AND PASSIONATE, JOIN US!</h2> -->
            <p>关于我们</p>
        </div>
        <div class="profile" id="profile">
            <div class="title">
                <h2>公司简介</h2>
                <p style="height:60px;"><span>PROFILE</span></p>
            </div>
            <div class="profile-left"></div>
            <div class="profile-content" @click="unHideCont? hideCont($event) :''">
                <h3>多加网络科技（北京）有限公司</h3>
                <div class="content">
                    <p>
                        多加网(TSN) 是医美大健康领域首创第三方综合服务平台。多加网秉持“共创、共建、共享、共生”的核心理念，致力于大健康产业领域的优势资源整合和价值运营。 
                    </p>
                    <p>
                        多加网依托国内首长保障体系及专家团队等资源优势，与国际前沿的医疗健康机构形成战略合作，引进金融、保险、法律等机构与平台协同发展，通过产业链价值重组， 建立了以数据为核心、以交易为中心、以平台为纽带的标准化健康服务体系和超级链接新模式，以期在高端医疗健康领域建立一个全产业链的“生态系统”。
                    </p>
                </div>
                <transition name="fade">
                     <div class="more" @click="showCont()" v-if="profileBtn">MORE<span></span></div>
                </transition>
                
            </div>      
        </div>
        <div class="course">
            <div class="title">
                <h2>公司历程</h2>
                <p style="height:60px;"><span>COURSE</span></p>
            </div>
            <div class="line"></div>
            <ul class="course-content">
                <li>
                    <h4>2015</h4>
                    <span></span>
                    <p>叁生众康成立<br/>生命，大众，健康</p>
                </li>
                <li>
                    <h4>2016</h4>
                    <span></span>
                    <p>首轮1000万融资入驻<br/>红杉资本轮投</p>
                </li>
                <li>
                    <h4>2017</h4>
                    <span></span>
                    <p>多加网成立，全国首款健康<br/>产品线上B2B平台</p>
                </li>
                <li>
                    <h4>2018</h4>
                    <span></span>
                    <p>首届医疗产品商务大会<br/>成功于 <i>2018.6.10</i><br/>在北京人民大会堂召开</p>
                </li>
            </ul>
        </div>
        <div class="core-team">
            <div class="title">
                <h2>核心团队</h2>
                <p style="height:60px;"><span>TEAM</span></p>
            </div>
            <div class="core-team-content" v-for="(item,index) in dataList" :key="index" v-if="index%2 != 1"  @click="hideMore(index)">
                <div class="imgbox">
                    <img :src='item.img' alt="">
                </div>
                <div class="wrap">
                    <h2>{{ item.name }}<span>{{ item.job }}</span></h2>
                    <ul class="info">
                        <li v-for="(ite,ind) in item.info" :key="ind">{{ite}}</li>
                    </ul>
                    <i class="wrap-line"></i>
                    <!-- <transition name="fade">
                        <div class="more" @click="showMore($event,index)" v-if="arr[index].moreBtn">MORE<span></span></div>
                    </transition> -->
                </div>
            </div> 
            <div class="core-team-content" v-else @click="hideMore(index)" >
                <div class="wrap">
                    <h2>{{ item.name }}<span>{{ item.job }}</span></h2>
                    <ul class="info">
                        <li v-for="(ite,ind) in item.info" :key="ind">{{ite}}</li>
                    </ul>
                    <i class="wrap-line"></i>
                    <!-- <transition name="fade">
                        <div class="more" @click="showMore($event,index)" v-if="arr[index].moreBtn">MORE<span></span></div>
                    </transition> -->
                </div>
                <div class="imgbox"><img :src="item.img" alt=""></div>
            </div> 
        </div>
        <div class="culture">
            <div class="title">
                <h2>企业文化</h2>
                <p style="height:60px;"><span>CULTURE</span></p>
            </div>
            <ul class="culture-imgbox" @click="enlarge($event)">
                <li><img :src="require('../images/1-2.jpg')" alt="" style="margin-bottom:20px;" /></li>
                <li><img :src="require('../images/5.jpg')" alt=""></li> 
                <li><img :src="require('../images/6-1.jpg')" alt=""> </li>
                <li><img :src="require('../images/3.jpg')" alt=""></li>
                <li><img :src="require('../images/2.jpg')" alt=""></li>
                <li><img :src="require('../images/4.jpg')" alt=""></li>
            </ul>
            <transition name="fade">
                <div class="imgMark" @click="close()" v-if="show">
                    <img :src="url" alt="">
                </div>
            </transition>
            
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import Navbar from './common/navbar'
import '../assets/style/titCommon.less'
export default {
    name:'aboutUs',
    data(){
        return{
            show:false,
            url:"",
            arr:[{moreBtn:false},
                {moreBtn:false},
                {moreBtn:false},
                {moreBtn:false},
                {moreBtn:false},
                {moreBtn:false},
                {moreBtn:false},],
            profileBtn:false,
            unHideCont:false,
            dataList:[
                {
                    img:require('../images/character1.png'),
                    name:"卜方",
                    job:"Chairman · 董事长",
                    info:[
                            '⊙ 多年从商经验，曾涉足旅游、环保、工程、贸易等多个领域',
                            '⊙ 拥有丰富的管理经验和敏锐的商业嗅觉',
                            '⊙ 真诚、谦和、务实、担当，梦想在大健康领域做一番事业',
                            '⊙ 经过多年的积累和精心准备，於2017年正式进驻大健康产业',
                            '⊙ 以产业互联网思维，首创多加网络协同服务平台 ……'
                        ]
                },
                {
                    img:require('../images/character2.png'),
                    name:"张亚洁",
                    job:"MSL · 首席医学顾问",
                    info:[
                            '⊙ 医学博士 ∕整形外科博士后',
                            '⊙ 中国人民解放军309医院副主任医师',
                            '⊙ PRS中国地区编委',
                            '⊙ 中华医学会医学美学分会会员',
                            '⊙ 中国医师协会干细胞与再生医学分会常委',
                            '⊙ 中国中西医结合学会医学美容专业委员会线雕专委会副主任委员',
                            '⊙ 亚洲医学美容协会抗衰老分会秘书长',
                            '⊙ 《中国医疗美容》《中华美容医学》等多家杂志编委及约稿人，获国家自然科学基金青年项目、全军青年培育项目、北京市科技计划“首都特色“专项、中国博士后科学基金等多项科研基金，研究成果获军队科技进步三等奖1项，发表学术论文30多篇，数篇SCI，参编专著5部。'
                        ]
                },
                {
                    img:require('../images/character6.png'),
                    name:"尹琼洁",
                    job:"COO · 运营总监",
                    info:[
                            '⊙ 华中科技大学计算机专业本科',
                            '⊙ 10年互联网老兵',
                            '⊙ 曾任职于 新浪、网龙、宝软。',
                            '⊙ 参与过宝软网、91手机助手、魔域OL、秀壁纸APP 、3D 宝软桌面、合拍APP 等项目的产品研发与运营。',
                            '⊙ 有丰富的互联网及O2O项目规划及运营经验与专业的团队管理经验。'
                        ]
                },
                {
                    img:require('../images/character10.png'),
                    name:"肖尧",
                    job:"CUO · 线上 · 客服总监",
                    info:[
                            '⊙ 毕业于北京航空航天大学。',
                            '⊙ 10年线上客服行业从业经验，早期服务于中国银行银行卡客户服务中心，累计多年管理经验。',
                            '⊙ 对于线上客服体系有深入了解，擅长数据分析。',
                            '⊙ 曾参与中行华东中心筹备及组建项目。',
                            '⊙ 对团队管理、梯队建设、人员培训、人员管理及绩效管理有多年经验。',
                            '⊙ 不仅拥有多年互联网企业创业经验，还与多家公司一起走过创业之路。同时拥有独立创业经验。'
                        ]
                },
                {
                    img:require('../images/character9.png'),
                    name:"马震",
                    job:"CUO · 线下 · 客服总监",
                    info:[
                            '⊙ 2000年毕业于北京第二外国语大学旅游专业。',
                            '⊙ 2000-2003年 就职于中国国际旅行社，主要负责线路开发工作。',
                            '⊙ 2003-2007年 就职于港中旅，主要负责团队建设及产品资源整合工作。',
                            '⊙ 2008-2017年 就职于中国和平国际旅行社，主要负责大型会议的组织工作及会议服务体系建设。'
                        ]
                }
            ]
        }
    },
    components:{
        Navbar
    },
    methods:{
        enlarge(e){
            this.url = $(e.target).attr('src');
            this.show = true
        },
        close(){
            this.show = false
        },
        showCont(){
            $('.profile-content').height('auto');
            $('.content').removeClass('change');
            this.profileBtn = false
        },
        hideCont(e){
            if(e.target.className != 'more'){
                $('.profile-content').height("300px!important");
                $('.content').addClass('change')
                this.profileBtn = true
            }     
        },
        showMore(e,ind){
            e.stopPropagation();
            this.arr[ind].moreBtn = false; 
            $('.info').eq(ind).removeClass('show');
            $('.core-team-content').eq(ind).height('auto')
        },
        hideMore(ind){
            // if($('.core-team-content').eq(ind).height() > 400){
            //     this.arr[ind].moreBtn = true; 
            //     $('.info').eq(ind).addClass('show');
            //     $('.core-team-content').eq(ind).height(400)
            // }
        },
        scrollTo(){
            let ind = this.$route.query.index ;
            let DivArr = $('.about-us').children().slice(2);
            //alert($(DivArr[ind]).offset().top -60 )
            if(ind !== 0 && ind){
                $('html,body').animate({'scrollTop':($(DivArr[ind]).offset().top -60) + 'px'},800)
            }

        }
    },
    mounted(){
        if($('.content').height() > 119){
            this.profileBtn = true;
            this.unHideCont = true;
            $('.content').addClass("change");
        }
        this.$nextTick(() => {
            this.scrollTo()
        })
        

        for(var i=0;i<$('.info').length;i++){
            if($('.info').eq(i).height() > 200){
                this.arr[i].moreBtn = true;  
                $('.info').eq(i).addClass('show')
                $('.core-team-content').eq(i).height(400)
            }else{
                $('.core-team-content').eq(i).height(400)
            }
        }
    }
}
</script>

<style scoped lang="less">
.banner{
    width:1440px;
    height:260px; 
    margin:0 auto;
    background: url('../images/aboutus.png') no-repeat center;
    background-size: 100%;
    box-sizing: border-box;
    padding:0 120px;
    h2{
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
    }
}
.profile{
    height: 636px;
    width:1440px;
    margin:0 auto;
    background: url('../images/about-bg.png') no-repeat center;
    background-size: 100%;
    position: relative;
    .title{
        padding-bottom:60px;
    }
    .profile-left{
        width:400px;
        height:300px;
        background: url('../images/introduction.png') no-repeat center;
        background-size: 100%;
        position:absolute;
        top:216px;
        left:270px;
    }
    .profile-content{
        width:663px;
        height:300px;
        position: absolute;
        right:270px;
        top:276px;
        box-sizing: border-box;
        padding:30px;
        background: #000000;
        overflow: hidden;
        z-index:1;
        h3{
            font-size: 18px;
            color: #E7E7E7;
            line-height: 22px;
            margin-bottom:20px;
        }
        
        p{
            font-size: 14px;
            color: #9DA3B4;
            letter-spacing: 0.65px;
            line-height: 17px;
            margin-bottom:0;
            margin-top:17px;
            text-indent: 2em;
            overflow : visible;
                
        }
        .content.change{
            height:119px;
            overflow: hidden;
            p{
                overflow: hidden;
                text-overflow: ellipsis;
                transition: overflow 0.8s;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;

                display:-o-box;
                -o-line-clamp: 2;
                -o-box-orient: vertical;

                display:-ms-box;
                -ms-line-clamp: 2;
                -ms-box-orient: vertical;

                display:-moz-box;   
                -moz-line-clamp: 2;
                -moz-box-orient: vertical;
            &:nth-of-type(1){
                margin-top:0;
            }
            }
        }
    }
}
.course{
    width:1440px;
    height:496px;
    margin:0 auto;
    background:#1D1D28;
    position: relative;
    .line{
        width:100%;
        height:1px;
        background: #363645;
        position: absolute;
        top:324px;
    }
    .course-content{
        display:flex;
        width:100%;
        height:228px;
        justify-content: center;
        position:absolute;
        top:216px;
        li{
            width:225px;
            height: 228px;
            text-align: center;
            span{
                width:10px;
                height:10px;
                display:block;
                border-radius: 50%;
                background: #363645;
                margin:16px auto 26px;
            }
            h4{
                margin-top:66px;
                font-size: 16px;
                color: #9DA3B4;
                line-height:22px;
            }
            p{
                font-size: 14px;
                color: #9DA3B4;
                line-height: 20px;
                text-align: center;
                i{
                    font-style: normal;
                    color:#FBC700;
                }
            }
        }
        li:hover{
            height:226px;
            border: 1px solid #2CBB55;
            box-shadow: 0 2px 10px 0 rgba(54,54,69,0.26);
            border-radius: 10px;
            span{
                border:1px solid #2CBB55;
            }
            h4,p{
                color:#FFFFFF;
            }
            h4{
                margin-top:65px;
            }
        }
    }
}
.core-team{
    padding-bottom:60px;
}
.core-team-content{
    width:1200px;
    height:auto;
    margin:0 auto;
    position: relative;
    display:flex;
    &:nth-child(3) .wrap,&:nth-child(4) .wrap,&:nth-child(7) .wrap,&:nth-child(8) .wrap{
        background: #000;
    }
    &:nth-child(3){
        .wrap-line{
            margin-top:20px!important;
        }
    }
    .imgbox{
        width:600px;
        img{
            max-width: 100%;
        }
    }
    .wrap{
        width:600px;
        height: 100%;
        box-sizing: border-box;
        padding: 40px;
        float: left;
        background: #1D1D28;
        position: relative;
        h2{
            font-size: 40px;
            color: #E7E7E7;
            line-height: 56px;
            margin-bottom:20px;
            span{
                font-size: 20px;
                color: #E7E7E7;
                font-weight: normal;
                margin-left: 20px;
            }
        }
        ul{
            margin-bottom:0;
            li{
                font-size: 14px;
                color: #9DA3B4;
                letter-spacing: 0.65px;
                line-height: 20px;
            }
        }
        ul.show{
            overflow: hidden;
           // height:123px;
            li{
                overflow : hidden;
                text-overflow: ellipsis;
                transition: overflow 0.8s;
                // display: -webkit-box;
                // -webkit-line-clamp: 2;
                // -webkit-box-orient: vertical;

                // display:-o-box;
                // -o-line-clamp: 2;
                // -o-box-orient: vertical;

                // display:-ms-box;
                // -ms-line-clamp: 2;
                // -ms-box-orient: vertical;

                // display:-moz-box;   
                // -moz-line-clamp: 2;
                // -moz-box-orient: vertical;
            }
        }
        .wrap-line{
            display: inline-block;
            width:11px;
            height:3px;
            background: #FBC700;
            border-radius: 100px;
            margin-top:40px;
        }
        .more{
            position: absolute;
            right: 40px;
            bottom: 40px;
        }
    }
}

.culture{
    width:1440px;
    background: #1D1D28;
    margin: 0 auto;
    height:1486px;
    .title{
        padding:60px 0;
    }
}
.culture-imgbox{
    width:1200px;
    // margin-left:120px;
    padding-bottom:60px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    height:1200px;
    margin: 0 auto;
    li{
        position: absolute;
        overflow: hidden;
        &:nth-child(1){
            width:750px;
            height:435px;
            margin-bottom: 20px;
            margin-right:20px;
            top:0;
            left:0;
            img{
                width: 900px;
                margin-left: -2%;
                margin-top: -14%;
            }
        }
        &:nth-child(2){
            width:430px;
            height:820px;
            right:0;
            img{
                width: 1120px;
                height:820px;
                margin-left: -30%;
            }
        }
        &:nth-child(3),&:nth-child(4){
            top:455px;
            left:0;
            width:365px;
            height:365px;
            img{
                    width: 765px;
                    height: 520px;
                    margin-top: -18%;
                    margin-left: -55%;
            }
        }
        &:nth-child(4){
            left:385px;
            top:455px;
            width:365px;
            height:365px;
            img{
                width: 765px;
                height: 520px;
                margin-top: -21%;
                margin-left: -53%;
            }
        }
        &:nth-child(5){
            width:750px;
            height:360px;
            bottom:0;
            left:0;
            img{
                width: 900px;
                margin-top: -15%;
            }
        }
        &:nth-child(6){
            width:430px;
            height:360px;
            bottom:0;
            right:0;
            img{
                width:660px;
                height:360px;
                display:block;
                margin-left: -20%;
            }
        }
    }
}

.imgMark{
    width:100%;
    height:100%;
    position:fixed;
    left:0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index:1;
    display:flex;
    align-items: center;
    justify-content:center;
    img{
        width: 900px;
        height: 600px;
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.more{
        width:82px;
        height:24px;
        border:1px solid #363645;
        font-size: 12px;
        color: #2CBB55;
        letter-spacing: 0.65px;
        display: flex;
        align-items: center;
        justify-content: center;
        float: right;
        margin-top:55px;
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