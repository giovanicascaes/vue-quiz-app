export default {
  incrementIndex: (state) => {
    state.index++;
  },
  decrementIndex: (state) => {
    state.index--;
  },
  questionsFetched: (state, payload) => {
    state.questions = payload;
    state.answers = payload.map(_ => ({ index: null, submitted: false }));
  },
  selectAnswer: (state, payload) => {
    state.answers[state.index].index = payload;
  },
};
