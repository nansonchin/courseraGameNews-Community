<template>
    <div class="community-container">
        <div class="community-triangle"></div>
        <div class="community-img-container">
            <img src="@/assets/image/fb.png" class="community-icon-img">
            <p class="icon-text">{{communityText}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'connect-community-widgets',
    props:['communityText']
}
</script>