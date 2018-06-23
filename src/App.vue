<template>
    <div class="main w">
        <mall-header></mall-header>
        <div class="content">
            <h1>hello test </h1>
        </div>
        <mall-footer></mall-footer>
    </div>
</template>

<script>

// 导入 home 组件

import mallHeader from './common/header.vue'
// 导入 footer 组件

import mallFooter from './common/footer.vue'


export default {
    data: function () {
        return {
            title: 'liyue'
        }
    },
    components: {
        'mallHeader': mallHeader,
        'mallFooter': mallFooter
    }
}


</script>

<style>

@import 'assets/style/index.scss';

.main {
    background: #ededed;
}

.content {
    height: 1000px;
    /* background:  pink; */
}


</style>