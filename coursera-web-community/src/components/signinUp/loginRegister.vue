<template>
    <div class="signInUp-container">
        <div class="container">
            <div class="row">
                <!-- <div class="col col-lg-6 col-md-12 col-sm-12"> -->
                <div class="login-container" @click="toogleContainers('login')"
                    :class="{ 'reduced-width': isClickedRegister, 'increasedWidth': isClickedLogin }">
                    <img src="@/assets/image/login.jpg" class="login-img" />
                    <div class="gray-container">
                        <h3 class="signinup-title login-title" :class="{
                            'vertical-text-login': isClickedRegister,
                            'move-text': isClickedLogin
                        }">Login</h3>
                        <div class="login-textField" v-if="isClickedLogin" @click.stop>
                            <form @submit.prevent="loginUser">
                                <input type="text" placeholder="Username" v-model="checkUser.username"
                                    class="login-username"><br>
                                <input type="text" placeholder="Password" v-model="checkUser.password"
                                    class="login-password"><br>
                                <input type="checkbox" class="login-remember">
                                <label class="login-remember-text">Remember Me</label>
                                <br>
                                <div class="login-btn-container">
                                    <button type="submit" class="btn btn-danger login-btn">Login</button>
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
                        <h3 class="signinup-title register-title" :class="{
                            'vertical-text-register': isClickedLogin,
                            'move-text': isClickedRegister
                        }">Register
                        </h3>
                        <div class="register-textField" v-if="isClickedRegister" @click.stop>
                            <form @submit.prevent="registerUser">
                                <input v-model="submitUser.username" type="text" placeholder="Username"
                                    class="register-username"><br>
                                <input v-model="submitUser.password" type="text" placeholder="Password"
                                    class="register-password"><br>
                                <input v-model="submitUser.password2nd" type="text" placeholder="Confirm Password"
                                    class="register-password"><br>
                                <input v-model="submitUser.email" type="text" placeholder="Email"
                                    class="register-password"><br>
                                <input type="checkbox" class="login-remember">
                                <label class="login-remember-text">I Agree to the term & Condition</label>
                                <br>
                                <div class="login-btn-container">
                                    <button type="submit" class="btn btn-danger login-btn">Register</button>
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
import axios from 'axios';


export default {
    name: 'signInUp-page',
    data() {
        return {
            isClickedLogin: false,
            isClickedRegister: false,
            submitUser: {
                username: '',
                password: '',
                password2nd: '',
                email: '',
            },
            checkUser: {
                username: '',
                password: '',
            },
            allRegisterData: [],

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
        async registerUser() {

            const response = await axios.post('http://localhost:9999/api/register', this.submitUser);
            console.log("Checking Resonse :", response);
            if (response.status === 403) {
                alert('User with the same username already exists. Please choose a different username.');
            } else if (response.status === 201) {
                alert('Registration Successful!');
            } else {
                alert('Registration Unsuccessful!');
            }

        },
        async loginUser() {
            try {
                const dataResponse = await axios.post('http://localhost:9999/api/login', this.checkUser)
                if (dataResponse.status === 201) {
                    alert('Login Successfull');
                    sessionStorage.setItem('user',JSON.stringify(dataResponse.data),);
                    sessionStorage.setItem('username',JSON.stringify(dataResponse.data.username));

                  
                    window.location.href='/';
                } else {
                    alert('Invalid Username or Password. Please Try Again');
                }
            } catch (error) {
                console.error('Error During Login', error);
                if (error.response === 401) {
                    console.error("Invalid Password", error.response);
                    alert("Login Failed. Server responded with an error.");
                } else if (error.request) {
                    console.error("No response received from the server", error.request);
                    alert("Login Failed. No response received from the server.");
                } else {
                    console.error("Error setting up the request", error.message);
                    alert("Login Failed. Error setting up the request.");
                }
            }
        }
        // getRegisterData(){
        //         const data=axios({
        //         url:"http://localhost:9999/api/registerData",
        //         method:'get',
        //     });
        //     data.then((response)=>{
        //         var data=response.data;
        //         this.allRegisterData=data;
        //         console.log(this.allRegisterData);
        //     })

        // },

    },
    created() {
        // this.getRegisterData();
    }


}
</script>