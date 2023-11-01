<template>
    <div class="gameDetail-swiper-container">
        <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
            clickable: true,
        }" :breakpoints="{
    '640': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
    },
}" :modules="modules" class="mySwiper">
            <swiper-slide>
                <div class="row">
                    <div class="col">
                        <img src="@/assets/image/valowa2.jpg" class="swiper-img" />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="row">
                    <div class="col">
                        <img src="@/assets/image/valowa2.jpg" class="swiper-img" />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="row">
                    <div class="col">
                        <img src="@/assets/image/valowa2.jpg" class="swiper-img" />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="row">
                    <div class="col">
                        <img src="@/assets/image/valowa2.jpg" class="swiper-img" />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="row">
                    <div class="col">
                        <img src="@/assets/image/valowa2.jpg" class="swiper-img" />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="row">
                    <div class="col">
                        <img src="@/assets/image/valowa2.jpg" class="swiper-img" />
                    </div>
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default {
    name: 'gameDetailSwiper-widgets',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
}
</script>

<!-- <div class="row">
    <div class="col">
        <img src="@/assets/image/valowa2.jpg" class="swiper-img"/>
    </div>
</div> -->