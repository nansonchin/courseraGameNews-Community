<template>
    <div class="home-category-container">
        <div class="home-category-rectangle">
             <p class="category-text">{{ categoryname }}</p>
        </div>
    </div>
</template>
<script>
export default{
    name:'home-category-widgets',
    props:['categoryname']
}
</script>