<template>
    <div class="gameSwiper-container">
        <swiper :pagination="true" :modules="modules" class="mySwiper">
            <swiper-slide>
                <div class="game-swiper-wrapper">
                    <div class="col">
                        <img src="@/assets/image/gamecat.jpeg" class="gameCategory-image" />
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>