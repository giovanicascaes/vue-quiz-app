export default {
  incrementIndex: ({ commit }) => {
    commit('incrementIndex');
  },
  decrementIndex: ({ commit }) => {
    commit('decrementIndex');
  },
  questionsFetched: ({ commit }, payload) => {
    commit('questionsFetched', payload);
  },
  selectAnswer: ({ commit }, payload) => {
    commit('selectAnswer', payload);
  },
  submitAnswer: ({ commit }) => {
    commit('submitAnswer');
  },
};
