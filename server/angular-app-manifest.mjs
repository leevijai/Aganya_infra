
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/aganyainfra/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/aganyainfra/home",
    "route": "/aganyainfra"
  },
  {
    "renderMode": 2,
    "route": "/aganyainfra/home"
  },
  {
    "renderMode": 2,
    "route": "/aganyainfra/about"
  },
  {
    "renderMode": 2,
    "route": "/aganyainfra/projects"
  },
  {
    "renderMode": 2,
    "route": "/aganyainfra/services"
  },
  {
    "renderMode": 2,
    "route": "/aganyainfra/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/aganyainfra/home",
    "route": "/aganyainfra/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9381, hash: '29edc79ec9221716eafd0f0d38a6a19c3b53aee10b982289b7b5054d26b1c227', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1073, hash: 'da2213eaeac0436a5e4e28c742690c1b226147c2d0af6957950bf05af9a66a2b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 39234, hash: '005974fc4572681763b00890d6a2600861d99df865cbce9c821e2082194c2953', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 34436, hash: '48defbf5682e961e43cc1b32747a267c5276b2f35e08e48aeb3b4223976600f3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 35117, hash: 'f1bca7f3cabe67803d930ff09d0b0de3f6fd6e98d4ee6ab45c61afb59bd7e155', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 30289, hash: 'bea1f6c940f4dce6308f5cc18f915755ea4d8cbaff6a9eeb69812a372b787158', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 30416, hash: '848a93b5a3435db6cea61dbca016bb20c855c9a69f44ed345b0317ec6c6e6144', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'styles-5BLFW4TM.css': {size: 312904, hash: 'BXz+3gB14ME', text: () => import('./assets-chunks/styles-5BLFW4TM_css.mjs').then(m => m.default)}
  },
};
