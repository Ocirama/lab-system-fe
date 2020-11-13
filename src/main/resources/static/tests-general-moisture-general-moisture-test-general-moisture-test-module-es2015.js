(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tests-general-moisture-general-moisture-test-general-moisture-test-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Visuminės drėgmės svėrimas prieš džiovinimą</h1>\r\n\r\n<div class=\"parent\">\r\n  <form [formGroup]=\"formGroup\">\r\n    <mat-vertical-stepper (selectionChange)=\"onChange($event)\" #stepper formArrayName=\"form\">\r\n\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n        <form [formGroup]=\"firstFormGroup\">\r\n          <ng-template matStepLabel><span>Įveskite protokolo numerį </span></ng-template>\r\n          <mat-form-field>\r\n            <mat-label>Protokolo Nr.</mat-label>\r\n            <input matInput id=\"input0\" [(ngModel)]=\"protocol\" formControlName=\"firstCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-button matStepperNext (click)=\"getSamplesByProtocol(protocol)\">Sekantis</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step [formGroupName]=\"i\" *ngFor=\"let customerGroup of formGroup.controls.form.controls; let i = index\">\r\n        <ng-template matStepLabel><span> Sverkitę {{this.tmArray[i]?.protocolId}}\r\n          protokolo {{this.tmArray[i]?.sampleId}} - {{(i % 2) + 1}} mėginį  </span></ng-template>\r\n        <mat-form-field>\r\n          <input id=\"input{{i+1}}\" matInput placeholder=\"Padėklo numeris\" [(ngModel)]=\" tmArray[i] && tmArray[i].trayId\"\r\n              (keydown.enter)=\"sverti(tmArray[i])\"   (focusout)=\"action(tmArray[i])\" formControlName=\"cont1\" required>\r\n        </mat-form-field>\r\n\r\n        <mat-card class=\"padekloSvoris\"> <span class=\"a\">Tuscio padėklo svoris </span>  {{tmArray[i] && tmArray[i].trayWeight}}</mat-card>\r\n        <mat-card class=\"meginioSvoris\"> <span class=\"a\">Padėklo ir ėminio svoris </span>  {{tmArray[i] && tmArray[i].trayAndSampleWeightBefore}}</mat-card>\r\n        <div>\r\n          <button mat-button matStepperPrevious>Atgal</button>\r\n          <button mat-button matStepperNext>Sekantis </button>\r\n        </div>\r\n      </mat-step>\r\n      <mat-step>\r\n        <ng-template matStepLabel><span>{{protocol}} protokolo mėginiai pasverti</span></ng-template>\r\n        <p>Pasirinkitę ką norite daryti.</p>\r\n        <div>\r\n          <button mat-button matStepperPrevious>Atgal</button>\r\n          <button mat-button (click)=\"stepper.reset()\">Pildyti iš naujo</button>\r\n          <button mat-button (click)=\"stepper.reset();onSubmit(tmArray);swalSamplesRegister()\">Išsaugoti</button>\r\n        </div>\r\n      </mat-step>\r\n    </mat-vertical-stepper>\r\n  </form>\r\n</div>\r\n<mat-card class=\"lastWeight\"> <span class=\"a\"> Paskutinio svėrimo svoris </span>  {{this.weight}}</mat-card>\r\n\r\n");

/***/ }),

/***/ "./src/app/tests/general-moisture/general-moisture-test/general-moisture-test-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/tests/general-moisture/general-moisture-test/general-moisture-test-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: GeneralMoistureTestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralMoistureTestRoutingModule", function() { return GeneralMoistureTestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _general_moisture_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-moisture-test.component */ "./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.component.ts");




const routes = [
    {
        path: '',
        component: _general_moisture_test_component__WEBPACK_IMPORTED_MODULE_3__["GeneralMoistureTestComponent"]
    }
];
let GeneralMoistureTestRoutingModule = class GeneralMoistureTestRoutingModule {
};
GeneralMoistureTestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GeneralMoistureTestRoutingModule);



/***/ }),

