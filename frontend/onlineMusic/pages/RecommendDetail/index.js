(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/RecommendDetail/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/RecommendDetail/index.tsx":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/RecommendDetail/index.tsx ***!
  \*****************************************************************************/
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
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.sass */ "./src/pages/RecommendDetail/index.sass");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _RouteInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../RouteInfo */ "./src/RouteInfo/index.ts");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NavigationBar */ "./src/components/NavigationBar/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













var RecommendDetail = function RecommendDetail() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      MusicList = _useState2[0],
      setMusicList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    rid: '',
    name: '',
    author: '',
    img_url: '',
    info: '',
    listencnt: 1
  }),
      _useState4 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      RecommendSong = _useState4[0],
      setRecommendSong = _useState4[1];

  var getMusicByRid = /*#__PURE__*/function () {
    var _ref = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(rid) {
      var data;
      return D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_RouteInfo__WEBPACK_IMPORTED_MODULE_8__[/* findMusicByrid */ "g"])({
                rid: rid
              });

            case 3:
              data = _context.sent;
              setMusicList(data);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.atMessage({
                'message': _context.t0,
                'type': 'error'
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function getMusicByRid(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var onPlay = function onPlay(music) {
    var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getApp();
    app.musicInfo = music;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.switchTab({
      url: '/pages/SongDetail/index'
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var _Taro$getCurrentInsta, _Taro$getCurrentInsta2;

    var rid = (_Taro$getCurrentInsta = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getCurrentInstance().router) === null || _Taro$getCurrentInsta === void 0 ? void 0 : _Taro$getCurrentInsta.params.rid;
    var recommend = (_Taro$getCurrentInsta2 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getCurrentInstance().router) === null || _Taro$getCurrentInsta2 === void 0 ? void 0 : _Taro$getCurrentInsta2.params.recommend;
    var a = JSON.parse(recommend);
    recommend && setRecommendSong(a);
    rid && getMusicByRid(rid);
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
    className: "RecommendDetail_box",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      BarText: RecommendSong.name == '' ? '歌单信息' : RecommendSong.author + '的歌单',
      backIcon: true
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtMessage */ "j"], {}), RecommendSong && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
      className: "top",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "c"], {
        src: RecommendSong.img_url,
        className: "a",
        mode: "center"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
        className: "top_left",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "c"], {
          src: RecommendSong.img_url,
          mode: "scaleToFill"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
        className: "top_right",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
          className: "songDetail",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
            className: "songListName",
            children: RecommendSong.name
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
            className: "authorName",
            children: RecommendSong.author
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "r"], {
            className: "detail",
            children: RecommendSong.info
          })]
        })
      })]
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
        children: MusicList === null || MusicList === void 0 ? void 0 : MusicList.map(function (item, index) {
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
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (RecommendDetail);

/***/ }),

/***/ "./src/pages/RecommendDetail/index.sass":
/*!**********************************************!*\
  !*** ./src/pages/RecommendDetail/index.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/RecommendDetail/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/RecommendDetail/index.tsx ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/RecommendDetail/index.tsx");


var config = {"navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/RecommendDetail/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/RecommendDetail/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map