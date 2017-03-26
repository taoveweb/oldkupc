import App from './components/App';
export default {
  /*component: App,*/
  childRoutes: [
    {
      //path: '/huhabuz/springactivity',
      component:App,
      /*getComponent(location, cb) {
       require.ensure([], (require) => {
       cb(null, require('./containers/HomePage').default);
       }, 'HomePage'); // 產生 Home.chunk.js

       }*/
      childRoutes:[
        {
          path: '/',//首页
          getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('./containers/Index').default);
            }, 'Index'); // 產生 Home.chunk.js
          }
        },
        {
          path: '/Magazines',//杂志们
          getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('./containers/Magazines').default);
            }, 'magazines'); // 產生 Home.chunk.js
          }
        },
        {
          path: '/notification',//通知
          getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('./containers/Notification').default);
            }, 'notification'); // 產生 Home.chunk.js
          }
        },
        {
          path: '/reading',//阅读
          getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('./containers/Reading').default);
            }, 'reading'); // 產生 Home.chunk.js
          }
        },
        {
          path: '/wechat',//小程序
          getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('./containers/Wechat').default);
            }, 'wechat'); // 產生 Home.chunk.js
          }
        },
        {
          path: '/terms',//小程序
          getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('./containers/Terms').default);
            }, 'terms'); // 產生 Home.chunk.js
          }
        },
        {
          path: '/privacy',//隐私
          getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('./containers/privacy').default);
            }, 'privacy'); // 產生 Home.chunk.js
          }
        },
        {
          path: '/copyright',//版权
          getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('./containers/Copyright').default);
            }, 'copyright'); // 產生 Home.chunk.js
          }
        },
        {
          path: '/about',//关于
          getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('./containers/About').default);
            }, 'About'); // 產生 Home.chunk.js
          }
        },
        {
          path: '*',
          getComponent(location, cb) {
            require.ensure([], (require) => {
              cb(null, require('./containers/NotFoundPage').default);
            }, 'NotFoundPage'); // 產生 Home.chunk.js
          }
        }
      ]
    },
  ]
};
