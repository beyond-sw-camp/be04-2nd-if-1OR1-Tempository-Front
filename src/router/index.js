import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/Home.vue';
import SignIn from '@/views/signin/SignIn.vue';
import SignUp from '@/views/signup/SignUp.vue';
import MyPage from '@/views/mypage/MyPage.vue';
import ProjectInfo from '@/views/projectView/ProjectInfo.vue';
import ProjectMemberInfo from '@/views/projectView/ProjectMemberInfo.vue';
import ManageProject from '@/views/projectMember/ProjectMember.vue';
import ProjectWBS from '@/components/ProjectWBS.vue'
import ProjectIssueBoard from '@/components/ProjectIssueBoard.vue'
import ProjectIssueForm from '@/components/ProjectIssueForm.vue'
import ProjectIssueView from '@/components/ProjectIssueView.vue'
import ProjectTableListView from '@/components/ProjectTableListView.vue'
import ProjectTableDetailView from '@/components/ProjectTableDetailView.vue'
import ProjectTableAddView from '@/components/ProjectTableAddView.vue'
import ProjectList from '@/views/projectList/ProjectList.vue'
import Project from '@/views/project/Project.vue'
import EditMyInfo from '@/views/mypage/EditMyInfo.vue';
import AddProject from '@/views/projectList/AddProject.vue';

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
        path: '/who-am-i',
        component: MyPage
      },      {
        path: '/add-project',
        component: AddProject
      },

      {
        path: '/manageProject/:id',
        component: ManageProject,
        props: true,
        children:[
          {
            path: '/projectInfo/:id',
            component: ProjectInfo,
            props: true
        },      
        {
          path: '/projectMemberInfo/:id',
          component: ProjectMemberInfo,
          props: true
          
        }
        ]
      },

      {
        path: '/project/:id',
        component: Project,
        props: true
      },
      {
        path: '/projectList',
        component: ProjectList
      },

      {
        path: '/table/:projectId',
        name: 'TableListView',
        component: ProjectTableListView
      },
      {
        path: '/table/:projectId/:tableNo',
        name: 'TableDetailView',
        component: ProjectTableDetailView
      },
      {
        path: '/table/:projectId/new',
        name: 'TableAddView',
        component: ProjectTableAddView
      },
      {
          path: '/wbs/:id',
          name: 'WBS',
          component: ProjectWBS

      },
      { 
        path: '/issue/:projectId', 
        name: 'IssueBoard', 
        component: ProjectIssueBoard 
      },
      { 
        path: '/issue/:projectId/new', 
        name: 'IssueNew', 
        component: ProjectIssueForm 
      },
      { 
        path: '/issue/:projectId/:issueNo/edit', 
        name: 'IssueEdit', 
        component: ProjectIssueForm, 
        props: true 
      },
      { 
        path: '/issue/:projectId/:issueNo', 
        name: 'IssueView', 
        component: ProjectIssueView
      },
      {
          path: '/testcase/:id',
          name: 'Testcase',
          component: () => import('@/components/ProjectTestcase.vue')
      },

      {
        path: '/requirement/:id',
        name: 'Requirement',
        component: () => import('@/components/ProjectRequirement.vue')
      },
      {
        path: '/edit-my-info',
        name: 'EditMyInfo',
        component: EditMyInfo
      }
    ]
});

export default router;