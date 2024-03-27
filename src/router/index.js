import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/Home.vue';
import SignIn from '@/views/signin/SignIn.vue';
import SignUp from '@/views/signup/SignUp.vue';
import ProjectInfo from '@/views/projectView/ProjectInfo.vue';
import ProjectMemberInfo from '@/views/projectView/ProjectMemberInfo.vue';



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
        path: '/ProjectMemberInfo',
        component: ProjectMemberInfo
        
      },
      {
          path: '/ProjectInfo',
          component: ProjectInfo

      }
    ]
});

export default router;