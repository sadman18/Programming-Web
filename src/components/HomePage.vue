<template>
  <div class="search-container">
    <form @submit.prevent="searchSpots">
      <div class="search-fields">
        <div class="field">
          <input type="date" placeholder="Date Arrival" v-model="dateArrival" />
        </div>
        <div class="field">
          <input type="date" placeholder="Date Departure" v-model="dateDeparture" />
        </div>
        <div class="field">
          <input type="text" placeholder="City" v-model="city" />
        </div>
        <button  class="search-button" @click="getSpots">Find now</button>
      </div>
    </form>
  </div>
  <div class="available-spots">
    <div v-for="spot in spots" :key="spot" class="spot">
      <img src="https://a0.muscache.com/im/pictures/miso/Hosting-854285215008266310/original/32b10397-01d0-4855-8169-b5fd6906647c.jpeg?im_w=1200" alt="" style="width: 400px; border-radius: 15px;">
      <a href="https://www.airbnb.com/rooms/44630600?adults=1&children=0&infants=0&check_in=2024-06-21&check_out=2024-06-26&source_impression_id=p3_1718106513_P37WA1VKaooz5GEl&previous_page_section_name=1000&federated_search_id=88830657-f35e-4a0f-9349-74a656d25932">see more></a><br>
      <label >Name:{{spot.name}}</label><br>
      <label >Location:{{spot.location}}</label><br>
      <label >Guest: 2</label><br>
      <button class="booking-btn" @click="goSpotDetails">Book now for €{{spot.price}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spots:[],
      city:'',
      dateArrival: '',
      dateDeparture: '',
      numberOfPersons: 1,
    };
  },
  methods: {
    goSpotDetails(){
      this.$router.push({name:"SpotDetails"})
    },
    getSpots(){
      fetch(`http://localhost:5049/Spot/${this.dateArrival}T11%3A42%3A30.099Z/${this.dateDeparture}T11%3A42%3A30.099Z/${this.city}`).then((response)=>response.json())
      .then((data)=>{
        this.spots=data
        console.log(data)
      })
    },
    searchSpots() {
      // Logic to handle the search action
      console.log('Searching spots:', this.dateArrival, this.dateDeparture, this.numberOfPersons);
    },
  },
};
</script>

<style>
.search-container {
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
.available-spots{
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.spot{
  width:400px;
  height: auto;
  background-color: white;
    border: 0.5px solid black;
    border-radius: 15px;
    padding: 15px 15px 15px 15px;
}
.booking-btn{
  width: 100%;
    height: auto;
    border: none;
    border-radius: 15px;
    color: white;
    background-color: rgb(79, 79, 224);
    font-weight: bold;
}
</style>