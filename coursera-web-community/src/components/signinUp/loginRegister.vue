<template>
    <div class="signInUp-container">
        <div class="container">
            <div class="row">
                <!-- <div class="col col-lg-6 col-md-12 col-sm-12"> -->
                <div class="login-container" @click="toogleContainers('login')"
                    :class="{ 'reduced-width': isClickedRegister, 'increasedWidth': isClickedLogin }">
                    <img src="@/assets/image/login.jpg" class="login-img" />
                    <div class="gray-container">
                        <h3 class="signinup-title login-title" 
                        :class="{'vertical-text-login':isClickedRegister, 
                        'move-text': isClickedLogin }">Login</h3>
                        <div class="login-textField" v-if=" isClickedLogin">
                            <form>
                                <input type="text" placeholder="Username" class="login-username"><br>
                                <input type="text" placeholder="Password" class="login-password"><br>
                                <input type="checkbox" class="login-remember">
                                <label class="login-remember-text">Remember Me</label>
                                <br>
                                <div class="login-btn-container">
                                    <button type="button" class="btn btn-danger login-btn">Login</button>
                                </div>
                                <div class="thirdPartyLogin">
                                    <p class="thirdParty-text">OR LOGIN WITH:</p>
                                    <div class="third-partyLogin-icon-container">
                                        <img src="@/assets/image/fb.png" class="third-party-icon-img" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="register-container" @click="toogleContainers('register')"
                    :class="{ 'reduced-width': isClickedLogin, 'increasedWidth': isClickedRegister }">
                    <img src="@/assets/image/register.jpeg" class="login-img" />
                    <div class="gray-container">
                        <h3  class="signinup-title register-title"
                        :class="{ 'vertical-text-register': isClickedLogin, 
                        'move-text': isClickedRegister }">Register
                        </h3>
                        <div class="register-textField" v-if=" isClickedRegister">
                            <form>
                                <input type="text" placeholder="Username" class="register-username"><br>
                                <input type="text" placeholder="Password" class="register-password"><br>
                                <input type="text" placeholder="Confirm Password" class="register-password"><br>
                                <input type="text" placeholder="Email" class="register-password"><br>
                                <input type="checkbox" class="login-remember">
                                <label class="login-remember-text">I Agree to the term & Condition</label>
                                <br>
                                <div class="login-btn-container">
                                    <button type="button" class="btn btn-danger login-btn">Login</button>
                                </div>
                                <div class="thirdPartyLogin">
                                    <p class="thirdParty-text">OR LOGIN WITH:</p>
                                    <div class="third-partyLogin-icon-container">
                                        <img src="@/assets/image/fb.png" class="third-party-icon-img" />
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'signInUp-page',
    data() {
        return {
            isClickedLogin: false,
            isClickedRegister: false,
        };
    },
    methods: {
        toogleContainers(container) {
            if (container === 'login') {
                this.isClickedLogin = !this.isClickedLogin;
                this.isClickedRegister = false;
            } else if (container === 'register') {
                this.isClickedRegister = !this.isClickedRegister;
                this.isClickedLogin = false;
            }
        },
    },


}
</script>