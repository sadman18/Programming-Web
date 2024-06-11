<template>
    <div class="spot-list">
      <CampingSpotCard v-for="spot in spots" :key="spot.id" :spot="spot"/>
    </div>
  </template>
  
  <script>
  
  this.$router.push({ name: "CampingSpotList" })

  export default {
    name: "CampingSpotList",
    components: {
      CampingSpotCard
    },
    props: {
      spots: Array
    },
    methods:{
    }
    
  };
  </script>
  
  <style>
  .spot-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  </style>
  