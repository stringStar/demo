import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default,
        "_title": "小金桔",
        "_title_default": "小金桔"
      },
      {
        "path": "/card",
        "exact": true,
        "component": require('../card.js').default,
        "_title": "小金桔",
        "_title_default": "小金桔"
      },
      {
        "path": "/loan",
        "exact": true,
        "component": require('../loan.js').default,
        "_title": "小金桔",
        "_title_default": "小金桔"
      },
      {
        "component": () => React.createElement(require('D:/worker/baomingqudao/node_modules/_umi-build-dev@1.7.0@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "小金桔",
        "_title_default": "小金桔"
      }
    ],
    "_title": "小金桔",
    "_title_default": "小金桔"
  },
  {
    "component": () => React.createElement(require('D:/worker/baomingqudao/node_modules/_umi-build-dev@1.7.0@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "小金桔",
    "_title_default": "小金桔"
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
