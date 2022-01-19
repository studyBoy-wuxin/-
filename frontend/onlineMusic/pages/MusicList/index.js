(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/MusicList/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/MusicList/index.tsx":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/MusicList/index.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.sass */ "./src/pages/MusicList/index.sass");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _RouteInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../RouteInfo */ "./src/RouteInfo/index.ts");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NavigationBar */ "./src/components/NavigationBar/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












var useDidShow = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.useDidShow;

var LoveMusic = function LoveMusic() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      MusicList = _useState2[0],
      setMusicList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      Type = _useState4[0],
      setType = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      IsError = _useState6[0],
      setIsError = _useState6[1];

  var onPlay = function onPlay(music) {
    var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getApp();
    app.musicInfo = music;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.switchTab({
      url: '/pages/SongDetail/index'
    });
  };

  var getLoveMusic = /*#__PURE__*/function () {
    var _ref = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var userInfo, data;
      return D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getStorageSync('userInfo');
              _context.prev = 1;
              _context.next = 4;
              return Object(_RouteInfo__WEBPACK_IMPORTED_MODULE_8__[/* findLoveMusicByUid */ "d"])({
                uid: userInfo.uid
              });

            case 4:
              data = _context.sent;
              console.log(data);
              setMusicList(data);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.atMessage({
                'message': _context.t0,
                'type': 'error'
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function getLoveMusic() {
      return _ref.apply(this, arguments);
    };
  }();

  var getMusicByName = /*#__PURE__*/function () {
    var _ref2 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(name) {
      var data;
      return D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(_RouteInfo__WEBPACK_IMPORTED_MODULE_8__[/* findMusicByName */ "f"])({
                name: name
              });

            case 3:
              data = _context2.sent;
              console.log(data);
              data.length === 0 && setIsError(true);
              setMusicList(data);
              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              setIsError(true);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.atMessage({
                'message': _context2.t0,
                'type': 'error'
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function getMusicByName(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  useDidShow(function () {
    var _Taro$getCurrentInsta;

    var type = (_Taro$getCurrentInsta = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getCurrentInstance().router) === null || _Taro$getCurrentInsta === void 0 ? void 0 : _Taro$getCurrentInsta.params.type;
    type && setType(type);
    if (type === 'LoveMusic') getLoveMusic();else if (type === 'searchMusic') {
      var _Taro$getCurrentInsta2; // 音乐查找


      var name = (_Taro$getCurrentInsta2 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getCurrentInstance().router) === null || _Taro$getCurrentInsta2 === void 0 ? void 0 : _Taro$getCurrentInsta2.params.name;
      name && getMusicByName(name);
    } else if (type === 'recent') {
      var data = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getStorageSync('recentPlay');
      setMusicList(data);
    }
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
    className: "LoveMusic_box",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      BarText: Type == 'LoveMusic' ? '收藏歌曲' : Type == 'searchMusic' ? '搜索歌曲' : Type == 'recent' ? '最近播放' : '歌曲信息',
      backIcon: true
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtMessage */ "j"], {})
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
      className: "bottom",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
        className: "bottom_header",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
          className: "iconfont icon icon-yunhang"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "p"], {
          className: "title",
          children: "\u64AD\u653E\u5168\u90E8"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "p"], {
          children: ["(\u5171", MusicList === null || MusicList === void 0 ? void 0 : MusicList.length, "\u9996)"]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
        className: "MusicInfo_box",
        children: MusicList && MusicList.length > 0 ? MusicList === null || MusicList === void 0 ? void 0 : MusicList.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
            className: "MusucItem",
            onClick: function onClick() {
              return onPlay(item);
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
              children: index + 1
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
              className: "musicInfo",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "p"], {
                children: item.name
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
                className: "a",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
                  className: "iconfont iconw icon-wusunyinzhi"
                }), item.artist]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
              className: "iconfont iconb icon-yunhang"
            })]
          }, item.mid);
        }) : Type == 'searchMusic' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
          className: "noneSong",
          children: IsError ? '搜索失败,请重试!' : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtActivityIndicator */ "c"], {
            size: 60,
            content: "\u6B63\u5728\u67E5\u627E\u4E2D..."
          })
        }) : Type == 'LoveMusic' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
          className: "noneSong",
          children: "\u6682\u65E0\u6536\u85CF\u6B4C\u66F2..."
        }) : Type == 'recent' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
          className: "noneSong",
          children: "\u6682\u65E0\u6700\u8FD1\u64AD\u653E\u8BB0\u5F55..."
        }) : ''
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (LoveMusic);

/***/ }),

/***/ "./src/pages/MusicList/index.sass":
/*!****************************************!*\
  !*** ./src/pages/MusicList/index.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/MusicList/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/MusicList/index.tsx ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/MusicList/index.tsx");


var config = {"navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/MusicList/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/MusicList/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map