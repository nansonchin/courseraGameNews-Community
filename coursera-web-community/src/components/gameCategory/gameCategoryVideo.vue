<template>
    <div class="game-Category-video-container">
        <div class="game-category-video-wrapper">
            <img src="@/assets/image/ark.jpg" class="game-category-image" />
            <div class="game-category-imageDesc-container">
                <div class="container">
                    <h3 class="game-category-title">Game Name</h3>
                    <p class="game-category-text">Lorem Ipsum Lorem sLorem sda
                        Lorem Ipsum LLoreorem sda
                        Lorem Ipsum Lorem sda
                        Lorem Ipsum Lorem sda
                    </p>
                    <div class="game-category-moreBtn">
                        <gameCategoryMoreBtn/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import gameCategoryMoreBtn from "@/components/home/morebtn.vue"
</script>
<script>
export default {
    name: 'gameCategoryVideo-widgets'
}
</script>