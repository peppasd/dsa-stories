<template>
  <div class="admin">
    <div v-if="!is_auth" class="form-group">
      <label for="password-input">Password</label>
      <br />
      <input class="form-input" id="password-input" type="password" />
      <br />
      <small v-show="error_password">Not a valid password</small>
      <button @click="authenticate">Authenticate</button>
    </div>
    <div v-if="is_auth" class="form-group">
      <TextCard
        class="card"
        v-for="card in cards"
        v-bind:date="card.date"
        v-bind:grad="card.grad"
        v-bind:text="card.text"
        v-bind:key="card.id"
      />
      <button @click="signOut">Log Out</button>
    </div>
  </div>
</template>

<script>
import TextCard from "@/components/TextCard.vue";
import { FbAuth } from "../services/firebaseService.js";

export default {
  name: "Admin",
  components: {
    TextCard
  },
  data: function() {
    return {
      error_password: false,
      is_auth: false,
      cards: [
        {
          id: "123456",
          date: "17-05-2020",
          grad: "2020c",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam neque, rhoncus quis euismod non, convallis non sapien. Suspendisse finibus fermentum lacus, laoreet fringilla velit vehicula vitae. Sed quis iaculis nibh. Nullam non dolor quam. Donec pellentesque imperdiet neque, id dignissim ligula efficitur sed. Integer eget ligula mi. Praesent tristique leo eu nunc gravida auctor. Aenean ligula magna, euismod quis nunc vel, blandit tempor risus. Cras vitae sagittis libero. Proin sollicitudin lacinia odio, eget consectetur metus elementum a. "
        }
      ]
    };
  },
  mounted: function() {
    if (FbAuth.isLoggedIn()) {
      this.is_auth = true;
      this.error_password = false;
    }
  },
  methods: {
    authenticate: async function() {
      const password = document.getElementById("password-input");

      await FbAuth.login(password.value);
      if (FbAuth.isLoggedIn()) {
        this.is_auth = true;
      } else {
        this.error_password = true;
        password.value = "";
      }
    },
    signOut: async function() {
      await FbAuth.signOut();
      this.is_auth = false;
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}

button {
  font-family: "DM Mono", monospace;
  float: right;
  border: 2px solid #2c3e50;
  border-radius: 10px;
  background: white;
  padding: 10px;
  font-size: 1rem;
  transition: 0.1s;
  margin-top: 1rem;
  outline: none;
}

button:active {
  background: #00766c;
  color: white;
}

small {
  color: #ef5350;
}

.form-input:focus {
  border: 2px solid #26a69a;
}

.form-input {
  border: 2px solid #2c3e50;
  border-radius: 10px;
  transition: 0.2s;
  font-family: "DM Mono", monospace;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  margin-top: 5px;
  outline: none;
}

.form-group {
  width: 75vw;
  max-width: 600px;
}

.admin {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
}
</style>
