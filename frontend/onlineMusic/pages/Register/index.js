(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/Register/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/Register/index.tsx":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/Register/index.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NavigationBar */ "./src/components/NavigationBar/index.tsx");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.sass */ "./src/pages/Register/index.sass");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_sass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _RouteInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../RouteInfo */ "./src/RouteInfo/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















var Register = function Register() {
  var FormList = [{
    icon: 'icon-yonghu',
    placeholder: '用户名',
    type: 'text',
    name: 'name'
  }, {
    icon: 'icon-mima',
    placeholder: '密码',
    type: 'password',
    name: 'password'
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    name: '',
    password: '',
    sex: -1
  }),
      _useState2 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState, 2),
      UserForm = _useState2[0],
      setUserForm = _useState2[1];

  var onRegister = /*#__PURE__*/function () {
    var _ref = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var data;
      return D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(UserForm.name == '')) {
                _context.next = 4;
                break;
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
                title: '请输入名字',
                icon: 'none'
              });
              _context.next = 23;
              break;

            case 4:
              if (!(UserForm.password == '')) {
                _context.next = 8;
                break;
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
                title: '请输入密码',
                icon: 'none'
              });
              _context.next = 23;
              break;

            case 8:
              if (!(UserForm.sex == -1)) {
                _context.next = 12;
                break;
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showToast({
                title: '请选择性别',
                icon: 'none'
              });
              _context.next = 23;
              break;

            case 12:
              _context.prev = 12;
              _context.next = 15;
              return Object(_RouteInfo__WEBPACK_IMPORTED_MODULE_11__[/* register */ "k"])({
                Uname: UserForm.name,
                Upassword: UserForm.password,
                sex: UserForm.sex
              });

            case 15:
              data = _context.sent;
              console.log(data);
              if (data == '-1') _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.atMessage({
                'message': '注册失败',
                'type': 'error'
              });else {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.showModal({
                  confirmText: '确定',
                  content: "\u6CE8\u518C\u6210\u529F!\u8BF7\u7262\u8BB0\u60A8\u7684\u8D26\u53F7\u4E3A".concat(data),
                  title: '系统提示',
                  success: function success() {
                    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.redirectTo({
                      url: "/pages/Login/index?id=".concat(data)
                    });
                  }
                });
              }
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](12);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.atMessage({
                "message": _context.t0,
                'type': 'error'
              });

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[12, 20]]);
    }));

    return function onRegister() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
    className: "Register_box",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      BarText: "\u6CE8\u518C\u9875",
      backIcon: true
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtMessage */ "j"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
      className: "top_logo",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
        className: "iconfont icon icon-QX-kuwoyinle"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
        children: "\u65E0\u5FC3\u97F3\u4E50"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
      className: "form_box",
      children: [FormList.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
          className: "form_item",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
            className: "iconfont icon2 ".concat(item.icon)
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "d"], {
            type: item.type,
            placeholder: item.placeholder,
            onInput: function onInput(item2) {
              return setUserForm(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, UserForm), {}, Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, item.name, item2.detail.value)));
            }
          })]
        });
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
        className: "form_item",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
          className: "iconfont icon2 icon-xingbie"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Picker */ "j"], {
          className: "picker",
          mode: "selector",
          range: ['女', '男'],
          onChange: function onChange(value) {
            return setUserForm(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, UserForm), {}, {
              sex: Number(value.detail.value)
            }));
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtList */ "h"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtListItem */ "i"], {
              customStyle: {
                color: UserForm.sex == -1 ? '#b8b8b8' : 'black'
              },
              title: UserForm.sex === -1 ? '性别' : UserForm.sex === 0 ? '女' : '男'
            })
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
        className: "btn_box",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Button */ "a"], {
          className: "register_btn",
          onClick: onRegister,
          children: "\u6CE8\u518C"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Button */ "a"], {
          className: "chongzhi",
          onClick: function onClick() {
            return setUserForm({
              name: '',
              password: '',
              sex: -1
            });
          },
          children: "\u91CD\u7F6E"
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ }),

/***/ "./src/pages/Register/index.sass":
/*!***************************************!*\
  !*** ./src/pages/Register/index.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Register/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/Register/index.tsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/Register/index.tsx");


var config = {"navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/Register/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/Register/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map