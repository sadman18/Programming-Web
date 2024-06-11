<template>
    <div>
        <div class="photo"><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-44630600/original/125bbb9e-4c81-497a-8d12-e57fa6658e28.jpeg?im_w=1200" alt="img1">
            <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-44630600/original/125bbb9e-4c81-497a-8d12-e57fa6658e28.jpeg?im_w=1200" alt="img2">
            <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-44630600/original/125bbb9e-4c81-497a-8d12-e57fa6658e28.jpeg?im_w=1200" alt="img3"></div>
    </div>
    <div class="details">
    <div class="data">
        <h2>Camp Nirbana</h2>
        <label >{{spot.location}}</label>
        <h3>Overview</h3>
        <label >Free Wifi</label><br>
        <label >Parking available</label><br>
        <label >Kitchen area</label><br>
        <label >free cancellation</label><br>
        <label >Free Wifi again</label>

    </div>
    <div class="price">
        <h3>${{spot.price}}/day</h3><br>
        <label >Check In Date</label><br>
        <input type="date" v-model="checkIn"><br>
        <label >Check Out Date</label><br>
        <input type="date" v-model="checkOut"><br>
        <label >Guests</label><br>
        <input type="number" v-model="guest" min="1"><br>
        <button class="confirm-booking-btn">confirm booking</button>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            spot:{}
        }
       


    }
}
</script>
<style>
.details{
    display: flex;
}
.photo{
    display: flex;
    gap: 5px;
}
.photo img{
    width: 480px;
    height: 400px;
    border-radius: 15px;

}
.data{
    flex: 1;
}
.price{
    flex:2 ;
    display: absolute;
    width: 50px;
    height: auto;
    background-color: rgb(231, 220, 220);
    border-radius: 15px;
    margin-top: 20px;
    box-shadow: 2px solid black;
}
body{
    background-color: white;
}
</style>
