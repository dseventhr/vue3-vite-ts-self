<script lang="ts">
import { defineComponent, reactive } from 'vue';
import MenuTree from './MenuTree.vue';
import MenuHead from './MenuHead.vue';

export default defineComponent({
    components: { MenuTree, MenuHead },
    setup() {
        const handleOpen = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }
        const handleClose = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }

        const menuList = reactive([{
            id: '1',
            name: "列表模板",
            icon: "",
            children: [{
                id: '2',
                name: "基础模板1",
                icon: "",
                path: "/list/templateBase1"
            },
            {
                id: '3',
                name: "基础模板2",
                icon: "",
                path: "/list/templateBase2"
            }]
        },
        {
            id: '10',
            name: "视图模板",
            icon: "",
            children: [{
                id: '11',
                name: "基础模板1",
                icon: "",
                path: "/list/viewsBase1"
            }]
        }
        ]);

        return { handleOpen, handleClose, menuList }
    }
})
</script>

<template>
    <div class="menu-container">
        <MenuHead />
        <div class="menu-main">
            <el-menu default-active="2" :router="true" class="el-menu-vertical-demo" @open="handleOpen"
                @close="handleClose">
                <MenuTree :menu-list="menuList" />
            </el-menu>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.menu-container {
    width: 100%;
    height: 100%;

    .menu-main {
        width: 100%;
    }

    .el-menu {
        border-right: none;
    }
}
</style>