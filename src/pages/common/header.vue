<template>
    <div class="header-container">
        <!-- 顶部logo开始 -->
        <header class="top-header w">
            <div class="logo fl">
                <span class="iconfont icon-RFQ-filling icon-logo"></span>
            </div>
            <div class="search-box fr">
                <!-- <form class="search-form"> -->
                    <div class="search-form">
                        <label><input type="text" name="search" value="" placeholder="请输入商品信息" v-model="keywords" @keyup.enter="setkeywords(keywords)"></label>
                        <router-link :to="{ path:'/search',query:{key: keywords}}"><span class="iconfont icon-search"></span></router-link>
                    </div>
                <!-- </form> -->
                <ul class="nav-list fl">
                    <li>
                        <router-link to="/goods">全部商品</router-link>
                    </li>
                    <li>
                        <a href="#">捐赠</a>
                    </li>
                </ul>
                <div class="cart-box">
                    <router-link to="/login" class="user">
                        <span class="iconfont icon-account"></span>
                    </router-link>
                    <router-link to="/cart" class="cart">
                        <span class="iconfont icon-cart"></span>
                        <span class="iconnum">0</span>
                    </router-link>
                </div>
            </div>
        </header>
        <!-- 顶部logo结束 -->
        <!-- 顶部导航开始 -->
        <nav class="nav">
            <ul class="nav-list w">
                <li><router-link to="/home">首页</router-link></li>
                <li><router-link to="/goods">全部商品</router-link></li>
                <li><a href="javascript:;">品牌周边</a></li>
                <li><a href="javascript:;">GitHub</a></li>
            </ul>
        </nav>
        <!-- 顶部导航结束 -->
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                keywords: ''
            }
        },
        created () {
            this.windowScroll();
        },
        mounted() {
            // this.setkeywords();
        },
        methods: {
            // 导航栏吸顶事件

            // 当屏幕滚动时触发

            windowScroll() {
                window.addEventListener('scroll', function (e) {
                    // 获取元素
                    var nav = document.querySelector('.nav');
                    // 计算滚动出去的距离 兼容性处理
                    var scrollY = document.body.scrollTop || document.documentElement.scrollTop;
                    var cart = document.querySelector('.cart-box');

                    // 判断滚动的距离超过 90px 让nav 吸顶 透明度从0到1变化
                    if (scrollY > 90) {
                        nav.style.position = 'fixed';
                        nav.style.top = 0 + 'px';
                        nav.style.zIndex = 3;

                        // 让购物车下滑
                        cart.classList.add('slide');
                    } else {
                        nav.style.position = '';
                        cart.classList.remove('slide');
                    }
                })
            },
            setkeywords(keywords) {
                location.href = '/#/search?key=' + keywords;

                // localStorage.setItem('keywords',JSON.stringify(this.keywords));
            }
        }
        // props: ['flag']
    }
</script>


<style scoped lang="scss" rel="stylesheet/scss">
    .header-container {
        width: 100%;
        background: #333;
        // 顶部logo部分

        .top-header {
            height: 100%;
            color: #c8c8c8;
            height: 100px;
            line-height: 100px;
            .logo {
                height: 46px;
                .icon-logo {
                    font-size: 30px;
                    color: #fff;
                }
            }
            .search-box {
                .search-form {
                    float: left;
                    position: relative;
                    margin-right: 40px;
                    input[name="search"] {
                        width: 250px;
                        height: 34px;
                        padding: 4px 8px;
                        border-radius:5px;
                        font-size: 14px;
                    }
                    .icon-search {
                        position: absolute;
                        top: 2px;
                        right: 10px;
                        color: #bfcbd9;
                        font-weight: 700;
                        &:hover {
                            color: #666;
                        }
                    }
                }
                .nav-list {
                    font-size: 14px;
                    li {
                        float: left;
                        width: 80px;
                        a {
                            color: #c8c8c8;
                        }
                        .iconfont {
                            font-weight: 700;
                        }
                    }
                }
                .cart-box {
                    float: right;
                    a {
                        display: inline-block;
                        font-weight: 700;
                        color: #c8c8c8;
                    }
                    .user {
                        width: 30px;
                        margin-left: 30px;
                    }
                    .cart {
                        position: relative;
                        .iconnum {
                            display: inline-block;
                            width: 15px;
                            height: 15px; 
                            background: #f00; 
                            border-radius: 50%;
                            font-size: 12px;
                            position: absolute; 
                            top: 35px;
                            left: 9px;
                            line-height: 15px;
                            text-align: center;
                            color: #fff;
                        }
                    }

                }
                .cart-box.slide {
                        position: fixed;
                        right: 20px; 
                        top: -14px;
                        z-index: 4;
                        transition: all 0.2s ease-in-out;
                        a {
                            color: #666;
                        }
                    }
            }
        }
        // 导航栏
        .nav {
            width: 100%;
            height: 70px; 
            line-height: 50px; 
            background: #f7f7f7;
            box-shadow: 0 2px 4px rgba(0,0,0,.04);
            width: 100%;
            transition: all 0.2s ease-in-out;
            .nav-list {
                height: 100%; 
                padding: 10px 0; 
                li {
                    height: 100%;
                    width: 100px;
                    float: left;
                    margin: 0 10px;
                    a {
                        display: block;
                        height: 100%;
                        width: 100%; 
                        text-align: center;
                        position: relative;
                        color: #666;
                        // &:before {
                        //     content: ''; 
                        //     width: 4px; 
                        //     height: 4px; 
                        //     border-radius: 50%;
                        //     background: #dbdbdb;
                        //     position: absolute; 
                        //     top: 33px; 
                        //     left: 0;
                        // }

                    }
                    a.active {
                        color: #b37272;
                        background: #dcdcdc;
                        border-radius: 5px;
                    }

                }
            }
        }
    }
</style>