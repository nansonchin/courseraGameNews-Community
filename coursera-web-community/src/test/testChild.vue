<template>
    <div>
        <p>From Child </p>
        <p>{{ dataA }}</p>
        <input type="text" @keyup.enter="sendData" />
    </div>
</template>

<script setup>
</script>

<script>

export default{
    data(){
        return{
            dataA:"Data A is 999",
        }
    },
    methods:{
        sendData(sendData){
            if(sendData.target.value==='a'){
                 this.$emit("sendToParent",this.dataA);
            console.log("Child Data =>"+ sendData.target.value);
            }else{
                this.$emit("sendToParent",'data Not A');

            }
           
        }
    }
}
</script>