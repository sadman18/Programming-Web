<template>
    <div>
        <div class="photo">
            <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-44630600/original/125bbb9e-4c81-497a-8d12-e57fa6658e28.jpeg?im_w=1200" alt="img1">
            <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-44630600/original/125bbb9e-4c81-497a-8d12-e57fa6658e28.jpeg?im_w=1200" alt="img2">
            <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-44630600/original/125bbb9e-4c81-497a-8d12-e57fa6658e28.jpeg?im_w=1200" alt="img3">
        </div>
    </div>
    <div class="details">
        <div class="data">
            <h2>Camp Nirbana</h2>
            <label>{{ spot.location }}</label>
            <h3>Overview</h3>
            <label>Free Wifi</label><br>
            <label>Parking available</label><br>
            <label>Kitchen area</label><br>
            <label>Free cancellation</label><br>
            <label>Free Wifi again</label>
        </div>
        <div class="price">
            <h3>${{ spot.price }}/day</h3><br>
            <label>Check In Date</label><br>
            <input type="date" v-model="checkIn"><br>
            <label>Check Out Date</label><br>
            <input type="date" v-model="checkOut"><br>
            <label>Guests</label><br>
            <input type="number" v-model="guest" min="1"><br>
            <button class="confirm-booking-btn" @click="confirmBooking">Confirm booking</button>
        </div>
    </div>
    <h3>Comments</h3>
    
        <div class="comment" v-for="comment in comments" :key="comment.spotID">
            <label for="">comments</label>
            <p>{{ comment.userID }} xjvck <span class="rating">{{ comment.rating }}</span></p>
            <p>Comment: {{ comment.commentText }}</p>
        </div>
    
</template>

<script>
export default {
    data() {
        return {
            spot: {},
            comments: [], // Correctly initialize comments as an array
            checkIn: '',
            checkOut: '',
            userID:'',
            spotId:'',
            guest: 1
        };
    },
    methods: {
        async fetchBooking() {
            try {
                const response = await fetch('http://localhost:5049/Booking');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        },
        async confirmBooking() {
            const payload = {
                checkIn: `${this.checkIn}T22:30:43.501Z`,
                checkOut: `${this.checkOut}T22:30:43.501Z`,
                userId: this.userID,
                spotId: this.spot.id,
                guest: this.guest
            };

            try {
                const response = await fetch('http://localhost:5049/Booking', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newBooking = await response.json();
                console.log('Booking successful:', newBooking);
                alert("Booking successful!");
                this.fetchBooking();
            } catch (error) {
                console.error('Error confirming booking:', error);
            }
        },
        async getComments() {
            if (!this.spot.id) {
                console.error('Spot ID is not available.');
                return;
            }

            try {
                const response = await fetch("http://localhost:5049/api/Comment");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched comments data:', data);

                const comments = data.filter(
                    (comment) => comment.spotID === this.spot.id
                );
                console.log('Filtered comments:', comments);
                this.comments = comments;
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        }
    },
    mounted() {
        // Assuming spot data is fetched or populated before calling getComments
        // Ensure spot.id is available
        this.spot = {
            id: 1, // Example spot id
            location: 'Some location',
            price: 100
        };
        this.getComments();
        const user = JSON.parse(localStorage.getItem('user'));
        this.userID=user.id;
    }
};
</script>

<style>
.details {
    display: flex;
}

.photo {
    display: flex;
    gap: 5px;
}

.photo img {
    width: 480px;
    height: 400px;
    border-radius: 15px;
}

.data {
    flex: 1;
}

.price {
    flex: 2;
    display: absolute;
    width: 50px;
    height: auto;
    background-color: rgb(231, 220, 220);
    border-radius: 15px;
    margin-top: 20px;
    box-shadow: 2px solid black;
}

body {
    background-color: white;
}

.comments-container {
    display: flex;
  flex-wrap: wrap;
    width: 80%;
}

.comment {
    width: 500px;
    height: auto;
    background-color: antiquewhite;
    
}
</style>
