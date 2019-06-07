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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/query */ "./src/js/utils/query.js");
/* harmony import */ var _lib_waypoints_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/waypoints.min */ "./src/js/lib/waypoints.min.js");
/* harmony import */ var _lib_waypoints_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_waypoints_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_tagged_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tagged-items */ "./src/js/modules/tagged-items.js");





Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_2__["default"])('.accordion');
Object(_modules_modals__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_tagged_items__WEBPACK_IMPORTED_MODULE_4__["default"])();
var printButton = _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].find('#resume .print-button');

if (printButton) {
  var anchor = new Waypoint({
    element: _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].find('footer'),
    offset: '980px',
    handler: function handler(dir) {
      _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].cls.toggle(printButton, 'anchored');
    }
  });
}

/***/ }),

/***/ "./src/js/lib/waypoints.min.js":
/*!*************************************!*\
  !*** ./src/js/lib/waypoints.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function () {
  "use strict";

  function t(n) {
    if (!n) throw new Error("No options passed to Waypoint constructor");
    if (!n.element) throw new Error("No element option passed to Waypoint constructor");
    if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1;
  }

  var e = 0,
      i = {};
  t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }, t.prototype.trigger = function (t) {
    this.enabled && this.callback && this.callback.apply(this, t);
  }, t.prototype.destroy = function () {
    this.context.remove(this), this.group.remove(this), delete i[this.key];
  }, t.prototype.disable = function () {
    return this.enabled = !1, this;
  }, t.prototype.enable = function () {
    return this.context.refresh(), this.enabled = !0, this;
  }, t.prototype.next = function () {
    return this.group.next(this);
  }, t.prototype.previous = function () {
    return this.group.previous(this);
  }, t.invokeAll = function (t) {
    var e = [];

    for (var n in i) {
      e.push(i[n]);
    }

    for (var o = 0, r = e.length; r > o; o++) {
      e[o][t]();
    }
  }, t.destroyAll = function () {
    t.invokeAll("destroy");
  }, t.disableAll = function () {
    t.invokeAll("disable");
  }, t.enableAll = function () {
    t.Context.refreshAll();

    for (var e in i) {
      i[e].enabled = !0;
    }

    return this;
  }, t.refreshAll = function () {
    t.Context.refreshAll();
  }, t.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  }, t.viewportWidth = function () {
    return document.documentElement.clientWidth;
  }, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, t.offsetAliases = {
    "bottom-in-view": function bottomInView() {
      return this.context.innerHeight() - this.adapter.outerHeight();
    },
    "right-in-view": function rightInView() {
      return this.context.innerWidth() - this.adapter.outerWidth();
    }
  }, window.Waypoint = t;
}(), function () {
  "use strict";

  function t(t) {
    window.setTimeout(t, 1e3 / 60);
  }

  function e(t) {
    this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
  }

  var i = 0,
      n = {},
      o = window.Waypoint,
      r = window.onload;
  e.prototype.add = function (t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh();
  }, e.prototype.checkEmpty = function () {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        e = this.Adapter.isEmptyObject(this.waypoints.vertical),
        i = this.element == this.element.window;
    t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key]);
  }, e.prototype.createThrottledResizeHandler = function () {
    function t() {
      e.handleResize(), e.didResize = !1;
    }

    var e = this;
    this.adapter.on("resize.waypoints", function () {
      e.didResize || (e.didResize = !0, o.requestAnimationFrame(t));
    });
  }, e.prototype.createThrottledScrollHandler = function () {
    function t() {
      e.handleScroll(), e.didScroll = !1;
    }

    var e = this;
    this.adapter.on("scroll.waypoints", function () {
      (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t));
    });
  }, e.prototype.handleResize = function () {
    o.Context.refreshAll();
  }, e.prototype.handleScroll = function () {
    var t = {},
        e = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left"
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up"
      }
    };

    for (var i in e) {
      var n = e[i],
          o = n.newScroll > n.oldScroll,
          r = o ? n.forward : n.backward;

      for (var s in this.waypoints[i]) {
        var l = this.waypoints[i][s];

        if (null !== l.triggerPoint) {
          var a = n.oldScroll < l.triggerPoint,
              h = n.newScroll >= l.triggerPoint,
              p = a && h,
              u = !a && !h;
          (p || u) && (l.queueTrigger(r), t[l.group.id] = l.group);
        }
      }
    }

    for (var d in t) {
      t[d].flushTriggers();
    }

    this.oldScroll = {
      x: e.horizontal.newScroll,
      y: e.vertical.newScroll
    };
  }, e.prototype.innerHeight = function () {
    return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight();
  }, e.prototype.remove = function (t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty();
  }, e.prototype.innerWidth = function () {
    return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth();
  }, e.prototype.destroy = function () {
    var t = [];

    for (var e in this.waypoints) {
      for (var i in this.waypoints[e]) {
        t.push(this.waypoints[e][i]);
      }
    }

    for (var n = 0, o = t.length; o > n; n++) {
      t[n].destroy();
    }
  }, e.prototype.refresh = function () {
    var t,
        e = this.element == this.element.window,
        i = e ? void 0 : this.adapter.offset(),
        n = {};
    this.handleScroll(), t = {
      horizontal: {
        contextOffset: e ? 0 : i.left,
        contextScroll: e ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left",
        offsetProp: "left"
      },
      vertical: {
        contextOffset: e ? 0 : i.top,
        contextScroll: e ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up",
        offsetProp: "top"
      }
    };

    for (var r in t) {
      var s = t[r];

      for (var l in this.waypoints[r]) {
        var a,
            h,
            p,
            u,
            d,
            f = this.waypoints[r][l],
            c = f.options.offset,
            w = f.triggerPoint,
            y = 0,
            g = null == w;
        f.element !== f.element.window && (y = f.adapter.offset()[s.offsetProp]), "function" == typeof c ? c = c.apply(f) : "string" == typeof c && (c = parseFloat(c), f.options.offset.indexOf("%") > -1 && (c = Math.ceil(s.contextDimension * c / 100))), a = s.contextScroll - s.contextOffset, f.triggerPoint = Math.floor(y + a - c), h = w < s.oldScroll, p = f.triggerPoint >= s.oldScroll, u = h && p, d = !h && !p, !g && u ? (f.queueTrigger(s.backward), n[f.group.id] = f.group) : !g && d ? (f.queueTrigger(s.forward), n[f.group.id] = f.group) : g && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward), n[f.group.id] = f.group);
      }
    }

    return o.requestAnimationFrame(function () {
      for (var t in n) {
        n[t].flushTriggers();
      }
    }), this;
  }, e.findOrCreateByElement = function (t) {
    return e.findByElement(t) || new e(t);
  }, e.refreshAll = function () {
    for (var t in n) {
      n[t].refresh();
    }
  }, e.findByElement = function (t) {
    return n[t.waypointContextKey];
  }, window.onload = function () {
    r && r(), e.refreshAll();
  }, o.requestAnimationFrame = function (e) {
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    i.call(window, e);
  }, o.Context = e;
}(), function () {
  "use strict";

  function t(t, e) {
    return t.triggerPoint - e.triggerPoint;
  }

  function e(t, e) {
    return e.triggerPoint - t.triggerPoint;
  }

  function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this;
  }

  var n = {
    vertical: {},
    horizontal: {}
  },
      o = window.Waypoint;
  i.prototype.add = function (t) {
    this.waypoints.push(t);
  }, i.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    };
  }, i.prototype.flushTriggers = function () {
    for (var i in this.triggerQueues) {
      var n = this.triggerQueues[i],
          o = "up" === i || "left" === i;
      n.sort(o ? e : t);

      for (var r = 0, s = n.length; s > r; r += 1) {
        var l = n[r];
        (l.options.continuous || r === n.length - 1) && l.trigger([i]);
      }
    }

    this.clearTriggerQueues();
  }, i.prototype.next = function (e) {
    this.waypoints.sort(t);
    var i = o.Adapter.inArray(e, this.waypoints),
        n = i === this.waypoints.length - 1;
    return n ? null : this.waypoints[i + 1];
  }, i.prototype.previous = function (e) {
    this.waypoints.sort(t);
    var i = o.Adapter.inArray(e, this.waypoints);
    return i ? this.waypoints[i - 1] : null;
  }, i.prototype.queueTrigger = function (t, e) {
    this.triggerQueues[e].push(t);
  }, i.prototype.remove = function (t) {
    var e = o.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1);
  }, i.prototype.first = function () {
    return this.waypoints[0];
  }, i.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1];
  }, i.findOrCreate = function (t) {
    return n[t.axis][t.name] || new i(t);
  }, o.Group = i;
}(), function () {
  "use strict";

  function t(t) {
    return t === t.window;
  }

  function e(e) {
    return t(e) ? e : e.defaultView;
  }

  function i(t) {
    this.element = t, this.handlers = {};
  }

  var n = window.Waypoint;
  i.prototype.innerHeight = function () {
    var e = t(this.element);
    return e ? this.element.innerHeight : this.element.clientHeight;
  }, i.prototype.innerWidth = function () {
    var e = t(this.element);
    return e ? this.element.innerWidth : this.element.clientWidth;
  }, i.prototype.off = function (t, e) {
    function i(t, e, i) {
      for (var n = 0, o = e.length - 1; o > n; n++) {
        var r = e[n];
        i && i !== r || t.removeEventListener(r);
      }
    }

    var n = t.split("."),
        o = n[0],
        r = n[1],
        s = this.element;
    if (r && this.handlers[r] && o) i(s, this.handlers[r][o], e), this.handlers[r][o] = [];else if (o) for (var l in this.handlers) {
      i(s, this.handlers[l][o] || [], e), this.handlers[l][o] = [];
    } else if (r && this.handlers[r]) {
      for (var a in this.handlers[r]) {
        i(s, this.handlers[r][a], e);
      }

      this.handlers[r] = {};
    }
  }, i.prototype.offset = function () {
    if (!this.element.ownerDocument) return null;
    var t = this.element.ownerDocument.documentElement,
        i = e(this.element.ownerDocument),
        n = {
      top: 0,
      left: 0
    };
    return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()), {
      top: n.top + i.pageYOffset - t.clientTop,
      left: n.left + i.pageXOffset - t.clientLeft
    };
  }, i.prototype.on = function (t, e) {
    var i = t.split("."),
        n = i[0],
        o = i[1] || "__default",
        r = this.handlers[o] = this.handlers[o] || {},
        s = r[n] = r[n] || [];
    s.push(e), this.element.addEventListener(n, e);
  }, i.prototype.outerHeight = function (e) {
    var i,
        n = this.innerHeight();
    return e && !t(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginTop, 10), n += parseInt(i.marginBottom, 10)), n;
  }, i.prototype.outerWidth = function (e) {
    var i,
        n = this.innerWidth();
    return e && !t(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginLeft, 10), n += parseInt(i.marginRight, 10)), n;
  }, i.prototype.scrollLeft = function () {
    var t = e(this.element);
    return t ? t.pageXOffset : this.element.scrollLeft;
  }, i.prototype.scrollTop = function () {
    var t = e(this.element);
    return t ? t.pageYOffset : this.element.scrollTop;
  }, i.extend = function () {
    function t(t, e) {
      if ("object" == _typeof(t) && "object" == _typeof(e)) for (var i in e) {
        e.hasOwnProperty(i) && (t[i] = e[i]);
      }
      return t;
    }

    for (var e = Array.prototype.slice.call(arguments), i = 1, n = e.length; n > i; i++) {
      t(e[0], e[i]);
    }

    return e[0];
  }, i.inArray = function (t, e, i) {
    return null == e ? -1 : e.indexOf(t, i);
  }, i.isEmptyObject = function (t) {
    for (var e in t) {
      return !1;
    }

    return !0;
  }, n.adapters.push({
    name: "noframework",
    Adapter: i
  }), n.Adapter = i;
}();

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/query */ "./src/js/utils/query.js");

