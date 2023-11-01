<template>
    <div class="gameIntro-container">
        <div class="container">
            <div class="row">
                <div class="col col-lg-6 col-sm-12 col-md-12 ">
                    <div class="gameIntro-wrapper">
                        <img :src="gameDetailImg" class="gameIntro-img" />
                        <div class="gameIntro-other-img-container">
                            <img v-for="(sideImg,key) in gameDetailSmImg.gamesub" :key="key" :src="sideImg" class="gameIntro-other-img"/>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-12 col-md-12 col-lg-6">
                    <h3 class="gameDetailIntro-Title">{{gameDetailDescription.gameDetailTitle}}</h3>
                    <p class="gameDetailIntro-text"> 
                        {{gameDetailDescription.gameDetailText  }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'gameIntro-widgets',
    props:{
        gameDetailImg:String,
        gameDetailDescription:String,
        gameDetailSmImg:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>