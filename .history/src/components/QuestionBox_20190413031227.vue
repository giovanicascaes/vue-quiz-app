<template>
  <b-jumbotron :lead="'Question #' + (index + 1)">
    <p>{{currentQuestion.question}}</p>
    <b-list-group>
      <b-list-group-item button>K</b-list-group-item>
    </b-list-group>
    <b-button variant="primary" href="#">Submit</b-button>
    <b-button variant="success" href="#">Next</b-button>
  </b-jumbotron>
</template>

<script>
import _ from "lodash";

export default {
  props: ["index", "questions"],
  data() {
    return {
      answers: []
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[index];
    },
    watch: {
      index: {
        handler() {
          this.answers = _.shuffle([
            this.currentQuestion.correctAnswer,
            ...this.currentQuestion.incorrectAnswers
          ]);
        }
      }
    }
  }
};
</script>
