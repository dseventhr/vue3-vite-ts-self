<script lang="ts">
import { defineComponent, reactive } from 'vue';
import MenuTree from './MenuTree.vue';

export default defineComponent({
    components: { MenuTree },
    setup() {
        const handleOpen = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }
        const handleClose = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }

        const menuList = reactive([{
            "id": 1,
            "name": "权限系统",
            "icon": "",
            "children": [{
                "id": 2,
                "name": "用户管理",
                "icon": "",
                "children": [{
                    "id": 3,
                    "name": "用户列表",
                    "icon": ""
                }]
            }, {
                "id": 9,
                "name": "角色管理",
                "icon": "",
                "children": [{
                    "id": 11,
                    "name": "角色列表",
                    "icon": ""
                }]
            }, {
                "id": 10,
                "name": "部门管理",
                "icon": "",
                "children": [{
                    "id": 12,
                    "name": "部门列表",
                    "icon": ""
                }]
            }, {
                "id": 13,
                "name": "导航管理",
                "icon": "",
                "children": [{
                    "id": 15,
                    "name": "导航列表",
                    "icon": ""
                }]
            }, {
                "id": 14,
                "name": "权限管理",
                "icon": "",
                "children": [{
                    "id": 26,
                    "name": "权限统计",
                    "icon": ""
                }, {
                    "id": 58,
                    "name": "权限分配",
                    "icon": ""
                }]
            }]
        },
        {
            "id": 1765,
            "name": "训练营管理",
            "icon": "",
            "children": [{
                "id": 1768,
                "name": "内容管理",
                "icon": "",
                "url": "/content"
            }, {
                "id": 1769,
                "name": "班级管理",
                "icon": "",
                "url": "/class"
            }, {
                "id": 1770,
                "name": "学员管理",
                "icon": "",
                "url": "/student"
            }, {
                "id": 1771,
                "name": "作业管理",
                "icon": "",
                "url": "/homework"
            }, {
                "id": 1772,
                "name": "人员管理",
                "icon": "",
                "url": "/staffManage"
            }, {
                "id": 1773,
                "name": "学员管理日志",
                "icon": "",
                "url": "/studentManageLog"
            }, {
                "id": 2640,
                "name": "学情系统",
                "icon": "",
                "url": "/learnmonitor"
            }, {
                "id": 2641,
                "name": "企业信息",
                "icon": "",
                "url": "/companyInfo"
            }]
        }, 
        {
            "id": 1766,
            "name": "课程管理",
            "icon": "",
            "children": [{
                "id": 1774,
                "name": "课程列表",
                "icon": "",
                "url": "/classList"
            }, {
                "id": 1775,
                "name": "留言管理",
                "icon": "",
                "url": "/messages"
            }, {
                "id": 1776,
                "name": "分销查询",
                "icon": "",
                "url": "/sellSearch"
            }, {
                "id": 2031,
                "name": "企业管理",
                "icon": ""
            }, {
                "id": 2608,
                "name": "小班课班级管理",
                "icon": "",
                "url": "/courseClass"
            }, {
                "id": 2609,
                "name": "小班课学员管理",
                "icon": "",
                "url": "/studentManage"
            }]
        }]);

        return { handleOpen, handleClose, menuList }
    }
})
</script>

<template>
    <div class="menu-container">
        <div class="menu-head">menu head</div>
        <div class="menu-main">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <MenuTree :menu-list="menuList"/>
            </el-menu>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.menu-container {
    width: 100%;
    height: 100%;

    .menu-head {
        width: 100%;
        height: 100px;
        padding: 20px;
        box-sizing: border-box;
    }

    .menu-main {
        width: 100%;
    }

    .el-menu {
        border-right: none;
    }
}
</style>