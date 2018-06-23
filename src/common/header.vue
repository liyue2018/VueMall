<template>
    <div class="header-container">
        <!-- 顶部logo开始 -->
        <header class="top-header">
            <div class="logo fl">
                <span class="iconfont icon-RFQ-filling icon-logo"></span>
            </div>
            <div class="search-box fr">
                <form class="search-form">
                    <div>
                        <label><input type="text" name="search-info" value="" placeholder="请输入商品信息"></label>
                        <a href="javascript:;"><span class="iconfont icon-search"></span></a>
                    </div>
                </form>
                <ul class="nav-list fl">
                    <li>
                        <a href="#">全部商品</a>
                    </li>
                    <li>
                        <a href="#">捐赠</a>
                    </li>
                </ul>
                <div class="cart-box">
                    <a href="#" class="user">
                        <span class="iconfont icon-account"></span>
                    </a>
                    <a href="#" class="cart">
                        <span class="iconfont icon-cart"></span>
                        <span class="iconnum">0</span>
                    </a>
                </div>
            </div>
        </header>
        <!-- 顶部logo结束 -->
        <!-- 顶部导航开始 -->
        <nav class="nav">
            <ul class="nav-list">
                <li><a href="javascript:;" class="home">首页</a></li>
                <li><a href="javascript:;">全部商品</a></li>
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
                msg: 'hi'
            }
        },
        created () {
            this.windowScroll();
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
                    if (scrollY > 134) {
                        nav.style.position = 'fixed';
                        nav.style.top = 0 + 'px';

                        // 让购物车下滑
                        cart.classList.add('slide');
                    } else {
                        nav.style.position = '';
                        cart.classList.remove('slide');
                    }
                })
            }
        }
    }
</script>


<style scoped lang="scss" rel="stylesheet/scss">
    .header-container {

        // 顶部logo部分

        .top-header {
            height: 64px;
            line-height: 64px;
            background: #333;
            color: #c8c8c8;
            padding: 2px 20px;
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
                    input[name="search-info"] {
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
                            top: 16px;
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
                        top: 6px;
                        z-index: 3;
                        transition: all 0.5s ease-in-out;
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
            line-height: 70px; 
            background: #f7f7f7;
            box-shadow: 0 2px 4px rgba(0,0,0,.04);
            width: 100%;
            transition: all 1s ease-in-out;
            .nav-list {
                height: 100%; 
                padding-left: 10px;
                li {
                    height: 100%;
                    width: 80px;
                    float: left;
                    a {
                        display: block;
                        width: 100%; 
                        text-align: center;
                        position: relative;
                        color: #666;
                        &:before {
                            content: ''; 
                            width: 4px; 
                            height: 4px; 
                            border-radius: 50%;
                            background: #dbdbdb;
                            position: absolute; 
                            top: 33px; 
                            left: 0;
                        }
                    }
                    a.home {
                        &:before {
                            width: 0;
                        }
                    }
                }
            }
        }
    }
</style>