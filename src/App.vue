<template>
  <div id="app">
    <h1 id="title">DSA - Ein Online Jahrbuch</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400;1,500&display=swap");

#app {
  font-family: "DM Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 3rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  outline: none;
}

#nav a.router-link-exact-active {
  color: #26a69a;
}
</style>
