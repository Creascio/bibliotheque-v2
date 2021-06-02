const routes = [
  {
    path: '/', component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue') },
      { path: ':courseName', component: () => import('src/pages/Course.vue'), props: true },
      { path: ':courseName/:chapterName', component: () => import('src/pages/Chapter.vue'), props: true }
    ]
  },
  { path: '*',component: () => import('pages/Error404.vue') }
]

export default routes
