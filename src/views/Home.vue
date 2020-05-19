<template>
  <div class="home">
    <div id="home_text">
      Write anonymously your revelation and we will be publish it on the FB
      Group: “DSA - Ein online Jahrbuch”! Read more in the “About” section of
      this page.
    </div>
    <Form />
  </div>
</template>

<script>
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
