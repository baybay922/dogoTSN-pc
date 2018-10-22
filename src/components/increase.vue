<template>
    <div class="increase-container">
         <div class="title">
            <h2>渠道增收分析</h2>
            <p><span>PROFITBILITY</span></p>
        </div>
        <div class="computing-container">
            <div>
                <div class="computing-left">
                    <h2>请输入您往年的年度营业额</h2>
                    <input class="inputbox" type="text" v-model="money" readonly="readonly" maxlength="13">
                    <span>万元</span>
                    <ul class="keyboard" @click="getHtml($event)" v-if="superLong">
                        <li class="ind">7</li>
                        <li class="ind">8</li>
                        <li class="ind">9</li>
                        <li class="ind">4</li>
                        <li class="ind">5</li>
                        <li class="ind">6</li>
                        <li class="ind">1</li>
                        <li class="ind">2</li>
                        <li class="ind">3</li>
                        <li class="ind">0</li>
                        <li  @click="empty">c</li>
                    </ul>
                    <ul class="keyboard" v-else>
                        <li class="ind">7</li>
                        <li class="ind">8</li>
                        <li class="ind">9</li>
                        <li class="ind">4</li>
                        <li class="ind">5</li>
                        <li class="ind">6</li>
                        <li class="ind">1</li>
                        <li class="ind">2</li>
                        <li class="ind">3</li>
                        <li class="ind">0</li>
                        <li  @click="empty">c</li>
                    </ul>
                </div>
                <div class="center-container">
                    <dl v-for="(item, index) in Proportion" :key="index">
                        <dd>
                            <p>{{item.title}}</p>
                            <div class="liner-container"></div>
                        </dd>
                        <dt>
                            <div class="circularDattoed">
                                {{item.percent}}<span>%</span>
                            </div>
                        </dt>
                    </dl>
                </div>
                <div class="right-container">
                    <div class="Turnover">
                        <p class="Turnover-title">加入多加网之后<br/>年度营业额</p>
                        <p class="TurnoverNum" v-if="notEntry">1230<span>万元</span> </p>
                        <p class="TurnoverNum" v-else>{{Turnover}}<span v-html="thousand"></span> </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>

