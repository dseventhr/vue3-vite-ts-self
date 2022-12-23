<template>
    <el-container class="app-wrapper">
        <el-aside class="app-slide">
            aside
        </el-aside>
        <el-container class="app-main">
            <el-header class="head-container">
                header
            </el-header>
            <el-main class="main-container">
                <ViewContent />
            </el-main>
        </el-container>
    </el-container>
</template>
<script  lang="ts">
import { defineComponent, computed } from 'vue'
import ViewContent from './components/ViewContent.vue'

export default defineComponent({
    components: { ViewContent }
})
</script>
<style lang="scss">
.app-wrapper {
    height: 100%;
    .app-slide {
        width: 200px;
        transition: width 0.3s linear;
    }
    .side-collpase {
        width: 64px;
    }
    .head-container {
        height: auto;
        padding: 0 20px 0 0;
    }
    .main-container {
        padding: 0;
        overflow-x: hidden;
        /*  headnav  50   pagetags 35*/
        min-height: calc(100vh - 50px - 35px);
        width: 100%;
        position: relative;
        overflow: hidden;
        background: #f3f5f8;
        font-size: 0.88rem;
    }
}
</style>