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
        "_title": "中广核检测欧标NDT无损检测2019课程报名",
        "_title_default": "中广核检测欧标NDT无损检测2019课程报名"
      },
      {
        "path": "/success",
        "exact": true,
        "component": require('../success.js').default,
        "_title": "中广核检测欧标NDT无损检测2019课程报名",
        "_title_default": "中广核检测欧标NDT无损检测2019课程报名"
      },
      {
        "component": () => React.createElement(require('/Users/app/erxuanUi/demo/node_modules/_umi-build-dev@1.5.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "中广核检测欧标NDT无损检测2019课程报名",
        "_title_default": "中广核检测欧标NDT无损检测2019课程报名"
      }
    ],
    "_title": "中广核检测欧标NDT无损检测2019课程报名",
    "_title_default": "中广核检测欧标NDT无损检测2019课程报名"
  },
  {
    "component": () => React.createElement(require('/Users/app/erxuanUi/demo/node_modules/_umi-build-dev@1.5.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "中广核检测欧标NDT无损检测2019课程报名",
    "_title_default": "中广核检测欧标NDT无损检测2019课程报名"
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
