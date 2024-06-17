<template>
  <div id="app">
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/signup">Sign-Up</router-link></li>
        <li><router-link to="/UserProfile">User-Profile</router-link></li>
        <li><router-link to="/AdminPage">Admin-Dashboard</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.navbar li {
  margin: 0 15px;
}

.navbar a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.navbar a:hover {
  color: rgb(33, 63, 196);
}

/* Login container styling */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 60px;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
}

.horizontal-nav .nav-link {
  padding: 10px;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  color: #2C3E50;  
  transition: color 0.3s;
  text-decoration: none;
  font-weight: bold;
}

.horizontal-nav .nav-link:hover {
  color: rgb(24, 80, 223);
}

#log {
  position: absolute;
  top: 59px;
  right: 18px;
  width: 90px;
  border: 2px solid #000;
  border-radius: 16px;
}

#profile-button {
  width: 90px;
  display: flex;
  align-items: center;
  background-color: rgb(53, 71, 238);
  padding: 9px;
  border-radius: 20px;
  cursor: pointer;
  position: absolute;
  top: 59px;
  right: 150px;
}

.profile-photo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(0, 76, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.profile-initial {
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.username {
  color: white;
  font-size: 16px;
}

.popup-menu-container {
  position: relative;
  display: inline-block;
}

.popup-menu {
  position: absolute;
  top: 100%;
  left: -97px;
  color: white;
  width: 207px;
  height: 165px;
  background-color: rgb(64, 21, 195);
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.popup-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.popup-menu li {
  padding: 15px 20px;
  cursor: pointer;
}

.popup-menu li:hover {
  background-color: rgba(48, 28, 202, 0.988);
}
</style>
