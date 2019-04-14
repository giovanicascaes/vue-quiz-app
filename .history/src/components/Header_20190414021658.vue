<template>
  <b-nav>
    <b-nav-item disabled>
      <b>A Nice Question App</b>
    </b-nav-item>
    <b-nav-item disabled>Correct Answers: {{correctAnswers}}/{{totalAnswers}}</b-nav-item>
  </b-nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      totalAnswers: state =>
        state.answers.filter(answer => answer.submitted).length,
      totalCorrectAnswers: state.answers
        .filter(answer => answer.submitted)
        .reduce((acc, answer, index) => {
          if (state.questions[index].correctAnswerIndex === answer.index) {
            return acc + 1;
          }
          return acc;
        })
    })
  }
};
</script>
