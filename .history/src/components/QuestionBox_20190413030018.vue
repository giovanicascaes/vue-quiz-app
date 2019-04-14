<template>
  <b-jumbotron :lead="'Question #' + (index + 1)">
    <p>{{question}}</p>
    <b-list-group>
      <b-list-group-item button>K</b-list-group-item>
    </b-list-group>
    <b-button variant="primary" href="#">Submit</b-button>
    <b-button variant="success" href="#">Next</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  props: ["index", "questions"],
  data() {
    return {};
  }
};
</script>
