<template>
  <div id="textcard">
    <div id="date-grad">
      <div id="grad">{{ grad }}</div>
      <div id="date">{{ date }}</div>
    </div>
    <div id="text">
      {{ text }}
    </div>
    <button>Delete</button>
  </div>
</template>

<script>
export default {
  name: "TextCard",
  props: {
    date: String,
    grad: String,
    text: String
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

#textcard {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 1rem;
  border: 2px solid#2c3e50;
  border-radius: 10px;
}
</style>
