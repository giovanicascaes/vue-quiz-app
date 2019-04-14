<template>
  <b-jumbotron :lead="'Question' + currentQuestionNumber">
    <p>For more information visit website</p>
    <b-button variant="primary" href="#">Submit</b-button>
  </b-jumbotron>
</template>

<script>
export default {
    props: ['currentQuestionNumber']
}
</script>
