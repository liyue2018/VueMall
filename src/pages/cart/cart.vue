<template>
    <div>
        <mall-header class="cart-header"></mall-header>
        <div class="shopping-list w">
            <h2 class="title">购物清单</h2>
            <div class="list-header">
                <span class="name">商品信息</span>
                <p class="fr">
                    <span>单价</span>
                    <span>数量</span>
                    <span>小计</span>
                    <span>操作</span>
                </p>
            </div>

            <div class="cart-table">
                <div class="items-choose">
                    <div>
                        <input type="checkbox" name="" class="selected">
                    </div>
                    
                    <div class="items-img">
                        <img src="/static/images/product01.png" alt="" />
                    </div>
                    <div>
                        <a href="#" class="items-name">Smartisan T恤 伍迪·艾伦出生</a>
                    </div>
                </div>
                <div class="fr items-info">
                    <div>￥149</div>
                    <div>
                        <buynum></buynum>
                    </div>
                    <div>￥298</div>
                    <div>
                        <a href="javascript" class="iconfont icon-wrong items-del-btn"></a>
                    </div>
                </div>
            </div>
            <div class="cart-table">
                <div class="items-choose">
                    <div>
                        <input type="checkbox" name="" class="selected">
                    </div>
                    <div class="items-img">
                        <img src="/static/images/product01.png" alt="" />
                    </div>
                    <div>
                        <a href="#" class="items-name">Smartisan T恤 伍迪·艾伦出生</a>
                    </div>
                </div>
                <div class="fr items-info">
                    <div>￥149</div>
                    <div>
                        <buynum></buynum>
                    </div>
                    <div>￥298</div>
                    <div>
                        <a href="javascript" class="iconfont icon-wrong items-del-btn"></a>
                    </div>
                </div>
            </div>

            <div class="cart-bottom clearfix">
                <div class="fl all-check-box">
                    <input type="checkbox" name="" class="selected">
                    <label>全选</label>
                    <a href="javascript:;" class="delete-choose-goods">删除选中的商品</a>
                </div>
                <div class="fr shopping">
                    <div class="shopping-total shopping-num">
                        <h4 class="">已选择 <span class="num">9</span> 件商品</h4>
                        <h6 class="shopping-tips">共计 9 件商品</h6>
                    </div>
                    <div class="shopping-total shopping-price">
                        <h4 class="">应付总额: <span class="price">￥1171</span></h4>
                        <h6 class="shopping-tips">应付总额不含运费</h6>
                    </div>
                    <div class="fl">
                        <router-link to="/checkout">
                            <input type="button" readonly="readonly" value="现在结算" name="" class="now-buy-btn" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <mall-footer></mall-footer>
    </div>
</template>

<script>

import mallHeader from '../common/header.vue'
import mallFooter from '../common/footer.vue'
import buynum from '../components/buynum.vue'

    export default {
        data: function() {
            return {
            }
        },
        components: {
            "mall-header": mallHeader,
            "mall-footer": mallFooter,
            "buynum": buynum
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .cart-header {
        height: 100px;
        overflow-y: hidden;
        .nav {
            opacity: 0;
        }
        .cart-box.slide {
            z-index: -1 !important;
        }
    }
    .shopping-list {
        margin-top: 30px;
        z-index: 5;
        position: relative;
        padding-bottom: 91px;
        .title {
            height: 60px; 
            line-height: 60px; 
            border: 1px solid #d4d4d4; 
            background: #f3f3f3; 
            background: linear-gradient(#fbfbfb,#ececec); 
            padding-left: 20px; 
            box-shadow: 0 9px 4px -8px rgba(0, 0, 0, 0.1);
            font-size: 18px; 
            font-weight: 400;
            color: #333;
            border-radius: 4px;
        }
        .list-header {
            height: 38px; 
            line-height: 38px; 
            font-size: 12px;
            color: #838383;
            background: #eee;
            padding-left: 50px;
            border: {
                left: 1px solid #dbdbdb;
                right: 1px solid #dbdbdb;
            }
            span.name {
                float: left;
            }
            p {
                span {
                    display: inline-block; 
                    width: 137px; 
                    text-align: center;
                }
            }

        }
        .cart-table {
            height: 140px; 
            line-height: 6;
            background: #fff;
            padding-top: 26px;
            padding-left: 26px;
            .items-choose {
                float: left;
                >div {
                    float: left;
                }
                .selected {
                }
                .items-img {
                    display: inline-block;
                    width: 80px; 
                    height: 80px; 
                    border: 1px solid #eee;
                    border-radius: 3px;
                    overflow: hidden;
                    margin: 0 20px;
                    img {
                        width: 80px; 
                        height: 80px;
                        vertical-align: middle;
                    }
                }

                .items-name {
                    color: #333;
                    font-size: 14px;
                }
            }
            .items-info {
                font-weight: 500;
                height: 85px;
                line-height: 4;
                >div {
                    display: inline-block; 
                    width: 137px; 
                    text-align: center;
                    .items-del-btn {
                        font-size: 18px; 
                        font-weight: 700; 
                        color: rgba(0,0,0,.6);
                        opacity: 0.5;
                        &:hover {
                            opacity: 1;
                        }
                    }
                }
                
            }
        }

        .cart-bottom {
            height: 90px; 
            padding: 20px;
            width: 100%;
            background: #fdfdfd;
            background: linear-gradient(#fdfdfd,#f9f9f9);
            border: 1px solid #e9e9e9; 
            box-shadow: 0 -4px 10px 1px rgba(0, 0, 0, 0.06);
            border-radius: 5px;
            position: absolute; 
            bottom: 0;
            .all-check-box {
                padding-top: 12px;
                .delete-choose-goods {
                    color: #bbb;
                    font-size: 12px;
                    padding-left: 10px;
                }

            }
            .shopping {
                .shopping-total {
                    width: 170px;
                    color: #323232; 
                    line-height: 1.4285;
                    font-size: 16px;
                    float: left;
                    .shopping-tips {
                        color: #959595;
                        font-size: 12px;
                    }
                }
                .shopping-num {
                    text-align: right;
                    padding-right: 20px; 
                    border-right: 1px solid #e1e1e1;
                    .num {
                        color: #d44d44; 
                        padding: 0 6px;
                        font-size: 20px; 
                        font-weight: 500;
                    }
                }
                .shopping-price {
                    text-align: left;
                    padding-left: 20px;
                    margin-right: 20px;
                    .price {
                        color: #d44d44; 
                        padding: 0 6px;
                        font-size: 20px; 
                        font-weight: 500;
                    }
                }
                .now-buy-btn {
                    color: #fff; 
                     background-color: #678ee7;
                     background-image: linear-gradient(180deg,#678ee7,#5078df);
                     border-radius: 4px;
                     border: 1px solid #5c81e3;
                     width: 140px; 
                     text-align: center; 
                     padding: 14px 0;
                     font-size: 16px;

                }
            }
        }
    }
</style>