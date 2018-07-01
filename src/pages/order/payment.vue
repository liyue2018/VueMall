<template>
    <div>
        <h1>提交订单成功,请选择支付方式</h1>
        <p class="tips">请在 24 小时内完成支付，超时订单将自动取消。</p>
        <p class="tips">我们不会在您完成支付后的 72 小时内发货，所以不要支付了</p>
        <div class="payment-way">
           <router-link to="/order/alipay" class="active">
               <img src="/assets/images/alipay.png" alt="">
           </router-link>
           <router-link to="/order/qqpay">
               <img src="/assets/images/qqpay.png" alt="">
           </router-link>
           <router-link to="/order/weixinpay">
               <img src="/assets/images/weixinpay.png" alt="">
           </router-link>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
    .payment-way {
        height: 130px;
        margin: 50px auto; 
        a {
            display: inline-block; 
            width: 174px; 
            height: 50px; 
            line-height: 50px;
            text-align: center;
            margin: 0 10px;
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            background: #fafafa;
            img {
                width: 144px; 
                height: 34px;
            }
        }
        a.active {
            border-color: #6a8fe5; 
            background: #fff;
        }
    }
</style>