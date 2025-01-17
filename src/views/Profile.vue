<template>
    <div class="profile">
        <Header />
        <main>
            <div class="form-container">
                <form @submit.prevent="updateDetails">
                    <div class="form-group">
                        <!-- <label for="firstname">First Name:</label> -->
                        <input type="text" id="firstname" v-model="userDetails.firstname" placeholder="First Name" />
                    </div>

                    <div class="form-group">
                        <!-- <label for="lastname">Last Name:</label> -->
                        <input type="text" id="lastname" v-model="userDetails.lastname" placeholder="Last Name" />
                    </div>

                    <div class="form-group">
                        <!-- <label for="mobileno">Mobile Number:</label> -->
                        <input type="text" id="mobileno" v-model="userDetails.mobileno" placeholder="Mobile Number" />
                    </div>

                    <div class="form-group">
                        <!-- <label for="email">Email:</label> -->
                        <input type="email" id="email" v-model="userDetails.email" placeholder="Email" />
                    </div>
                    
                    <button type="submit" class="update-btn">Update</button>
                </form>
            </div>

            <div class="details">
                <h3>Details</h3>
                <p>
                    <strong>Name:</strong> {{ userDetails.firstname }} {{ userDetails.lastname }}
                </p>
                <p>
                    <strong>Mobile Number:</strong> {{ userDetails.mobileno }}
                </p>
                <p>
                    <strong>Email:</strong> {{ userDetails.email }}
                </p>            
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { reactive } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const userDetails = reactive({
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
});

function updateDetails() {
  console.log("Updated user details:", userDetails);
}
</script>

<style scoped>
.profile {
  background-color: rgb(19, 18, 18);
  color: #fff;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
}

main {
  padding: 100px;
  margin-left: 400px;
  flex: 1;
}

.form-container {
  margin-bottom: 30 px;
}

h2,
h3 {
  margin-bottom: 1px;
}

.form-group {
  margin-bottom: 30px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 3px;
}

input {
  width: 60%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  /* border-radius: 5px; */
  background-color: #333;
  color: #fff;
}

.update-btn {
  padding: 10px 25px;
  background-color: #242424;
  color:rgb(61, 137, 252);
  border-radius: 5px;
  border-width: 0.5 px;
  border-color: rgb(61, 137, 252);
  cursor: pointer;
  margin-left: 350px;
}

.details {
  margin-top: 20px;
}

p {
  margin: 5px 0;
}

strong {
  color: #ccc;
}
</style>
