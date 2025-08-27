
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Aganya_infra/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Aganya_infra/home",
    "route": "/Aganya_infra"
  },
  {
    "renderMode": 2,
    "route": "/Aganya_infra/home"
  },
  {
    "renderMode": 2,
    "route": "/Aganya_infra/about"
  },
  {
    "renderMode": 2,
    "route": "/Aganya_infra/projects"
  },
  {
    "renderMode": 2,
    "route": "/Aganya_infra/services"
  },
  {
    "renderMode": 2,
    "route": "/Aganya_infra/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Aganya_infra/home",
    "route": "/Aganya_infra/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9382, hash: '00cafba4db441b3db004010a3553040786bed740aaf4a15189a54f7af409c20c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: 'f56a7828e23bd062186096375f5a394ed2c02c028f5cee53181b286e7ed5dc79', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 30306, hash: '7fab34877d996dc02aa156caea2ce3fa98077060a326b1b6b7e15f25fe66340b', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 34453, hash: '2aa695e4a7e73c3a30c745160baa21e4e123e8113ccfea2bd3b43c83385e9d27', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 39251, hash: '76ed6bea0cdd0f6108ffb7f8fe16563e18974bfc1aeabdc443ba3a25a013a69f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 35134, hash: '6641f1368567be0ba15463de74b0e2dc1039e8286ee0c59d095526c89e2b5ae8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 30433, hash: '6ae40668690c8deb8f50926fdf87a8b18046d66b7891988d6fecc79f2b63525f', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'styles-5BLFW4TM.css': {size: 312904, hash: 'BXz+3gB14ME', text: () => import('./assets-chunks/styles-5BLFW4TM_css.mjs').then(m => m.default)}
  },
};
