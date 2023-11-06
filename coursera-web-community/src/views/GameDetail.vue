<template>
    <div class="header-section">
        <Header />
    </div>

    <div class="game-detail-container">
        <div class="row">
            <div class="col">
                <div class="gameSwiper">
                    <img :src="gamesData_array.gamebgImg" class="game-detail-big-image" />
                    <div class="game-detailswiper-section">
                        <gameDetailSwiper />
                    </div>
                </div>
            </div>
        </div>
        <div class="gameDetail-gameSection">
            <gameIntro 
            :gameDetailImg="gamesData_array.gameDetail.gameImg"
            :gameDetailDescription="gamesData_array.gameDetail"
            :gameDetailSmImg="gamesData_array.gameDetail"/>
        </div>

        <div class="gameDetail-SepcIntro-section">
            <gameSpecRec :gameSpec="gamesData_array.gameSpecContainer" :gameRandom="gameRandomData_array"/>
        </div>
    </div>
    <div class="footer-section">
        <Footer/>
    </div>
</template>

<script setup>
import Header from "@/components/header.vue"
import gameDetailSwiper from "@/components/gameDetail/gameDetailSwiper.vue"
import gameIntro from "@/components/gameDetail/gameIntro.vue"
import gameSpecRec from "@/components/gameDetail/gameDetailSpec.vue"
import Footer from "@/components/footer.vue"
</script>
<script>
import axios from 'axios'

export default {
    name: 'gameDetail-page',
    data(){
        return{
            gamesId:this.$route.params.games,
            config:{
                url1:'http://localhost:9999/api/game',
            },
            gamesData_array:{},
            gameRandomData_array:{}
        };
    },
    methods:{
        getData(){
            const data=axios({
                url:this.config.url1+"/"+this.gamesId,
                method:'get',
            });
            data.then((response)=>{
                var data =response.data
                this.gamesData_array=data;
                console.log(this.gamesData_array ," This is game Specific ID Data")
            })
        },
        getRandomData(){
            const data=axios({
                url:this.config.url1,
                method:'get',
            });
            data.then((response)=>{
                var data =response.data
                this.gameRandomData_array=data.slice(0,4);
                console.log(this.gameRandomData_array ," This is game Random ID Data")
            })
        }
    },
    created(){
        this.getData(),
        this.getRandomData()
    },
}
</script>