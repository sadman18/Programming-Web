<template>
    <div class="login-container">
        <div class="login-left">
            <div class="illustration">
                <img src="@/assets/image.png" alt="Illustration" />
            </div>
        </div>

        <!-- Login Form -->
        <div class="login-right" v-if="isLogin">
            <div class="login-header">
                <h2>Welcome Back</h2>
            </div>
            <form class="login-form">
                <label for="useremail">Username</label>
                <input type="text" id="useremail" v-model="useremail" placeholder="Enter your useremail" />

                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" placeholder="Enter your password" />

                <p v-if="isErrorMessage" class="error">{{ errorMessage }}</p>
                <button @click.prevent="findUser" class="login-button">Login</button>
                <div class="extra-options">
                    <a @click="switchToCreateAccount">Create Account</a>
                    <a @click="switchToForgetPassword">Forgot Password?</a>
                </div>
            </form>
        </div>

        

        <!-- Forgot Password Form -->
        <div class="login-right" v-if="isForgetPassword">
            <div class="login-header">
                <h2>Forget Password</h2>
            </div>
            <form class="login-form">
                <input type="text" v-model="email" placeholder="Enter your email" />
                <button class="login-button" @click.prevent="checkuseremail">Submit</button>
            </form>
        </div>

        <!-- Reset Password Form -->
        <div class="login-right" v-if="isresetpassword">
            <div class="login-header">
                <h2>Reset Password</h2>
            </div>
            <form class="login-form">
                <input type="password" v-model="password" placeholder="Enter password" />
                <input type="password" v-model="confirmPassword" placeholder="Confirm password" />
                <button class="login-button" @click.prevent="updatePassword">Submit</button>
            </form>
        </div>

        <!-- Success Message -->
        <div class="login-right" v-if="successfull">
            <div class="login-header">
                <h2>Password update successful</h2>
                <img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/39-512.png"
                    alt="" style="width: 50px;">
            </div>
            <button class="login-button">Continue</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
            user: null,
            useremail: '',
            password: '',
            confirmPassword: '',
            name: '',
            email: '',
            address: '',
            gender: '',
            phone: '',

            //create account
            create_email: '',
            create_password: '',


            isLogin: true,
            errorMessage: '',
            isErrorMessage: false,
            isCreateAccount: false,
            isForgetPassword: false,
            isresetpassword: false,
            successfull: false,
        };
    },
    methods: {
        switchToCreateAccount() {
            this.isCreateAccount = true;
            this.isLogin = false;
            this.isForgetPassword = false;
        },

        //Sign In        
        SignIn() {
            this.isCreateAccount = false;
            this.isLogin = true;
        },
        switchToForgetPassword() {
            this.isForgetPassword = true;
            this.isLogin = false;
            this.isCreateAccount = false;
        },
        checkuseremail() {
            this.isForgetPassword = false;
            this.isresetpassword = true;
        },
        updatePassword() {
            this.isresetpassword = false;
            this.successfull = true;
        },
        findUser() {
            fetch("http://localhost:5049/User")
                .then(response => response.json())
                .then(data => {
                    let user = data.find(user => user.email === this.useremail && user.password === this.password);
                    if (user) {
                        this.user = user;
                        localStorage.setItem('user', JSON.stringify(this.user));
                        alert("login successful"); // Log the parsed data
                    } else {
                        this.isErrorMessage = true;
                        this.errorMessage = "Invalid email or password try again";
                        setTimeout(() => {
                            this.isErrorMessage = false;
                        }, 3000); // Hide error message after 3 seconds
                    }
                })
                .catch(error => console.error('Error:', error)); // Handle errors
        }
    }
};
</script>

<style scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, #667eea, #764ba2);
}

.login-container {
    display: flex;
    height: 528px;
    width: 900px;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 30px rgba(43, 38, 38, 0.1);
    margin: auto;
    margin-top: 30px;
}

.login-left {
    flex: 1;
    background: #4a00e0;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.illustration img {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
}

.description {
    font-size: 14px;
    text-align: center;
    max-width: 400px;
}

.login-right {
    flex: 1;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
}

.login-header h2 {
    margin-bottom: 40px;
    color: #4a00e0;
}

.login-form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
}

.login-form label {
    margin-bottom: 10px;
    font-weight: bold;
}

.login-form input {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.login-button {
    background: #4a00e0;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.extra-options {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.extra-options a {
    color: #4a00e0;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
}

.error {
    color: red;
    margin-top: 5px;
}
</style>
