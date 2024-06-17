<template>
  <img src="../assets/background copy.jpg" alt="BgImage" class="back-img">
  <div class="search-container">
    <form @submit.prevent="searchSpots">
      <div class="search-fields">
        <div class="field">
          <input type="date" placeholder="Date Arrival" v-model="CheckIn" />
        </div>
        <div class="field">
          <input type="date" placeholder="Date Departure" v-model="CheckOut" />
        </div>
        <div class="field">
          <input type="text" placeholder="City" v-model="city" />
        </div>
        <button class="search-button" @click="getSpots">Find now</button>
      </div>
    </form>
  </div>
  <div class="available-spots">
    <div v-for="spot in spots" :key="spot.id" class="spot">
      <img
        src="https://a0.muscache.com/im/pictures/67da2286-7f62-4a8b-a6ab-db8189437a7b.jpg?im_w=720"
        alt="" style="width: 400px; border-radius: 15px;">

      <label>Name:{{ spot.name }}</label><br>
      <label>Location:{{ spot.location }}</label><br>
      <label>Guest: 2</label><br>
      <button class="booking-btn" @click="goSpotDetails(spot.id)">Book now for €{{ spot.price }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spots: [],
      city: '',
      CheckIn: '',
      CheckOut: '',
      numberOfPersons: 1,
    };
  },
  methods: {
    goSpotDetails(spotId) {
      const user = localStorage.getItem('user'); // Corrected the string literal for 'user'
      if (!user) {
        alert("Please login first to see spot details");
      } else {
        this.$router.push({ name: "SpotDetails", params: { id: spotId } });
      }
    },
    async getSpots() {
      try {
        const response = await fetch(`http://localhost:5049/Spot/${this.CheckIn}T11%3A42%3A30.099Z/${this.CheckOut}T11%3A42%3A30.099Z/${this.city}`);
        const data = await response.json();
        this.spots = data;
        console.log(data);
      } catch (error) {
        console.error('Error fetching spots:', error);
        // Handle error gracefully (e.g., show error message to user)
      }
    },
    searchSpots() {
      // Logic to handle the search action
      console.log('Searching spots:', this.CheckIn, this.CheckOut, this.numberOfPersons);
    },
  },
};
</script>

<style>
.back-img {
  width: 1200px;
  height: 456px;
  margin-top: -264px;
  border-radius: 20px;
}

.search-container {
  margin-top: -50px;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.search-fields {
  display: flex;
  background: white;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.field {
  margin-right: 20px;
  display: flex;
  align-items: center;
}

.field input {
  border: none;
  border-radius: 30px;
  padding: 10px;
  background: #f5f5f5;
  font-size: 16px;
  width: 150px;
}

.search-button {
  background: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background: #45a049;
}

.available-spots {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.spot {
  width: 400px;
  height: auto;
  background-color: white;
  border: 0.5px solid black;
  border-radius: 15px;
  padding: 15px 15px 15px 15px;
}

.booking-btn {
  width: 100%;
  height: auto;
  border: none;
  border-radius: 15px;
  color: white;
  background-color: rgb(79, 79, 224);
  font-weight: bold;
}

.booking-btn:hover {
  background: #a08e35;
}
</style>
