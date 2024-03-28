import { createStore } from 'vuex';
import issuesModule from './modules/issues.js';

export default createStore({
  modules: {
    issues: issuesModule
  }
});