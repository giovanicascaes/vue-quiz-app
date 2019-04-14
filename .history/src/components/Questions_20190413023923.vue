<template>
  <b-jumbotron :lead="'Question #' + (currentQuestionIndex + 1)">
    <p>{{questions[currentQuestionIndex].question}}</p>
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
      currentQuestionIndex: 0
    };
  }
};
</script>
