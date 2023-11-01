<template>
    <div class="header-container">
        <div class="container">
            <div class="header-box">
                <div class="header-title-container">
                    <p class="header-text">HOME</p>
                </div>
                <div class="header-title-container">
                    <p class="header-text ">GAMES</p>
                </div>
                <img :src="headerglass" class="headerglass" />
                <div class="header-title-container">
                    <p class="header-text">NEWS</p>
                </div>
                <div class="header-title-container">
                    <p class="header-text ">SIGN IN/UP</p>
                </div>
            </div>
            <p class="header-text header-search">Search</p>
        </div>

    </div>
    <div class="res-container">
        <div class="container">
            <div class="res-wrapper">
                <img :src="headerglass" class="res-headerglass" />
                <div class="res-menu">
                    <div class="res-header-text-container">
                        <p class="res-header-text">Search</p>
                    </div>
                    <div class="res-header-text-container">
                        <p class="res-header-text">Menu</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerglass from '@/assets/image/glassbrokenbg.jpg';

export default {
    name: "header-components",
    data() {
        return {
            headerglass: headerglass,

        }
    }
};
</script>
