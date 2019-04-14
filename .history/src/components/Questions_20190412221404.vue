<template>
  <b-jumbotron :lead="'Question #' + currentQuestionNumber">
    <p>Question</p>
    <b-list-group>
    <b-list-group-item>Cras justo odio</b-list-group-item>
    <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item>Morbi leo risus</b-list-group-item>
    <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
    <b-list-group-item>Vestibulum at eros</b-list-group-item>
    </b-list-group>
    <b-button variant="primary" href="#">Submit</b-button>
    <b-button variant="success" href="#">Next</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  props: ["currentQuestionNumber"]
};
</script>
