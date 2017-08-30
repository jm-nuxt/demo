require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(3);




var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var host = process.env.HOST || '192.168.102.114';
var port = process.env.PORT || 3000;

app.set('port', port);
// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */]);

// Import and Set Nuxt.js options
var config = __webpack_require__(5);
config.dev = !("production" === 'production');

// TODO remove
process.on('unhandledRejection', function (reason, p) {
  console.log(p);
  console.log('Unhandled Rejection:', reason.stack);
  process.exit(1);
});

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__(4);




var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Add USERS Routes
router.use(__WEBPACK_IMPORTED_MODULE_1__users__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Mock Users
var users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }];

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users);
});

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  var id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var address = __webpack_require__(6);

module.exports = {
  // 设置缓存
  // 默认
  // cache: {
  //   max: 1000,       // 组件缓存数
  //   maxAge: 900000   // 15分钟
  // }
  cache: true,
  transition: 'page',
  /*
   ** Headers of the page
   */
  head: {
    title: '聚贸云智库---工业全产业链跨境专家平台',
    meta: [{
      charset: 'utf-8'
    }, {
      hid: 'keyword',
      name: 'keyword',
      content: '聚贸云智库,云智库,工业全产业链跨境专家平台'
    }, {
      hid: 'description',
      name: 'description',
      content: '聚贸云智库是聚贸旗下工业全产业链跨境专家平台，云智库汇聚了全球各行各业领域的顶尖专家和精英人士，为用户提供咨询、反馈信息、进行诊断、预测未来。'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  router: {
    middleware: 'check-login'
  },

  modules: [['@nuxtjs/proxy']],
  proxy: {
    '/webapi/v2': {
      target: address.SERVER_ADDRESS,
      ws: false
    },
    '/sso': {
      target: address.SERVER_ADDRESS,
      ws: false
    }
  },

  /*
   ** Global CSS
   */
  css: ['~/node_modules/element-ui/lib/theme-default/index.css', '~/assets/css/main.css'],
  /*
   ** Add axios globally
   */
  plugins: ['~plugins/element-ui', '~plugins/filter', '~plugins/directive', '~plugins/checkLogin'],

  build: {
    filenames: {
      css: 'styles.[chunkhash].css'
    },
    extractCSS: true,
    vendor: ['axios', 'element-ui'],
    babel: {
      plugins: [['component', [{
        libraryName: 'element-ui',
        styleLibraryName: 'theme-default'
      }]]]
    },
    publicPath: address.CDN_ADDRESS
  },
  /*
  ** Run ESLINT on save
  */
  extend: function extend(config, ctx) {
    if (ctx.isClient) {
      // config.module.rules.push({
      //   enforce: 'pre',
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   exclude: /(node_modules)/
      // })
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var envs = {
  dev: {
    IMG_ADDRESS: 'http://image.jm.com',
    SERVER_ADDRESS: 'http://192.168.102.191:8099'
  },

  test: {
    IMG_ADDRESS: 'http://image.jm.com',
    SERVER_ADDRESS: 'http://webapi.jtt.com',
    USERCENTER_ADDRESS: 'http://test-uc3.dev.com',
    CENTER_ADDRESS: 'http://center.jtt.com',
    CDN_ADDRESS: 'http://127.0.0.1:3000/_nuxt/',
    NODE_SERVER: 'http://127.0.0.1',
    NODE_PORT: 3000
  },

  production: {
    IMG_ADDRESS: 'http://img.jumore.com',
    SERVER_ADDRESS: 'http://www.jmexpert.com',
    USERCENTER_ADDRESS: 'http://passport.jumore.com/cas/',
    CENTER_ADDRESS: 'http://center.jmexpert.com',
    CDN_ADDRESS: 'http://192.168.102.114:3000/_nuxt/'
    // CDN_ADDRESS: 'http://static.jmexpert.com/static/'
  }
};

var env = 'production';
module.exports = envs[env];

/***/ })
/******/ ]);
//# sourceMappingURL=main.map