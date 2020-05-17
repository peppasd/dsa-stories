<template>
  <div class="admin">
    <div v-if="!is_auth" class="form-group">
      <label for="password-input">Password</label>
      <br />
      <input class="form-input" id="password-input" type="password" />
      <br />
      <small v-show="error_password">Not a valid password</small>
      <button>Authenticate</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data: function() {
    return {
      error_password: true,
      is_auth: false
    };
  }
};
</script>

<style scoped>
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