/***/ "./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\n\r\ndiv {\r\n}\r\n\r\nspan {\r\n  width: 200px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-stepper-vertical {\r\n  margin-top: 8px;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n  width: 500px !important;\r\n  float: left;\r\n}\r\n\r\n.mat-form-field {\r\n  margin-top: 16px;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n}\r\n\r\n.parent {\r\n  position: center;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n\r\ninput .svoris {\r\n  border: 1px solid black;\r\n}\r\n\r\nmat-card {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.lastWeight {\r\n  font-size: 20px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin: 0 auto;\r\n  position: fixed;\r\n  /* center the element */\r\n  right: 0;\r\n  left: 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  /* give it dimensions */\r\n  min-height: 3em;\r\n  width: 450px;\r\n}\r\n\r\n.weightText {\r\n  margin-right: 5px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.padekloSvoris {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.meginioSvoris {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 5px;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n\r\n}\r\n\r\n.a {\r\n  margin-top: -10px;\r\n  font-size: 10px;\r\n  vertical-align: top;\r\n  margin-bottom: 5px;\r\n  margin-left: -10px;\r\n  text-align: left;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvZ2VuZXJhbC1tb2lzdHVyZS9nZW5lcmFsLW1vaXN0dXJlLXRlc3QvZ2VuZXJhbC1tb2lzdHVyZS10ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFOztBQUUzRTtBQUNBOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjs7QUFFckI7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RzL2dlbmVyYWwtbW9pc3R1cmUvZ2VuZXJhbC1tb2lzdHVyZS10ZXN0L2dlbmVyYWwtbW9pc3R1cmUtdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2Jvb3RzdHJhcEAzLjMuNy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycpO1xyXG5cclxuZGl2IHtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuaDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFyZW50IHtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pbnB1dCAuc3ZvcmlzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmxhc3RXZWlnaHQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLyogY2VudGVyIHRoZSBlbGVtZW50ICovXHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgLyogZ2l2ZSBpdCBkaW1lbnNpb25zICovXHJcbiAgbWluLWhlaWdodDogM2VtO1xyXG4gIHdpZHRoOiA0NTBweDtcclxufVxyXG4ud2VpZ2h0VGV4dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnBhZGVrbG9Tdm9yaXMge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWVnaW5pb1N2b3JpcyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuXHJcbi5hIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: GeneralMoistureTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralMoistureTestComponent", function() { return GeneralMoistureTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let GeneralMoistureTestComponent = class GeneralMoistureTestComponent {
    // tslint:disable-next-line:variable-name
    constructor(_formBuilder, api) {
        this._formBuilder = _formBuilder;
        this.api = api;
        this.isLinear = false;
        this.tray = {};
        // tmArray: Array<TotalMoistureSample> = [];
        this.tmArray = [];
        this.fixedArray = [];
        this.newArray = [];
        this.targetInput = 'input0';
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            primaryCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            secondaryCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.formGroup = this._formBuilder.group({
            form: this._formBuilder.array([this.init()])
        });
    }
    init() {
        return this._formBuilder.group({
            cont1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            cont2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    addItem() {
        this.form = this.formGroup.get('form');
        this.form.push(this.init());
    }
    sverti(sample) {
        this.api.get('/lei/scales')
            .subscribe((weight) => {
            this.weight = weight;
            sample.trayAndSampleWeightBefore = this.weight;
            console.log(this.weight);
        });
    }
    getSamplesByProtocol(protocol) {
        this.api.get(`/lei/samples/list/${protocol}`).subscribe((samples) => {
            this.samples = samples;
            console.log(this.samples);
            const array = [];
            for (const sample of this.samples) {
                for (let i = 1; i <= 2; i++) {
                    const tt = {
                        id: null,
                        protocolId: '',
                        sampleId: '',
                        trayAndSampleWeightAfter: null,
                        trayAndSampleWeightAfterPlus: null,
                        trayAndSampleWeightBefore: null,
                        trayId: '',
                        trayWeight: null
                    };
                    tt.protocolId = sample.protocolId;
                    tt.sampleId = sample.sampleId;
                    array.push(tt);
                }
            }
            this.tmArray = array;
            console.log(this.tmArray);
            for (let i = 1; i <= this.tmArray.length - 1; i++) {
                this.addItem();
            }
        });
    }
    action(sample) {
        this.api.get(`/lei/trays/${sample.trayId}`).subscribe((tray) => {
            this.tray = tray;
            sample.trayWeight = this.tray.trayWeight;
        });
    }
    onSubmit(tmarray) {
        for (const sample of this.tmArray) {
            sample.trayAndSampleWeightAfter = 0;
            sample.trayAndSampleWeightAfterPlus = 0;
            console.log(sample);
            this.api.post('/lei/journals', sample).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
        }
    }
    ngAfterViewInit() {
        this.setFocus();
    }
    setFocus() {
        const targetElem = document.getElementById(this.targetInput);
        setTimeout(function waitTargetElem() {
            if (document.body.contains(targetElem)) {
                targetElem.focus();
            }
            else {
                setTimeout(waitTargetElem, 100);
            }
        }, 100);
    }
    onChange(event) {
        const index = String(event.selectedIndex);
        this.targetInput = 'input' + index;
        this.setFocus();
    }
    swalSamplesRegister() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(' užregistruotas!', '', 'success');
    }
};
GeneralMoistureTestComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
GeneralMoistureTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-total-moisture-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-moisture-test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./general-moisture-test.component.css */ "./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.component.css")).default]
    })
], GeneralMoistureTestComponent);



/***/ }),

/***/ "./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: GeneralMoistureTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralMoistureTestModule", function() { return GeneralMoistureTestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _general_moisture_test_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-moisture-test-routing.module */ "./src/app/tests/general-moisture/general-moisture-test/general-moisture-test-routing.module.ts");
/* harmony import */ var _general_moisture_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-moisture-test.component */ "./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");











let GeneralMoistureTestModule = class GeneralMoistureTestModule {
};
GeneralMoistureTestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_general_moisture_test_component__WEBPACK_IMPORTED_MODULE_4__["GeneralMoistureTestComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _general_moisture_test_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralMoistureTestRoutingModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]
        ]
    })
], GeneralMoistureTestModule);



/***/ })

}]);
//# sourceMappingURL=tests-general-moisture-general-moisture-test-general-moisture-test-module-es2015.js.map