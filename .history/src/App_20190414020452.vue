<template>
  <div id="app">
    <Header/>
    <QuestionBox v-if="questions.length"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Header from "./components/Header";
import QuestionBox from "./components/QuestionBox";

export default {
  name: "app",
  components: {
    Header,
    QuestionBox
  },
  mounted() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(result => result.json())
      .then(json => {
        this.storeQuestions(json.results);
      });
  },
  methods: {
    ...mapActions({ storeQuestions: "questionsFetched" })
  }
};
</script>