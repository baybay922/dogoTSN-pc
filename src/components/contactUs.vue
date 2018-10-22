<template>
    <!-- 联系我们 -->
    <div class="contact-us"> 
        <Navbar />
        <div class="banner">
            <h2>Make Cooperation, Please Contact us！</h2>
            <p>联系我们</p>
        </div>
        <div class="contact-wrap">
            <div class="content">
                <div class="title">
                    <h2>联系我们</h2>
                    <p style="height:60px;"><span>CONTACT US</span></p>
                </div>
                <ul class="cont-box">
                    <li style="margin-right:85px;">
                        <div class="imgbox"><img :src="require('../images/address.png')" alt=""></div>
                        <small>公司地址</small>
                        <h4>北京市南二环中海地产广场东塔二层</h4>
                    </li>
                    <li style="margin-right:166px;">
                        <div class="imgbox"><img :src="require('../images/telphone.png')" alt=""></div>
                        <small>客服电话</small>
                        <h4>400-111-6369</h4>
                    </li>
                    <li style="margin-right:163px;" class="QRcode">
                        <div class="imgbox"><img :src="require('../images/chat.png')" alt=""></div>
                        <small>微信公众号</small>
                        <h4>多加健康服务平台</h4>
                        <transition name="fade">
                            <div class="erweima"></div>
                        </transition>
                    </li>
                    <li>
                        <div class="imgbox"><img :src="require('../images/email.png')" alt=""></div>
                        <small>商务邮箱</small>
                        <h4><a href="mailto:bd@dogotsn.com">bd@dogotsn.com</a></h4>
                    </li>
                </ul>
            </div>
            <div style="width:1200px;height:400px;border:#ccc solid 1px;font-size:12px" id="map"></div>
        </div>
    </div>
</template>

<script>
import Navbar from './common/navbar'
import '../assets/style/titCommon.less'
export default {
    name:"contactUs",
    data(){
        return{
            map:null
        }
    },
    components:{
        Navbar
    },
    methods:{
        createMap(){
            this.map = new BMap.Map("map"); 
            this.map.centerAndZoom(new BMap.Point(116.395701,39.877275),17);
        },
        setMapEvent(){
            this.map.enableScrollWheelZoom();
            this.map.enableKeyboard();
            this.map.enableDragging();
            this.map.enableDoubleClickZoom()
        },
        addClickHandler(target,window){
            target.addEventListener("click",function(){
                target.openInfoWindow(window);
            });
        },
        addMapOverlay(){      //116.396117,39.876704
            var markers = [
                {content:"地址:北京市东城区中海地产广场东塔二层",title:"",position:{lat:39.876704,lng:116.396117}}
            ];
            for(var index = 0; index < markers.length; index++ ){
                var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
                var marker = new BMap.Marker(point);
               // var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
                var opts = {
                    width: 200,
                    title:"多加网",
                    enableMessage: false
                };
                var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
                //marker.setLabel(label);
                this.addClickHandler(marker,infoWindow);
                this.map.addOverlay(marker);
            };
        },

        //向地图添加控件
        addMapControl(){
            var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
            scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
            this.map.addControl(scaleControl);
            var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
            this.map.addControl(navControl);
            var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
            this.map.addControl(overviewControl);
        }
    },
    mounted(){
       this.createMap();//创建地图
       this.setMapEvent();//设置地图事件
       this.addMapControl();//向地图添加控件
       this.addMapOverlay();//向地图添加覆盖物
    }
}
</script>

<style scoped lang="less">
.contact-wrap{
    width:1440px;
    height:877px;
    background: url('../images/contact_bg.png');
    background-size: 100%;
    margin: 0 auto;
}
.banner{
    width:1440px;
    height:260px; 
    margin:0 auto;
    background: url('../images/contact_banner.png') no-repeat center;
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
.cont-box{
    width:100%;
    display:flex;
    justify-content: center;
    margin-bottom:0;
    li{
        text-align: center;
    }
    .imgbox{
        width:90px;
        height:90px;
        margin-left: 50%;
        margin-bottom:10px;
        transform: translateX(-50%);
        img{
            width:100%;
        }
    }
    small{
        font-size: 14px;
        color: #9DA3B4;
        line-height: 20px;
    }
    h4{
        margin-top:10px;
        font-size: 16px;
        color: #FFFFFF;
        line-height: 22px;
        margin-bottom:75px;
    }
}

.cont-box li:nth-child(4){
    h4{
        cursor: pointer;
        a{
            font-size: 16px;
            color: #FFFFFF;
            text-decoration: underline;
        }
    }
}
.QRcode{
    position: relative;
}
.erweima{
    position: absolute;
    width:256px;
    height:261px;
    background: url('../images/erweima.png') no-repeat center ;
    background-size: 261px;
    top: -138px;
    left: -245px;
    opacity: 0;
    transition: opacity 0.8s;
    transform: translate3d(435%, 0, 0);
    -webkit-transform: translate3d(435%, 0, 0);
    -o-transform: translate3d(435%, 0, 0);
    -moz-transform: translate3d(435%, 0, 0);
    -ms-transform: translate3d(435%, 0, 0);
}
.QRcode:hover{
    .erweima{
        opacity: 1;
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
    }
}
#map{
    margin:0 auto;
}

</style>