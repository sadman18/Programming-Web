<template>
    <div class="login-container">
      <div class="login-left">
        <div class="illustration">
          <img src="@/assets/image.png" alt="Illustration" />
        </div>
      </div>
      <!-- Create Account Form -->
      <div class="login-right" v-if="isCreateAccount">
        <div class="login-header">
          <h2>Welcome to Campendium</h2>
        </div>
        <form class="login-form" @submit.prevent="signUp">
          <input type="text" v-model="name" placeholder="Enter your name" />
          <input type="email" v-model="email" placeholder="Enter your email" />
          <input type="password" v-model="password" placeholder="Enter your password" />
          <input type="text" v-model="address" placeholder="Enter your address" />
          <input type="text" v-model="gender" placeholder="Enter your gender" />
          <input type="tel" v-model="phone" placeholder="Enter your phone" />
          
        </form>
        <button type="submit" class="login-button" @click="signUp">Sign Up</button>
       
      </div>
    </div>
  </template>
  
  <script>

  
  export default {
    name: "SignUp",
    data() {
      return {
        user:[],
        name: "",
        email: "",
        password: "",
        address: "",
        gender: "",
        phone: "",
        isCreateAccount: true,
      };
    },
    methods: {
        fetchUser(){
                fetch('http://localhost:5049/User')
                .then((response)=>response.json())
                .then((data)=>{
                    this.user=data
                })
        },
        signUp() {
            const payload = {
                userName: this.name,
                name:this.name,
                email: this.email,
                password: this.password,
                address: this.address,
                gender: this.gender,
                phone: this.phone
            };

            console.log(payload);
            fetch('http://localhost:5049/User',{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",

                },
                body:JSON.stringify(payload)
            }).then((response)=>response.json())
            .then((newUser)=>{
                this.fetchUser()
                alert("a user created",newUser)
            })

            
        },
      signIn() {
        // Handle the sign-in logic here
      },
    },
  };
  </script>
  

  <style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    /* background: linear-gradient(135deg, #667eea, #764ba2); */
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
  