<template>
  <div class="header-section">
    <Header />
  </div>

  <div class="carousel-section">
    <Carousel />
  </div>

  <div class="gameMenu-section">
    <SectionMenu :sectionMenuTitle="'GAMES'"></SectionMenu>
    <recGameHome />
  </div>

  <div class="newsMenu-section">
    <SectionMenu :sectionMenuTitle="'NEWS'" class="sectionNewsTitle-container"></SectionMenu>
    <div class="news-swiper-container">
      <swiper :slidesPerView="slide" :spaceBetween="0" :freeMode="true" :pagination="{
        clickable: true,
      }" :modules="modules" class="mySwiper">
        <swiper-slide>
          <recNewsHome />
        </swiper-slide>
        <swiper-slide>
          <recNewsHome />
        </swiper-slide>
        <swiper-slide>
          <recNewsHome />
        </swiper-slide>
      </swiper>
    </div>

    <div class="home-news-mrBtn-container">
      <div class="container">
        <moreBtnNews />
      </div>
    </div>
  </div>

  <div class="home-stayconnect-section">
    <stayconnect />
  </div>
  <div class="home-sponsor-section">
    <sponsor />
  </div>
  <div class="footer-section">
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/header.vue'
import Carousel from '@/components/home/carousel.vue'
import SectionMenu from '@/components/home/sectionMenu.vue'
import recGameHome from '@/components/home/recommend-games-home.vue'
import recNewsHome from '@/components/home/newsSwiper.vue'
import moreBtnNews from "@/components/home/morebtn.vue"
import stayconnect from "@/components/home/stayconnect.vue"
import sponsor from "@/components/home/sponsor.vue"
import Footer from "@/components/footer.vue"

</script>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default {
  name: 'landing-page',
  data() {
    return {
      slide: 3,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
      if (this.width < 700) {
        this.slide = '1';
      }
      else if (this.width < 1000) {
        this.slide = '2';
      }
      else {
        this.slide = '3';
      }

    }
  },
  created() {
    this.getDimensions();
  }
};
</script>