function Accordion(selector) {
  var element = _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].find(selector.trim());
  if (!element) return;
  var triggers = _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].findAll('.panel > a', element);
  _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].click(triggers, function (e) {
    _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].cls.toggle(e.target, 'active');
    _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(e.target, 'accordion.triggered');
  });
} // export default function Accordion (_selector, _careted) {
//     const
//         selector = _selector.trim(),
//         element  = $(selector),
//         panel    = element.find('.accordion-panel'),
//         triggers = element.find('.accordion-panel__trigger').length != 0 ? element.find('.accordion-panel__trigger') : element.find('.accordion-panel__heading'),
//         caret    = _careted == undefined ? $(`${selector} .accordion-panel__caret`) : false;
//     function setIndexes () {
//         triggers.each((index, item) => {
//             item.setAttribute('data-index', index);
//         })
//     }
//     function toggleAccordionPanel (event) {
//         let trigger   = event.target,
//             thisPanel = panel.eq(+trigger.getAttribute('data-index')),
//             thisCaret = thisPanel.find('.accordion-panel__caret')[0],
//             content   = thisPanel.find('.accordion-panel__content')[0];
//         content.classList.toggle('accordion-panel__content--open');
//         if (thisCaret) {
//             thisCaret.classList.toggle('accordion-panel__caret--open');
//         }
// //        const scrollTo = content.classList.contains('accordion-panel__content--open') ? content.offset().top - 50 : thisPanel.offset().top - 150;
//         triggerWaypointRefresh()
// //        scrollPage(scrollTo);
//     }
//     function toggleCaretlessPanel (event) {
//         let trigger = event.target,
//             content = panel.eq(+trigger.getAttribute('data-index')).find($('.accordion-panel__content'))[0];
//         trigger.classList.toggle('open');
//         content.classList.toggle('accordion-panel__content--open');
//         const
// //            scrollTo = content.classList.contains('accordion-panel__content--open') ? content.offset().top - 50 : element.offset().top - 250,
//             html     = trigger.classList.contains('open') ? '(Show Less)' : '(Show More)';
//         trigger.innerHTML = html;
//         triggerWaypointRefresh();
// //        scrollPage(scrollTo);
//     }
//     function triggerWaypointRefresh () {
//         setTimeout(done => $(document).trigger('accordion'), 500);
//     }
//     function scrollPage (scrollTo) {
//         $('html, body').animate({
//             scrollTop: scrollTo
//         }, 300);
//     }
//     return (function () {
//         setIndexes();
//         if (caret) {
//             triggers.click(toggleAccordionPanel);
//         } else {
//             triggers.click(toggleCaretlessPanel);
//         }
//     })()
// }

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/query */ "./src/js/utils/query.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function Modal() {
  var triggers = _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].findAll('[data-open], [data-close]');
  var openClass = 'open';
  var modals = _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].findAll('.modal');
  var currentModal = null;
  _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].ready(function (e) {
    for (var i = modals.length; i--;) {
      document.body.insertBefore(modals[i], null);
      wrapModal(modals[i]);
      _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].class.add(modals[i], 'body');
    }

    _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].click(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].findAll('.modal.overlay'), function (e) {
      _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].class.has(e.target, 'overlay') && closeCurrentModal();
    });
    modals = modals.reduce(function (obj, curr) {
      return _objectSpread({}, obj, _defineProperty({}, curr.id, curr.parentElement));
    }, {});
    _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].click(triggers, handleTriggerPress);
    _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].on('keyup', window, handleKeyPress);
  });

  function handleTriggerPress(e) {
    e.preventDefault();
    return _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].attr(this, 'data-open') ? openModal(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].attr(this, 'data-open')) : closeCurrentModal();
  }

  function handleKeyPress(e) {
    var key = e.which || e.keyCode;

    if (key == 27) {
      closeCurrentModal();
    }
  }

  function wrapModal(body) {
    _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].wrap(body, _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', {
      classes: 'modal overlay'
    }));
  }

  function closeCurrentModal() {
    _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].class.remove(modals[currentModal], 'open');
    currentModal = null;
  }

  function openModal(id) {
    _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].class.add(modals[id], 'open');
    currentModal = id;
  }
}

