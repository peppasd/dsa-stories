<template>
  <div>
    <div v-if="!post_thanks" class="form">
      <div class="form-group">
        <label for="grad-input">Your Grad year</label>
        <br />
        <input
          spellcheck="false"
          class="form-input"
          id="grad-input"
          type="text"
          placeholder="eg 2001c"
        />
        <br />
        <small v-show="error_grad">Enter your graduation year</small>
      </div>
      <div class="form-group">
        <label for="text-input">Your Text</label>
        <br />
        <textarea
          class="form-input"
          id="text-input"
          type="text"
          rows="10"
          placeholder="Hii..."
        ></textarea>
        <br />
        <small v-show="error_text">Please enter at least 10 characters</small>
      </div>
      <div class="form-group">
        <button @click="createPost">Submit</button>
      </div>
    </div>
    <div v-if="post_thanks">Thank you!</div>
  </div>
</template>

<script>
import { FbDatabase } from "../services/firebaseService.js";

export default {
  name: "Form",
  data: function() {
    return {
      error_grad: false,
      error_text: false,
      post_thanks: false
    };
  },
  methods: {
    createPost: async function() {
      const gradInput = document.getElementById("grad-input").value.trim();
      const textInput = document.getElementById("text-input").value.trim();

      const valGrad = FbDatabase.validateGrad(gradInput);
      const valText = FbDatabase.validateText(textInput);

      if (!valGrad) {
        this.error_grad = true;
      }
      if (!valText) {
        this.error_text = true;
      }
      if (!valGrad || !valText) return;

      await FbDatabase.createPost(gradInput, textInput);

      this.post_thanks = true;
    }
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
  margin-bottom: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  width: 75vw;
  max-width: 600px;
}
</style>
