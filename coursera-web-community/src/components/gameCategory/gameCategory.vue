<template>
    <div class="game-Category-container">
        <div class="gameCategory-wrapper">
            <div class="row">
                <div class="col col-lg-4 col-md-12 col-sm-12">
                    <gameCategorySearch />
                </div>
                <div class="col col-lg-8 col-md-12 col-sm-12">
                    <div class="game-category-video-section">
                        <div class="container">
                            <div class="row">
                                <div class="col col-sm-4 col-lg-4 col-md-4">
                                    <gameCategoryVideo/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import gameCategorySearch from "@/components/gameCategory/gameCategorySearch.vue"
import gameCategoryVideo from "@/components/gameCategory/gameCategoryVideo.vue"
</script>
<script>
export default {
    name: 'gameCategory-page'
}
</script>