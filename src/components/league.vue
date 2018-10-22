<template>
    <transition name="fade">
        <div class="model" v-if="$store.state.show">      
            <div class="league" id="league">
                <div class="banner">
                    <div class="close-box">
                        <i class="close" @click="closeFn()"></i><i class="line"></i>
                    </div>
                </div>
                <div class="understand-more">
                    <div class="understand-more-left">
                        <h6>我想了解更多</h6>
                        <span></span>
                        <div class="form">
                            <p><i class="icon"></i><input type="text" placeholder="请输入手机号码" v-model="telVal"></p>
                            <p><i class="icon"></i><input type="text" placeholder="请输入您的姓氏" v-model="nameVal"></p>
                            <div class="more-choose">
                                <label class="aa" for="man" @click="chooseSex(1)" v-bind:class="{ cur:1==current}">
                                    先生
                                </label>
                                <input type="radio" class="selectSex" name="sex" id="man" value="先生">
                                <label for="woman"  @click="chooseSex(2)" v-bind:class="{ cur:2==current}">
                                    女士
                                </label>
                                <input type="radio" class="selectSex" name="sex" id="woman" value="女士">
                            </div>
                            <button @click="commit()">立即咨询</button>
                        </div>
                    </div>
                    <dl class="understand-more-qrcode">
                        <dt><img :src="require('../images/QRcode1.png')" alt=""></dt>
                        <dd><i class="icon"></i>扫描关注多加公众号</dd>
                    </dl>
                </div>
            </div>
        </div>
    </transition>
    
</template>

<script>
import $ from 'jquery'
import { mapState } from 'vuex'
    export default {
        name:"leaguePage",
        data(){
            return {
               telVal:"",
               nameVal:"",
               current:1,
               sex:""
            }
        },
        computed:{
            ...mapState['show']
        },
        methods:{
            commit(){   
                var telReg=/^[1][3,4,5,7,8][0-9]{9}$/; 
                if(!this.telVal || !this.nameVal) {
                    $('.form input[type=text]').addClass('active');
                    return;
                }else{
                    if(!telReg.test(this.telVal)){
                        alert('格式错误');
                        this.telVal = ""
                        return;
                    }
                }
                let sex = this.current == 1? "先生" : "女士";
                window.NTKF_PARAM = {
                    siteid:"kf_10138",//企业ID，为固定值，【必填 】。–此id在开站完毕后，小能实施人员给贵公司发送的邮件中获取–
                    settingid:"kf_10138_1517562477132",//接待组id(客服组id)【必填】–此id在开站完毕后，登陆贵公司的小能客户端，进入设置界面-配置管理-接待组中即可获取–
                    uid:'tel:'+ this.telVal,//用户Id，未登录可以为空，但是不能给null。–此参数来自贵公司传递给小能的参数值–
                    uname:this.nameVal + sex,//用户名，未登录可以为空，但是不能给null，uname赋予的值显示到小能客户端。–此参数来自用户传递给小能的参数值–
                    isvip:"0",//是否为vip用户，0代表非会员，1代表会员，取值显示到小能客户端上
                    userlevel:"0",//站自定义会员级别，1-N，可根据选择判断，取值显示到小能客户端
                    erpparam:"",//erpparam为erp功能的扩展字段，可选，购买erp功能后
                    itemid:"",//商品ID，商品详情页面用于展示商品的调用参数。
                    itemparam:"",//商品详情页面的拓展参数，一般用于区分不同设备的拓展参数
                }
                this.$store.commit('close');
                window.NTKF.im_openInPageChat();
                this.telVal = "";
                this.nameVal = "";
            },
            chooseSex(ind){
               this.current = ind
            },
            closeFn(){
                this.$store.commit('close');
            }
        }
    }
</script>

<style scoped lang="less">
.model{
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.8);
    position:fixed;
    top:0;
    left:0;
    z-index:222222222;
}

.selectSex{
    opacity: 0;
    position: fixed!important;
    top: 0;
    left: 0;
}
.league{
    width:1002px;
    margin:150px auto 0;
}
.banner{
    width:100%;
    height:240px;
    background: url('../images/banner-un.png') no-repeat center center;
    background-size: 100% 100%;
    position: relative;
}
.close-box{
    position: absolute;
    top: -89px;
    right:40px;
    i:nth-child(1){
        display:block;
        width: 30px;
        height:30px;
        background: url('../images/close.png') no-repeat center center;
        background-size: 100% 100%;
    }
    i:nth-child(2){
        display:block;
        width:1px;
        height:59px;
        background: #9DA3B4;
        margin-left: 14px;
        margin-top: 30px;
    }
}
.understand-more{
    display:flex;
    background:#fff;
    height:360px;
}
.understand-more-left{
    width:668px;
    box-sizing: border-box;
    padding:52px 57px 55px;
    h6{
        font-size: 20px;
        color: #484855;
        letter-spacing: 1px;
        line-height: 28px;
        font-weight: bold;
    }
    span{
        display:inline-block;
        width:30px;
        height:2px;
        background:#E0E3ED;
        margin:14px 0 30px;
    }
}
.understand-more-qrcode{
    display:-webkit-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:334px;
    height:360px;
    background: #F6F6F6;
    border-radius: 10px 0 0 10px;
    margin-bottom:0;
    dt{
        width:150px;
        height:152px;
        img{
            width: 100%;
        }
    }
    dd{
        margin-top:37px;
        font-size: 14px;
        color: #9DA3B4;
        line-height:20px;
        i{
            width:25px;
            height:25px;
            background: url('../images/qr.png') no-repeat center center;
            background-size: 100% 100%;
        }
    }
}
div.form{
    width:100%;
    p{
        width:263px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #E0E0E5;
        border-radius: 4px;
        float: left;
        display:flex;
        align-items: center;
        margin-bottom: 21px;
        &:nth-child(1){
            margin-right:28px;
        }
        
        i{
            display: inline-block;
            width:22px;
            height:22px;
            background: url('../images/tel-u.png') no-repeat center center;
            background-size: 100% 100%;
            margin:16px 12px 16px 16px;
            position: relative;
        }
        &:nth-child(2){
            i{
                background: url('../images/person.png') no-repeat center center;
                background-size: 100% 100%;
            }
        }
        input{
            margin-left:12px;
            height:30px;
            margin-top:5px;
            border:none;
            outline:none;
            font-size:16px;
            &::input-placeholder{
                opacity: 0.5;
                font-size: 16px;
                color: #9DA3B4;
                line-height: 22px;
            }
        }
        input.active{
            &::input-placeholder{
               color:red;
               opacity: 1;
            }
        }
    }
    p.active{
        background: #FFFFFF;
        border: 1px solid #2CBB55;
        box-shadow: 0 0 4px 0 rgba(44,187,85,0.50);
        border-radius: 4px;
        float:right;
    }
    button{
        width:180px;
        height:54px;
        line-height: 54px;
        background: #2CBB55;
        border-radius: 100px;
        outline:none;
        text-align: center;
        font-size: 18px;
        color: #FFFFFF;
    }
}
.more-choose{
    margin-bottom:30px;
    label{
        cursor: pointer;
        width: 60px;        
        line-height:20px;
        font-size: 14px;
        color: rgba(66,71,83,0.80);
        background: url(../images/checkbox1.png) no-repeat left center;
        background-size: 20px;
        text-indent: 25px;
        &:nth-child(1){

            margin-right:22px;
        }
    }
    .cur{
      background: url(../images/checkbox2.png) no-repeat left center;
        background-size: 20px;  
    }
    input{
        position: absolute;
        //opacity: 0;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>