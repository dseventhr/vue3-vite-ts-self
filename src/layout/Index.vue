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
    width: 100vw;
    height: 100vh;
    .app-slide {
        width: 270px;
        transition: width 0.3s linear;
    }
    .side-collpase {
        width: 64px;
    }
    .head-container {
        height: 100px;
        line-height: 100px;
        padding: 0 40px;
        box-sizing: border-box;
        background-color: #F2F7FF;
        border-radius: 40px 0 0 0;
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