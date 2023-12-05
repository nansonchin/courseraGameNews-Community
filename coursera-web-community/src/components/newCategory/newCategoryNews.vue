<template>
    <div class="game-Category-video-container">
        <div class="game-category-video-wrapper">
            <img :src="_allNewCategory.descImg" class="game-category-image" />
            <div class="game-category-imageDesc-container">
                <div class="container">
                    <h3 class="game-category-title">{{ _allNewCategory.title }}</h3>
                    <p class="game-category-text">
                        {{ _allNewCategory.descText }}
                    </p>
                    <div class="game-category-moreBtn">
                        <a :href="'/new/' + _allNewCategory._id" class="header-href">
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
        _allNewCategory: {
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