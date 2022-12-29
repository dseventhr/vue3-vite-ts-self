<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({ 
    props: ['menuList']
})
</script>

<template>
    <span v-for="(menu, index) in menuList" :key="index">
        <el-menu-item v-if="!menu.children" :index="menu.id">
            <template #title>{{ menu.name }}</template>
        </el-menu-item>
        <el-sub-menu v-else :index="menu.id">
            <template #title>{{ menu.name }}</template>
            <MenuTree v-if="menu.children" :menuList="menu.children"></MenuTree>
        </el-sub-menu>
    </span>
</template>


