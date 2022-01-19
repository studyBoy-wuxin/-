(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/Owner/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/Owner/index.tsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/Owner/index.tsx ***!
  \*******************************************************************/
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
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./src/pages/Owner/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NavigationBar */ "./src/components/NavigationBar/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









var useDidShow = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.useDidShow;
var initUser = {
  uid: '3119004000',
  uname: '无名氏',
  avater_url: ''
};

var Owner = function Owner() {
  var ToPages = function ToPages(type) {
    type === 'icon-shoucang' && _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
      url: '/pages/MusicList/index?type=LoveMusic'
    }); // type === 'icon-geren6' &&Taro.navigateTo({url:'/pages/Experience/index'})
    // type === 'icon-kechengguanli' &&Taro.navigateTo({url:'/pages/CourseInfo/index'})
    // type === 'icon-huojiang' &&Taro.navigateTo({url:'/pages/CertificateInfo/index'})
  };

  var contentItemInfo = [{
    imgUrl: 'icon-shoucang',
    desc: '收藏',
    color: 'rgb(118,202,209)'
  }, {
    imgUrl: 'icon-xiangxia4',
    desc: '本地',
    color: 'rgb(247,162,162)'
  }, {
    imgUrl: 'icon-shangchuanyunpan',
    desc: '云盘',
    color: 'rgb(90,115,215)'
  }, {
    imgUrl: 'icon-yigou',
    desc: '已购',
    color: 'rgb(241,183,114)'
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initUser),
      _useState2 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      userInfo = _useState2[0],
      setUserInfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState4 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      RecentPlayList = _useState4[0],
      setRecentPlayList = _useState4[1];

  var checkUserInfo = function checkUserInfo() {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
      url: '/pages/Owner/Update/index'
    });
  };

  var ToLoveMusic = function ToLoveMusic() {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
      url: '/pages/MusicList/index?type=LoveMusic'
    });
  };

  var ToLogin = function ToLogin() {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
      url: '/pages/Login/index'
    });
  };

  var footerItemInfo = [{
    imgUrl: 'user',
    desc: '个人信息',
    color: '',
    antherInfo: '完善个人信息',
    clickEvent: checkUserInfo
  }, {
    imgUrl: 'star-2',
    desc: '我的收藏',
    color: '',
    antherInfo: '查看个人收藏',
    clickEvent: ToLoveMusic
  }, {
    imgUrl: 'download-cloud',
    desc: '我的云盘',
    color: '',
    antherInfo: '查看收藏的云盘'
  }, {
    imgUrl: 'video',
    desc: '我的视频',
    color: '',
    antherInfo: '查看收藏的视频'
  }];
  useDidShow(function () {
    if (!_tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getStorageSync('userInfo')) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.atMessage({
        'message': '请先登录',
        'type': 'info'
      });
    } else {
      var user = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getStorageSync('userInfo');
      console.log('useDidshow', user);
      user && setUserInfo(user);
      var recentPlay = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getStorageSync('recentPlay');
      recentPlay && setRecentPlayList(recentPlay);
    }
  });

  var PlaySong = function PlaySong(music) {
    var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getApp();
    app.musicInfo = music;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.switchTab({
      url: "/pages/SongDetail/index"
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
    className: "Owner_box",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      BarText: "\u6211\u7684\u4E3B\u9875"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtMessage */ "j"], {})
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
      className: "Owner_header",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
        className: "top",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
          className: "avatar_box",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
            className: "avatar",
            children: userInfo.avater_url === '' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
              className: "iconfont icon icon-yonghutouxiang1",
              onClick: ToLogin
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtAvatar */ "d"], {
              circle: true,
              image: userInfo.avater_url
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
            className: "stuInfo",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], {
              children: userInfo.uname
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
      className: "Owner_middle",
      children: contentItemInfo === null || contentItemInfo === void 0 ? void 0 : contentItemInfo.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
          className: "contentItem",
          onClick: function onClick() {
            return ToPages(item.imgUrl);
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
            className: "iconfont ".concat(item.imgUrl),
            style: "font-size:30PX;color:".concat(item.color, ";")
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
            className: "item_desc",
            children: item.desc
          })]
        }, item.desc);
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
      className: "Owner_footer",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
        className: "recentPlayContainer",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
          className: "top",
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
              url: '/pages/MusicList/index?type=recent'
            });
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], {
            children: "\u6700\u8FD1\u64AD\u653E"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
            children: ["\u66F4\u591A", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtIcon */ "f"], {
              value: "chevron-right",
              size: 20
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "k"], {
          className: "scrollView",
          scrollX: true,
          enableFlex: true,
          children: RecentPlayList ? RecentPlayList.slice(0, 11).map(function (item) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
              className: "scrollItem",
              onClick: function onClick() {
                return PlaySong(item);
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "c"], {
                src: item.img_url
              })
            });
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "r"], {
            className: "noRecentPlay",
            children: "\u6682\u65E0\u64AD\u653E\u8BB0\u5F55....."
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtList */ "h"], {
        children: footerItemInfo.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtListItem */ "i"], {
            title: item.desc,
            note: item.antherInfo,
            arrow: "right",
            iconInfo: {
              size: 25,
              color: '#ff8589',
              value: item.imgUrl
            },
            onClick: item.clickEvent
          });
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Owner);

/***/ }),

/***/ "./src/pages/Owner/index.less":
/*!************************************!*\
  !*** ./src/pages/Owner/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/Owner/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/Owner/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/Owner/index.tsx");


var config = {"navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/Owner/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/Owner/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map