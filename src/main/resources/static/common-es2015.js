(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab.directive */ "./src/app/tab.directive.ts");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TabDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TabDirective"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/tab.directive.ts":
/*!**********************************!*\
  !*** ./src/app/tab.directive.ts ***!
  \**********************************/
/*! exports provided: TabDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return TabDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab.service */ "./src/app/tab.service.ts");



let TabDirective = class TabDirective {
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
};
TabDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _tab_service__WEBPACK_IMPORTED_MODULE_2__["TabService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tabIndex')
], TabDirective.prototype, "index", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], TabDirective.prototype, "onInput", null);
TabDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[tabIndex]'
    })
], TabDirective);



/***/ }),

/***/ "./src/app/tab.service.ts":
/*!********************************!*\
  !*** ./src/app/tab.service.ts ***!
  \********************************/
/*! exports provided: TabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabService", function() { return TabService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TabService = class TabService {
    constructor() {
        this.selectedInput = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
    }
};
TabService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TabService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map