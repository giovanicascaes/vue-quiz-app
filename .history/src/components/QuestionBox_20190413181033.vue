<template>
  <b-jumbotron :lead="'Question #' + (index + 1)">
    <p>{{question.question}}</p>
    <b-list-group>
      <b-list-group-item
        button
        v-for="(answer, index) in answers"
        :key="index"
      >{{index}}) {{answer}}</b-list-group-item>
    </b-list-group>
    <b-button variant="primary" href="#">Submit</b-button>
    <b-button variant="success" href="#">Next</b-button>
  </b-jumbotron>
</template>

<script>
import _ from "lodash";

export default {
  props: ["index", "question"],
  data() {
    return {
      answers: []
    };
  },
  watch: {
    question: {
      immediate: true,
      handler() {
        this.answers = _.shuffle([
          ...this.question.incorrect_answers,
          this.question.correct_answer
        ]);
      }
    }
  }
};
</script>
