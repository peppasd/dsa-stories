<template>
  <div class="about">
    <div class="item">
      TODO: Put an about text here
    </div>
    <div class="item">
      <h3>Privacy</h3>
      This website uses third-party software and cookies to collect anonymous
      data in order to monitor the usage. We have no way to link any data you
      provide to you or any other physical person. For further information
      contact the admins <a href="#">here</a>. [TODO: email address]
    </div>
    <div class="item">
      <h3>License</h3>
      This is an open source project under the MIT License. You can find the
      source code <a href="#">here</a>. [TODO: github page]
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
h3 {
  margin-bottom: 0;
}

.item {
  width: 75vw;
  max-width: 600px;
}

a {
  color: #26a69a;
  outline: none;
}

.about {
  display: flex;
  flex-flow: column;
  text-align: left;
  align-items: center;
}
</style>
