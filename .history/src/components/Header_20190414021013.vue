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
        state.answers.filter(answer => answer.submitted).length
    })
  }
};
</script>
