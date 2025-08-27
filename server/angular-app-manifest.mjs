
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://leevijai.github.io/Aganya_infra/',
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
    'index.csr.html': {size: 9408, hash: '5dd31f7d0d7b5421698d5667d14766efd9dbde9210a4f140944d85829e816c07', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1100, hash: 'b0ab69a20a9a26d252ce0cd0b688ee69e404abd274816a61dcadf43ac9a301b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 34895, hash: '25e83c7dcf82924c098450b136f14a30f2fab2a805aa0bf539eb8e1f76c025bb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 30748, hash: '36cb7acd49873b8752c9c22cf60e2c58f2a8ccb937c3a485391326c738930abe', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 35576, hash: '07ca942afab3a740a962e81f72d4ba910f6b5b98f53ee359415aafadfd77ecbc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 30875, hash: '5657b517b9597777c5733b92e6b24d1f5058d9de1aa78b4b758db943f25aec99', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 39693, hash: 'cc95ce0820bb095030c8620fa9717faec9a0ade8d9011aecfb2980c811a65850', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5BLFW4TM.css': {size: 312904, hash: 'BXz+3gB14ME', text: () => import('./assets-chunks/styles-5BLFW4TM_css.mjs').then(m => m.default)}
  },
};
