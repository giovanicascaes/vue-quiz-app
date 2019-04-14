<template>
  <b-jumbotron :lead="'Question #' + currentQuestionNumber">
    <p>Question</p>
    <b-list-group>
      <b-list-group-item button>Cras justo odio</b-list-group-item>
    </b-list-group>
    <b-button variant="primary" href="#">Submit</b-button>
    <b-button variant="success" href="#">Next</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  props: ["currentQuestionNumber", "questions"],
  data() {
    return {
      currentQuestionNumber
    }
  }
};
</script>
