<template>
    <div class="rec-games-container">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-lg-5 col-sm-12">
                    <div class="rec-game-home-image-bg-container">
                        <img src="@/assets/image/isoLand.jpeg" class="rec-game-img-bg" />
                        <div class="rec-game-home-other-img-container">
                            <div class="rec-game-home-other-img-container-sm">
                                <img src="@/assets/image/iso2.jpg" class="other-img-sm other-img-active" />
                                <img src="@/assets/image/iso2.jpg" class="other-img-sm" />
                                <img src="@/assets/image/iso2.jpg" class="other-img-sm" />
                                <img src="@/assets/image/iso2.jpg" class="other-img-sm" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6 col-sm-12">
                    <div class="side-container">
                        <div class="other-game-rec-side-container" v-for="(gameData, key) in _allGamesRecommend" :key="key">
                            
                            <img :src="gameData.gamebgImg" class="other-game-rec-side-img" />
                            <div class="other-game-rec-side-desc-container">
                                <h3 class="other-game-rec-title">{{gameData.gameDetail.gameDetailTitle}}</h3>
                                <p class="other-game-rec-text-desc">{{ gameData.gameDetail.gameDetailText }}</p>
                                <a :href="'/game/' + gameData._id" class="header-href">
                                    <p class="other-game-rec-more">More</p>
                                </a>
                            </div>
                        </div>
                    </div>
                 <moreBtn :direct="'/gameCategory'"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import moreBtn from '@/components/home/morebtn.vue'
</script>
<script>
export default {
    name: "rec-games-home-pages",
    props:{
        _allGamesRecommend:{
            type:Array,
            default:()=>[]
        }

    }
}
</script>