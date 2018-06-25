<template>
    <div class="main w">
        <!-- <h1>{{ title }}</h1>

        <router-link to="/hello">hello</router-link>
        <router-link to="/home">home</router-link> -->

        <router-view></router-view>
    </div>
</template>

<script>

// 导入 header 组件

// import mallHeader from './common/header.vue'
// 导入 footer 组件

// import mallFooter from './common/footer.vue'


export default {
    data: function () {
        return {
            title: 'liyue'
        }
    }
    // components: {
    //     'mallHeader': mallHeader,
    //     'mallFooter': mallFooter
    // }
}


</script>

<style>

@import 'assets/style/index.scss';

.main {
    background: #ededed;
}



</style>