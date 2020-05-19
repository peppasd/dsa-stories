<template>
  <div>
    <div v-if="!post_thanks" class="form">
      <div class="form-group">
        <label for="grad-input"> {{ $t("home.form.grad.label") }} </label>
        <br />
        <input
          spellcheck="false"
          class="form-input"
          id="grad-input"
          type="text"
          placeholder="eg 2001c (optional)"
          v-model="grad_input"
        />
        <br />
        <small v-show="error_grad"> {{ $t("home.form.grad.error") }} </small>
      </div>
      <div class="form-group">
        <label for="text-input"> {{ $t("home.form.text.label") }} </label>
        <br />
        <textarea
          class="form-input"
          id="text-input"
          type="text"
          rows="10"
          placeholder="Hii..."
          v-model="text_input"
        ></textarea>
        <br />
        <small v-show="error_text"> {{ $t("home.form.text.error") }} </small>
      </div>
      <div class="form-group">
        <button @click="createPost">{{ $t("home.form.button") }}</button>
      </div>
    </div>
    <div v-if="post_thanks">{{ $t("home.form.thanks") }}</div>
  </div>
</template>

<script>
import { db, Timestamp } from "../firebaseConf.js";

export default {
  name: "Form",
  data: function() {
    return {
      error_grad: false,
      error_text: false,
      post_thanks: false,
      grad_input: "",
      text_input: ""
    };
  },
  methods: {
    createPost: async function() {
      var grad = this.grad_input.trim();
      const text = this.text_input.trim();

      //validate
      var valGrad = /^[1][9][5-9][0-9][a-e]?$|^[2][0][0-1][0-9][a-e]?$/.test(
        grad
      );
      const valText = typeof text == "string" && text.length > 5;

      //new: grad optional
      if (grad === "") {
        grad = "none";
        valGrad = true;
      }

      if (!valGrad) {
        this.error_grad = true;
      }
      if (!valText) {
        this.error_text = true;
      }
      if (!valGrad || !valText) return;

      await db
        .add({
          grad: grad,
          text: text,
          date: Timestamp.now()
        })
        .catch(function(err) {
          console.log(err);
        });
      this.post_thanks = true;
      await new Promise(r => setTimeout(r, 5000));
      this.post_thanks = false;
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
