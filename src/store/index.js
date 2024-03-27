import { createStore } from 'vuex';

export default createStore({
  state: {
    issues: [
      { id: 1, title: 'Issue 1', status: 'todo', description: 'Description for Issue 1' },
      { id: 2, title: 'Issue 2', status: 'inprogress', description: 'Description for Issue 2' },
      { id: 3, title: 'Issue 3', status: 'done', description: 'Description for Issue 3' }
    ]
  },
  mutations: {
    updateIssue(state, updatedIssue) {
      const index = state.issues.findIndex(issue => issue.id === updatedIssue.id);
      if (index !== -1) {
        state.issues.splice(index, 1, updatedIssue);
      }
    },
    addIssue(state, newIssue) {
      const id = Date.now();
      state.issues.push({ ...newIssue, id });
    },
    deleteIssue(state, issueToDelete) {
      state.issues = state.issues.filter(issue => issue.id !== issueToDelete.id);
    }
  },
  actions: {
    updateIssue({ commit }, issue) {
      commit('updateIssue', issue);
    },
    addIssue({ commit }, issue) {
      commit('addIssue', issue);
    },
    deleteIssue({ commit }, issue) {
      commit('deleteIssue', issue);
    }
  }
});