<template>
  <transition :name="transitionName">
    <div v-if="!transitioning">
      <b-jumbotron v-if="loading" lead="Loading..."/>
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
          >
            {{index + 1}})
            <span v-html="answer"/>
          </b-list-group-item>
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
  </transition>
</template>

<script>
import _ from "lodash";
import { mapActions, mapState } from "vuex";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      transitioning: false,
      transitionName: "slide-fade-next"
    };
  },
  methods: {
    ...mapActions({
      submitAnswer: "submitAnswer"
    }),
    _transition(dispatchCall) {
      // Ugly workaround to fix first animation on change question direction
      setTimeout(() => {
        this.transitioning = true;
        setTimeout(() => {
          dispatchCall();
          this.transitioning = false;
        }, 200);
      }, 10);
    },
    previousQuestion() {
      this.transitionName = "slide-fade-previous";
      this._transition(() => this.$store.dispatch("decrementIndex"));
    },
    nextQuestion() {
      this.transitionName = "slide-fade-next";
      this._transition(() => this.$store.dispatch("incrementIndex"));
    },
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
.buttons {
  margin-top: 10px;
}
.submit {
  float: right;
}
.slide-fade-previous-enter-active,
.slide-fade-next-enter-active,
.slide-fade-previous-leave-active,
.slide-fade-next-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-previous-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-previous-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-fade-next-enter {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-fade-next-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
