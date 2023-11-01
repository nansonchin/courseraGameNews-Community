<template>
    <div class="newsSwiper-container">
        <div class="newswiper-section">
            <div class="news-detail-container">
                <img src="@/assets/image/esport2.jpg" class="home-news-img" />
                <div class="news-details-text-wrapper">
                    <div class="container">
                        <div class="home-category-wrapper">
                            <homeNewsCategory :categoryname="'category'" />
                            <homeNewsCategory :categoryname="'category'" />
                            <homeNewsCategory :categoryname="'category'" />
                            <homeNewsCategory :categoryname="'category'" />
                            <homeNewsCategory :categoryname="'category'" />
                        </div>
                        <h3 class="news-detail-title">NEWS TITLE</h3>
                        <p class="news-detail-text">lorem ipsum lorem ispunasdavxasd
                            loren ipsunm derack asdwca
                            luiolkalorem ipsum lorem ispunasdavxasd
                            loren ipsunm derack asdwca
                            luiolka</p>
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
</script >
<script>

</script>