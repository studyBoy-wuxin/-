(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/RouteInfo/index.ts":
/*!********************************!*\
  !*** ./src/RouteInfo/index.ts ***!
  \********************************/
/*! exports provided: loginRequest, updateUser, register, findAllBanner, findAllRecommendSong, findMusicByrid, findMusicByid, findMusicByName, insertMusic, text, findMusicByBangidList, findAllBang, insertLoveMusic, removeLoveMusic, findLoveMusicByUid, findNumByUidAndMid, getAudioURLByID, SearchMusicBy163 */
/*! exports used: findAllBang, findAllBanner, findAllRecommendSong, findLoveMusicByUid, findMusicByBangidList, findMusicByName, findMusicByrid, findNumByUidAndMid, insertLoveMusic, loginRequest, register, removeLoveMusic, updateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findAllBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return findAllRecommendSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return findMusicByrid; });
/* unused harmony export findMusicByid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findMusicByName; });
/* unused harmony export insertMusic */
/* unused harmony export text */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return findMusicByBangidList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findAllBang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return insertLoveMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return removeLoveMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return findLoveMusicByUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return findNumByUidAndMid; });
/* unused harmony export getAudioURLByID */
/* unused harmony export SearchMusicBy163 */
/* harmony import */ var taro_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-axios */ "./node_modules/taro-axios/lib/index.esm.js");
/* harmony import */ var _util_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/request */ "./src/util/request.ts");


// User用户管理模块
var loginRequest = function loginRequest(params) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/User/login', params, 'POST');
};
var updateUser = function updateUser(params) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])("/User/updateUser", params, 'POST');
};
var register = function register(params) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/User/register', params, 'POST');
}; // Banner 头部横幅管理区

var findAllBanner = function findAllBanner() {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/Banner/findAllBanner');
}; // RecommendSong 推荐歌单管理区

var findAllRecommendSong = function findAllRecommendSong() {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/RecommendSong/findAllRecommendSong');
}; // Recommend_Music 推荐歌曲管理区

var findMusicByrid = function findMusicByrid(params) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/Recommend_Music/findMusicByrid', params);
}; //  music音乐管理区

var findMusicByid = function findMusicByid(params) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/Music/findMusicByid', params);
};
var findMusicByName = function findMusicByName(params) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/Music/findMusicByName', params);
};
var insertMusic = function insertMusic(data) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])("/Music/insertMusic", {}, 'POST', data);
};
var text = function text(data) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/Music/text', {}, 'POST', data);
}; // 查找榜音乐的信息

var findMusicByBangidList = function findMusicByBangidList(params) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/Music/findMusicByBangidList', params);
}; // Bang 排行榜管理区

var findAllBang = function findAllBang() {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/Bang/findAllBang');
}; // Bang_Music 排行榜音乐管理区
// Love_Music 收藏音乐管理区

var insertLoveMusic = function insertLoveMusic(params) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/Love_Music/insertLoveMusic', params);
};
var removeLoveMusic = function removeLoveMusic(params) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/Love_Music/removeLoveMusic', params);
};
var findLoveMusicByUid = function findLoveMusicByUid(params) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/Love_Music/findLoveMusicByUid', params);
};
var findNumByUidAndMid = function findNumByUidAndMid(params) {
  return Object(_util_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('/Love_Music/findNumByUidAndMid', params);
}; // 网易搜索接口

var getAudioURLByID = function getAudioURLByID(id) {
  return Object(taro_axios__WEBPACK_IMPORTED_MODULE_0__[/* axios */ "a"])({
    timeout: 5000,
    url: 'https://api.imjad.cn/cloudmusic',
    method: 'get',
    params: {
      type: 'song',
      id: id
    }
  }).then(function (resp) {
    return Promise.resolve(resp.data.data[0].url);
  }).catch(function (err) {
    return Promise.reject(err.message);
  });
};
var SearchMusicBy163 = function SearchMusicBy163(searchValue) {
  return Object(taro_axios__WEBPACK_IMPORTED_MODULE_0__[/* axios */ "a"])({
    timeout: 5000,
    url: 'http://music.163.com/api/search/get/web',
    method: 'get',
    params: {
      s: searchValue,
      type: 1
    }
  }).then(function (resp) {
    return Promise.resolve(resp.data.result);
  }).catch(function (err) {
    return Promise.reject(err.message);
  });
};

/***/ }),

/***/ "./src/accept/images/p1.jpg":
/*!**********************************!*\
  !*** ./src/accept/images/p1.jpg ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "accept/images/p1.jpg";

/***/ }),

/***/ "./src/components/NavigationBar/IconfontStyle.css":
/*!********************************************************!*\
  !*** ./src/components/NavigationBar/IconfontStyle.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/NavigationBar/index.sass":
/*!*************************************************!*\
  !*** ./src/components/NavigationBar/index.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/NavigationBar/index.tsx":
/*!************************************************!*\
  !*** ./src/components/NavigationBar/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.sass */ "./src/components/NavigationBar/index.sass");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _IconfontStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IconfontStyle.css */ "./src/components/NavigationBar/IconfontStyle.css");
