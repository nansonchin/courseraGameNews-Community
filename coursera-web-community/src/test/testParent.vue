<template>
    <h1>Test Parent</h1>
    <Child @sendToParent="dataReceive"/>
    <p>Data Show:{{ this.dataShow }}</p>
    <p>Data From Child:{{ this.dataChange }}</p>
</template>

<script setup>
import Child from '@/test/testChild.vue';

</script>

<script>

export default {
    data(){
        return{
            dataShow:"HI Data showed",
            dataChange:""
        }
    },
    methods:{
        dataReceive(data){
            console.log("Data Received from Child"+data);
            this.dataChange=data;
        }
    },
}


</script>