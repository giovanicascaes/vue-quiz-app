<template>
  <div id="app">
    <Header/>
    <Questions/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Questions from "./components/Questions";

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
