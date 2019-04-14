export default {
  incrementIndex: (state) => {
    state.index++;
  },
  questionsFetched: (state, payload) => {
    state.questions = payload;
  },
};
