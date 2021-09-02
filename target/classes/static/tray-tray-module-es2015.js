(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tray-tray-module"],{

/***/ "12BK":
/*!*********************************************!*\
  !*** ./src/app/tray/tray-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TrayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrayRoutingModule", function() { return TrayRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tray_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tray.component */ "jvtj");





const routes = [
    {
        path: '',
        component: _tray_component__WEBPACK_IMPORTED_MODULE_2__["TrayComponent"]
    }
];
class TrayRoutingModule {
}
TrayRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TrayRoutingModule });
TrayRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TrayRoutingModule_Factory(t) { return new (t || TrayRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TrayRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrayRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jvtj":
/*!****************************************!*\
  !*** ./src/app/tray/tray.component.ts ***!
  \****************************************/
/*! exports provided: TrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrayComponent", function() { return TrayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tab_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tab.service */ "uq4O");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/api.service */ "HyEY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tab.directive */ "0SXx");










function TrayComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Naujo pad\u0117klo sv\u0117rimas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Skenuokite pad\u0117kl\u0105 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrayComponent_div_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.trays.trayId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sverkite pad\u0117kl\u0105 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrayComponent_div_5_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.trays.trayWeight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrayComponent_div_5_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSubmit(ctx_r5.trays); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.trays.trayId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.trays.trayWeight);
} }
function TrayComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kalibracija");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Skenuokite pad\u0117kl\u0105 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TrayComponent_div_6_Template_input_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.trays.trayId = null; })("focusout", function TrayComponent_div_6_Template_input_focusout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.childFunction(ctx_r8.trays); })("ngModelChange", function TrayComponent_div_6_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.trays.trayId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sverkite pad\u0117kl\u0105 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function TrayComponent_div_6_Template_input_keyup_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.trays.trayWeight = null; })("ngModelChange", function TrayComponent_div_6_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.trays.trayWeight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function TrayComponent_div_6_Template_button_keydown_enter_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onSubmit(ctx_r12.trays); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.trays.trayId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.trays.trayWeight);
} }
class TrayComponent {
    constructor(api) {
        this.api = api;
        this.trays = {};
        this.selectedOption = false;
        this.selectedOption2 = false;
    }
    ngOnInit() {
    }
    swalCalibration() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2']
        }).queue([
            'Skenuokite padėklą',
            { title: 'Sverkitę padėklą',
                text: '' },
        ]).then((result) => {
            if (result) {
                const answers = JSON.stringify(result);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'All done!',
                    html: `
        Your answers:
        <pre><code>${answers}</code></pre>
      `,
                    confirmButtonText: 'Baigta'
                });
            }
        });
    }
    onSubmit(value) {
        this.api.post('/lei/trays', value).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
    }
    childFunction(value) {
        this.api.get(`/lei/trays/${value.trayId}`)
            .subscribe((data) => {
            this.trays = data;
        });
    }
}
TrayComponent.ɵfac = function TrayComponent_Factory(t) { return new (t || TrayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
TrayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrayComponent, selectors: [["app-tray"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_tab_service__WEBPACK_IMPORTED_MODULE_1__["TabService"]])], decls: 11, vars: 8, consts: [["ng", "", 1, "buttons"], ["mat-flat-button", "", "color", "primary", 1, "btn1", 3, "click"], ["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], ["tabIndex", "1", "matInput", "", "name", "trayId", 3, "ngModel", "ngModelChange"], ["tabIndex", "2", "matInput", "", "name", "trayWeight", 3, "ngModel", "ngModelChange"], ["mat-button", "", "type", "button", 1, "btn", "btn-secondary", 3, "click"], ["tabIndex", "1", "matInput", "", "name", "trayId", 3, "ngModel", "focus", "focusout", "ngModelChange"], ["tabIndex", "2", "matInput", "", "name", "trayWeight", 3, "ngModel", "keyup.enter", "ngModelChange"], ["tabIndex", "3", "mat-button", "", "type", "button", 1, "btn", "btn-secondary", 3, "keydown.enter"]], template: function TrayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrayComponent_Template_button_click_1_listener() { return ctx.swalCalibration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kalibracija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrayComponent_Template_button_click_3_listener() { ctx.selectedOption = true; return ctx.selectedOption2 = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Naujo pad\u0117klo sv\u0117rimas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TrayComponent_div_5_Template, 10, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TrayComponent_div_6_Template, 10, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "json");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedOption2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.trays), "\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx.trays), " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _tab_directive__WEBPACK_IMPORTED_MODULE_8__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: ["@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.md-button[_ngcontent-%COMP%] {\r\n  padding: 0 6px 0 6px;\r\n  margin: 6px 8px 6px 8px;\r\n  min-width: 88px;\r\n  border-radius: 3px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  text-decoration:none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.btn1[_ngcontent-%COMP%]{\r\n  color : azure;\r\n  background-color: #3f51b5;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n  width:100%;\r\n}\r\n.buttons[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  width: 50%;\r\n  padding: 10px;\r\n}\r\n.example-form[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n\r\n}\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n  padding-right: 8px;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\ndiv[_ngcontent-%COMP%]{\r\n}\r\n.example-margin[_ngcontent-%COMP%]{\r\n  margin-right: 50px;\r\n}\r\n.form-control.ng-touched.ng-invalid[_ngcontent-%COMP%]{\r\n  border:2px solid red;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n  width: 600px;\r\n  border: 3px solid #3f51b5;\r\n}\r\n.id[_ngcontent-%COMP%]{\r\n  border-bottom: 10px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  padding-bottom: 20px;\r\n  padding-top: 20px;\r\n}\r\n.id[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7QUFDM0U7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwyQ0FBMkM7RUFDM0MsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYzs7QUFFaEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InRyYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9ib290c3RyYXBAMy4zLjcvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTtcclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1kLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMCA2cHggMCA2cHg7XHJcbiAgbWFyZ2luOiA2cHggOHB4IDZweCA4cHg7XHJcbiAgbWluLXdpZHRoOiA4OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0bjF7XHJcbiAgY29sb3IgOiBhenVyZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4uYnV0dG9uc3tcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcbmgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZGl2e1xyXG59XHJcbi5leGFtcGxlLW1hcmdpbntcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbC5uZy10b3VjaGVkLm5nLWludmFsaWR7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzNmNTFiNTtcclxufVxyXG4uaWR7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTBweDtcclxufVxyXG5sYWJlbCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmlke1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tray',
                templateUrl: './tray.component.html',
                providers: [_tab_service__WEBPACK_IMPORTED_MODULE_1__["TabService"]],
                styleUrls: ['./tray.component.css']
            }]
    }], function () { return [{ type: _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "z1Ip":
/*!*************************************!*\
  !*** ./src/app/tray/tray.module.ts ***!
  \*************************************/
/*! exports provided: TrayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrayModule", function() { return TrayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tray_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tray.component */ "jvtj");
/* harmony import */ var _tray_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tray-routing.module */ "12BK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");









class TrayModule {
}
TrayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TrayModule });
TrayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TrayModule_Factory(t) { return new (t || TrayModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _tray_routing_module__WEBPACK_IMPORTED_MODULE_3__["TrayRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TrayModule, { declarations: [_tray_component__WEBPACK_IMPORTED_MODULE_2__["TrayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _tray_routing_module__WEBPACK_IMPORTED_MODULE_3__["TrayRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_tray_component__WEBPACK_IMPORTED_MODULE_2__["TrayComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _tray_routing_module__WEBPACK_IMPORTED_MODULE_3__["TrayRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tray-tray-module-es2015.js.map