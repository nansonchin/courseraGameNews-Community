<template>
    <div class="swiper-container">
        <swiper :pagination="{
            type: 'progressbar',
        }" :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>
                <div class="carousel-image-container">
                    <div class="carousel-text-container">
                        <h3 class="carousel-title">WELCOME TO THE GAMES PAGES </h3>
                    </div>
                    <div class="row">
                            <img src="@/assets/image/isovalo.jpg" class="carousel-image" />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
export default {

    name: "landing-page",

    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>