/* harmony import */ var _IconfontStyle_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_IconfontStyle_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










//自定义导航栏
var NavigationBar = function NavigationBar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      Delta = _useState2[0],
      setDelta = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      IconFontsize = _useState4[0],
      setIconFontsize = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
      BarHeight = _useState6[0],
      setBarHeight = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState8 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
      MarginTop = _useState8[0],
      setMarginTop = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState10 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState9, 2),
      fontboxWidth = _useState10[0],
      setFontboxWidth = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var a = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getMenuButtonBoundingClientRect(); //获取到系统的信息，便于计算导航栏

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getSystemInfo({
      success: function success(res) {
        var marginTop = res.statusBarHeight;
        var barheight = res.statusBarHeight + a.height + (a.top - res.statusBarHeight) * 2;
        var l;
        if (!props.closeIcon && !props.backIcon && !props.homeIcon && !props.icon) l = a.left * (1 - 0.05);else l = a.left * (1 - 0.18);
        setFontboxWidth(l);
        setBarHeight(barheight);
        setMarginTop(marginTop);
        setIconFontsize(a.height / 2 + 2);
        setDelta(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getCurrentPages().length - 1);
      }
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
    className: "NBar_father",
    style: {
      minHeight: BarHeight,
      width: '100%'
    },
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
      className: "NBar_box",
      style: {
        backgroundColor: props.BackgroundColor
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
        className: "icon_box",
        style: {
          marginTop: MarginTop,
          height: BarHeight - MarginTop
        },
        children: [props.closeIcon ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Navigator */ "h"], {
          openType: "exit",
          target: "miniProgram",
          className: "iconfont icon-guanbi closeIcon",
          style: {
            fontSize: IconFontsize,
            color: props.fontColor
          }
        }) : '', props.homeIcon ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Navigator */ "h"], {
          openType: "navigateBack",
          delta: Delta,
          className: "iconfont icon-home closeIcon",
          style: {
            fontSize: IconFontsize,
            color: props.fontColor
          }
        }) : '', props.backIcon ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Navigator */ "h"], {
          openType: "navigateBack",
          delta: 1,
          className: "iconfont icon-back closeIcon",
          style: {
            fontSize: IconFontsize,
            color: props.fontColor
          }
        }) : '', props.icon ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtIcon */ "f"], {
          customStyle: {
            fontSize: IconFontsize
          },
          className: "closeIcon",
          value: props.icon.value,
          size: props.icon.size ? props.icon.size : '30',
          color: props.icon.color ? props.icon.color : 'white',
          onClick: props.icon.onIconClick
        }) : '']
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
        className: "font_box",
        style: {
          marginTop: MarginTop,
          fontSize: props.fontsize ? props.fontsize : IconFontsize / 1.3,
          right: props.searchBar ? fontboxWidth === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getMenuButtonBoundingClientRect().left * (1 - 0.05) ? '30%' : '20%' : 0,
          width: props.searchBar ? fontboxWidth : '60%',
          color: props.fontColor
        },
        children: props.searchBar ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtSearchBar */ "o"], {
          className: "search",
          customStyle: {
            backgroundColor: props.BackgroundColor
          },
          maxLength: 40,
          value: props.searchValue ? props.searchValue : '',
          onChange: function onChange(value, event) {
            props.onSearchChange && props.onSearchChange(value, event);
          },
          actionName: "\u641C\u7D22",
          placeholder: props.searchPlaceholder,
          onActionClick: props.onActionClick,
          onClear: props.onClear
        }) : props.BarText
      })]
    })
  });
};

NavigationBar.defaultProps = {
  BarText: '首页',
  closeIcon: false,
  homeIcon: false,
  backIcon: false,
  searchBar: false,
  BackgroundColor: '#d43c33',
  fontColor: 'white'
};
/* harmony default export */ __webpack_exports__["a"] = (NavigationBar);

/***/ }),

/***/ "./src/util/request.ts":
/*!*****************************!*\
  !*** ./src/util/request.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var taro_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-axios */ "./node_modules/taro-axios/lib/index.esm.js");
 // 封装功能方法

var request = function request(url, params) {
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var data = arguments.length > 3 ? arguments[3] : undefined;
  return Object(taro_axios__WEBPACK_IMPORTED_MODULE_0__[/* axios */ "a"])({
    baseURL: 'http://localhost:8888/OnlineMusic',
    timeout: 10000,
    url: url,
    method: method,
    params: params,
    data: data,
    headers: {
      contentType: "application/json;charset=utf-8"
    }
  }).then(function (resp) {
    return Promise.resolve(resp.data);
  }).catch(function (err) {
    return Promise.reject(err.message);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ })

}]);
//# sourceMappingURL=common.js.map