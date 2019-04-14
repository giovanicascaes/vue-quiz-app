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
  },
  data() {
    return {
      questions: []
    };
  },
  mounted() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(result => result.json)
      .then(json => {
        this.questions = json;
      });
  }
};
</script>

<style>
</style>
