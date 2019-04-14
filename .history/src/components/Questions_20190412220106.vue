<template>
  <b-nav>
    <b-nav-item disabled>
      <b>A Nice Question App</b>
    </b-nav-item>
    <b-nav-item disabled>Correct Answers: {{correctAnswers}}/{{totalQuestions}}</b-nav-item>
  </b-nav>
</template>

<script>
export default {
  props: ["totalQuestions", "correctAnswers"]
};
</script>
