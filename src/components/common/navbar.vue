<template>
<!-- 导航 -->
    <div class="header">
        <div class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">
                <img src="../../images/logo.png" alt="" class="logo">
            </a>
            <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" exact>首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/aboutUs" exact :class=" active? 'router-link-exact-active':''">关于我们</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/news" exact>平台动态</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contactUs" exact>联系我们</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
    export default {
        name:'navbar',
        data(){
            return {
                active:false
            }
        },
        mounted(){
            if(this.$route.query.ind === 2){      
                $('.nav-item').eq(2).children('a').addClass('router-link-exact-active router-link-active')
            }
             if(this.$route.path === '/aboutUs'){      
                $('.nav-item').eq(1).children('a').addClass('router-link-exact-active router-link-active');
                this.active = true;
            }
            $(document).scrollTop(0)
            $(document).scroll(function(){
                var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                if(scrollTop > 60){
                    $('.header').css('backgroundColor','#000')
                }else{
                    $('.header').css('backgroundColor','transparent')
                }
            })
        }
    }
</script>

<style scoped lang="less">
    .header{
        width:100%;
        height: 60px;
        background: transparent;
        position: fixed;
        top:0;
        z-index:222222;
        transition: background 0.5s;
    }
    .header:hover{
        background: #000;
    }
    .navbar{
        height:60px;
        width:1200px;
        padding:0;
        margin-left:50%;
        transform:translateX(-50%);
        
        .navbar-collapse{
            z-index:1;
        }
        #navbarText {
            justify-content: flex-end;
            .navbar-nav{
                text-align:right;
                width:460px;
                display:flex;
            }     
        }
        .logo{
            width:133px;
            height:26px;
        }  
        .navbar-toggler{
            color:#000;
        }     
        .nav-item {
            text-align:center;
            flex:1;
            a{
                font-size: 14px;
                color: #FFFFFF;
            }
        }
        li.bg{
             &>a{
                color:#2CBB55!important;
                position: relative;
                &:before{
                    position: absolute;
                    top:-22px;
                    left:50%;
                    transform: translateX(-50%);
                    display:inline-block;
                    content:"";
                    width:60px;
                    height:4px;
                    background-image: linear-gradient(-135deg, #2CBB55 0%, #2CBB86 100%);
                }
            }
        }
        li:hover{
            a{
                color:#2CBB55;
                position: relative;
                text-decoration: none;
                &:before{
                    position: absolute;
                    top:-21px;
                    left:50%;
                    transform: translateX(-50%);
                    display:inline-block;
                    content:"";
                    width:60px;
                    height:4px;
                    background-image: linear-gradient(-135deg, #2CBB55 0%, #2CBB86 100%);
                }
            }
        }
    }

    .router-link-exact-active{
        color:#2CBB55!important;
        position: relative;
        &:before{
            position: absolute;
            top:-21px;
            left:50%;
            transform: translateX(-50%);
            display:inline-block;
            content:"";
            width:60px;
            height:4px;
            background-image: linear-gradient(-135deg, #2CBB55 0%, #2CBB86 100%);
        }
    }
    @media screen and (max-width:1199px){
        .navbar{
            padding:0; 
            .navbar-brand{
                margin-left:20px;
            }
            .navbar-toggler{
                margin-right:20px;
            }
        }
    }
    @media screen and (max-width:992px){
         #navbarText{
            position: absolute;
            top: 60px;
            width: 100%;
            background: #666;
            .nav-item a{
                padding:10px 0;
            }
            .show .navbar-nav .nav-item a.bg{
                color:#2CBB55;
                position: relative;
                &:before{
                    position: absolute;
                    top:-13px;
                    left:50%;
                    transform: translateX(-50%);
                    display:inline-block;  
                }
            }
        }
        .navbar-nav{
            li{
                text-align:left;
            }
        }
        
    }
    
</style>
