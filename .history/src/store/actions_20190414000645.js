export default {
  incrementIndex: ({ commit }) => {
    commit('incrementIndex');
  },
  questionsFetched: ({ commit }, payload) => {
    commit('questionsFetched', payload);
  },
};
