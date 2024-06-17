<template>
  <div class="container">
    <div class="header">
      <h2>{{ spot.name }} {{ spot.city }}, {{ spot.location }}</h2>
      <div class="rating">
        <span>4.5/5</span>
        <span>★★★★★</span>
      </div>
    </div>
   
    <div class="details">
      <div class="overview">
        <h3>Hotel Overview</h3>
        <p>{{ spot.description }}</p>
      </div>

      <div class="services">
        <h3>Services</h3>
        <p>Whether you are traveling for business or pleasure, our room services include:</p>
        <ul>
          <li v-for="service in spot.services" :key="service">{{ service }}</li>
        </ul>
      </div>


      <div class="booking">
        <h3>Book Your Stay</h3>
        <form @submit.prevent="confirmBooking">
          <div class="form-group">
            <label for="price">Price:</label>
            <input type="text" id="price" :value="'€' + spot.price + '/day'" readonly>
          </div>
          <div class="form-group">
            <label for="checkIn">Check In Date</label>
            <input type="date" id="checkIn" v-model="checkIn" required>
          </div>
          <div class="form-group">
            <label for="checkOut">Check Out Date</label>
            <input type="date" id="checkOut" v-model="checkOut" required>
          </div>
          <div class="form-group">
            <label for="guest">Guests</label>
            <input type="number" id="guest" v-model="guest" min="1" required>
          </div>
          <button class="confirm-booking-btn" @click="confirmBooking">Confirm booking</button>
        </form>
      </div>

      <div class="comments">
        <h3>Comments</h3>
        <div class="comment" v-for="comment in comments" :key="comment.id">
          <p><strong>{{ comment.userID }}</strong> <span class="rating">{{ comment.rating }} ★</span></p>
          <p>Comment: {{ comment.commentText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spot: {},
      spotId: null,
      comments: [],
      checkIn: '',
      checkOut: '',
      userID: '',
      guest: 1,
    };
  },
  methods: {


    async fetchSpot() {
      try {
        const response = await fetch(`http://localhost:5049/Spot/${this.spotId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.spot = data;
        this.getComments(); // Fetch comments after getting the spot details
      } catch (error) {
        console.error('Error fetching spot data:', error);
      }
    },
    async confirmBooking() {
      const payload = {
        checkIn: `${this.checkIn}T00:00:00.000Z`,
        checkOut: `${this.checkOut}T00:00:00.000Z`,
        userId: this.userID,
        spotId: this.spot.id,
        guest: this.guest
      };
      console.log(payload)

      try {
        const response = await fetch('http://localhost:5049/api/Booking', {
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
      try {
        const response = await fetch(`http://localhost:5049/api/Comment/${this.spot.id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.comments = await response.json();
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
  },
  async mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.userID = user.id;
    this.spotId = this.$route.params.id;
    await this.fetchSpot();
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

}

.header {

  margin-top: 1400px;
  text-align: center;
  background: #fff;
  padding: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header-img {
  margin-top: 200px;
  width: 1200px;
  height: 400px;
  border-radius: 15px;
}

.header h2 {
  font-size: 36px;
  margin: 10px 0;
}

.header .rating {
  font-size: 24px;
  color: #f5c518;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.overview,
.services,
.booking,
.comments {
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 18px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding: 5px 0;
}

.booking {
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.booking h3 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="date"],
.form-group input[type="number"] {
  width: calc(100% - 22px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.confirm-booking-btn {
  display: block;
  width: 100%;
  padding: 15px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
}

.confirm-booking-btn:hover {
  background-color: #0056b3;
}

.comments {
  margin-top: 20px;
}

.comment {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.comment .rating {
  color: #f5c518;
}
</style>
