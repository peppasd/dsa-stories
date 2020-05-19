<template>
  <div class="about">
    <div class="item">
      <h3>{{ $t("about.about.title") }}</h3>
      {{ $t("about.about.text") }}
    </div>
    <div class="item">
      <h3>{{ $t("about.disclaimer.title") }}</h3>
      {{ $t("about.disclaimer.text") }}
    </div>
    <div class="item">
      <h3>{{ $t("about.privacy.title") }}</h3>
      {{ $t("about.privacy.text") }} <a href="#">here</a>. [TODO: email address]
    </div>
    <div class="item">
      <h3>{{ $t("about.license.title") }}</h3>
      {{ $t("about.license.text") }} <a href="#">here</a>. [TODO: github page]
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
