<template>
    <div class="new-DetailsDesc-container">
        <div class="container">
            <div class="row">
                <div class="col col-md-12 col-sm-12 col-lg-8">
                    <div class="newDetail-description">
                        <div class="new-Detail-desc-image-container">
                            <img :src="img1" class="new-detail-desc-image" />
                        </div>
                        <div class="new-Detail-desc-text-container">
                            <p class="new-details-desc-text">{{ description }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col col-md-12 col-sm-12 col-lg-4">
                    <newDetailSide 
                    :sideTitle="sideNews.sideTitle" :sideText="sideNews.sideDesc"
                    :newscategory="sideCategory"
                    :newsgallery="sideGallery"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import newDetailSide from "@/components/newDetails/newDetailsSide.vue"
</script>
<script>
export default {
    name: 'newDetailsDesc-page',
    props: {
        img1: String,
        description: String,
        sideNews: {
            type: Array,
            default: () => [],
        },
        sideCategory: {
            type: Array,
            default: () => [],
        },
        sideGallery: {
            type: Array,
            default: () => [],
        },
        
    },

}
</script>