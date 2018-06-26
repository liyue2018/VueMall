<template>
    <div>
        <div v-for="(item,i) in product" :key="i" class="product-box">
            <router-link :to="{ path:'/goodsDetails',query:{productId: item.id}}" tag="div" class="product-box-item">
                <div class="item-img">
                    <img src="" v-lazy="item.productImgUrl" alt="">
                    <h4>{{ item.productName }}</h4>
                    <h6 class="product-info">{{ item.productTitle }}</h6>
                </div>
                <div class="item-price">
                    <i>￥</i>
                    <span>{{ item.productPrice }}</span>
                </div>
                <button class="btn-default">
                    查看详情
                </button>
            </router-link>
        </div>
    </div>
    
</template>

<script>
    export default {
        data: function() {
            return {
                
            }
        },
        created() {

        },
        mounted() {
            // this.getProductData()
        },
        methods: {
            // getProductData(id) {
            //     // 遍历产品数组

            //     console.log(this.product);

            //     this.product.some((item,i) => {
            //         if (item.id == id) {
            //             this.product.splice(i,1);
            //             return true;
            //         }
            //     })
            //     console.log(this.product);
            // }


        },
        props: ['product']
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
      .product-box-item {
        width: 305px;
        height: 430px;
        text-align: center;
        position: relative;
        transition: all 0.5s ease-out;
        float: left;
        &:hover {
            box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.3);
            top: -1px;
            .btn-default {
                opacity: 1;
            }
        }
        .item-img {
            width: 100%; 
            img {
                width: 206px; 
                height: 206px;
                margin: 50px auto 10px;
            }
            .product-info {
                color: #d0d0d0; 
                font-weight: normal;
                margin-top: 10px;
            }
        }
        .item-price {
            color: #d44d44;
            font-weight: 500;
            position: absolute;
            bottom: 70px;
            left: 50%;
            transform: translateX(-50%);
            span {
                font-weight: bolder;
                font-size: 22px;
            }
        }
        .btn-default {
            width: 120px;
            padding: 6px 0; 
            margin: 0 auto;
            transform: translateX(-50%);
            text-align: center; 
            border: 1px solid #ddd;
            border-radius: 5px; 
            background: #fff;
            position: absolute; 
            bottom: 70px; 
            transition: all 0.5s ease;
            // display: none;
            opacity: 0;
        }
    }
</style>