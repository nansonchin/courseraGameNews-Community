<template>
    <div class="header-container">
        <div class="container">
            <div class="header-box">
                <div class="header-title-container">
                    <a :href="'/'" class="header-href">
                        <p class="header-text">HOME</p>
                    </a>
                </div>
                <div class="header-title-container">
                    <a :href="'/gameCategory'" class="header-href">
                    <p class="header-text ">GAMES</p>
                    </a>
                </div>
                <img :src="headerglass" class="headerglass" />
                <div class="header-title-container">
                    <p class="header-text">NEWS</p>
                </div>
                <div class="header-title-container" :style="{display:isLoggedIn?'none':'block'}">
                    <a :href="'/signinup'" class="header-href" >
                    <p class="header-text ">SIGN IN/UP</p>
                    </a>
                </div>
                <div class="login-success-container" v-if="isLoggedIn">
                    <a class="header-href" @click.prevent="logout" >
                        <p class="header-text ">Welcome,  {{ welcome_name }}</p>
                    </a>
                </div>
            </div>
            <!-- <p class="header-text header-search">Search</p> -->
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
            isLoggedIn:false,
            welcome_name:"",
        }
    },
    methods:{
        logout(){
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('username');
            window.location.href='/';
        }
    },
    created(){
        const user=JSON.parse(sessionStorage.getItem('user'));
        this.isLoggedIn=user!==null;
        if(this.isLoggedIn){
            this.welcome_name=user.username;
        }
    }
};
</script>
