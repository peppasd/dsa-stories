<template>
  <div id="app">
    <header>
      <h1 id="title">{{ $t("title") }}</h1>
      <div id="nav">
        <router-link to="/">{{ $t("nav.home") }}</router-link> |
        <router-link to="/about">{{ $t("nav.about") }}</router-link> |
        <LocaleOptions id="lang" />
      </div>
    </header>
    <main id="content"><router-view /></main>
    <footer id="footer">
      <a href="https://www.facebook.com/groups/1274856579385416/">
        {{ $t("footer") }}
      </a>
    </footer>
  </div>
</template>

<script>
import LocaleOptions from "./components/LocaleOptions.vue";

export default {
  name: "App",
  components: {
    LocaleOptions
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400;1,500&display=swap");

#app {
  font-family: "DM Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  flex-direction: column;
}

#nav {
  padding-bottom: 2rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  outline: none;
}

#content {
  flex: 1;
}

#nav a.router-link-exact-active {
  color: #26a69a;
}

#footer {
  padding-bottom: 1rem;
}

#footer a {
  font-size: small;
  color: #2c3e50;
  text-decoration: none;
  outline: none;
}
</style>
