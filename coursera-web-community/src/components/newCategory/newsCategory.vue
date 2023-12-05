<template >
    <div class="game-Category-container">
        <div class="gameCategory-wrapper">
            <div class="row">
                <div class="col col-lg-4 col-md-12 col-sm-12">
                    <newCategorySearch @filterNewsResult="handleFilterResults"  />
                </div>
                <div class="col col-lg-8 col-md-12 col-sm-12">
                    <div class="game-category-video-section">
                        <div class="container">
                            <div class="row">
                                <div class="col col-sm-4 col-lg-4 col-md-4"
                                    v-for="(categoryData, key) in this.slicedGameData" :key="key">
                                    <newCategoryNews :_allNewCategory="categoryData" />
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
import newCategorySearch from "@/components/newCategory/newCategorySearch.vue"
import newCategoryNews from "@/components/newCategory/newCategoryNews.vue"
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
            slicedGameData: [],
            filteredNewData: [],
        }
    },
    methods: {
        //Change page 1,2,3 function
        async changePage(page) {
            this.currentPage = page;
            await this.pageDataSeperate(page,this._AllCategoryArray_Data);
            // this.pageDataSeperate(page);
            // console.log("Current Page "+this.currentPage);
        },

        async loadData() {
            // Fetch data from API
            try {
                const response = await this.fetchDataFromAPI();
                this.totalPageSlice = Math.ceil(response.data.length / 9);
                await this.pageDataSeperate(this.currentPage,this._AllCategoryArray_Data);
                // console.log("GameData=> " + this.slicedNewData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        //waiting all data for loaded and display
        fetchDataFromAPI() {
            // Replace this with your actual API call using a library like axios or fetch
            return new Promise((resolve) => {
                // Simulating a delay for demonstration purposes
                setTimeout(() => {
                    const mockApiResponse = {
                        data: this._AllCategoryArray_Data,
                    };
                    resolve(mockApiResponse);
                }, 700);
            });
        },

        //based on data splice the page function
        pageDataSeperate(currentPage,pageOrigin) {
            const startIndex = (currentPage - 1) * 9;
            const endIndex = startIndex + 9;
            return this.slicedGameData = pageOrigin.slice(startIndex, endIndex);
        },

        // filterDataPageSeperate(currentPage){
        //     const startIndex = (currentPage - 1) * 9;
        //     const endIndex = startIndex + 9;
        //     return this.slicedGameData=this.filteredData.result.slice(startIndex,endIndex);
        // },

        handleFilterResults(filteredData) {
            this.slicedGameData = filteredData.result;
            this.totalPageSlice = Math.ceil(filteredData.result.length / 9);
            this.pageDataSeperate(this.currentPage,this.filteredData.result);
            

            console.log("Handling filter results in parent:", filteredData);
            console.log("Filter Data Slice Data To Look Inside",this.slicedGameData);
            console.log('See the Length '+ filteredData.result.length);
            console.log("See The page for filter slice"+this.totalPageSlice);
            console.log("Filter Data From filter =>" + this.slicedGameData);
            console.log("Fuck Emitter from mitt");
        }
    },
    created() {
        this.loadData();
    },


}
</script> 
