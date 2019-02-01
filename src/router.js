import React from 'react'
import PropTypes from 'prop-types'
import { Switch,Router, Route } from 'dva/router'
import dynamic from 'dva/dynamic'

const Routers = function ({ history, app }) {
  const route = [
    {
      models: [
        'error',
        'example',
        'global',
      ],
      component: () => import('./App'),
    }
  ]
  const routes = route.map((v)=>{
    let obj = Object.assign({},v);
    if(v.models && v.models.length !== 0){
      const models = v.models.map((val)=>{
        return import("./models/"+val)
      });
      obj.models = () => models;
    }
    return obj;
  })
  return (
     <Router history={history}>
        <Switch>
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
        </Switch>
      </Router>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers

// {
//   path: '/login',
//     models: ['example', 'global'],
//       component: () => import('./routes/login.js'),
//     },
// {
//   path: '/MobileCom',
//     models: [],
//       component: () => import('./routes/MobileCom'),
//     },
// {
//   path: '/exception',
//     component: () => import('./routes/Exception/Index.js'),
//     },
// {
//   path: '/exception/401',
//     component: () => import('./routes/Exception/403'),
//     },
// {
//   path: '/exception/403',
//     component: () => import('./routes/Exception/403'),
//     },
// {
//   path: '/exception/404',
//     component: () => import('./routes/Exception/404'),
//     },
// {
//   path: '/exception/500',
//     component: () => import('./routes/Exception/500'),
//     },
// {
//   path: '/exception/trigger',
//     models: ['global'],
//       component: () => import('./routes/Exception/triggerException'),
//     }
