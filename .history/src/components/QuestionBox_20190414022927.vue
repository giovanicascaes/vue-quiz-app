<template>
  <div>
    <div v-if="loading" id="loading">
      <p>Loading...</p>
    </div>
    <b-jumbotron :lead="'Question #' + (index + 1)" v-if="!loading">
      <p>
        <span v-html="question.question"/>
      </p>
      <b-list-group>
        <b-list-group-item
          :button="!answerSubmited"
          v-for="(answer, index) in question.shuffledAnswers"
          :key="index"
          @click="selectAnswer(index)"
          :active="isSelected(index) && !answerSubmited"
          :variant="getAnswerVariant(index)"
        >{{index + 1}}) {{answer}}</b-list-group-item>
      </b-list-group>
      <div class="buttons">
        <b-button-group>
          <b-button variant="success" @click="previousQuestion" :disabled="index === 0">Previous</b-button>
          <b-button variant="success" @click="nextQuestion" :disabled="index === 9">Next</b-button>
        </b-button-group>
        <b-button
          variant="primary"
          @click="submitAnswer"
          :disabled="answerSubmited || answerIndex === null"
          class="submit"
        >Submit</b-button>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions({
      nextQuestion: "incrementIndex",
      previousQuestion: "decrementIndex",
      submitAnswer: "submitAnswer"
    }),
    selectAnswer(index) {
      if (!this.answerSubmited) {
        this.$store.dispatch("selectAnswer", index);
      }
    },
    isSelected(index) {
      return this.answerIndex === index;
    },
    getAnswerVariant(index) {
      if (this.answerSubmited) {
        if (this.question.correctAnswerIndex === index) {
          return "success";
        } else if (this.isSelected(index)) {
          return "danger";
        }
        return "";
      }
    }
  },
  computed: {
    ...mapState({
      index: "index",
      loading: state => state.questions.length === 0,
      question: state => state.questions[state.index],
      answerIndex: state => state.answers[state.index].index,
      answerSubmited: state => state.answers[state.index].submitted
    })
  }
};
</script>

<style>
#loading {
  display: "flex";
  align-items: center;
}
.buttons {
  margin-top: 10px;
}
.submit {
  float: right;
}
</style>
