<template>
  <b-nav>
    <b-nav-item disabled>Correct: {{correctAnswers}}/{{totalQuestions}}</b-nav-item>
  </b-nav>
</template>

<script>
export default {
  props: ["totalQuestions", "correctAnswers"]
};
</script> 