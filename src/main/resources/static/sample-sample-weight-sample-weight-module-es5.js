function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sample-sample-weight-sample-weight-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-weight/sample-weight.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-weight/sample-weight.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSampleSampleWeightSampleWeightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Mėginių masės svėrimas</h1>\r\n<button (click)=\"initz()\" >SVARSTYKLES</button>\r\n\r\n\r\n<div class=\"parent\">\r\n  <form [formGroup]=\"formGroup\">\r\n    <mat-vertical-stepper (selectionChange)=\"onChange($event)\" #stepper formArrayName=\"form\">\r\n\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n        <form [formGroup]=\"firstFormGroup\">\r\n          <ng-template matStepLabel><span>Įveskite protokolo numerį </span></ng-template>\r\n          <mat-form-field>\r\n            <mat-label>Protokolo Nr.</mat-label>\r\n            <input matInput id=\"input0\" [(ngModel)]=\"protocol\" formControlName=\"firstCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-button matStepperNext (click)=\"getSamplesByProtocol(protocol)\">Sekantis</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n      <mat-step [formGroupName]=\"i\" *ngFor=\"let customerGroup of formGroup.controls.form.controls; let i = index\">\r\n        <ng-template matStepLabel><span> Sverkitę {{this.sampleArray[i]?.protocolId}}\r\n          protokolo {{this.sampleArray[i]?.sampleId}} mėginį  </span></ng-template>\r\n\r\n\r\n        <mat-card class=\"padekloSvoris\"> <span class=\"a\">Mėginio ID </span>  {{sampleArray[i] && sampleArray[i].sampleId}}</mat-card>\r\n        <mat-card class=\"meginioSvoris\"> <span class=\"a\">Mėginio svoris </span>  {{sampleArray[i] && sampleArray[i].sampleWeight}}</mat-card>\r\n        <div>\r\n          <button mat-button matStepperPrevious>Atgal</button>\r\n          <button mat-button matStepperNext (click)=\"sverti(sampleArray[i]);weightSuccess()\" >Sverti </button>\r\n        </div>\r\n      </mat-step>\r\n      <mat-step>\r\n        <ng-template matStepLabel><span>{{protocol}} protokolo mėginiai pasverti</span></ng-template>\r\n        <p>Pasirinkitę ką norite daryti.</p>\r\n        <div>\r\n          <button mat-button matStepperPrevious>Atgal</button>\r\n          <button mat-button (click)=\"stepper.reset()\">Pildyti iš naujo</button>\r\n          <button mat-button (click)=\"stepper.reset();onSubmit(sampleArray);swalSamplesRegister()\">Išsaugoti</button>\r\n        </div>\r\n      </mat-step>\r\n    </mat-vertical-stepper>\r\n  </form>\r\n</div>\r\n<mat-card class=\"lastWeight\" *ngIf=\"weight\" > Paskutinio svėrimo svoris:<p class=\"weightText\">{{this.weight}}</p>g</mat-card>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/sample/sample-weight/sample-weight-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/sample/sample-weight/sample-weight-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: SampleWeightRoutingModule */

  /***/
  function srcAppSampleSampleWeightSampleWeightRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SampleWeightRoutingModule", function () {
      return SampleWeightRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sample_weight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sample-weight.component */
    "./src/app/sample/sample-weight/sample-weight.component.ts");

    var routes = [{
      path: '',
      component: _sample_weight_component__WEBPACK_IMPORTED_MODULE_3__["SampleWeightComponent"]
    }];

    var SampleWeightRoutingModule = function SampleWeightRoutingModule() {
      _classCallCheck(this, SampleWeightRoutingModule);
    };

    SampleWeightRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SampleWeightRoutingModule);
    /***/
  },

  /***/
  "./src/app/sample/sample-weight/sample-weight.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/sample/sample-weight/sample-weight.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSampleSampleWeightSampleWeightComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\n\r\ndiv {\r\n}\r\n\r\nspan {\r\n  width: 200px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-stepper-vertical {\r\n  margin-top: 8px;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n  width: 500px !important;\r\n  float: left;\r\n}\r\n\r\n.mat-form-field {\r\n  margin-top: 16px;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n}\r\n\r\n.parent {\r\n  position: center;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n\r\ninput .svoris {\r\n  border: 1px solid black;\r\n}\r\n\r\nmat-card {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.lastWeight {\r\n  font-size: 20px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin: 0 auto;\r\n  position: fixed;\r\n  /* center the element */\r\n  right: 0;\r\n  left: 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  /* give it dimensions */\r\n  min-height: 3em;\r\n  width: 450px;\r\n}\r\n\r\n.weightText {\r\n  margin-right: 5px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.padekloSvoris {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.meginioSvoris {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 5px;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n\r\n}\r\n\r\n.a {\r\n  margin-top: -10px;\r\n  font-size: 10px;\r\n  vertical-align: top;\r\n  margin-bottom: 5px;\r\n  margin-left: -10px;\r\n  text-align: left;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FtcGxlL3NhbXBsZS13ZWlnaHQvc2FtcGxlLXdlaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTs7QUFFM0U7QUFDQTs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7O0FBRXJCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zYW1wbGUvc2FtcGxlLXdlaWdodC9zYW1wbGUtd2VpZ2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly91bnBrZy5jb20vYm9vdHN0cmFwQDMuMy43L2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7XHJcblxyXG5kaXYge1xyXG59XHJcblxyXG5zcGFuIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LXN0ZXBwZXItdmVydGljYWwge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXJlbnQge1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlucHV0IC5zdm9yaXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubGFzdFdlaWdodCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAvKiBjZW50ZXIgdGhlIGVsZW1lbnQgKi9cclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAvKiBnaXZlIGl0IGRpbWVuc2lvbnMgKi9cclxuICBtaW4taGVpZ2h0OiAzZW07XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG59XHJcbi53ZWlnaHRUZXh0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4ucGFkZWtsb1N2b3JpcyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tZWdpbmlvU3ZvcmlzIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcblxyXG5cclxuLmEge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/sample/sample-weight/sample-weight.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/sample/sample-weight/sample-weight.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SampleWeightComponent */

  /***/
  function srcAppSampleSampleWeightSampleWeightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SampleWeightComponent", function () {
      return SampleWeightComponent;
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


    var _core_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../core/api.service */
    "./src/app/core/api.service.ts");
    /* harmony import */


    var _tab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../tab.service */
    "./src/app/tab.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    var SampleWeightComponent =
    /*#__PURE__*/
    function () {
      // tslint:disable-next-line:variable-name
      function SampleWeightComponent(_formBuilder, api) {
        _classCallCheck(this, SampleWeightComponent);

        this._formBuilder = _formBuilder;
        this.api = api;
        this.isLinear = false;
        this.sampleArray = [];
        this.newArray = [];
        this.targetInput = 'input0';
        this.encoder = new TextEncoder();
        this.decoder = new TextDecoder();
        this.encoder = new TextEncoder();
        this.decoder = new TextDecoder();
      }

      _createClass(SampleWeightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.secondFormGroup = this._formBuilder.group({
            primaryCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            secondaryCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.formGroup = this._formBuilder.group({
            form: this._formBuilder.array([this.init()])
          });
        }
      }, {
        key: "initz",
        value: function initz() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var port, signals;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!('serial' in navigator)) {
                      _context.next = 19;
                      break;
                    }

                    _context.prev = 1;
                    _context.next = 4;
                    return navigator.serial.requestPort();

                  case 4:
                    port = _context.sent;
                    _context.next = 7;
                    return port.open({
                      baudRate: 9600
                    });

                  case 7:
                    this.reader = port.readable.getReader();
                    _context.next = 10;
                    return port.getSignals();

                  case 10:
                    signals = _context.sent;
                    console.log(signals);
                    _context.next = 17;
                    break;

                  case 14:
                    _context.prev = 14;
                    _context.t0 = _context["catch"](1);
                    console.error('There was an error opening the serial port:', _context.t0);

                  case 17:
                    _context.next = 23;
                    break;

                  case 19:
                    console.error('Web serial doesn\'t seem to be enabled in your browser. Try enabling it by visiting:');
                    console.error('chrome://flags/#enable-experimental-web-platform-features');
                    console.error('opera://flags/#enable-experimental-web-platform-features');
                    console.error('edge://flags/#enable-experimental-web-platform-features');

                  case 23:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 14]]);
          }));
        }
      }, {
        key: "sverti",
        value: function sverti(sample) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var readerData, strin, a, b, weightFromScale, errorMessage;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.reader.read();

                  case 3:
                    readerData = _context2.sent;
                    console.log(readerData);
                    strin = this.decoder.decode(readerData.value).split('\n')[0];
                    a = strin.replace(/\s/g, '');
                    b = a.replace(/[^\d.-]/g, '');

                    if (b.length !== 5 && b.length !== 6 && b.length !== 7 && b.length !== 8) {
                      this.sverti(sample);
                    }

                    console.log(b);
                    weightFromScale = +b;
                    sample.sampleWeight = weightFromScale;
                    this.weight = weightFromScale;
                    return _context2.abrupt("return", this.decoder.decode(readerData.value));

                  case 16:
                    _context2.prev = 16;
                    _context2.t0 = _context2["catch"](0);
                    errorMessage = "error reading data: ".concat(_context2.t0);
                    console.error(errorMessage);
                    return _context2.abrupt("return", errorMessage);

                  case 21:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 16]]);
          }));
        }
      }, {
        key: "init",
        value: function init() {
          return this._formBuilder.group({
            cont1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            cont2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
          });
        }
      }, {
        key: "addItem",
        value: function addItem() {
          this.form = this.formGroup.get('form');
          this.form.push(this.init());
        }
      }, {
        key: "getSamplesByProtocol",
        value: function getSamplesByProtocol(protocol) {
          var _this = this;

          this.api.get("/lei/samples/list/".concat(protocol)).subscribe(function (samples) {
            _this.samples = samples;
            console.log(_this.samples);
            var array = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = _this.samples[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var sample = _step.value;
                var tt = {
                  id: null,
                  protocolId: '',
                  sampleId: '',
                  sampleWeight: null
                };
                tt.id = sample.id;
                tt.protocolId = sample.protocolId;
                tt.sampleId = sample.sampleId;
                array.push(tt);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            _this.sampleArray = array;
            console.log(_this.sampleArray);

            for (var i = 1; i <= _this.sampleArray.length - 1; i++) {
              _this.addItem();
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(tmarray) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.sampleArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var sample = _step2.value;
              console.log(sample);
              this.api.post('/lei/samples', sample).subscribe(function (data) {
                return console.log('Success!', data);
              }, function (error) {
                return console.log('Error', error);
              });
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.setFocus();
        }
      }, {
        key: "setFocus",
        value: function setFocus() {
          var targetElem = document.getElementById(this.targetInput);
          setTimeout(function waitTargetElem() {
            if (document.body.contains(targetElem)) {
              targetElem.focus();
            } else {
              setTimeout(waitTargetElem, 100);
            }
          }, 100);
        }
      }, {
        key: "onChange",
        value: function onChange(event) {
          var index = String(event.selectedIndex);
          this.targetInput = 'input' + index;
          this.setFocus();
        }
      }, {
        key: "weightSuccess",
        value: function weightSuccess() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'center',
            icon: 'success',
            title: 'Mėginys pasvertas',
            showConfirmButton: false,
            timer: 900
          });
        }
      }, {
        key: "swalSamplesRegister",
        value: function swalSamplesRegister() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Svoriai išsaugoti.', '', 'success');
        }
      }]);

      return SampleWeightComponent;
    }();

    SampleWeightComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _core_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    SampleWeightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sample-weight',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sample-weight.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-weight/sample-weight.component.html")).default,
      providers: [_tab_service__WEBPACK_IMPORTED_MODULE_3__["TabService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sample-weight.component.css */
      "./src/app/sample/sample-weight/sample-weight.component.css")).default]
    })], SampleWeightComponent);
    /***/
  },

  /***/
  "./src/app/sample/sample-weight/sample-weight.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/sample/sample-weight/sample-weight.module.ts ***!
    \**************************************************************/

  /*! exports provided: SampleWeightModule */

  /***/
  function srcAppSampleSampleWeightSampleWeightModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SampleWeightModule", function () {
      return SampleWeightModule;
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


    var _sample_weight_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sample-weight-routing.module */
    "./src/app/sample/sample-weight/sample-weight-routing.module.ts");
    /* harmony import */


    var _sample_weight_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sample-weight.component */
    "./src/app/sample/sample-weight/sample-weight.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var SampleWeightModule = function SampleWeightModule() {
      _classCallCheck(this, SampleWeightModule);
    };

    SampleWeightModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_sample_weight_component__WEBPACK_IMPORTED_MODULE_4__["SampleWeightComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _sample_weight_routing_module__WEBPACK_IMPORTED_MODULE_3__["SampleWeightRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"]]
    })], SampleWeightModule);
    /***/
  }
}]);
//# sourceMappingURL=sample-sample-weight-sample-weight-module-es5.js.map