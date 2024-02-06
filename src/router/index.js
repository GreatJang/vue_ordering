import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from '@/components/HomeComponent.vue'
import MemberList from '@/views/MemberList.vue'
import LoginComponent from '@/views/LoginComponent.vue'
const routes = [
    {   
        // 라우터 경로
        path : '/',
        // 라우터 이름
        name : 'HOME',
        // 넣을 component
        component:HomeComponent
    },
    {   
        path : '/members',
        name : 'memberList',
        component:MemberList,
    },
    {
        path:'/login',
        name : 'login',
        component: LoginComponent,
    }
]
const router = createRouter({
    // vue router는 내부적으로 두가지 방식의 히스토리 관리를 제공한다.
    // 1) history: createWebHashHistory, createHashHistory
    history: createWebHistory(),
    routes
    }
)
export default router;