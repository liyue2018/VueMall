<template>
    <div class="qq">
        <h1 class="title">
            <img src="/assets/images/qqpay.png" alt="">
        </h1>
        <p>扫一扫千万 <strong>别</strong> 付钱啊</p>
        <h2 class="money">1.00</h2>
        <div class="qq-img">
            <div class="code-img">
                <img src="/assets/images/qq.png" alt="">
                <div class="qr-img">
                    <img src="/assets/images/qr.png" alt="">
                    <span>打开手机QQ</span>
                    <span>扫一扫付款</span>
                </div>
            </div>
            
        </div>
        <div class="time-down">
            请于 01 分 18 秒 内支付
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    .qq {
        padding-bottom: 100px;
        h1.title {
            width: 160px; 
            height: 40px;
            margin: 0 auto;
            img {
                width: 160px; 
                height: 40px;
            }
        }
        .money {
            font-size: 30px; 
            font-weight: 700; 
            color: #d44d44;
        }
        .qq-img {
            .code-img {
                width: 200px; 
                height: 266px;
                border: 1px solid #ddd; 
                border-radius: 5px; 
                padding: 10px;
                margin: 20px auto;
                img {
                    width: 180px; 
                    height: 180px; 
                }
                span {
                    display: inline-block; 
                    margin-top: 2px;
                }

            }
            .qr-img {
                width: 130px; 
                height: 50px;
                margin: 10px auto;
                color: #999;
                img {
                    width: 50px; 
                    height: 100%; 
                    float: left;
                }
            }
        }
        .time-down {
            position: absolute;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
        }

    }
</style>
