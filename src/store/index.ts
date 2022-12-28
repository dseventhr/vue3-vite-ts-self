import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IUserInfo } from '@/types/user'

export const userInfoStore = defineStore('userInfo', () => {
    let userInfo: IUserInfo = reactive({
        bio: null,
        email: "",
        image: null,
        token: "",
        username: "",
        _id: ""
    })
    
    function setUserInfo(user: IUserInfo) {
        userInfo = user
    }
    
    function getUserInfo(): IUserInfo {
        return userInfo
    }
    
    return { userInfo, setUserInfo, getUserInfo }
})