<template>
    <div class="header-section">
    <Header />
  </div>
    <!-- <div class="game-category-swiper-section">
      <gameSwiper/>
    </div> -->
    <div class="game-category-section ">
      <newCategorySection :_AllCategoryArray_Data="allCategoryNews_array" :totalLength="allCategoryNews_array.length"/>
    </div>
    <div class="footer-section">
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/header.vue"
import newCategorySection from "@/components/newCategory/newsCategory.vue"
import Footer from "@/components/footer.vue"
</script>
<script>
import axios from 'axios';
export default {
    name: "new-category",

    data(){
      return{
        allCategoryNews_array:{}
      }
    },
    methods:{
      getData(){
        const data=axios({
          url:"http://localhost:9999/api/news",
          method:'get',
        });
        data.then((response)=>{
          // var data=response.data
          this.allCategoryNews_array=response.data;
          // console.log("type of this => "+typeof this.allCategoryGame_array.length);
        })
      },
 
    },
    created(){
      this.getData();

    }
  };
</script>


