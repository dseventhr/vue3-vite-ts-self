<script  lang="ts">
import { defineComponent, computed } from 'vue'
import ViewContent from './components/ViewContent.vue'
import RightAside from './components/RightAside.vue'
import Menu from './components/Menu.vue'

export default defineComponent({
    components: { ViewContent, RightAside, Menu }
})
</script>

<template>
    <el-container class="app-wrapper">
        <el-aside class="app-slide">
            <Menu />
        </el-aside>
        <RightAside />
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

<style lang="scss">
.app-wrapper {
    width: 100%;
    height: 100%;
    .app-slide {
        width: 270px;
        transition: width 0.3s linear;
    }
    .side-collpase {
        width: 64px;
    }
    .app-main {
        padding-right: 120px;
        box-sizing: border-box;
    }
    .head-container {
        height: 100px;
        line-height: 100px;
        padding: 0 20px;
        box-sizing: border-box;
        background-color: #F2F7FF;
        border-radius: 40px 0 0 0;
    }
    .main-container {
        width: 100%;
        min-height: calc(100vh - 100px);
        padding: 20px;
        box-sizing: border-box;
        overflow-x: hidden;
        position: relative;
        overflow: hidden;
        font-size: 0.88rem;
        background-color: #F2F7FF;
        border-radius: 0 0 0 40px;
    }
}
</style>