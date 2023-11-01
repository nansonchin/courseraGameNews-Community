<template>
    <div class="sectionMenu-container">
        <div class="sectionMenu-border">
            <p class="sectionText">{{sectionMenuTitle}}</p>
            <div class="rectangle-section-widgets">
                <SecMenuSpaceRectangle/>
                <SecMenuSpaceRectangle/>
                <SecMenuSpaceRectangle/>
                <SecMenuRectangle/>
                <SecMenuSpaceRectangle/>
                <SecMenuSpaceRectangle/>
                <SecMenuSpaceRectangle/>
            </div>
        </div>
    </div>
</template>

<script setup>
import SecMenuRectangle from '@/components/home/sectionMenu-rectangle.vue'
import SecMenuSpaceRectangle from '@/components/home/sectionMenu-spaceRectangle.vue'
</script>

<script>
export default {
    // name: "sectionMenu-page",
    props:['sectionMenuTitle']
}
</script>