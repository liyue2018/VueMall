<template>
    <div>
        <mall-header></mall-header>
        <router-view></router-view>
        <mall-footer></mall-footer>
    </div>
</template>

<script>

import mallHeader from './common/header.vue';
import mallFooter from './common/footer.vue';

export default {
    data: function () {
        return {}
    },
    components: {
        'mallHeader': mallHeader,
        'mallFooter': mallFooter,
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>