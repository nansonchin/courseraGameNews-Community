<template>
    <div class="game-Category-search-container">
        <div class="container">
            <div class="game-category-text-field-container">
                <h3 class="game-category-filter"><span class="game-category-fiRedText">Fi</span>lter</h3>
                <input type="textfield" placeholder="Search" v-model="filterInput" @keyup.enter="performFilter" @change="performFilter" class="game-category-search" />
            </div>
            <div class="game-category-text-field-container-2ndstage d-flex">
                <h3 class="game-category-date"><span class="game-category-fiRedText">Da</span>te</h3>
                <input type="textfield" placeholder="Date" class="game-category-date" />
            </div>
            <div class="game-category-text-field-container-3rdstage d-flex">
                <h3 class="game-category-date"><span class="game-category-fiRedText">Vi</span>ew</h3>
                <input type="textfield" placeholder="View" class="game-category-date" />
            </div>
            <h3 class="game-category-filter mt-3"><span class="game-category-fiRedText">Catego</span>ry</h3>
            <div class="game-category-searchCategory-container d-flex">
                <p class="game-category-search-text">Search</p>
                <input type="textfield" placeholder="Search 1" name="game-category-serch1"
                    class="game-category-serchField" />
            </div>
            <div class="game-category-searchCategory-container d-flex">
                <p class="game-category-search-text">Search</p>
                <input type="textfield" placeholder="Search 2" name="game-category-serch1"
                    class="game-category-serchField" />
            </div>
            <div class="game-category-searchCategory-container d-flex">
                <p class="game-category-search-text">Search</p>
                <input type="textfield" placeholder="Search 3" name="game-category-serch1"
                    class="game-category-serchField" />
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "game-CategorySearch-widgets",
    data(){
        return{
            filterInput:"",
            filterData_array:[],
        }
    },
    methods:{
        async performFilter(){
            const filter=this.filterInput;
            if(filter){
                try{
                    const response = await axios.get(`http://localhost:9999/api/game/search?sk=${encodeURIComponent(filter)}`)
                    this.filterData_array=response.data;
                    this.$router.push({path:'/gameCategory/search',query:{sk:filter}});
                    this.$emit("filterResults",this.filterData_array);
                    // console.log("Filter_Data Set insidde", this.filterData_array);
                    // console.log("Filter data successfully passed to parent!");
                }catch(error){
                    console.error("Error Performing on Searching",error);
                }
            }else{
                console.warn("Filter Field is empty");
            }
        }
    },
}
</script>