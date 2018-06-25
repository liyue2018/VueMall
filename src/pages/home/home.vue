<template>
    <div>
        <div class="main-content">
            <!-- 轮播图开始 -->
            <div class="swiper" @mouseenter='stop' @mouseleave='start'>
                <div class="swiper-container">
                    <div class="swiper-item">
                        <a href="#">
                            <img src="/assets/images/banner01.jpeg" alt="">
                        </a>
                    </div>
                    <div class="swiper-item">
                        <a href="#">
                            <img src="/assets/images/banner02.png" alt="">
                        </a>
                    </div>
                </div>
                <!-- 小圆点 -->
                <ol class="indicators">
                    <li></li>
                    <li></li>
                </ol>
                <!-- 左右箭头 -->
                <div class="arrow w">
                    <a href="#" class="iconfont icon-back" @click='prev'></a>
                    <a href="#" class="iconfont icon-more" @click='next'></a>
                </div>
            </div>
            <!-- 轮播图结束 -->

            <!-- 商品导航开始 -->
            <ul class="product-nav">
                <li class="item">
                    <img src="/assets/images/product-nav01.jpg" alt="">
                    <a href="#">
                    </a>
                </li>
                <li class="item">
                    <img src="/assets/images/product-nav02.jpg" alt="">
                    <a href="#">
                    </a>
                </li>
                <li class="item">
                    <img src="/assets/images/product-nav03.png" alt="">
                    <a href="#">
                    </a>
                </li>
                <li class="item">
                    <img src="/assets/images/product-nav04.jpg" alt="">
                    <a href="#">
                    </a>
                </li>
            </ul>
            <!-- 商品导航结束 -->

            <!-- 热门商品开始 -->
            <div class="panel hot">
                <h2 class="title">{{ hotP.title }}</h2>
                <div class="content">
                    <product :product="hotP.data"></product>
                </div>
            </div>
            <!-- 热门商品结束 -->
            <!-- 官方精选开始 -->
            <div class="panel choice">
                <h2 class="title">{{ choiceP.title }}</h2>
                <div class="content">
                    <div class="imgbanner">
                        <img src="" v-lazy="choiceP.imgbanner" alt="">
                        <a href="#" class="link-cover"></a>
                    </div>
                    <product :product="choiceP.data"></product>
                </div>
            </div>
            <!-- 官方精选结束 -->
            <!-- 品牌周边开始 -->
            <div class="panel choice">
                <h2 class="title">{{ brandP.title }}</h2>
                <div class="content">
                    <div class="imgbanner">
                        <img src="" v-lazy="brandP.imgbanner" alt="">
                        <a href="#" class="link-cover"></a>
                    </div>
                    <product :product="brandP.data"></product>
                </div>
            </div>
            <!-- 品牌周边结束 -->
            <!-- 品牌精选开始 -->
            <div class="panel choice">
                <h2 class="title">{{ wellChosenP.title }}</h2>
                <div class="content">
                    <div class="imgbanner">
                        <img src="" v-lazy="wellChosenP.imgbanner" alt="">
                        <a href="#" class="link-cover"></a>
                    </div>
                    <product :product="wellChosenP.data"></product>
                </div>
            </div>
            <!-- 品牌精选结束 -->
            <!-- 商品导航开始 -->
            <ul class="product-nav">
                <li class="item">
                    <img src="/assets/images/product-nav01.jpg" alt="">
                    <a href="#">
                    </a>
                </li>
                <li class="item">
                    <img src="/assets/images/product-nav02.jpg" alt="">
                    <a href="#">
                    </a>
                </li>
                <li class="item">
                    <img src="/assets/images/product-nav03.png" alt="">
                    <a href="#">
                    </a>
                </li>
                <li class="item">
                    <img src="/assets/images/product-nav04.jpg" alt="">
                    <a href="#">
                    </a>
                </li>
            </ul>
            <!-- 商品导航结束 -->
        </div>
    </div>
</template>

<script>

import mallGoods from './mallGoods.vue';

import product from '../components/product.vue'

import $ from 'jquery';

