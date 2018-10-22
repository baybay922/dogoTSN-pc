<template>
    <!-- 流程 -->
    <div class="process">
        <div class="process-wrap">
            <div class="title">
                <h2>如何加入我们？</h2>
                <p><span>JOIN US</span></p>
            </div>
            <div class="process-list">
                <dl class="process-box">
                    <dt><img src="../images/resiger.png" alt=""></dt>
                    <dd>
                        <h3>1.注册资料</h3>
                        <p>关注微信公众号，进入多 + 平台，点击注册，根据提示填写注册资料</p>
                    </dd>
                </dl>
                <dl class="process-box">
                    <dt><img src="../images/examine.png" alt=""></dt>
                    <dd>
                        <h3>2.等待审核</h3>
                        <p>耐心等待客服给您致电，核实信息之后，平台将第一时间为您激活账号</p>
                    </dd>
                </dl>
                <dl class="process-box">
                    <dt><img src="../images/use.png" alt=""></dt>
                    <dd>
                        <h3>3.开始使用</h3>
                        <p>审核通过，签订安全保障合同，使用平台，挑选产品，开始全新模式的生意之旅</p>
                    </dd>
                </dl>
            </div>
            <button class="join-us" @click="joinFn()">立即加盟</button>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name:"process",
    methods:{
        joinFn(){
            this.$store.commit('changeShow')
        }
    }
}
</script>

<style scoped lang="less">
    .process{
        width:100%;
        background:url('../images/joinUs.png') no-repeat;
        background-size:100% 100%;

    }
    .title{
        p{
            height:69.8px;
        }
    }
    .process-wrap{
        width:1200px;
        margin-left:50%;
        transform:translateX(-50%);
        padding-bottom:50px;
        box-sizing: border-box;
        .process-list{
            display:flex;
            justify-content: center;
            margin:0 auto;
        }
        button{
            width: 180px;
            height:50px;
            font-size: 18px;
            color: #FFFFFF;
            line-height: 50px;
            background: #2CBB55;
            border-radius: 100px;
            margin-top:50px;
            margin-left:50%;
            transform:translateX(-50%);
            outline: none;
        }
    }
    .process-box{
        display:flex;
        align-items: center;   
        height:150px;
        background: #484855;
        border-radius: 6px;   
               
        dt{
            margin:0 15px 0 20px;
            img{
                border-radius: 50%;
                width:65px;
                height:65px;
                border:2px solid #363645;
            }
        }
        dd{
            margin-right:22px;
            margin-bottom:0;
            p{
                font-size: 14px;
                color: #9DA3B4;
                margin:0;
                padding:0;
            }
            h3{
                font-size: 20px;
                color: #FFFFFF;
                margin-bottom:8px;
                font-weight:200;
            }
        }
        &:nth-child(2){
            margin:0 21px;
            dd{
                margin-right:13px;
            }
        } 
    }
    
    
    @media screen and (max-width:1200px){
        .process{
            .process-list{
                display:block;
                .process-box{
                    margin:0 auto 20px;
                }
            }
        }
    }
</style>