/***/ }),

/***/ "./src/js/modules/tagged-items.js":
/*!****************************************!*\
  !*** ./src/js/modules/tagged-items.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaggedItems; });
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/query */ "./src/js/utils/query.js");

var containerSelector = '.tagged-items';
var tagsContainerSelector = '.tags';
var itemsListSelector = '.items > *';
var tagActiveClass = 'selected';
function TaggedItems() {
  var containers = _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].findAll(containerSelector);
  var numContainers = containers.length;
  if (!numContainers) return;
  _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].ready(function (e) {
    var _loop = function _loop(i) {
      var curr = containers[i];
      var tagsContainer = _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].find(tagsContainerSelector, curr);
      var items = _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].findAll(itemsListSelector, curr);
      generateTags(items, tagsContainer);
      var match = initMatcher(items);
      _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].click(tagsContainer, function (e) {
        var tag = e.target;
        var val = _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].attr(tag);

        if (tag.includes(selected)) {
          _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].cls.remove(tag, tagActiveClass);
          selected.splice(selected.findIndex(function (str) {
            return str === val;
          }), 1);
        } else {
          _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].cls.add(tag, tagActiveClass);
          selected.push(val);
        }

        match(selected);
      });
    };

    for (var i = numContainers; i--;) {
      _loop(i);
    }
  });

  function initMatcher(_list) {
    var list = _list.map(function (el) {
      return _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].attr(el, 'data-tags').split(', ');
    });

    return function (tags) {
      return list.map(function (arr) {
        return tags.every(function (t) {
          return arr.includes(t);
        });
      });
    };
  }

  function generateTags(list, tagsContainer) {
    var tags = new Set(list.reduce(function (str, el) {
      return "".concat(str, ", ").concat(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].attr(el, 'data-tags'));
    }, 'All').split(', '));
    tags.forEach(function (tag) {
      var el = _utils_query__WEBPACK_IMPORTED_MODULE_0__["default"].create('span');
      el.innerText = tag;
      tagsContainer.appendChild(el);
    });
  }
}

