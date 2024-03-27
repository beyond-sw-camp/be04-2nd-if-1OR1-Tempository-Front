import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/Home.vue';
import SignIn from '@/views/signin/SignIn.vue';
import SignUp from '@/views/signup/SignUp.vue';
import ProjectInfo from '@/views/projectView/ProjectInfo.vue';
import ProjectList from '@/views/projectList/ProjectList.vue'
import ProjectMemberInfo from '@/views/projectView/ProjectMemberInfo.vue';
import ProjectWBS from '@/components/ProjectWBS.vue'
import ProjectIssueBoard from '@/components/ProjectIssueBoard.vue'
import ProjectIssueForm from '@/components/ProjectIssueForm.vue'
import ProjectIssueView from '@/components/ProjectIssueView.vue'
import ProjectDefinitionOfTable from '@/components/ProjectDefinitionOfTable.vue'



const router = createRouter({
  history: createWebHistory(),
    routes: [
      { 
        path: '/',
        component: Home
      },
      {   
        path: '/signin', 
        component: SignIn 
      },
      { 
        path: '/signup', 
        component: SignUp 
      },
      {
        path: '/projectMemberInfo',
        component: ProjectMemberInfo
        
      },
      {
          path: '/projectInfo',
          component: ProjectInfo

      },
      {
        path: '/projectList',
        component: ProjectList
      },
      
      {
          path: '/wbs',
          name: 'WBS',
          component: ProjectWBS

      },
      {
          path: '/definitionoftable',
          name: 'DefinitionOfTable',
          component: ProjectDefinitionOfTable
      },
      {
          path: '/issue',
          name: 'IssueBoard',
          component: ProjectIssueBoard
      },
      {
          path: '/issue/new',
          name: 'IssueNew',
          component: ProjectIssueForm
      },
      {
          path: '/issue/:id',
          name: 'IssueEdit',
          component: ProjectIssueForm,
          props: true
      },
      {
          path: '/issue/:id/view',
          name: 'IssueView',
          component: ProjectIssueView,
          props: true
      }
    ]
});

export default router;