import Layout from '@/layout/Index.vue'

export default {
    path: '/list',
    redirect: '/home',
    component: Layout,
    meta: {
        icon: 'el-icon-house',
        title: '列表模板'
    },
    children: [{
        path: '/list/templateBase1',
        name: 'templateBase1',
        component: () => import('@/views/List/Template1.vue'),
        meta: {
            title: '列表模板1'
        }
    }, {
        path: '/list/templateBase2',
        name: 'templateBase2',
        component: () => import('@/views/List/Template2.vue'),
        meta: {
            title: '列表模板2'
        }
    }]
}