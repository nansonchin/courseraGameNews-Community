<template v-model>
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
                                <div class="col col-sm-4 col-lg-4 col-md-4"
                                    v-for="(categoryData, key) in this.slicedGameData" :key="key">
                                    <gameCategoryVideo :_allGameCategory="categoryData" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="paginationCategory-container">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <!-- v-for="(gameRandomData_array,key) in gameRandom" :key="key" -->
                                <li class="page-item" v-for="(index, key) in this.totalPageSlice" :key="key">
                                    <a class="page-link" @click="changePage(index)" href="#">{{ index }}</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span class="sr-only">Next</span>
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
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
    name: 'gameCategory-page',
    props: {
        _AllCategoryArray_Data: {
            type: Array,
            default: () => []
        },
        totalLength: Number,
    },
    data() {
        return {
            currentPage: 1,
            totalPageSlice: "",
            slicedGameData:[],
        }
    },
    methods: {
        async changePage(page) {
            this.currentPage = page;
            await this.pageDataSeperate(page);
            // this.pageDataSeperate(page);
            // console.log("Current Page "+this.currentPage);
        },
        async loadData() {
            // Fetch data from your API
            try {
                const response = await this.fetchDataFromAPI();
                // Now you can safely use this._AllCategoryArray_Data.length
                this.totalPageSlice = Math.ceil(response.data.length / 9);
                await this.pageDataSeperate(this.currentPage);
                console.log("GameData=> " + this.slicedGameData)
                // console.log( this.totalPageSlice);
                // Proceed with the rest of your website logic here
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        fetchDataFromAPI() {
            // Replace this with your actual API call using a library like axios or fetch
            return new Promise((resolve) => {
                // Simulating a delay for demonstration purposes
                setTimeout(() => {
                    const mockApiResponse = {
                        data: this._AllCategoryArray_Data,
                    };
                    resolve(mockApiResponse);
                }, 500);
            });
        },
        pageDataSeperate(currentPage) {
            const startIndex = (currentPage - 1) * 9;
            const endIndex = startIndex + 9;
            return this.slicedGameData = this._AllCategoryArray_Data.slice(startIndex, endIndex);
        },
    },
    created() {
        this.loadData();
    }

}
</script> 
