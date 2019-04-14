<template>
  <b-jumbotron :header="'Question #' + currentQuestionNumber">
    <p>Question</p>
    <b-button variant="primary" href="#">Submit</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  props: ["currentQuestionNumber"]
};
</script>
