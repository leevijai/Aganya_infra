
export default {
  basePath: 'https://leevijai.github.io/Aganya_infra',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
