import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
const router = createRouter({
    history: createWebHistory(), // history 模式
    routes,
    scrollBehavior(to, from, savedPosition) {
        //返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：
        if (savedPosition) {
            return savedPosition
        } else {
            const el = document.getElementsByClassName('scroll-wrapper')[0]
            if (el) el.scrollTo({ top: 0, behavior: "smooth" })
        }
    },
})

export default router