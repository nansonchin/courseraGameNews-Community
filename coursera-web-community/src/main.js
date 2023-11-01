import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'swiper/css';


//CSS ALL USE
import '@/css/header.css'
import '@/css/footer.css'

//VIEW CSS
import '@/css/viewCss/Home.css'
import '@/css/viewCss/gameCategory.css'
import '@/css/viewCss/newDetails.css'
import '@/css/viewCss/gameDetail.css'
import '@/css/viewCss/signinup.css'

//CSS News Detail
import '@/css/newsDetail/newDetailDesc.css'
import '@/css/newsDetail/newDetailSIde.css'

//CSS HOME

import '@/css/homeCSS/carousel.css'
import '@/css/homeCSS/sectionMenu.css'
import '@/css/homeCSS/secMenurectangle.css'
import '@/css/homeCSS/secMenuSpaceRec.css'
import '@/css/homeCSS/rec-games-home.css'
import '@/css/homeCSS/morebtn-home.css'
import '@/css/homeCSS/new-section-menu.css'
import '@/css/homeCSS/home-category.css'
import '@/css/homeCSS/stay-connect.css'
import '@/css/homeCSS/connectCommunity.css'
import '@/css/homeCSS/sponsor.css'


//CSS gameCategory
import '@/css/gameCategoryCSS/gameSwiper.css'
import '@/css/gameCategoryCSS/gameCategorysection.css'
import '@/css/gameCategoryCSS/gameCategorySearch.css'
import '@/css/gameCategoryCSS/gameCategoryVideo.css'


//CSS gameDetail Swiper
import '@/css/gameDetail/gameDetailSwiper.css'
import '@/css/gameDetail/gameDetailIntro.css'
import '@/css/gameDetail/gameDetailSpec.css'


//CSS Sign In Up 
import '@/css/signInUp/Login-Register.css'
const app=createApp(App);

app.use(router);

app.mount('#app');
