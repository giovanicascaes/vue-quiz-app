<template>
  <b-nav>
    <p>Correct: {{correctAnswers}}/{{totalQuestions}}</p>
  </b-nav>
</template>

<script>
export default {
  props: ["totalQuestions", "correctAnswers"]
};
</script>