(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/Login/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/Login/index.tsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/Login/index.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/NavigationBar */ "./src/components/NavigationBar/index.tsx");
/* harmony import */ var _RouteInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../RouteInfo */ "./src/RouteInfo/index.ts");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.sass */ "./src/pages/Login/index.sass");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_sass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













var useDidShow = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.useDidShow;

var Login = function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    Uid: '',
    Upassword: ''
  }),
      _useState2 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      userInfo = _useState2[0],
      setUserInfo = _useState2[1];

  var login = /*#__PURE__*/function () {
    var _ref = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var Uid, Upassword, result;
      return D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Uid = userInfo.Uid, Upassword = userInfo.Upassword; //先验证手机不能为空

              if (!(Uid == '')) {
                _context.next = 4;
                break;
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
                title: '请输入账号',
                icon: 'none'
              });
              return _context.abrupt("return");

            case 4:
              if (!(Upassword == '')) {
                _context.next = 7;
                break;
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
                title: '密码不能为空',
                icon: 'none'
              });
              return _context.abrupt("return");

            case 7:
              _context.prev = 7;
              _context.next = 10;
              return Object(_RouteInfo__WEBPACK_IMPORTED_MODULE_9__[/* loginRequest */ "j"])({
                Uid: Uid,
                Upassword: Upassword
              });

            case 10:
              result = _context.sent;

              if (!(result.code === 200)) {
                _context.next = 19;
                break;
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
                title: result.mes,
                icon: 'success'
              }); //将用户信息存储到本地的storage中

              _context.next = 15;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.setStorageSync('userInfo', result.user);

            case 15:
              console.log(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getStorageSync('userInfo'));
              setTimeout(function () {
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.switchTab({
                  url: '/pages/Owner/index'
                });
              }, 1500);
              _context.next = 20;
              break;

            case 19:
              if (result.code === 400) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
                  title: result.mes,
                  icon: 'none'
                });
              } else if (result.code === 502) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
                  title: result.mes,
                  icon: 'none'
                });
              }

            case 20:
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](7);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.atMessage({
                'message': _context.t0,
                'type': 'error'
              });

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 22]]);
    }));

    return function login() {
      return _ref.apply(this, arguments);
    };
  }();

  useDidShow(function () {
    var _Taro$getCurrentInsta;

    var Uid = (_Taro$getCurrentInsta = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getCurrentInstance().router) === null || _Taro$getCurrentInsta === void 0 ? void 0 : _Taro$getCurrentInsta.params.id;
    Uid && setUserInfo(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, userInfo), {}, {
      Uid: Uid
    }));
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
    className: "Login_box",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtMessage */ "j"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      BarText: "\u767B\u5F55\u9875",
      backIcon: true
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
      className: "wrapper",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
        className: "left-top-sign",
        children: "LOGIN"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
        className: "welcome",
        children: "\u8BF7\u5148\u767B\u5F55!"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
        className: "input-content",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
          className: "input-item",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "p"], {
            className: "tit",
            children: "\u8D26\u53F7"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtInput */ "g"], {
            className: "input",
            type: "text",
            name: "Uid",
            placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7",
            onChange: function onChange(value) {
              return setUserInfo(function (a) {
                return Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, a), {}, {
                  Uid: value
                });
              });
            },
            value: userInfo.Uid
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
          className: "input-item",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "p"], {
            className: "tit",
            children: "\u5BC6\u7801"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtInput */ "g"], {
            className: "input",
            type: "password",
            name: "Upassword",
            placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
            onChange: function onChange(value) {
              return setUserInfo(function (a) {
                return Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, a), {}, {
                  Upassword: value
                });
              });
            },
            value: userInfo.Upassword
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
        className: "confirm-btn",
        onClick: login,
        children: "\u767B\u5F55"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
        className: "forget-section",
        children: "\u5FD8\u8BB0\u5BC6\u7801?"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
      className: "register-section",
      children: ["\u8FD8\u6CA1\u6709\u8D26\u53F7?", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "p"], {
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
            url: '/pages/Register/index'
          });
        },
        children: "\u9A6C\u4E0A\u6CE8\u518C"
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),

/***/ "./src/pages/Login/index.sass":
/*!************************************!*\
  !*** ./src/pages/Login/index.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Login/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/Login/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/Login/index.tsx");


var config = {"navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/Login/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/Login/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map