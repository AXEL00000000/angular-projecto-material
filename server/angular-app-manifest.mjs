
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-projecto-material/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-projecto-material"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23499, hash: '88f70be50560a2ba92d5098e5c95f4e4a543de31fde4d5dd85b6b71dbde1f4d3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17118, hash: 'fa2f1d40f7e326c8026c6540de4aef32e2456d2c846d055a02cb1a3edf566d15', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 279329, hash: '9d6a288b74a754281959a2f0e933f0deb0e5ca80d873b7362597244676028b1c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
