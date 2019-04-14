import _ from 'lodash';

export default {
  incrementIndex: (state) => {
    state.index++;
  },
  decrementIndex: (state) => {
    state.index--;
  },
  questionsFetched: (state, payload) => {
    state.questions = payload;
    state.questions.forEach((question) => {
      question.shuffledAnswers = _.shuffle([
        ...question.incorrect_answers,
        question.correct_answer,
      ]);
      question.correctAnswerIndex = question.shuffledAnswers.indexOf(question.correct_answer);
    });
    state.answers = payload.map(_ => ({ index: null, submitted: false }));
  },
  selectAnswer: (state, payload) => {
    state.answers[state.index].index = payload;
  },
  submitAnswer: (state) => {
    state.answers[state.index].submitted = true;
  },
};
