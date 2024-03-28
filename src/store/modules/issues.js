import axios from 'axios';

const state = {
  issues: []
};

const mutations = {
  SET_ISSUES(state, issues) {
    state.issues = issues;
  },
  ADD_ISSUE(state, issue) {
    state.issues.push(issue);
  },
  UPDATE_ISSUE(state, updatedIssue) {
    const index = state.issues.findIndex(issue => issue.id === updatedIssue.id);
    if (index !== -1) {
      state.issues.splice(index, 1, updatedIssue);
    }
  },
  DELETE_ISSUE(state, issueToDelete) {
    state.issues = state.issues.filter(issue => issue.id !== issueToDelete.id);
  }
};

const actions = {
  async fetchIssues({ commit }) {
    try {
      const response = await axios.get('/issue');
      commit('SET_ISSUES', response.data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  },
  async addIssue({ commit }, issue) {
    try {
      const response = await axios.post('/issue', issue);
      commit('ADD_ISSUE', response.data);
    } catch (error) {
      console.error('Error adding issue:', error);
    }
  },
  async updateIssue({ commit }, updatedIssue) {
    try {
      await axios.put(`/issue/${updatedIssue.id}`, updatedIssue);
      commit('UPDATE_ISSUE', updatedIssue);
    } catch (error) {
      console.error('Error updating issue:', error);
    }
  },
  async deleteIssue({ commit }, issueToDelete) {
    try {
      await axios.delete(`/issue/${issueToDelete.id}`);
      commit('DELETE_ISSUE', issueToDelete);
    } catch (error) {
      console.error('Error deleting issue:', error);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};