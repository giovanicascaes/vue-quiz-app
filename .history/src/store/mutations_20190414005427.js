export default {
  incrementIndex: (state) => {
    state.index++;
  },
  decrementIndex: (state) => {
    state.index--;
  },
  questionsFetched: (state, payload) => {
    state.questions = payload;
    state.answers = payload.map(_ => null);
  },
  selectAnswer: (state, { index, answerIndex }) => {
    state.answers[index] = answerIndex;
  },
};
