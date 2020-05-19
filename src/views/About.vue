<template>
  <div class="about">
    <div class="item">
      <h3>About</h3>
      This page was created in order for you to be able to share anonymously
      with the alumni, ex students and professors of DSA anything about the
      school you would never share on a facebook group using your real name. The
      only thing you have to do is write a secret, an “embarrassing” story, a
      revelation or anything else you can think of and we will publish it on the
      facebook group “DSA - Ein online Jahrbuch”. If you never reveal your name
      on the text you submit there is no way for us to know your identity, so
      your anonymity is secure. Of course anything you submit has to comply with
      the rules of the group.
    </div>
    <div class="item">
      <h3>Disclaimer</h3>
      The administrators keep the right not to publish anything they think that
      violates the rules.
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
