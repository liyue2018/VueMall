<template>
    <div class="goods-detail w">
        <div class="goods-panel clearfix">
            <div class="img-box">
                <ul class="small-img" ref="imgList">
                    <li class="item on">
                        <img src="/static/images/product-detail01.jpg" alt="">
                    </li>
                    <li class="item">
                        <img src="/static/images/product-detail02.jpg" alt="">
                    </li>
                    <li class="item">
                        <img src="/static/images/product-detail03.jpg" alt="">
                    </li>
                    <li class="item">
                        <img src="/static/images/product-detail04.jpg" alt="">
                    </li>
                    <li class="item">
                        <img src="/static/images/product-detail05.jpg" alt="">
                    </li>
                </ul>
                <div class="big-img">
                    <img :src="bigImgUrl" ref="bigImgUrl" alt="">
                </div>
            </div>
            <div class="info-box">
                <div class="goods-info">
                    <h4 class="name">{{ product.productName }}</h4>
                    <h6 class="title">
                        <span>{{ product.productTitle }}</span>
                        <span class="price">￥<i>{{ product.productPrice }}</i></span>
                    </h6>
                </div>
                
                <div class="buy-num">
                    <span>数量</span>
                    <buynum style="margin-left: 50px"></buynum>
                </div>
                <div class="buttons">
                    <input type="button" name="" value="现在购买" readonly="readonly" />
                    <input type="button" name="" value="现在购买" readonly="readonly" />
                </div>

            </div>
        </div>
        <!-- 产品信息 -->
        <div class="item-info">
            <h4 class="title">产品信息</h4>
            <div class="product-detail-img">
                <img src="" v-lazy="detailImgUrl" alt="">
            </div>
        </div>
    </div>
</template>

<script>

    import $ from 'jquery'
    import buynum from '../components/buynum.vue'
    export default {
        data: function () {
            return {
                bigImgUrl: '',
                detailImgUrl: '/static/images/big-product-detail01.jpg',
                product:''
            }
        },
        created() {
            // 获取本地存储中的商品信息
            this.getLocalProduct();
        },
        mounted() {
            this.changeImg();
        },
        methods: {
           
            // 点击小图片切换对应的大图片
            changeImg() {
                    var imgList = this.$refs.imgList;
                    var that = this;

                    $(imgList).on('click','li', function() {
                        $(this).addClass('on').siblings().removeClass('on');
                        that.bigImgUrl = $(this).find('img')[0].src;
                    })
            },
            getLocalProduct() {
                // 从本地请求商品数据
                this.product = JSON.parse(localStorage.getItem('products'));
                this.bigImgUrl = this.product.productImgUrl;
            }
        },
        components: {
            buynum
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .goods-detail {
        overflow: hidden;
        margin: 20px auto 50px;
    }
    .goods-panel {
        height: 600px;
        border: 1px solid #cdcdcd;
        border-radius: 5px; 
        background: #fff; 
        padding: 60px;
        .img-box {
            float: left;
            height: 460px;
            .small-img {
                width: 80px;
                float: left;
                .item {
                    width: 80px; 
                    height: 80px; 
                    line-height: 80px;
                    border-radius: 5px; 
                    border: 1px solid rgba(0,0,0,.06); 
                    margin-bottom: 10px;
                    text-align: center;
                    cursor: pointer;
                    img {
                        width: 54px; 
                        height: 54px;
                        vertical-align: middle;
                    }

                }
                .item.on {
                    border: 3px solid rgba(0,0,0,.2);
                }

            }
            .big-img {
                width: 440px; 
                height: 440px;
                margin-left: 100px; 
                img {
                    width: 100%; 
                    height: 100%;
                }
            }
        }
        .info-box {
            margin-left: 560px;
            width: 450px;
            .goods-info {
                padding-bottom: 20px; 
                border-bottom: 1px solid #ddd;
                .name {
                    font-size: 24px;
                    color: #333;
                    font-weight: normal; 
                    margin-bottom: 10px;
                }
                .title {
                    color: #dbdbdb;
                    width: 430px;
                    font-size: 14px;
                    font-weight: normal;
                    position: relative;
                    .price {
                        color: #d44d44;
                        font-weight: 700;
                        position: absolute; 
                        right: 0;
                        i {
                            font-size: 20px; 
                        }
                    }
                }
            }
            .buy-num {
                position: relative; 
                margin: 30px 0;
                span {
                    position: absolute; 
                    left: 0; 
                    top: 2px; 
                    color: #999;
                }
            }
            
            .buttons {
                padding-top: 30px; 
                border-top: 1px solid #ddd;
                input[type='button'] {
                    display: inline-block; 
                    width: 145px; 
                    height: 50px; 
                    line-height: 50px; 
                    text-align: center;
                    border-radius: 5px;
                    margin-right: 10px;
                    &:first-child {
                        background: #678ee7;
                        background-image: linear-gradient(180deg,#678ee7,#5078df);
                        border: 1px solid #5c81e3; 
                        color: #fff;
                        opacity: 0.94;
                        &:hover {
                            opacity: 1;
                        }
                    }
                    &:last-child {
                        border: 1px solid #e1e1e1;
                        color: #646464;
                        background: #f9f9f9;
                        background-image: linear-gradient(180deg,#fff,#f9f9f9);
                        opacity: 0.9;
                        &:hover {
                            opacity: 1;
                        }
                    }

            }
            }
        }
    }

    .item-info {
        margin-top: 30px;
        h4.title {
            height: 60px; 
            line-height: 60px; 
            padding-left: 20px;
            font-size: 18px; 
            font-weight: normal;
            background: #f3f3f3; 
            background-image: linear-gradient(#fbfbfb,#ececec);
            border: 1px solid #d4d4d4;
            border-radius: 8px 8px 0 0;
        }
        .product-detail-img {
            img {
                width: 100%; 
                height: 100%;
            }
        }
    }
</style>