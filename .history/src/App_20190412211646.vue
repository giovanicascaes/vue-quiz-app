<template>
  <div id="app">
    <Header/>
    <Questions/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Questions from "./components/Questions.vue";

export default {
  name: "app",
  components: {
    Header,
    Questions
  }
};
</script>

<style>
</style>
