(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0SXx":
/*!**********************************!*\
  !*** ./src/app/tab.directive.ts ***!
  \**********************************/
/*! exports provided: TabDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return TabDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tab_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.service */ "uq4O");



class TabDirective {
    constructor(el, tabService) {
        this.el = el;
        this.tabService = tabService;
    }
    get index() {
        return this._index;
    }
    set index(i) {
        this._index = parseInt(i);
    }
    onInput(e) {
        if (e.which === 13) {
            this.tabService.selectedInput.next(this.index + 1);
            e.preventDefault();
        }
    }
    ngOnInit() {
        this.tabService.selectedInput
            .subscribe((i) => {
            console.log(i, this.index);
            if (i === this.index) {
                this.el.nativeElement.focus();
            }
        });
    }
}
TabDirective.ɵfac = function TabDirective_Factory(t) { return new (t || TabDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tab_service__WEBPACK_IMPORTED_MODULE_1__["TabService"])); };
TabDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TabDirective, selectors: [["", "tabIndex", ""]], hostBindings: function TabDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TabDirective_keydown_HostBindingHandler($event) { return ctx.onInput($event); });
    } }, inputs: { index: ["tabIndex", "index"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[tabIndex]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _tab_service__WEBPACK_IMPORTED_MODULE_1__["TabService"] }]; }, { index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tabIndex']
        }], onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tab_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab.directive */ "0SXx");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_tab_directive__WEBPACK_IMPORTED_MODULE_2__["TabDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_tab_directive__WEBPACK_IMPORTED_MODULE_2__["TabDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_tab_directive__WEBPACK_IMPORTED_MODULE_2__["TabDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_tab_directive__WEBPACK_IMPORTED_MODULE_2__["TabDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "uq4O":
/*!********************************!*\
  !*** ./src/app/tab.service.ts ***!
  \********************************/
/*! exports provided: TabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabService", function() { return TabService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class TabService {
    constructor() {
        this.selectedInput = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
    }
}
TabService.ɵfac = function TabService_Factory(t) { return new (t || TabService)(); };
TabService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TabService, factory: TabService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map