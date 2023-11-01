<template>
    <div class="header-section">
        <Header />
    </div>
    <div class="signInUp-section">
        <loginRegister />
    </div>
    <div class="footer-section">
        <Footer />
    </div>
</template>
<script setup>
import Header from "@/components/header.vue"
import loginRegister from "@/components/signinUp/loginRegister.vue"
import Footer from "@/components/footer.vue"
</script>
<script>
export default {
    name: 'signInup-page'
}
</script>