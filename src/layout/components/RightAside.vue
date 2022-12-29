<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    
})
</script>

<template>
    <div class="right-aside-container">
        <div class="right-aside">
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.right-aside-container {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;
    width: 120px;
    height: 100%;
    background-color: #F2F7FF;
    .right-aside {
        width: 120px;
        height: 100%;
        background-color: #005FFF;
        border-radius: 40px 0 0 0;
    }
}
</style>