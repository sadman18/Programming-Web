<template>
  <div class="user-profile">
    <div class="profile-header">
      <img class="profile-img" :src="profileImage" alt="Profile Image">
      <div class="profile-info">
        <h2>Information</h2>
        <ul>
          <li><strong>User Name:</strong> {{ user?.userName || 'N/A' }}</li>
          <li><strong>Password:</strong> {{ user?.password || 'N/A' }}</li>
          <li><strong>Name:</strong> {{ user?.name || 'N/A' }}</li>
          <li><strong>Email:</strong> {{ user?.email || 'N/A' }}</li>
          <li><strong>Address:</strong> {{ user?.address || 'N/A' }}</li>
          <li><strong>Gender:</strong> {{ user?.gender || 'N/A' }}</li>
          <li><strong>Phone:</strong> {{ user?.phone || 'N/A' }}</li>
        </ul>
        <button @click="logout" class="logout-button">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import profileImage from "../assets/image copy.png"; // Make sure the path is correct

export default {
  data() {
    return {
      user: null,
      profileImage: profileImage,
      userId: null
    };
  },
  mounted() {
    const _user = JSON.parse(localStorage.getItem("user"));
    if (_user && _user.id) {
      this.userId = _user.id;
      this.fetchUserProfile();
    } else {
      console.error('User ID not found in localStorage');
    }
  },
  methods: {
    fetchUserProfile() {
      axios.get(`http://localhost:5049/User/${this.userId}`)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
        });
    },
    formatDate(date) {
      if (!date) return null;
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      return new Date(date).toLocaleDateString('en-US', options);
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("admin");
      
      this.$router.push('/login'); // Redirect to login page
    }
  }
};
</script>

<style scoped>
.user-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.profile-header {
  display: flex;
  align-items: center;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
  border: 2px solid #ccc;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-info h2 {
  margin-bottom: 10px;
}

.profile-info ul {
  list-style-type: none;
  padding: 0;
}

.profile-info ul li {
  display: flex;
  margin-bottom: 8px;
}

.profile-info ul li strong {
  width: 120px;
  color: #333;
}

.profile-info ul li span {
  color: #666;
}

.logout-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #ff1a1a;
}
</style>
