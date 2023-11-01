<template>
    <div class="header-section">
        <Header />
    </div>
    <div class="newDetail-section">
        <div class="newDetail-background">
            <div class="row">
                <div class="col">
                    <img src="@/assets/image/esport2.jpg" class="newsDetails-esport-img" />
                    <div class="newDetails-text-container">
                        <h3 class="news-details-title">News <span class="news-details-titleSpan">{{newsData_array.title}}</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="newDetail-Detail-section">
        <NewDetailDesc 
        :img1="newsData_array.descImg" :description="newsData_array.descText" 
        :sideNews="newsData_array.side.sideNews"
        :sideCategory="newsData_array.side.sideCategory"
        :sideGallery="newsData_array.side.sideGallery"
        />
    </div>

    <div class="footer-section">
        <Footer />
    </div>
</template>
<script setup>
import Header from '@/components/header.vue'
import NewDetailDesc from '@/components/newDetails/newDetailsDesc.vue'
import Footer from '@/components/footer.vue'
</script >
<script>
import axios from 'axios';

export default {
    name: 'newsDetail-page',
    data() {
        return {
            newsId:this.$route.params.news,
            config: {
                url1: `http://localhost:9999/api/news/`  //ini api
            },
            newsData_array: {},
        };
    },

    methods: {
        getData() {
            const data = axios({
                url: this.config.url1+this.newsId,
                method: 'get',  // get or post all use post method
            });
            // Handle the response data
            data.then((response) => {
                var data = response.data
                    // console.log(data);
                    this.newsData_array = data;
                    console.log(this.newsData_array.side);
            })
        },
    },
    created() {
        this.getData()
    },
}
</script>