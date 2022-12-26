<template>
    <div>
        <el-button type="primary" @click="testApi">testApi</el-button>
        <el-button type="primary" @click="addCount">addCount</el-button>
        <p>{{ JSON.stringify(result) }}</p>
        <div v-for="count in num" :key="count">count+{{ count }}</div>
    </div>
</template>
<script lang ="ts">
import { defineComponent, computed, ref } from 'vue'
import { fetchArticlesListGet } from '../service/test'
export default defineComponent({
    setup() {
        const num = ref(10)
        const result = ref({})
        const testApi = () => {
            console.log('testApi func')
        }
        const addCount = () => {
            console.log('addCount func')
        }
        fetchArticlesListGet({
            limit: 10,
            offset: 0,
            tag: 'dragons',
            author: 'admin'
        }).then(res => {
           console.log(res) 
        })
        return {
            num,
            result,
            testApi,
            addCount
        }
    }
})
</script>