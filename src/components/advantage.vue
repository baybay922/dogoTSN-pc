<template>
    <div class="advantage-container">
        <div class="rotate-container">
            <img class="bigCircle" src="../images/big.png" alt="">
            <img class="smallCircle" src="../images/small.png" alt="">
            <ul class="icon-container">
                <li class="guarantee">
                    <div class="Copywriting-content content-guarantee">
                         <h2>拓客</h2>
                        <article>
                            平台为您对接高端异业客户
                        </article>   
                    </div>
                </li>
                <li class="Empowerment">
                    <div class="Copywriting-content content-Empowerment">
                        <h2>增收</h2>
                        <article>
                            集采返现/高额奖励，增收超20%
                        </article>
                    </div>
                </li>
                <li class="received">
                    <div class="Copywriting-content content-received">
                        <h2>节流</h2>
                        <article>
                            科学的财税结构，减少税费支出
                        </article>
                    </div>
                </li>
                <li class="throttle">
                    <div class="Copywriting-content content-throttle">
                        <h2>赋能</h2>
                        <article>
                            接入金融保险，享受更高收益
                        </article>
                    </div>
                </li>
                <li class="Toker">
                    <div class="Copywriting-content content-Toker">
                        <h2>保障</h2>
                        <article>
                            完善的制度流程，有效避免撬客
                        </article>
                    </div>
                </li>
                <li class="efficiency">
                    <div class="Copywriting-content content-efficiency">
                        <h2>信誉</h2>
                        <article>
                            顶级的产品服务，提升信誉口碑
                        </article>
                    </div>
                </li>
            </ul>
            <div class="advantageLogo">
                <img src="../images/advantageLogo.png" alt="">
                <p class="chinaTitle">客户价值</p>
                <p class="englistTitle">渠道合伙人</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Advantage",
        data(){
            return{

            }
        }
    }
</script>
<style scoped lang="less">
.advantage-container{
    width: 100%;
    height:825px;
    background: url(../images/advantage.png) no-repeat;
    background-size: 100% auto;
    overflow: hidden;
    .rotate-container{
        width: 466px;
        height: 466px;
        margin: 179.5px auto;
        position: relative;
        .bigCircle{
            width: 466px;
            height: 466px;
            position: absolute;
            top: 0;
            left: 0;
            -webkit-animation: rotateLeft 20s linear infinite;
            -moz-animation: rotateLeft 20s linear infinite;
            -ms-animation: rotateLeft 20s linear infinite;
            -o-animation: rotateLeft 20s linear infinite;
            animation: rotateLeft 20s linear infinite;
        }
        .smallCircle{
            width: 275px;
            height: 275px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -137.5px;
            margin-left: -137.5px;
            -webkit-animation: rotateRight 20s linear infinite;
            -moz-animation: rotateRight 20s linear infinite;
            -ms-animation: rotateRight 20s linear infinite;
            -o-animation: rotateRight 20s linear infinite;
            animation: rotateRight 20s linear infinite;
        }
    }
}
.icon-container{
    width: 100%;
    height: 100%;
    position: relative;
    li{
        width: 94px;
        height: 94px;
        cursor: pointer;
        img{
            width: 100%;
            height: auto;
        }
    }
    .guarantee{
        position: absolute;
        top: -20px;
        left: 50%;
        margin-left: -47px;
        background: url(../images/guarantee.png) no-repeat;
        background-size: contain;
    }
    .guarantee:hover{
         background: url(../images/guarantee-hover.png) no-repeat;
        background-size: contain;
    }
    .Empowerment{
        position: absolute;
        top: 30%;
        right: 0px;
        margin-top: -47px;
        background: url(../images/Empowerment.png) no-repeat;
        background-size: contain;
    }
    .Empowerment:hover{
        background: url(../images/Empowerment-hover.png) no-repeat;
        background-size: contain;
    }
    .received{
        position: absolute;
        top: 70%;
        right: 0px;
        margin-top: -47px;
         background: url(../images/received.png) no-repeat;
        background-size: contain;
    }
    .received:hover{
        background: url(../images/received-hover.png) no-repeat;
        background-size: contain;
    }
    .throttle{
        position: absolute;
        bottom: -20px;
        left: 50%;
        margin-left: -47px;
         background: url(../images/throttle.png) no-repeat;
        background-size: contain;
    }
    .throttle:hover{
        background: url(../images/throttle-hover.png) no-repeat;
        background-size: contain;
    }
    .Toker{
        position: absolute;
        top: 30%;
        left: 0px;
        margin-top: -47px;
         background: url(../images/Toker.png) no-repeat;
        background-size: contain;
    }
    .Toker:hover{
         background: url(../images/Toker-hover.png) no-repeat;
        background-size: contain;
    }
    .efficiency{
        position: absolute;
        top: 70%;
        left: 0px;
        margin-top: -47px;
         background: url(../images/efficiency.png) no-repeat;
        background-size: contain;
    }
    .efficiency:hover{
         background: url(../images/efficiency-hover.png) no-repeat;
        background-size: contain;
    }
}
.Copywriting-content{
    width: 233px;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    padding-bottom: 50px;
    -webkit-transition: opacity 0.3s ease-in-out;
    h2{
        width: 103.8px;
        border-bottom:1px solid #363645;
        padding-bottom: 6px;
        position: relative;
        text-align: center;
        font-size: 24px;
        color: #fff;
        margin: 0 auto 6px;
    }
    h2::after{
        content: "";
        width: 20.8px;
        height: 2px;
        background: #FBC700;
        position: absolute;
        bottom: -1px;
        left: 50%;
        margin-left: -10.4px;
        border-radius: 5px;
    }
    article{
        text-align: center;
        color: #9DA3B4;
        font-size: 16px;
    } 
}
.icon-container li:hover .Copywriting-content{
    opacity: 1;
    -webkit-transition: opacity 0.3s ease-in-out;
}
.content-guarantee{
    left: -50%;
    top: -127px;
    margin-left: -22px;
}
.content-Empowerment,.content-received{
    left: 127px;
    top: 0;
}
.content-throttle{
    left: -50%;
    top: 127px;
    margin-left: -22px;
}
.content-Toker,.content-efficiency{
    left: -266px;
    top: 0;
}
.advantageLogo{
    width: 200px;
    height: 180px;
    position: absolute;
    top: 48%;
    left: 50%;
    margin-top: -90px;
    margin-left: -100px;
    display: table-cell;
        vertical-align: middle;
        text-align: center;
    img{
        margin-top: 33px;        
    }
    .chinaTitle{
        font-size: 28px;
        color: #FBC700;
        margin-top: 13px;
        margin-bottom: 0!important;
        span{
            color: #2CBB55;
        }
    }
    .englistTitle{
        color: #FBC700;
        font-size: 20px;
        //font-weight:bold;
    }
}

// 动画
@-webkit-keyframes rotateLeft{
    0%{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-moz-keyframes rotateLeft{
    0%{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-ms-keyframes rotateLeft{
    0%{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-o-keyframes rotateLeft{
    0%{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes rotateLeft{
    0%{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-webkit-keyframes rotateRight{
    0%{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(-360deg);
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -o-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}
@-moz-keyframes rotateRight{
    0%{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(-360deg);
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -o-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}
@-ms-keyframes rotateRight{
    0%{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(-360deg);
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -o-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}
@-o-keyframes rotateRight{
    0%{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(-360deg);
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -o-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}
@keyframes rotateRight{
    0%{
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(-360deg);
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -o-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}
</style>

