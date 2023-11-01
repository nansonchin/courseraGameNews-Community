<template>
    <div class="stayconnect-container">
        <div class="container">
            <div class="stayConnect-text-wrapper">
                <h3 class="stayConnect-title"><span class="sc-text-stay">Stay </span> Connect</h3>
                <div class="container">
                    <div class="sc-redline"></div>
                    <p class="sc-subtext">Connect with us</p>
                </div>
                <div class="row stayconnect-details-container">
                    <div class="col col-lg-5 col-md-12 col-sm-12">
                        <div class="subscribe-container">
                            <p class="subscribe-text">Subscribe:</p>
                            <input class="textfield-sub" type="textfield" id="termcondi-sub" placeholder="Enter your Email: " name="termcondi-sub" ><br>
                            <input type="checkbox" id="termcondi-sub" name="termcondi-sub" value="termcondi-sub">
                            <label  class="sub-term-text"> I agree to the terms & conditions</label><br>
                        </div>
                    </div>
                    <div class="col col-lg-5 col-md-12 col-sm-12">
                        <Community :communityText="'FACEBOOK'"/>
                        <Community :communityText="'FACEBOOK'"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Community from "@/components/home/IconCommunity-sConnect.vue"
</script>
<script>
export default {
    name: 'stayConnect-pages'
}
</script>