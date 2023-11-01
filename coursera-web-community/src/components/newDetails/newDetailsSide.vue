<template>
    <div class="newDetailSide-container">
        <div class="newDetailSide-Rec">
            <h3 class="newDetailSide-Rec-title"><span class="newDetailSide-Rec-titleSpan">Re</span>commend:-</h3>
            <div class="row">
                <div class="col">
                    <div class="newDetailSide-rec-image-container">
                        <img src="@/assets/image/esport1.jpeg" class="newDetailSide-Rec-img" />
                        <div class="newDetailSide-rec-imageText">
                            <div class="container">
                                <h3 class="newDetailSide-recTitle">{{ sideTitle }}</h3>
                                <p class="newDetailside-recText">
                                    {{ sideText }}
                                </p>
                                <div class="newDetailsSide-moreBtn-container">
                                    <moreBtn />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="newDetail-category-container">
            <category v-for="(category, key) in newscategory" :key="key" :categoryname="category"
                class="newDetail-category" />
        </div>

        <div class="newDetail-gallery-container">
            <h3 class="newDetailSide-Rec-title"><span class="newDetailSide-Rec-titleSpan">Ga</span>llery:-</h3>
            <div class="newDetail-gallery-img-container">
                <div class="container">
                    <div class="row">
                        <div v-for="gallery in newsgallery" :key="gallery"
                            class="col col-sm-12 col-lg-6 col-md-12 new-Detail-img new-Detail-img-active">
                            <img :src="gallery" class="new-detail-gallery-img" />
                        </div>
                        <!-- <div
                            class="covscode-file://vscode-app/c:/Users/guoc7/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmll col-sm-12 col-lg-6 col-md-12 new-Detail-img">
                            <img src="@/assets/image/esport3.jpg" class="new-detail-gallery-img" />
                        </div>
                        <div class="col col-sm-12 col-lg-6 col-md-12 new-Detail-img">
                            <img src="@/assets/image/esport3.jpg" class="new-detail-gallery-img" />
                        </div> -->
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import moreBtn from "@/components/home/morebtn.vue"
import category from '@/components/home/home-category.vue'

</script >
<script>
export default {
    name: 'newDetailSide-widgets',
    props: {
        sideTitle: String,
        sideText: String,
        newscategory: {
            type: Array,
            default: () => [],
        },
        newsgallery: {
            type: Array,
            default: () => [],
        },
    }

}
</script>