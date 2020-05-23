
const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/profiles',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('components/profile/Index.vue') },
    ],
  },
  {
    path: '/profiles/new',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('components/profile/Create.vue') },
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
