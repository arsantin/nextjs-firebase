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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AbertosHoje.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbertosHoje; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\santin\\Documents\\estudo-nextjs\\client\\components\\AbertosHoje.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbertosHoje =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AbertosHoje, _React$Component);

  function AbertosHoje() {
    _classCallCheck(this, AbertosHoje);

    return _possibleConstructorReturn(this, (AbertosHoje.__proto__ || Object.getPrototypeOf(AbertosHoje)).apply(this, arguments));
  }

  _createClass(AbertosHoje, [{
    key: "render",
    value: function render() {
      console.log("abertos", this.props);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-wow-offset": "50",
        "data-wow-delay": "0.5s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-1245404719" + " " + 'container-aberto wow fadeInDown'
      }, this.props.foodtrucks.map(function (truck) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          className: "jsx-1245404719" + " " + "wrapper"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          className: "jsx-1245404719" + " " + "tipo"
        }, truck.tipo), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          className: "jsx-1245404719" + " " + "categoria"
        }, truck.categoria), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          className: "jsx-1245404719" + " " + "left"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          className: "jsx-1245404719" + " " + "logotruck"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: truck.logo,
          alt: "logo foodtruck",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          className: "jsx-1245404719"
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          className: "jsx-1245404719" + " " + "middle"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          className: "jsx-1245404719" + " " + "nometruck"
        }, truck.truck), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          className: "jsx-1245404719" + " " + "horatruck"
        }, truck.tipo), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          className: "jsx-1245404719" + " " + "enderecotruck"
        }, truck.categoria), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          className: "jsx-1245404719" + " " + "bairrotruck"
        }, "Uberaba"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          className: "jsx-1245404719" + " " + "cidadetruck"
        }, "Curitiba")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          className: "jsx-1245404719" + " " + "right"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          className: "jsx-1245404719" + " " + "nomelocal"
        }, "Kadan Cervejaria"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          className: "jsx-1245404719" + " " + "fotolocal"
        })));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1245404719",
        css: ".container-aberto.jsx-1245404719{max-width:980px;margin:auto;background-color:#fff;margin-bottom:30px;width:100%;margin-top:150px;}.tipo.jsx-1245404719{width:50%;float:left;width:calc(50% - 100px);background:#dc4646;padding-left:100px;text-align:center;font-size:30px;}.categoria.jsx-1245404719{width:50%;float:left;background-color:#dc8246;text-align:center;font-size:30px;}.logotruck.jsx-1245404719{height:220px;}.wrapper.jsx-1245404719{background-color:#fff;width:100%;max-width:980px;float:left;margin-bottom:40px;}.left.jsx-1245404719{float:left;max-width:220px;}.middle.jsx-1245404719{float:left;margin:20px 15px;}.right.jsx-1245404719{background-color:#fff;float:right;position:relative;}.right.jsx-1245404719 .fotolocal.jsx-1245404719{height:220px;width:auto;}.right.jsx-1245404719 .nomelocal.jsx-1245404719{position:absolute;z-index:2;background-color:#000;opacity:0.8;color:#fff;right:0px;bottom:0px;width:295px;padding:10px;}.nometruck.jsx-1245404719{color:#e4131f;font-size:60px;}.horatruck.jsx-1245404719{color:#e4131f;font-size:24px;}.enderecotruck.jsx-1245404719{color:#9c0600;font-size:24px;}.bairrotruck.jsx-1245404719{color:#9c0600;font-size:24px;float:left;margin-right:10px;}.cidadetruck.jsx-1245404719{color:#9c0600;font-size:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFiZXJ0b3NIb2plLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHcUIsQUFRTixBQVNBLEFBT0csQUFHUyxBQU9YLEFBSUEsQUFJVyxBQUtULEFBSUssQUFXSixBQUlBLEFBSUEsQUFJQSxBQU1BLFVBdkVILEFBU0EsQ0FpQkssQUFJQyxFQWRuQixBQXVCYSxDQWVJLEFBSUEsQUFJQSxBQUlBLEFBTUEsRUFoRkgsRUFtREYsR0ExQ2MsQUFTQyxDQVNkLEFBZUMsRUFNZCxHQWJBLENBbEN3QixBQXNDeEIsQUFhd0IsQ0FXeEIsQUFJQSxBQUlBLEFBSWEsQUFNYixJQXJEa0IsQ0FlRSxNQWlDQSxLQWxFQyxDQVNELEdBVVAsQ0EzQlEsQUFtRFAsRUFUZCxNQWlDQSxFQS9DcUIsRUF3QlIsRUEzQ1EsQUFTSixLQWpCSixJQW9ERCxNQWxDWixBQVVBLENBM0JtQixHQVFDLEFBNENQLFdBQ0MsR0FwRGQsSUFRaUIsS0E2Q0YsVUE1Q2YsR0E2Q0EiLCJmaWxlIjoiY29tcG9uZW50c1xcQWJlcnRvc0hvamUuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzYW50aW5cXERvY3VtZW50c1xcZXN0dWRvLW5leHRqc1xcY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJlcnRvc0hvamUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgXHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc29sZS5sb2coXCJhYmVydG9zXCIsIHRoaXMucHJvcHMpXHJcbiAgICByZXR1cm4oICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItYWJlcnRvIHdvdyBmYWRlSW5Eb3duJyBkYXRhLXdvdy1vZmZzZXQ9JzUwJyBkYXRhLXdvdy1kZWxheT0nMC41cycgPiAgICAgXHJcbiAgICAgICAgICAge3RoaXMucHJvcHMuZm9vZHRydWNrcy5tYXAoKHRydWNrKSA9PiB7XHJcbiAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXBvXCI+e3RydWNrLnRpcG99PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWFcIj57dHJ1Y2suY2F0ZWdvcmlhfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb3RydWNrXCI+XHJcbiAgICAgICAgIDxpbWcgc3JjPXt0cnVjay5sb2dvfSBhbHQ9XCJsb2dvIGZvb2R0cnVja1wiIC8+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vbWV0cnVja1wiPnt0cnVjay50cnVja308L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcmF0cnVja1wiPnt0cnVjay50aXBvfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW5kZXJlY290cnVja1wiPnt0cnVjay5jYXRlZ29yaWF9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWlycm90cnVja1wiPlViZXJhYmE8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpZGFkZXRydWNrXCI+Q3VyaXRpYmE8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9tZWxvY2FsXCI+S2FkYW4gQ2VydmVqYXJpYTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdG9sb2NhbFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxyXG4gICAgICAgICAgIH0pfVxyXG4gICAgICA8c3R5bGUganN4PntgICBcclxuICAuY29udGFpbmVyLWFiZXJ0b3sgICAgXHJcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIH0gIFxyXG4gIC50aXBve1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTAwcHgpO1xyXG4gICAgYmFja2dyb3VuZDogI2RjNDY0NjtcclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIC5jYXRlZ29yaWF7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGM4MjQ2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAubG9nb3RydWNre1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICB9XHJcbiAgLndyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuICAubGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcclxuICB9XHJcbiAgLm1pZGRsZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAyMHB4IDE1cHg7XHJcbiAgfVxyXG4gIC5yaWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmbG9hdDogcmlnaHQ7ICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxyXG4gIH1cclxuICAucmlnaHQgLmZvdG9sb2NhbHtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICB3aWR0aDogYXV0bzsgICAgXHJcbiAgfVxyXG4gIC5yaWdodCAubm9tZWxvY2Fse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAyOTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5ub21ldHJ1Y2t7XHJcbiAgICBjb2xvcjogI2U0MTMxZjtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICB9XHJcbiAgLmhvcmF0cnVja3tcclxuICAgIGNvbG9yOiAjZTQxMzFmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuICAuZW5kZXJlY290cnVja3tcclxuICAgIGNvbG9yOiAjOWMwNjAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuICAuYmFpcnJvdHJ1Y2t7XHJcbiAgICBjb2xvcjogIzljMDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuY2lkYWRldHJ1Y2t7XHJcbiAgICBjb2xvcjogIzljMDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9ICBcclxuICAgIGB9XHJcblxyXG4gIDwvc3R5bGU+XHJcbjwvZGl2Pil9fSAiXX0= */\n/*@ sourceURL=components\\AbertosHoje.js */"
      }));
    }
  }]);

  return AbertosHoje;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "C:\\Users\\santin\\Documents\\estudo-nextjs\\client\\components\\Layout.js";



