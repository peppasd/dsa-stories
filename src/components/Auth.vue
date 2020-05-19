<template>
  <div class="auth">
    <div v-if="!is_auth" class="form-group">
      <label for="password-input">{{ $t("admin.auth.label") }}</label>
      <br />
      <input
        class="form-input"
        v-model="password"
        id="password-input"
        type="password"
      />
      <br />
      <small v-show="error_password">{{ $t("admin.auth.error") }}</small>
      <button @click="authenticate">{{ $t("admin.auth.button") }}</button>
    </div>
    <button v-if="is_auth" @click="signOut">
      {{ $t("admin.auth.log_out") }}
    </button>
  </div>
</template>

<script>
import { auth, adminEmail } from "../firebaseConf.js";

export default {
  name: "Auth",
  data: function() {
    return {
      error_password: false,
      is_auth: false,
      password: ""
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
      await auth
        .signInWithEmailAndPassword(adminEmail, this.password)
        .catch(function(error) {
          console.error(error.message);
        });

      if (auth.currentUser != null) {
        this.is_auth = true;
        this.password = "";
        this.$emit("auth", true);
      } else {
        this.error_password = true;
        this.password = "";
      }
    },

    signOut: async function() {
      await auth.signOut();
      this.is_auth = false;
      this.$emit("auth", false);
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
  text-align: left;
  width: 75vw;
  max-width: 600px;
}
</style>
