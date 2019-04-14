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
  selectAnswer: (state, payload) => {
    state.answers[state.index] = payload;
  },
};
