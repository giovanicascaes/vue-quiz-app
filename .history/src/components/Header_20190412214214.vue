<template>
  <b-nav>
    <b-nav-item disabled>Correct: {{correctAnswers}}/{{totalQuestions}}</b-nav-item>
  </b-navi>
</template>

<script>
export default {
  props: ["totalQuestions", "correctAnswers"]
};
</script> 