import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/main/SignIn.vue';
import SignUp from '@/views/main/SignUp.vue';


const router = createRouter({
  history: createWebHistory(),
    routes: [
        {   
          path: '/signin', 
          component: SignIn 
        },
        { 
          path: '/signup', 
          component: SignUp 
        }
    ]
});

export default router;