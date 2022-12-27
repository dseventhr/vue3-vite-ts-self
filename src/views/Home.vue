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
import { fetchArticlesListGet, addArticlePost } from '@/service/articles'
import { loginPost } from '@/service/user'
import { userInfoStore } from '@/store'
const userStore = userInfoStore()
export default defineComponent({
    setup() {
        const num = ref(10)
        const result = ref({})
        const testApi = () => {
            addArticlePost({
                article: {
                    title: "本地测试 title",
                    description: "本地测试 description?",
                    body: "本地测试 body",
                    tagList: ["self"]
                }
            }).then(res => {
                console.log(res)
            })
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
        loginPost({
            user: {
                email: "admin1@abc.com",
                password: "123456"
            }
        }).then(res => {
           console.log(res) 
           userStore.setUserInfo(res)
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