<template>
  <div class="auth">
    <div v-if="!is_auth" class="form-group">
      <label for="password-input">Password</label>
      <br />
      <input class="form-input" id="password-input" type="password" />
      <br />
      <small v-show="error_password">Not a valid password</small>
      <button @click="authenticate">Authenticate</button>
    </div>
    <button v-if="is_auth" @click="signOut">Log Out</button>
  </div>
</template>

<script>
import { auth, adminEmail } from "../firebaseConf.js";

export default {
  name: "Auth",
  data: function() {
    return {
      error_password: false,
      is_auth: false
    };
  },
  created: function() {
    if (auth.currentUser != null) {
      this.is_auth = true;
      this.$emit("auth", true);
    }
  },
  methods: {
    authenticate: async function() {
      const password = document.getElementById("password-input");

      await auth
      .signInWithEmailAndPassword(adminEmail, password.value)
      .catch(function(error) {
        console.error(error.message);
      });

      if (auth.currentUser != null) {
        this.is_auth = true;
        this.$emit("auth", true);
      } else {
        this.error_password = true;
        password.value = "";
      }
    },

    signOut: async function() {
      await auth.signOut();
      this.is_auth = false;
    }
  }
};
</script>

<style scoped>
small {
  color: #ef5350;
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
</style>