var count = 0;

    export default {
        data: function () {
            return {
                timerId: null,
                hotP: [],
                choiceP: [],
                brandP: [],
                wellChosenP: []
            }
        },
        created() {
            // 获取首页商品的数据
            this.getProductData();
        },
        mounted () {
            var count = 0;
            var that = this;

            var auto = function() {
                that.next();
            }
            this.timerId = setInterval(auto, 2000);
        },
        methods: {
            next() {
                var $swiper = $('.swiper-container .swiper-item');
                count++;

                if (count == $swiper.length) {
                    count = 0;
                }
                $swiper.eq(count).fadeIn().siblings().fadeOut();
            },
            prev() {
                var $swiper = $('.swiper-container .swiper-item');
                count --;
                if (count == -1) {
                    count = $swiper.length - 1;
                }
                $swiper.eq(count).fadeIn().siblings().fadeOut();
            },
            stop() {
                clearInterval(this.timerId);
            },
            start() {
                setInterval(this.auto, 2000);
            },

            // 获取首页商品的数据

            getProductData() {
                this.$http.get('../../../static/hotData.json').then((Response) => {
                    this.hotP = Response.body.hotData;
                    this.choiceP = Response.body.choiceData;
                    this.brandP = Response.body.brandData;
                    this.wellChosenP = Response.body.wellChosenData;
                }, err => {
                    console.log(err)
                });
            }

        },
        components: {
            product
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    .main-content {
        overflow: hidden;
        margin-top: 20px;
        // background: #fff;
        .swiper {
            position: relative;
            transition: all 0.5s ease;
        }
        .swiper-container {
            height: 460px; 
            background: #fff;
            position: relative;
            .swiper-item {
                height: 100%;
                position: absolute; 
                top: 0; 
                left: 0;
                display: none;
                img {
                    display: block; 
                    width: 100%; 
                    height: 100%;
                }
                &:first-child {
                    display: block;
                }
            }
        }
        .arrow {
            padding: 0 10px;
            position: absolute;
            transform: translateY(-50%);
            top: 50%;
            z-index: 2;
            a {
                display: block;
                width: 50px; 
                height: 50px; 
                line-height: 50px;
                border-radius: 50%;
                text-align: center;
                background: rgba(255,255,255,0.2);
                transition: all 0.5s ease;
                &:hover {
                    background: rgba(255,255,255,1);
                }
            }
            a.icon-back {
                float: left;
            }
            a.icon-more {
                float: right;
            }
        }
        .indicators {
            position: absolute; 
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
            > li {
                display: inline-block; 
                width: 10px; 
                height: 10px;
                border-radius: 50%;
                background: #ddd;
            }
        }

        .product-nav {
            height: 200px;
            margin: 30px 0;
            border: 1px solid #ddd;
            border-radius: 6px;
            overflow: hidden;
            .item {
                float: left; 
                width: 25%; 
                height: 100%;
                position: relative;
                img {
                        width: 100%; 
                        height: 100%;
                    }
                > a {
                    height: 100%;
                    width: 100%;
                    display: block;
                    position: absolute; 
                    top: 0; 
                    left: 0;
                    border-right: 1px solid #ddd;
                    &:hover {
                        box-shadow: 1px 1px 8px 2px rgba(0,0,0,.1) inset;
                    }
                }
            }

        }
        .panel {
            margin-bottom: 40px; 
            overflow: hidden;
            background: #fff;
            h2.title {
                background: linear-gradient(#fbfbfb,#ececec);
                height: 60px; 
                line-height: 60px; 
                padding-left: 20px;
                font-size: 18px; 
                font-weight: 400;
                border: 1px solid #d4d4d4;
                border-radius: 8px; 
            }
            .content {
                height: 430px; 
                background: #fff;
                .imgbanner {
                    position: relative;
                    width: 609px; 
                    height: 100%; 
                    float: left;
                    img {
                        width: 100%; 
                        height: 100%;
                    }
                    > a {
                        height: 100%;
                        width: 100%;
                        display: block;
                        position: absolute; 
                        top: 0; 
                        left: 0;
                        border-right: 1px solid #ddd;
                        &:hover {
                            box-shadow: 1px 1px 8px 3px rgba(0,0,0,0.1) inset;
                        }
                    }
                }
            }
        }
    }
  
</style>