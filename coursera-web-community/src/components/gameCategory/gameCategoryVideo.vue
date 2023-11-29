<template>
    <div class="game-Category-video-container">
        <div class="game-category-video-wrapper">
            <img :src="_allGameCategory.gameDetail.gameImg" class="game-category-image" />
            <div class="game-category-imageDesc-container">
                <div class="container">
                    <h3 class="game-category-title">{{ _allGameCategory.gameDetail.gameDetailTitle }}</h3>
                    <p class="game-category-text">
                        {{ _allGameCategory.gameDetail.gameDetailText }}
                    </p>
                    <div class="game-category-moreBtn">
                        <a :href="'/game/' + _allGameCategory._id" class="header-href">
                            <gameCategoryMoreBtn />
                        </a>

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
    name: 'gameCategoryVideo-widgets',
    props: {
        _allGameCategory: {
            type: Array,
            default: () => [],
        }
    },
    methods: {
        seeData() {
            // console.log(this._allGameCategory);
        }
    },
    created() {
        // this.seeData();
    }
}
</script>