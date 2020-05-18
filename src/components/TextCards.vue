<template>
  <div id="cards">
    <div v-for="card in cards" id="card" v-bind:key="card.id">
      <div id="date-grad">
        <div id="grad">{{ card.grad }}</div>
        <div id="date">{{ dateToString(card) }}</div>
      </div>
      <div id="text">{{ card.text }}</div>
      <button @click="deletePost(card)">Delete</button>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseConf.js";

export default {
  name: "TextCards",
  data: function() {
    return {
      cards: null
    };
  },
  mounted: function() {
    this.$bind("cards", db);
  },
  methods: {
    dateToString: function(card) {
      return card.date.toDate().toLocaleString();
    },

    deletePost: function(card) {
      if (confirm("Are you sure?")) {
        db.doc(card.id).delete();
      }
    }
  }
};
</script>

<style scoped>
button {
  font-family: "DM Mono", monospace;
  border: 2px solid #2c3e50;
  border-radius: 10px;
  background: #ef5350;
  color: white;
  padding: 10px;
  font-size: 1rem;
  transition: 0.1s;
  margin-top: 1rem;
  outline: none;
}

button:active {
  background: #b61827;
  color: white;
}

#grad {
  font-weight: bold;
}

#date {
  font-size: small;
}

#date-grad {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
}

#text {
  text-align: left;
  width: 100%;
}

#card {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  border: 2px solid#2c3e50;
  border-radius: 10px;
  width: 75vw;
  max-width: 600px;
  margin: 1rem 0;
}
</style>
