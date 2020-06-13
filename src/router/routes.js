
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('components/VueMetamask.vue'),
    children: [
      { path: '', component: () => import('components/VueMetamask.vue') },
    ],
  },
  {
    path: '/',
    name: 'home',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), meta: { requireAuth: true } },
    ],
  },
  {
    path: '/profiles',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('components/profile/Index.vue'), meta: { requireAuth: true } },
    ],
  },
  {
    path: '/profiles/new',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('components/profile/Create.vue'), meta: { requireAuth: true } },
    ],
  },
  {
    path: '/profiles/:id',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('components/profile/Show.vue'), meta: { requireAuth: true } },
    ],
  },
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Test.vue') },
    ],
  },
  {
    path: '/play',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Play.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
