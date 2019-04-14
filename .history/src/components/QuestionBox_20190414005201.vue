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
      >{{index + 1}}) {{answer}}</b-list-group-item>
    </b-list-group>
    <b-button variant="success" @click="previousQuestion">Previous</b-button>
    <b-button variant="success" @click="nextQuestion">Next</b-button>
    <b-button variant="primary" href="#">Submit</b-button>
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
      }
    }
  },
  methods: {
    ...mapActions({
      nextQuestion: "incrementIndex",
      previousQuestion: "decrementIndex"
    }),
    selectAnswer(index) {
      this.$store.dispatch("selectAnswer", index);
    },
    isSelected(index) {
      return this.selectedIndex === index;
    }
  },
  computed: {
    ...mapState({
      index: "index",
      question: state => state.questions[state.index],
      answer: state => state.answers[state.index].index,
      answerSubmited: state => state.answers[state.index].submited
    })
  }
};
</script>
