<template>
    <div class="header-section">
    <Header />
  </div>
    <div class="game-category-swiper-section">
      <gameSwiper/>
    </div>
    <div class="game-category-section ">
      <gameCategorySection :_AllCategoryArray_Data="allCategoryGame_array" :totalLength="allCategoryGame_array.length"/>
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
import axios from 'axios';
export default {
    name: "game-category",

    data(){
      return{
        allCategoryGame_array:{}
      }
    },
    methods:{
      getData(){
        const data=axios({
          url:"http://localhost:9999/api/game",
          method:'get',
        });
        data.then((response)=>{
          // var data=response.data
          this.allCategoryGame_array=response.data;
          // console.log("type of this => "+typeof this.allCategoryGame_array.length);
        })
      },
 
    },
    created(){
      this.getData();
    
    }
  };
</script>
