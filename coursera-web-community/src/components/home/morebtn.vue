<template>
    <div class="more-details-container">

        <p class="more-details-text">
            <a :href="direct" class="more-details-text header-href">
                More
            </a>
        </p>
        <div class="triangle">
        </div>
    </div>
</template>
<script>
export default {
    name: 'morebutton-widgets',
    props: {
        direct: String
    }
}
</script>