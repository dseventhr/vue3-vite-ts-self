import { defineStore } from 'pinia'

export const userInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            userInfo: {
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
        setUserInfo: function (user: any) {
            this.userInfo = user
        }
    },
    getters: {
        getUserInfo: (state): any => {
            return state.userInfo
        }
    }
})