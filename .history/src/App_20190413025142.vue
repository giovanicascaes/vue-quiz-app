<template>
  <div id="app">
    <Header/>
    <QuestionBox :questions="questions" v-if="questions.length"/>
  </div>
</template>

<script>
import Header from "./components/Header";
import QuestionBox from "./components/QuestionBox";

export default {
  name: "app",
  components: {
    Header,
    QuestionBox
  },
  data() {
    return {
      questions: []
    };
  },
  mounted() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(result => result.json())
      .then(json => {
        this.questions = json.results;
      });
  }
};
</script>