<template>
    <div class="header-section">
    <Header />
  </div>
    <div class="game-category-swiper-section">
      <gameSwiper/>
    </div>
    <div class="game-category-section ">
      <gameCategorySection/>
    </div>
    <div class="footer-section">
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/header.vue"
import gameSwiper from "@/components/gameCategory/gameSwiper.vue"
import gameCategorySection from "@/components/gameCategory/gameCategory.vue"
import Footer from "@/components/footer.vue"
</script>
<script>
export default {
    name: "game-category",
  };
</script>
