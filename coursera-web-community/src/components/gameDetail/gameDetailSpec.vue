<template>
    <div class="gameDetailSpec-container">
        <div class="container">
            <div class="row">
                <div class="col col-sm-12 col-md-12 col-lg-8">
                    <div class="gameSpec-section">
                        <div class="game-Spec-border">
                            <div class="container">
                                <h3 class="gameDetailSpec-title"><span class="gameDetailSpec-titleSpan">Spec</span>
                                    Requirement
                                </h3>
                                <div class="row">
                                    <div class="col col-sm-12 col-md-12 col-lg-6">
                                        <div class="game-spec-wrapper">
                                            <h4 class="spec-title">Min:-</h4>
                                            <p v-for="(Minspec,key) in gameSpec.minSpec" 
                                            :key="key" class="spec-desc">
                                                {{Minspec}}
                                            </p>
                                        </div>

                                    </div>
                                    <div class="col col-sm-12 col-md-12 col-lg-6">
                                        <div class="game-spec-wrapper">
                                            <h4 class="spec-title">Rec:-</h4>
                                            <p v-for="(Recspec,key) in gameSpec.recSpec" 
                                            :key="key" class="spec-desc">
                                                {{Recspec}}
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="gameDetail-officeBtn-container">
                            <button type="button" class="btn btn-danger">Visit Offical </button>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-12 col-md-12 col-lg-4">
                    <div class="gameDetail-Recommmend-container">
                        <div class="container">
                            <h3 class="gameDetail-Recommend">Recommend</h3>
                            <div class="game-Detail-Rec-Image-container" 
                            v-for="(gameRandomData_array,key) in gameRandom" :key="key">
                                <img :src="gameRandomData_array.gamebgImg" class="gameDetail-game-img" />
                                <div class="game-detail-rec-text-container">
                                    <div class="container">
                                        <p class="game-DetailTitle">{{gameRandomData_array.gameDetail.gameDetailTitle}}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="game-Detail-Rec-Image-container">
                                <img src="@/assets/image/apexconduit.jpg" class="gameDetail-game-img" />
                                <div class="game-detail-rec-text-container">
                                    <div class="container">
                                        <p class="game-DetailTitle">Game Name</p>
                                    </div>
                                </div>
                            </div>
                            <div class="game-Detail-Rec-Image-container">
                                <img src="@/assets/image/apexconduit.jpg" class="gameDetail-game-img" />
                                <div class="game-detail-rec-text-container">
                                    <div class="container">
                                        <p class="game-DetailTitle">Game Name</p>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'gameDetailSpec-widgets',
    props:{
        gameSpec:{
            type:Array,
            default:()=>[]
        },
        gameRandom:{
            type:Array,
            default:()=>[]
        },
    }
}
</script>