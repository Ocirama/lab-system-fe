function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tests-general-moisture-general-moisture-test-second-general-moisture-test-second-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestsGeneralMoistureGeneralMoistureTestSecondGeneralMoistureTestSecondComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Visuminės drėgmės svėrimas po džiovinimo</h1>\r\n<div class=\"parent\">\r\n  <form [formGroup]=\"formGroup\">\r\n    <mat-vertical-stepper #stepper (selectionChange)=\"onChange($event)\" formArrayName=\"form\">\r\n\r\n      <mat-step [stepControl]=\"firstFormGroup\">\r\n        <form [formGroup]=\"firstFormGroup\">\r\n          <ng-template matStepLabel><span> Įveskite padėklo registravimo datą yyyyMMdd </span></ng-template>\r\n          <mat-form-field>\r\n            <mat-label>Data</mat-label>\r\n            <input matInput id=\"input0\" [(ngModel)]=\"date\" formControlName=\"firstCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n            <button mat-button matStepperNext (click)=\"addItem()\" >Sekantis</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step [formGroupName]=\"i\" *ngFor=\"let customerGroup of formGroup.controls.form.controls; let i = index\">\r\n        {{tmArray[i]|json}}\r\n        <ng-template matStepLabel><span> Fiksuokite padėklo numerį ir svorį:  </span></ng-template>\r\n        <mat-form-field>\r\n          <input id=\"input{{i+1}}\" matInput placeholder=\"Padėklo numeris\" [(ngModel)]=\"tmArray[i] && tmArray[i].trayId\"\r\n              (keydown.enter)=\"addItem();sverti(tmArray[i])\"   (focusout)=\"action(tmArray[i])\" formControlName=\"cont1\" required>\r\n        </mat-form-field>\r\n\r\n        <mat-card class=\"padekloSvoris\"> <span class=\"a\">Padėklo svoris po dziovinimo </span>  {{tmArray[i] && tmArray[i].trayAndSampleWeightAfter}}</mat-card>\r\n        <div>\r\n          <button mat-button matStepperPrevious>Atgal</button>\r\n          <button mat-button matStepperNext>Sekantis</button>\r\n          <button mat-button matStepperNext (click)=\"stepper.reset();onSubmit(tmArray);swalSamplesRegister()\" >Baigta</button>\r\n          <button mat-button (click)=\"stepper.reset(); reset()\">Pildyti iš naujo</button>\r\n        </div>\r\n      </mat-step>\r\n    </mat-vertical-stepper>\r\n  </form>\r\n</div>\r\n<mat-card class=\"lastWeight\"> <span class=\"a\"> Paskutinio svėrimo svoris </span>  {{this.weight}}</mat-card>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second-routing.module.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second-routing.module.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: GeneralMoistureTestSecondRoutingModule */

  /***/
  function srcAppTestsGeneralMoistureGeneralMoistureTestSecondGeneralMoistureTestSecondRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralMoistureTestSecondRoutingModule", function () {
      return GeneralMoistureTestSecondRoutingModule;
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


    var _general_moisture_test_second_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./general-moisture-test-second.component */
    "./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.component.ts");

    var routes = [{
      path: '',
      component: _general_moisture_test_second_component__WEBPACK_IMPORTED_MODULE_3__["GeneralMoistureTestSecondComponent"]
    }];

    var GeneralMoistureTestSecondRoutingModule = function GeneralMoistureTestSecondRoutingModule() {
      _classCallCheck(this, GeneralMoistureTestSecondRoutingModule);
    };

    GeneralMoistureTestSecondRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GeneralMoistureTestSecondRoutingModule);
    /***/
  },

  /***/
  "./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.component.css":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.component.css ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestsGeneralMoistureGeneralMoistureTestSecondGeneralMoistureTestSecondComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\n\r\ndiv {\r\n}\r\n\r\nspan {\r\n  width: 200px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-stepper-vertical {\r\n  margin-top: 8px;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n  width: 500px !important;\r\n  float: left;\r\n}\r\n\r\n.mat-form-field {\r\n  margin-top: 16px;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n}\r\n\r\n.parent {\r\n  position: center;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n\r\ninput .svoris {\r\n  border: 1px solid black;\r\n}\r\n\r\nmat-card {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.lastWeight {\r\n  font-size: 20px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin: 0 auto;\r\n  position: fixed;\r\n  /* center the element */\r\n  right: 0;\r\n  left: 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  /* give it dimensions */\r\n  min-height: 3em;\r\n  width: 450px;\r\n}\r\n\r\n.weightText {\r\n  margin-right: 5px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.padekloSvoris {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.meginioSvoris {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 5px;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n\r\n}\r\n\r\n.a {\r\n  margin-top: -10px;\r\n  font-size: 10px;\r\n  vertical-align: top;\r\n  margin-bottom: 5px;\r\n  margin-left: -10px;\r\n  text-align: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHMvZ2VuZXJhbC1tb2lzdHVyZS9nZW5lcmFsLW1vaXN0dXJlLXRlc3Qtc2Vjb25kL2dlbmVyYWwtbW9pc3R1cmUtdGVzdC1zZWNvbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7O0FBRTNFO0FBQ0E7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1COztBQUVyQjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdGVzdHMvZ2VuZXJhbC1tb2lzdHVyZS9nZW5lcmFsLW1vaXN0dXJlLXRlc3Qtc2Vjb25kL2dlbmVyYWwtbW9pc3R1cmUtdGVzdC1zZWNvbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9ib290c3RyYXBAMy4zLjcvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTtcclxuXHJcbmRpdiB7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbmgxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhcmVudCB7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW5wdXQgLnN2b3JpcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sYXN0V2VpZ2h0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8qIGNlbnRlciB0aGUgZWxlbWVudCAqL1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIC8qIGdpdmUgaXQgZGltZW5zaW9ucyAqL1xyXG4gIG1pbi1oZWlnaHQ6IDNlbTtcclxuICB3aWR0aDogNDUwcHg7XHJcbn1cclxuLndlaWdodFRleHQge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5wYWRla2xvU3ZvcmlzIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1lZ2luaW9Tdm9yaXMge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbn1cclxuXHJcblxyXG4uYSB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: GeneralMoistureTestSecondComponent */

  /***/
  function srcAppTestsGeneralMoistureGeneralMoistureTestSecondGeneralMoistureTestSecondComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralMoistureTestSecondComponent", function () {
      return GeneralMoistureTestSecondComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/api.service */
    "./src/app/core/api.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var GeneralMoistureTestSecondComponent =
    /*#__PURE__*/
    function () {
      // tslint:disable-next-line:variable-name
      function GeneralMoistureTestSecondComponent(_formBuilder, api) {
        _classCallCheck(this, GeneralMoistureTestSecondComponent);

        this._formBuilder = _formBuilder;
        this.api = api;
        this.tray = {}; // tmArray: Array<TotalMoistureSample> = [];

        this.tmArray = [];
        this.targetInput = 'input0';
      }

      _createClass(GeneralMoistureTestSecondComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
            form: this._formBuilder.array([])
          });
        }
      }, {
        key: "init",
        value: function init() {
          return this._formBuilder.group({
            cont1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            cont2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "addItem",
        value: function addItem() {
          this.form = this.formGroup.get('form');
          this.form.push(this.init());
          this.tmArray.push(new (
          /*#__PURE__*/
          function () {
            function _class() {
              _classCallCheck(this, _class);
            }

            return _class;
          }())());
        }
      }, {
        key: "sverti",
        value: function sverti(sample) {
          var _this = this;

          this.api.get('/lei/scales').subscribe(function (weight) {
            _this.weight = weight;
            sample.trayAndSampleWeightAfter = _this.weight;
            sample.date = _this.date;
            console.log(_this.weight);
          });
        }
      }, {
        key: "action",
        value: function action(sample) {
          var _this2 = this;

          this.api.get("/lei/trays/".concat(sample.trayId)).subscribe(function (tray) {
            _this2.tray = tray;
            sample.trayWeight = _this2.tray.trayWeight;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(tm) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.tmArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var sample = _step.value;
              console.log(sample);
              this.api.post('/lei/journals/second', sample).subscribe(function (data) {
                return console.log('Success!', data);
              }, function (error) {
                return console.log('Error', error);
              });
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
        key: "swalSamplesRegister",
        value: function swalSamplesRegister() {
          if (this.tmArray !== []) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(' užregistruotas!', '', 'success');
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(' Klaida', '', 'error');
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.tmArray = [];
        }
      }]);

      return GeneralMoistureTestSecondComponent;
    }();

    GeneralMoistureTestSecondComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    GeneralMoistureTestSecondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-total-moisture-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general-moisture-test-second.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./general-moisture-test-second.component.css */
      "./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.component.css")).default]
    })], GeneralMoistureTestSecondComponent);
    /***/
  },

  /***/
  "./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.module.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.module.ts ***!
    \************************************************************************************************************/

  /*! exports provided: GeneralMoistureTestSecondModule */

  /***/
  function srcAppTestsGeneralMoistureGeneralMoistureTestSecondGeneralMoistureTestSecondModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralMoistureTestSecondModule", function () {
      return GeneralMoistureTestSecondModule;
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


    var _general_moisture_test_second_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./general-moisture-test-second-routing.module */
    "./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second-routing.module.ts");
    /* harmony import */


    var _general_moisture_test_second_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./general-moisture-test-second.component */
    "./src/app/tests/general-moisture/general-moisture-test-second/general-moisture-test-second.component.ts");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var GeneralMoistureTestSecondModule = function GeneralMoistureTestSecondModule() {
      _classCallCheck(this, GeneralMoistureTestSecondModule);
    };

    GeneralMoistureTestSecondModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_general_moisture_test_second_component__WEBPACK_IMPORTED_MODULE_4__["GeneralMoistureTestSecondComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _general_moisture_test_second_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralMoistureTestSecondRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]]
    })], GeneralMoistureTestSecondModule);
    /***/
  }
}]);
//# sourceMappingURL=tests-general-moisture-general-moisture-test-second-general-moisture-test-second-module-es5.js.map