import { createRouter, createWebHistory } from 'vue-router';
import Posts from '@/components/Posts.vue';
import NewPost from '@/pages/NewPost.vue';
import EditPost from '@/pages/EditPost.vue';

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
      name: 'new-post',
      component: NewPost,
    },
    {
      path: '/edit-post/:id',
      name: 'edit-post',
      component: EditPost,
    },
  ],
});

export default router;