export default {
    data(){
        return{
            money:"1000",
            number:[],
            superLong:true,
            Turnover:"0",
            thousand:"",
            notEntry:true,
            Proportion:[
                {
                    title:"每笔成单奖励总金额的2%",
                    percent:"2"
                },
                {
                    title:"邀请两位好友奖励总金额的1%",
                    percent:"1"
                },
                {
                    title:"完成年度业绩追加5%收益",
                    percent:"5"
                },
                {
                    title:"参与平台集采活动返现5%",
                    percent:"5"
                },
                {
                    title:"轻松理财无门槛，收益高至10%",
                    percent:"10"
                }
            ]
        }
    },
    methods:{
        empty(){
            this.money = "0";
            this.number = [];
            this.superLong = true;
            this.Turnover = "0";
            this.thousand = "";
            this.notEntry = false;
        },
        getHtml(e){
            this.notEntry = false;
            let inpArr = this.number;
            var e = e || window.event;
            var target = e.target || e.srcElement;
            var li =document.querySelectorAll("li[class='ind']");
            for(var i in li){
                if(target === li[i]){
                    var value = li[i].innerHTML;
                    inpArr.push(value)
                    let ncome = inpArr.join(''),
                        len = inpArr.length;
                    this.money = ncome;
                    this.Turnover =  ncome*1.23;
                    this.thousand = "万元";

                    if(this.Turnover > 1000){//万元
                        this.Turnover = this.Turnover.toFixed(0);
                        this.thousand = "万元";
                    }

                    let lakh = ncome*1.23;
                    if(lakh > 10000){//十万
                        this.Turnover = (lakh/10000).toFixed(1);
                        this.thousand = "亿元";
                    }


                    // let Hundreds = ncome*1.23;
                    // if(Hundreds > 1000000){//百万
                    //     this.Turnover = (Hundreds/10000).toFixed(0);
                    //     this.thousand = "亿元";
                    // }

                    // let millions = ncome*1.23;
                    // if(millions > 100000000){//亿
                    //     this.Turnover = (millions/100000000).toFixed(2);
                    //     this.thousand = "亿元";
                    // }
                    if(len >= 5){
                        this.superLong = false;
                    }else{
                        this.superLong = true;
                    }
                }
            }
        }
    }
}
</script>
<style scoped lang="less">
// 
.increase-container{
    width: 100%;
    height: 829px;
    background: url(../images/Increase.png) no-repeat bottom left;
    background-size: contain;
}
.computing-container{
    width:1200px;
    height: 650px;
    margin: 0 auto;
   
    box-sizing: border-box;
    //padding: 0 76px;
}
.computing-container>div{
     display: flex;
     margin-left: 76px;
}
.computing-left{
    width: 303px;
    height: 541px;
    background: #272734;
    border:2px solid #363645;
    margin-top:30px;
    position: relative;
    h2{
        width: 100%;
        height: auto;
        padding: 30px 0px 15px;
        font-size: 18px;
        color: #9DA3B4;
        text-indent: 20px;
    }
    .inputbox{
        width: 240px;
       // margin:0 auto;
        display: block;
        text-align: right;
        color: #FBC700;
        font-size: 46px;
        overflow: hidden;
        background: none;
    }
    span{
        position: absolute;
        font-size: 18px;
        color: #FBC700;
        top: 103px;
        right: 15px;
    }
}
.keyboard{
    width: 291px;
    height: 360px;
    position: absolute;
    bottom: -12px;
    left: 4px;
    display:flex;
    flex-wrap: wrap;
    background: #05020F;
    li{
        width: 97px;
        height: 91px;
        border-right: 1px solid #1E1C2A;
        border-bottom: 1px solid #1E1C2A;
        line-height: 91px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }
    li:nth-child(3),li:nth-child(6),li:nth-child(9),li:nth-child(11){
        border-right: none;
    }
    li:nth-child(10),li:nth-child(11){
        border-bottom: none;
    }
    li:nth-child(10){
        width: 194px;
    }
}
.center-container{
    width: 409px;
    height: auto;
    margin: 30px 76px 0;
    dd{
        margin-right: 30px;
        color: #fff;
        font-size: 16px;
        text-align: center;
       p{
           margin: 0!important;
       }
    }
    dl{
        display: flex;
        margin-bottom: 19px!important;
        dt{
        width: 98px;
        height: 98px;
        background: #272734;
        border-radius: 100%;
        position: relative;  
        display: flex;
        align-items: center;
        justify-content: center;      
        .circularDattoed{
            width: 90px;
            height: 90px;
            line-height: 90px;
            color: #FBC700;
            font-size: 40px;
            border-radius: 100%;
            background: #1D1D28 url(../images/dotted-bg.png) no-repeat center;
            background-size: contain;
            // position: absolute;
            // top: 50%;
            // left: 50px;
            // margin: -45px -45px;
            text-align: center;
            font-weight: normal;
            position: relative;
            span{
                position: absolute;
                top: -15px;
                right: 15px;
                font-size: 16px;
            }
        }
        
    }
    }
}
.center-container dl:nth-child(5) .circularDattoed{
    text-align: left;
    text-indent: 15px;
}
.liner-container{
    width: 276px;
    height: 30px;
    background: url(../images/liner-bg.png) no-repeat center;
    background-size: contain;
}
.right-container{
    width: 215px;
    height: 560px;
    background: url(../images/right-bg.png) no-repeat center;
    background-size: contain;
    margin-top: 30px;
    position: relative;
    .Turnover{
        width: 215px;
        height: 215px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -107.5px;
    }
}
.Turnover-title{
    width: 120px!important;
    height: auto;
    text-align: center;
    margin: 58px auto 0!important;
    color: #2CBB55;
}
.TurnoverNum{
    width: 167px;
    margin: 0 auto;
    color: #FBC700;
    font-size: 40px;
    text-align: center;
    overflow: hidden;
    span{
        font-size: 18px;
    }
}
</style>


