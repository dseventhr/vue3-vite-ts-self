import { defineStore } from 'pinia'
import type { IUserInfo } from '../types/user'

export const userInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            userInfo<IUserInfo>: {
                bio: null,
                email: "",
                image: null,
                token: "",
                username: "",
                _id: ""
            }
        }
    },
    actions: {
        setUserInfo: function (user: IUserInfo) {
            this.userInfo = user
        }
    },
    getters: {
        getUserInfo: (state: any): IUserInfo => {
            return state.userInfo
        }
    }
})