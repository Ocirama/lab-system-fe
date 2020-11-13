function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tab.directive */
    "./src/app/tab.directive.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TabDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TabDirective"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/tab.directive.ts":
  /*!**********************************!*\
    !*** ./src/app/tab.directive.ts ***!
    \**********************************/

  /*! exports provided: TabDirective */

  /***/
  function srcAppTabDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabDirective", function () {
      return TabDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tab.service */
    "./src/app/tab.service.ts");

    var TabDirective =
    /*#__PURE__*/
    function () {
      function TabDirective(el, tabService) {
        _classCallCheck(this, TabDirective);

        this.el = el;
        this.tabService = tabService;
      }

      _createClass(TabDirective, [{
        key: "onInput",
        value: function onInput(e) {
          if (e.which === 13) {
            this.tabService.selectedInput.next(this.index + 1);
            e.preventDefault();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.tabService.selectedInput.subscribe(function (i) {
            console.log(i, _this.index);

            if (i === _this.index) {
              _this.el.nativeElement.focus();
            }
          });
        }
      }, {
        key: "index",
        get: function get() {
          return this._index;
        },
        set: function set(i) {
          this._index = parseInt(i);
        }
      }]);

      return TabDirective;
    }();

    TabDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _tab_service__WEBPACK_IMPORTED_MODULE_2__["TabService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tabIndex')], TabDirective.prototype, "index", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], TabDirective.prototype, "onInput", null);
    TabDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[tabIndex]'
    })], TabDirective);
    /***/
  },

  /***/
  "./src/app/tab.service.ts":
  /*!********************************!*\
    !*** ./src/app/tab.service.ts ***!
    \********************************/

  /*! exports provided: TabService */

  /***/
  function srcAppTabServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabService", function () {
      return TabService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TabService = function TabService() {
      _classCallCheck(this, TabService);

      this.selectedInput = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
    };

    TabService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TabService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map