var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "container-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/agenda",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Agenda")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/food-trucks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Food Trucks")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/contato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Contato"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Abertos Hoje")), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "C:\\Users\\santin\\Documents\\estudo-nextjs\\client\\components\\header\\Header.js";




var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-3235700303" + " " + "container-header"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3235700303" + " " + "section"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3235700303"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3235700303"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3235700303"
  }, "Home")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/agenda",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3235700303"
  }, "Agenda")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/food-trucks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-3235700303"
  }, "Food Trucks")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/contato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-3235700303"
  }, "Contato"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-3235700303" + " " + "title"
  }, "Abertos Hoje"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3235700303",
    css: ".container-header.jsx-3235700303{position:fixed;background-color:#9c0600;width:100%;top:0px;height:105px;z-index:3;}.section.jsx-3235700303{max-width:980px;margin:auto;position:relative;}img.jsx-3235700303{position:absolute;width:80px;height:auto;top:10px;left:10px;}.title.jsx-3235700303{background-color:#ffb900;width:100%;font-size:60px;margin-top:35px;text-align:center;}.tipo.jsx-3235700303{width:50%;float:left;width:calc(50% - 100px);background:#9c0600;padding-left:100px;text-align:center;font-size:30px;}.categoria.jsx-3235700303{width:50%;float:left;background-color:#dd6b1f;text-align:center;font-size:30px;}nav.jsx-3235700303 ul.jsx-3235700303{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}nav.jsx-3235700303 li.jsx-3235700303 a.jsx-3235700303{color:#fff;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNrQixBQUdvQixBQVFDLEFBS0UsQUFPTyxBQU9mLEFBU0EsQUFPRyxBQUtGLFVBcEJBLEFBU0EsQ0FZYyxJQWhEQSxDQVFiLEVBS0QsR0FlYSxBQVNDLElBakJkLEdBWE8sQ0FLTixPQU9HLEFBNEJqQixJQWhEYSxDQWNGLElBY1UsQ0FuQnJCLEFBNEJvQixJQXRCUixDQWRGLEFBb0JRLFFBbkJILENBY2YsSUFhcUIsQUFTSixHQWhCRyxLQW5CUixFQXVDbUIsS0FIL0IsR0FuQ0EsQ0EwQm9CLEVBUHBCLGdCQVFpQixlQUNqQixpRkFXbUIsK0RBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHNcXGhlYWRlclxcSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcc2FudGluXFxEb2N1bWVudHNcXGVzdHVkby1uZXh0anNcXGNsaWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+ICAgICAgICBcclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FnZW5kYVwiPjxhPkFnZW5kYTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9vZC10cnVja3NcIj48YT5Gb29kIFRydWNrczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGF0b1wiPjxhPkNvbnRhdG88L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFiZXJ0b3MgSG9qZTwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb250YWluZXItaGVhZGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljMDYwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwNXB4O1xyXG4gICAgei1pbmRleDogMztcclxuICB9XHJcbiAgLnNlY3Rpb257XHJcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBpbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC50aXRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI5MDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50aXBve1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTAwcHgpO1xyXG4gICAgYmFja2dyb3VuZDogIzljMDYwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIC5jYXRlZ29yaWF7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ2YjFmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICBuYXYgdWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB9XHJcbiAgbmF2IGxpIGF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gICAgICAgIGB9ICAgICAgICBcclxuICAgICAgPC9zdHlsZT4gICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXX0= */\n/*@ sourceURL=components\\header\\Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./lib/db.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadFirebase;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__("firebase/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_firestore__ = __webpack_require__("firebase/firestore");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_firestore__);