function normalize(str) {
  return str.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9 -]/g, '');
}

/***/ }),

/***/ "./src/js/utils/query.js":
/*!*******************************!*\
  !*** ./src/js/utils/query.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var id = function id(n) {
  return document.getElementById(n);
};

var find = function find(n) {
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return s.querySelector(n);
};

var findAll = function findAll(n) {
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return _toConsumableArray(s.querySelectorAll(n));
};

var on = function on(ev, el, fn) {
  if (typeof fn != 'function') throw Error('fn provided is not a function');
  el.addEventListener(ev, fn);
};

var click = function click(all, fn) {
  var handle = on.bind(null, 'click');
  if (Array.isArray(all)) iterate(all, function (el) {
    return handle(el, fn);
  });else if (typeof fn == 'function') handle(all, fn);else all.click();
};

var dispatch = function dispatch(el, name, detail) {
  var data = {
    bubbles: true
  };
  if (detail) data.detail = detail;
  el.dispatchEvent(new CustomEvent(name, data));
};

var attr = function attr(all, prop, val) {
  if (Array.isArray(all)) iterate(all, function (el) {
    return el.setAttribute(prop, val);
  });else if (val) all.setAttribute(prop, val);else return all.getAttribute(prop);
};

var cls = {
  add: classes.bind(null, 'add'),
  remove: classes.bind(null, 'remove'),
  toggle: classes.bind(null, 'toggle'),
  has: function has(el, cls) {
    return el.classList.contains(cls);
  }
};

var create = function create() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var id = options.id,
      classes = options.classes,
      attributes = options.attributes;
  var el = document.createElement(tag);
  if (id) el.id = id;
  if (classes) cls.add(el, classes);

  if (attributes) {
    for (var prop in attributes) {
      attr(el, prop, attributes[prop]);
    }
  }

  return el;
};

var wrap = function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
};

var ready = function ready(fn) {
  return on('DOMContentLoaded', window, fn);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  id: id,
  find: find,
  findAll: findAll,
  ready: ready,
  on: on,
  click: click,
  dispatch: dispatch,
  attr: attr,
  create: create,
  wrap: wrap,
  cls: cls,
  class: cls
});

function iterate(arr, fn) {
  var len = arr.length;
  var i = 0;

  while (i < len) {
    fn.call(this, arr[i]);
    i++;
  }
}

function classes(prop, all) {
  for (var _len = arguments.length, _str = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    _str[_key - 2] = arguments[_key];
  }

  if (!_str.length) throw Error('You need at least one class to ' + prop); // NOTE: Any space in the first class will mean every string after it is ignored

  var str = _str.length == 1 ? typeof _str[0] == 'string' ? _str[0].split(' ') : _str[0] : _str;

  if (Array.isArray(all)) {
    iterate(all, function (el) {
      iterate(str, function (s) {
        return el.classList[prop](s);
      });
    });
  } else {
    iterate(str, function (s) {
      return all.classList[prop](s);
    });
  }
}

/***/ })

/******/ });