<template>
  <b-jumbotron :lead="'Question #' + (index + 1)">
    <p>{{question.question}}</p>
    <b-list-group>
      <b-list-group-item
        button
        v-for="(answer, index) in answers"
        :key="index"
        @click="selectAnswer(index)"
        :active="isSelected(index)"
        :disabled="answerSubmited"
      >{{index + 1}}) {{answer}}</b-list-group-item>
    </b-list-group>
    <b-button variant="success" @click="previousQuestion" :disabled="index === 0">Previous</b-button>
    <b-button variant="success" @click="nextQuestion" :disabled="index === 9">Next</b-button>
    <b-button variant="primary" @click="submitAnswer" :disabled="answerSubmited">Submit</b-button>
  </b-jumbotron>
</template>

<script>
import _ from "lodash";
import { mapActions, mapState } from "vuex";

export default {
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
        this.correctAnswerIndex = this.answers.indexOf(
          this.question.correct_answer
        );
      }
    }
  },
  methods: {
    ...mapActions({
      nextQuestion: "incrementIndex",
      previousQuestion: "decrementIndex",
      submitAnswer: "submitAnswer"
    }),
    selectAnswer(index) {
      this.$store.dispatch("selectAnswer", index);
    },
    isSelected(index) {
      return this.answerIndex === index;
    }
  },
  computed: {
    ...mapState({
      index: "index",
      question: state => state.questions[state.index],
      answerIndex: state => state.answers[state.index].index,
      answerSubmited: state => state.answers[state.index].submitted
    })
  }
};
</script>
