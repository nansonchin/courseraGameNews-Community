import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import GameCategory from "@/views/GameCategory.vue"
import NewsDetail from "@/views/NewsDetail.vue"
import GamesDetail from "@/views/GameDetail.vue"
import SignInUp from "@/views/SignIn-Up.vue"
import test from "@/test/testParent.vue"


const routes = [
    { path: "/", component: Home, name: 'Home' },
    { path: "/gameCategory", component: GameCategory, name: 'gameCategory' },
    { path: "/new/:news", component: NewsDetail, name: 'NewsDetail'},
    { path: "/game/:games", component: GamesDetail, name: 'GamesDetail' },
    { path: "/signinup", component: SignInUp, name: 'SignInUp' },
    { path: "/gameCategory/search", component: GameCategory, name: 'gameCategorySearch' },
    { path: "/test", component: test, name: 'test' }
    
]

const router = createRouter({ history: createWebHistory(), routes })
export default router