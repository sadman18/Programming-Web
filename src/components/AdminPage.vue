<template>
  <div class="upload-spot">
    <h2>Upload a New Spot</h2>
    <form @submit.prevent="uploadSpot">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="spot.name" id="name" required>
      </div>
      <div>
        <label for="city">City:</label>
        <input type="text" v-model="spot.city" id="city" required>
      </div>
      <div>
        <label for="location">Location:</label>
        <input type="text" v-model="spot.location" id="location" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="spot.description" id="description" required></textarea>
      </div>
      <div>
        <label for="checkIn">Check-In:</label>
        <input type="datetime-local" v-model="spot.checkIn" id="checkIn" required>
      </div>
      <div>
        <label for="checkOut">Check-Out:</label>
        <input type="datetime-local" v-model="spot.checkOut" id="checkOut" required>
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" v-model="spot.price" id="price" required>
      </div>
      <div>
        <label for="services">Services (comma separated):</label>
        <input type="text" v-model="servicesInput" id="services" required>
      </div>
      <div>
        <label for="imageUrl">Image URL:</label>
        <input type="text" v-model="spot.imageUrl" id="imageUrl" required>
      </div>
      <button type="submit">Upload Spot</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      spot: {
        name: '',
        city: '',
        location: '',
        description: '',
        checkIn: '',
        checkOut: '',
        price: 0,
        services: [],
        imageUrl: ''
      },
      servicesInput: ''
    };
  },
  methods: {
    uploadSpot() {
      // Split services input by comma and trim whitespace
      this.spot.services = this.servicesInput.split(',').map(service => service.trim());

      // Make POST request to upload spot
      axios.post('http://localhost:5049/Spot', this.spot)
        .then(response => {
          alert('Spot uploaded successfully!');
          console.log(response.data);
          // Reset form
          this.spot = {
            name: '',
            city: '',
            location: '',
            description: '',
            checkIn: '',
            checkOut: '',
            price: 0,
            services: [],
            imageUrl: ''
          };
          this.servicesInput = '';
        })
        .catch(error => {
          alert('Failed to upload spot');
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
.upload-spot {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.upload-spot form {
  display: flex;
  flex-direction: column;
}
.upload-spot form div {
  margin-bottom: 10px;
}
.upload-spot form label {
  margin-bottom: 5px;
}
.upload-spot form input,
.upload-spot form textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.upload-spot form button {
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.upload-spot form button:hover {
  background-color: #0056b3;
}
</style>
