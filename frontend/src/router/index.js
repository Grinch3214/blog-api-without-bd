import { createRouter, createWebHistory } from 'vue-router';
import Posts from '@/components/Posts.vue';
import NewPost from '@/components/NewPost.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Posts,
    },
    {
      path: '/new-post',
      name: 'post',
      component: NewPost,
    },
  ],
});

export default router;
