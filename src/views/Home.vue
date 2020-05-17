<template>
  <div class="home">
    <div id="home_text">TODO: Put a text here</div>
    <Form />
  </div>
</template>

<script>
// @ is an alias to /src
import Form from "@/components/Form.vue";

export default {
  name: "Home",
  components: {
    Form
  }
};
</script>

<style scoped>
#home_text {
  margin-bottom: 2rem;
  width: 75vw;
  max-width: 600px;
}

.home {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: center;
}
</style>