function loadFirebase() {
  try {
    var config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "food-truck-cwb.firebaseapp.com",
      databaseURL: process.env.FIREBASE_DATA_URL,
      projectId: "food-truck-cwb",
      storageBucket: "food-truck-cwb.appspot.com",
      messagingSenderId: "1047947762475"
    };
    __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.initializeApp(config);
    __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.firestore().settings({
      timestampInSnaposhots: true
    });
  } catch (error) {
    if (!/ja existe/.test(error.message)) {
      console.log("firebase n\xE3o iniciou: ".concat(error.message));
    }
  }

  return __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a;
}

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AbertosHoje_js__ = __webpack_require__("./components/AbertosHoje.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_header_Header_js__ = __webpack_require__("./components/header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_db_js__ = __webpack_require__("./lib/db.js");
var _jsxFileName = "C:\\Users\\santin\\Documents\\estudo-nextjs\\client\\pages\\index.js";



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_header_Header_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_AbertosHoje_js__["a" /* default */], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "777081265",
        css: "body{background-color:#e41a24;font-family:'boldcn';color:#fff !important;font-size:16px;font-display:auto;background-attachment:fixed;background-image:url('https://blog-cdn.eduk.com.br/wp-content/uploads/sites/3/2017/11/28173241/hamb%C3%BArguer-artesanal-2.jpg');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnFCLEFBRzhCLHlCQUNKLHFCQUNDLHNCQUNQLGVBQ0csa0JBQ1UsNEJBRS9CLGlJQUFDIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHNhbnRpblxcRG9jdW1lbnRzXFxlc3R1ZG8tbmV4dGpzXFxjbGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgQWJlcnRvc0hvamUgZnJvbSAnLi4vY29tcG9uZW50cy9BYmVydG9zSG9qZS5qcydcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanMnXHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IHsgbG9hZEZpcmViYXNlIH0gZnJvbSAnLi4vbGliL2RiLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9ICgpID0+IFxyXG4gICAgbG9hZEZpcmViYXNlKCkuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignZm9vZHRydWNrcycpXHJcbiAgICAgIC5nZXQoKSAgICBcclxuICAgICAgLnRoZW4oc25hcHNob3QgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0gW11cclxuICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgIHRydWNrOiBkb2MuZGF0YSgpLnRydWNrLFxyXG4gICAgICAgICAgICBsb2dvOiBkb2MuZGF0YSgpLmxvZ28sXHJcbiAgICAgICAgICAgIHRpcG86IGRvYy5kYXRhKCkudGlwbyxcclxuICAgICAgICAgICAgY2F0ZWdvcmlhOiBkb2MuZGF0YSgpLmNhdGVnb3JpYSxcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gIHtmb29kdHJ1Y2tzOiBkYXRhfSBcclxuICAgICAgfSlcclxuXHJcbiAgcmVuZGVyKCl7ICBcclxuICAgIHJldHVybihcclxuICAgIDxMYXlvdXQ+ICAgIFxyXG4gICAgPEhlYWRlci8+IFxyXG4gICA8QWJlcnRvc0hvamUgey4uLnRoaXMucHJvcHN9Lz4gICAgXHJcbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICBib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0MWEyNDtcclxuICAgIGZvbnQtZmFtaWx5OiAnYm9sZGNuJztcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWRpc3BsYXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Jsb2ctY2RuLmVkdWsuY29tLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8zLzIwMTcvMTEvMjgxNzMyNDEvaGFtYiVDMyVCQXJndWVyLWFydGVzYW5hbC0yLmpwZycpXHJcbiAgfSAgXHJcbiAgICBgfTwvc3R5bGU+ICBcclxuICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=pages\\index.js */"
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Object.defineProperty(Index, "getInitialProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    return Object(__WEBPACK_IMPORTED_MODULE_6__lib_db_js__["a" /* loadFirebase */])().firestore().collection('foodtrucks').get().then(function (snapshot) {
      var data = [];
      snapshot.forEach(function (doc) {
        data.push(_objectSpread({
          id: doc.id,
          truck: doc.data().truck,
          logo: doc.data().logo,
          tipo: doc.data().tipo,
          categoria: doc.data().categoria
        }, doc.data()));
      });
      return {
        foodtrucks: data
      };
    });
  }
});


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "firebase/app":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map