<template>
    <div class="newsSwiper-container">
        <div class="newswiper-section">
            <div class="news-detail-container">
                <a :href="'/new/' + _allNewsRecommend._id" class="header-href">
                <img :src="_allNewsRecommend.descImg" class="home-news-img" />
                </a>
                <div class="news-details-text-wrapper">
                    <div class="container">
                        <div class="home-category-wrapper" >
                            <homeNewsCategory v-for="(data,key) in _allNewsRecommend.side.sideCategory" :key="key" :categoryname="data" />
                        </div>
                        <h3 class="news-detail-title">{{_allNewsRecommend.title}}</h3>
                        <p class="news-detail-text">{{_allNewsRecommend.descText}}</p>
                        <div class="new-morebtn-container">
                            <moreBtnNews />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import moreBtnNews from "@/components/home/morebtn.vue"
import homeNewsCategory from "@/components/home/home-category.vue"
</script>

<script>
export default {
    name: 'newsHome-widgets',
    props: {
        _allNewsRecommend:{
            type: Array,
            default:()=>[]
        }
    }
}
</script>