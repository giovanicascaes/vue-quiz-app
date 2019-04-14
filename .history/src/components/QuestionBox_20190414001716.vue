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
    <b-button variant="primary" href="#">Submit</b-button>
    <b-button variant="success" @click="nextQuestion">Next</b-button>
  </b-jumbotron>
</template>

<script>
import _ from "lodash";
import { mapActions } from "vuex";

export default {
  props: ["index", "question"],
  data() {
    return {
      answers: [],
      selectedIndex: null
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
    ...mapActions({ nextQuestion: "incrementIndex" }),
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    isSelected(index) {
      return this.selectedIndex === index;
    }
  },
  computed: {}
};
</script>
