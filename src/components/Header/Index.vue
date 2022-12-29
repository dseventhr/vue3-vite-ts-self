<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Search } from "@element-plus/icons-vue"

export default defineComponent({
    setup() {
        const input = ref('')
        
        return { input, Search }
    }
})

</script>
<template>
    <div class="common-header-container">
        <div class="header-left">HEADER TEXT</div>
        <el-input v-model="input" class="header-right" placeholder="Please Input" :prefix-icon="Search" />
    </div>
</template>

<style lang="scss" scoped>
.common-header-container {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;

    .header-left {
        flex: 1;
        line-height: 100px;
        font-size: 30px;
        color: #141414;
    }

    .header-right {
        width: 350px;
        height: 40px;
    }
}
</style>
<style>
.header-right > .el-input__wrapper {
    border-radius: 20px;
}
</style>