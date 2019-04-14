<template>
  <div id="app">
    <Header/>
    <QuestionBox :question="currentQuestion" :index="index" v-if="questions.length" :next="next"/>
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
  },
  computed: {
    currentQuestion() {
      return this.questions[this.index];
    }
  },
  methods: {
    next() {
      this.index++;
    }
  }
};
</script>