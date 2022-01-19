(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/SongDetail/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/SongDetail/index.tsx":
/*!************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/SongDetail/index.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.sass */ "./src/pages/SongDetail/index.sass");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_sass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/NavigationBar */ "./src/components/NavigationBar/index.tsx");
/* harmony import */ var _RouteInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../RouteInfo */ "./src/RouteInfo/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);











var InnerAudioContext = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.InnerAudioContext;
var useDidShow = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.useDidShow;



var i = 1;

var Index = function Index() {
  var disc = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState2 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState, 2),
      musicInfo = _useState2[0],
      setMusicInfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState4 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState3, 2),
      IsPlay = _useState4[0],
      setIsPlay = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState6 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState5, 2),
      like = _useState6[0],
      setLike = _useState6[1]; // 播放长度


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    sliderValue: 0,
    duration: 0,
    currentTime: 0
  }),
      _useState8 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState7, 2),
      AudioObj = _useState8[0],
      setAudioObj = _useState8[1]; // 进度条的定时器


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState10 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState9, 2),
      Timer1 = _useState10[0],
      setTimer1 = _useState10[1]; // 转盘的定时器


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState12 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState11, 2),
      Timer2 = _useState12[0],
      setTimer2 = _useState12[1]; // 转盘转动的角度


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState14 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState13, 2),
      _ = _useState14[0],
      setRotateSize = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState16 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState15, 2),
      AudioContext = _useState16[0],
      setAudioContext = _useState16[1];

  var LoveMusic = /*#__PURE__*/function () {
    var _ref = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(mid) {
      var user, data, _data;

      return D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getStorageSync('userInfo');

              if (!user) {
                _context.next = 28;
                break;
              }

              if (!(like === true)) {
                _context.next = 15;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return Object(_RouteInfo__WEBPACK_IMPORTED_MODULE_11__[/* removeLoveMusic */ "l"])({
                mid: mid,
                uid: user.uid
              });

            case 6:
              data = _context.sent;
              if (data === 1) _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
                title: '取消成功',
                icon: 'none',
                duration: 2000
              });else _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
                title: '取消失败',
                icon: 'none',
                duration: 2000
              });
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.atMessage({
                'message': _context.t0,
                'type': 'error'
              });

            case 13:
              _context.next = 25;
              break;

            case 15:
              _context.prev = 15;
              _context.next = 18;
              return Object(_RouteInfo__WEBPACK_IMPORTED_MODULE_11__[/* insertLoveMusic */ "i"])({
                mid: mid,
                uid: user.uid
              });

            case 18:
              _data = _context.sent;
              if (_data === 1) _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
                title: '收藏成功',
                icon: 'none',
                duration: 2000
              });else _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
                title: '收藏失败',
                icon: 'none',
                duration: 2000
              });
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t1 = _context["catch"](15);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.atMessage({
                'message': _context.t1,
                'type': 'error'
              });

            case 25:
              setLike(!like);
              _context.next = 29;
              break;

            case 28:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
                title: '请先登录',
                icon: 'none',
                duration: 2000
              });

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10], [15, 22]]);
    }));

    return function LoveMusic(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // 将数字转换成时间格式


  var changeNumType = function changeNumType(time) {
    time = time === '0' ? '00.00' : time;
    var index = time.indexOf('.');
    var a = time.substr(0, index);
    var b = time.substr(index + 1, 2);
    var list = [a.length === 1 ? "0".concat(a) : a, b.length === 1 ? "0".concat(b) : b];
    return list.join(':');
  }; // 开始转动转盘


  var onRun = function onRun() {
    var a = setInterval(function () {
      setRotateSize(function (value) {
        disc.current.style.transform = "rotate(".concat(value + 36, "deg)");
        return 36 * i;
      });
      i++;
    }, 1000);
    setTimer2(a);
  }; // 暂停播放和进度条


  var onparse = function onparse() {
    clearInterval(Timer1);
    clearInterval(Timer2); // 暂停播放

    AudioContext === null || AudioContext === void 0 ? void 0 : AudioContext.pause();
  }; //  开始播放和进度条


  var onplay = function onplay() {
    // 播放音频
    AudioContext === null || AudioContext === void 0 ? void 0 : AudioContext.play(); // 转动转盘

    onRun(); // 开启定时器，每秒+0.01

    var a = setInterval(function () {
      return setAudioObj(function (value) {
        var cTime = value.currentTime;
        var dTime = value.duration;
        return Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, value), {}, {
          sliderValue: cTime === dTime ? dTime : cTime + 1,
          currentTime: cTime === dTime ? dTime : cTime + 1
        });
      });
    }, 1000);
    setTimer1(a);
  }; // 防止 定时器获取到underfined 每次变化都重置onEnded方法


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    AudioContext === null || AudioContext === void 0 ? void 0 : AudioContext.onEnded(function () {
      // 清除定时器 暂停播放 重置旋转角度和i 重置进度条
      onparse();
      setIsPlay(false);
      setRotateSize(0);
      i = 1;
      disc.current.style.transform = 'rotate(0deg)';
      var time = Math.floor(AudioContext === null || AudioContext === void 0 ? void 0 : AudioContext.duration);
      setAudioObj({
        currentTime: 0,
        duration: time,
        sliderValue: 0
      });
    });
  }, [Timer1, Timer2]); // 点击 暂停 开始 的方法

  var handle = function handle() {
    //点击暂停按钮时，开始播放
    if (!IsPlay) onplay(); // 暂停播放，以及清除定时器
    else onparse();
    setIsPlay(!IsPlay);
  };

  var registerAudio = function registerAudio(musicInfo) {
    setMusicInfo(musicInfo);
    var audio = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.createInnerAudioContext();
    audio.src = musicInfo.audio_url; // 注册音频

    audio.onCanplay(function () {
      // 必须先调用一次 后续才能获取到 否则一直都是0
      audio.duration;
      setTimeout(function () {
        var time = Math.floor(audio.duration);
        setAudioObj(function (a) {
          return Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, a), {}, {
            duration: time
          });
        });
      }, 100);
    });
    audio.onPlay(function () {
      return console.log('开始播放');
    });
    audio.onError(function (res) {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.atMessage({
        'message': res.errMsg,
        'type': 'error'
      });
    });
    setAudioContext(audio);
  };

  var AddToRecentPlay = function AddToRecentPlay(music) {
    if (music.mid) {
      var recentPlay = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getStorageSync('recentPlay');

      if (recentPlay) {
        var index = recentPlay.findIndex(function (item) {
          return item.mid === music.mid;
        });

        if (index === -1) {
          // 说明此时的 最近播放 没有该歌曲的记录，那么就添加
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.setStorage({
            key: 'recentPlay',
            data: [music].concat(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(recentPlay))
          });
        } else if (index > -1) {
          // 说明此时的 最近播放 已经存放了该歌曲的记录，那么就把他先删除，再提前
          recentPlay.splice(index, 1);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.setStorage({
            key: 'recentPlay',
            data: [music].concat(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(recentPlay))
          });
        }
      } else _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.setStorage({
        key: 'recentPlay',
        data: [music]
      }); // 如果最近播放无记录，那么久直接添加

    }
  }; // 每次展示到前台的时候触发


  useDidShow(function () {
    var app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getApp();
    var a = app.musicInfo;

    if (!musicInfo) {
      // 添加到最近播放
      AddToRecentPlay(a);
      registerAudio(a);
    } else {
      // 如果展示到前台的时候，App中的musicInfo与组件中的不一样，那就重新注册，以App中的数据为主
      if (a.mid !== musicInfo.mid) {
        // 添加到最近播放
        AddToRecentPlay(a);
        AudioContext === null || AudioContext === void 0 ? void 0 : AudioContext.destroy();
        onparse();
        setAudioObj({
          sliderValue: 0,
          duration: 0,
          currentTime: 0
        });
        setIsPlay(false);
        setRotateSize(0);
        i = 1;
        disc.current.style.transform = 'rotate(0deg)';
        registerAudio(a);
      }
    }
  });

  var checkIsLove = /*#__PURE__*/function () {
    var _ref2 = Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(mid, uid) {
      var data;
      return D_Taro_Project_OnlineMusic_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(_RouteInfo__WEBPACK_IMPORTED_MODULE_11__[/* findNumByUidAndMid */ "h"])({
                mid: mid,
                uid: uid
              });

            case 3:
              data = _context2.sent;
              data > 0 && setLike(true);
              console.log(data);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.atMessage({
                'message': _context2.t0,
                'type': 'error'
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function checkIsLove(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (musicInfo !== null && musicInfo !== void 0 && musicInfo.mid) {
      setLike(false);
      checkIsLove(musicInfo.mid, _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getStorageSync('userInfo').uid);
      onplay();
      setIsPlay(true);
    }
  }, [AudioContext]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
    className: "songDetailContainer",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
      BarText: musicInfo !== null && musicInfo !== void 0 && musicInfo.name ? musicInfo.name : '无心歌单',
      fontsize: "35rpx"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtMessage */ "j"], {})
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
      className: "author",
      children: musicInfo ? musicInfo.artist : '无名氏'
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
      className: "bottoncircle"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "c"], {
      className: "needle ".concat(IsPlay ? 'needlerotate' : ''),
      src: __webpack_require__(/*! ../../accept/song/needle.png */ "./src/accept/song/needle.png")
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
      ref: disc,
      className: "circle ".concat(IsPlay ? 'circleRotate' : ''),
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "c"], {
        className: "disc",
        src: __webpack_require__(/*! ../../accept/song/disc.png */ "./src/accept/song/disc.png")
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "c"], {
        className: "musicImg",
        src: musicInfo ? musicInfo.img_url : __webpack_require__(/*! ../../accept/images/p1.jpg */ "./src/accept/images/p1.jpg")
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
      className: "bottom",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
        className: "a",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtIcon */ "f"], {
          className: "topicon",
          value: "".concat(like ? 'star-2' : 'star'),
          size: "30",
          color: "white",
          onClick: function onClick() {
            return LoveMusic(musicInfo === null || musicInfo === void 0 ? void 0 : musicInfo.mid);
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtIcon */ "f"], {
          className: "topicon",
          value: "download",
          size: "30",
          color: "white"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtIcon */ "f"], {
          className: "topicon",
          value: "message",
          size: "30",
          color: "white"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtIcon */ "f"], {
          className: "topicon",
          value: "link",
          size: "30",
          color: "white"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtIcon */ "f"], {
          className: "topicon",
          value: "menu",
          size: "30",
          color: "white"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
        className: "b",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Slider */ "l"], {
          min: 0,
          max: AudioObj.duration,
          step: 1,
          blockSize: 10,
          value: AudioObj.sliderValue,
          activeColor: "white",
          backgroundColor: "#bfbfbf",
          onChange: function onChange(value) {
            if (AudioContext) {
              var a = value.detail.value;
              AudioContext.seek(a);
              setAudioObj(function (ad) {
                return Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, ad), {}, {
                  currentTime: value.detail.value,
                  sliderValue: value.detail.value
                });
              });
            }
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
          className: "startEnd",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "p"], {
            children: changeNumType("".concat(Math.floor(AudioObj.currentTime / 60), ".").concat(AudioObj.currentTime % 60))
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "p"], {
            children: changeNumType("".concat(Math.floor(AudioObj.duration / 60), ".").concat(AudioObj.duration % 60))
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
        className: "c",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
          className: "kuai",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
            className: "iconfont icon-kuaijin1 icon",
            onClick: function onClick() {
              AudioContext && AudioContext.seek(AudioObj.currentTime - 15);
              setAudioObj(function (value) {
                return Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, value), {}, {
                  currentTime: value.currentTime - 15,
                  sliderValue: value.sliderValue - 15
                });
              });
            }
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "p"], {
            children: "\u5FEB\u9000"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
          className: "iconfont ".concat(IsPlay ? 'icon-zanting ' : 'icon-yunhang', " icon"),
          style: {
            fontSize: '140rpx',
            padding: '0 30rpx',
            position: 'relative',
            top: '-12rpx'
          },
          onClick: handle
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
          className: "kuai",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "r"], {
            className: "iconfont icon-kuaijin icon",
            onClick: function onClick() {
              AudioContext && AudioContext.seek(AudioObj.currentTime + 15);
              setAudioObj(function (value) {
                return Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(D_Taro_Project_OnlineMusic_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, value), {}, {
                  currentTime: value.currentTime + 15,
                  sliderValue: value.sliderValue + 15
                });
              });
            }
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "p"], {
            children: "\u5FEB\u8FDB"
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/accept/song/disc.png":
/*!**********************************!*\
  !*** ./src/accept/song/disc.png ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "accept/song/disc.png";

/***/ }),

/***/ "./src/accept/song/needle.png":
/*!************************************!*\
  !*** ./src/accept/song/needle.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "accept/song/needle.png";

/***/ }),

/***/ "./src/pages/SongDetail/index.sass":
/*!*****************************************!*\
  !*** ./src/pages/SongDetail/index.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/SongDetail/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/SongDetail/index.tsx ***!
  \****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/SongDetail/index.tsx");


var config = {"navigationStyle":"custom","enablePullDownRefresh":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/SongDetail/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/SongDetail/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map