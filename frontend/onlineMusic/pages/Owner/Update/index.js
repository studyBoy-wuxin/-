(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/Owner/Update/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/Owner/Update/index.tsx":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/Owner/Update/index.tsx ***!
  \**************************************************************************/
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
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/NavigationBar */ "./src/components/NavigationBar/index.tsx");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.sass */ "./src/pages/Owner/Update/index.sass");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_sass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _RouteInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../RouteInfo */ "./src/RouteInfo/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














var UpdateComponent = function UpdateComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    Uid: '',
    avater_url: __webpack_require__(/*! ../../../accept/images/p1.jpg */ "./src/accept/images/p1.jpg"),
    uname: '无心同学',
    sex: 1
  }),
      _useState2 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      UserInfo = _useState2[0],
      setUserInfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState3, 2),
      ActionSheetOpen = _useState4[0],
      setActionSheetOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState5, 2),
      ModalOpen = _useState6[0],
      setModalOpen = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState8 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState7, 2),
      name = _useState8[0],
      setName = _useState8[1];

  var update = /*#__PURE__*/function () {
    var _ref = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(user) {
      var data;
      return D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_RouteInfo__WEBPACK_IMPORTED_MODULE_10__[/* updateUser */ "m"])(user);

            case 3:
              data = _context.sent;
              console.log(data);
              if (data > 0) _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
                title: '操作成功',
                icon: 'none'
              });else _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
                title: '操作失败',
                icon: 'none'
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.atMessage({
                'message': _context.t0,
                'type': 'error'
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function update(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var changeAvater = function changeAvater() {
    var user = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('userInfo');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.chooseMessageFile({
      count: 1,
      type: 'image',
      success: function success(res) {
        setUserInfo(function (a) {
          return Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, a), {}, {
            avater_url: res.tempFiles[0].path
          });
        }); // 再把资源上传到服务器

        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.uploadFile({
          url: 'http://localhost:8888/OnlineMusic/User/fileUpload',
          filePath: res.tempFiles[0].path,
          name: 'file',
          formData: {
            Uid: user.uid,
            fileName: res.tempFiles[0].name
          },
          success: function success(resp) {
            var data = JSON.parse(resp.data);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
              title: data.mes,
              icon: 'none'
            });

            if (data.code == 200) {
              setUserInfo(function (value) {
                return Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, value), {}, {
                  avater_url: data.path
                });
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorage({
                key: 'userInfo',
                data: Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, user), {}, {
                  avater_url: data.path
                })
              });
            }
          }
        });
      }
    });
  };

  var ListData = [{
    name: '头像',
    value: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtAvatar */ "d"], {
      className: "avater",
      image: UserInfo.avater_url
    }),
    clickEvent: changeAvater
  }, {
    name: '昵称',
    value: UserInfo.uname,
    clickEvent: function clickEvent() {
      setName(UserInfo.uname);
      setModalOpen(true);
    }
  }, {
    name: '性别',
    value: UserInfo.sex === 0 ? '女' : '男',
    clickEvent: function clickEvent() {
      return setActionSheetOpen(true);
    }
  }];

  var changeSex = function changeSex(sex) {
    setActionSheetOpen(false);
    setUserInfo(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, UserInfo), {}, {
      sex: sex
    }));
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
      title: '操作成功',
      icon: 'success'
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var user = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('userInfo');
    user && setUserInfo({
      Uid: user.uid,
      avater_url: user.avater_url,
      uname: user.uname,
      sex: user.sex
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
    className: "update_box",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      backIcon: true,
      BarText: "\u4E2A\u4EBA\u8D44\u6599",
      BackgroundColor: "white",
      fontColor: "black"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
      className: "List_box",
      children: ListData.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
          className: "ListItem",
          onClick: item.clickEvent,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "p"], {
            children: item.name
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "r"], {
            children: [item.value, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtIcon */ "f"], {
              className: "icon",
              value: "chevron-right",
              size: 28
            })]
          })]
        });
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtModal */ "k"], {
      isOpened: ModalOpen,
      onClose: function onClose() {
        return setModalOpen(false);
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtModalHeader */ "n"], {
        children: "\u4FEE\u6539\u6635\u79F0"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtModalContent */ "m"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtInput */ "g"], {
          name: "name",
          value: name,
          onChange: function onChange(a) {
            return setName(a);
          },
          title: "\u6635\u79F0",
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u6635\u79F0"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtModalAction */ "l"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
          onClick: function onClick() {
            return setModalOpen(false);
          },
          children: "\u53D6\u6D88"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
          onClick: function onClick() {
            setModalOpen(false);
            setUserInfo(function (value) {
              return Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, value), {}, {
                uname: name
              });
            });
            update({
              Uid: UserInfo.Uid,
              Uname: name
            });
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorage({
              key: 'userInfo',
              data: Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('userInfo')), {}, {
                uname: name
              })
            });
          },
          children: "\u786E\u5B9A"
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtActionSheet */ "a"], {
      isOpened: ActionSheetOpen,
      cancelText: "\u53D6\u6D88",
      onClose: function onClose() {
        return setActionSheetOpen(false);
      },
      onCancel: function onCancel() {
        return setActionSheetOpen(false);
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtActionSheetItem */ "b"], {
        onClick: function onClick() {
          changeSex(1);
          update({
            Uid: UserInfo.Uid,
            sex: 1
          });
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorage({
            key: 'userInfo',
            data: Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('userInfo')), {}, {
              sex: 1
            })
          });
        },
        children: "\u7537"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtActionSheetItem */ "b"], {
        onClick: function onClick() {
          changeSex(0);
          update({
            Uid: UserInfo.Uid,
            sex: 0
          });
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorage({
            key: 'userInfo',
            data: Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('userInfo')), {}, {
              sex: 0
            })
          });
        },
        children: "\u5973"
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (UpdateComponent);

/***/ }),

/***/ "./src/pages/Owner/Update/index.sass":
/*!*******************************************!*\
  !*** ./src/pages/Owner/Update/index.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Owner/Update/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/Owner/Update/index.tsx ***!
  \******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/Owner/Update/index.tsx");


var config = {"navigationBarTextStyle":"black","navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/Owner/Update/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/Owner/Update/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map