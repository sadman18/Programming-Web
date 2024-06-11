<template>
    <div class="card">
      <img :src="spot.image" alt="Camping spot image" class="spot-image"/>
      <h3>{{ spot.name }}</h3>
      <p>{{ spot.description }}</p>
      <p>Price: ${{ spot.price }}</p>
      <router-link :to="`/spot/${spot.id}`">View Details</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "CampingSpotCard",
    props: {
      spot: Object
    }
  };
  </script>
  
  <style>
  .card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    text-align: center;
    background-color: #fff;
  }
  .card .spot-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  .card h3 {
    margin-top: 10px;
    font-size: 1.5rem;
  }
  </style>
  