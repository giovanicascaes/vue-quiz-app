<template>
  <div id="app">
    <Header/>
    <QuestionBox :question="currentQuestion" :index="index"/>
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
      questions: [],
      index: 0
    };
  },
  mounted() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(result => result.json())
      .then(json => {
        this.questions = json.results;
      });
  },
  computed: {
    answers() {
      return this.questions[index];
    }
  }
};
</script>