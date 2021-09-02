(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tests-general-moisture-general-moisture-test-general-moisture-test-module"], {
    /***/
    "G1e0":
    /*!**********************************************************************************************!*\
      !*** ./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: GeneralMoistureTestModule */

    /***/
    function G1e0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralMoistureTestModule", function () {
        return GeneralMoistureTestModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _general_moisture_test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./general-moisture-test-routing.module */
      "T3V8");
      /* harmony import */


      var _general_moisture_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./general-moisture-test.component */
      "hCOW");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var GeneralMoistureTestModule = function GeneralMoistureTestModule() {
        _classCallCheck(this, GeneralMoistureTestModule);
      };

      GeneralMoistureTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GeneralMoistureTestModule
      });
      GeneralMoistureTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GeneralMoistureTestModule_Factory(t) {
          return new (t || GeneralMoistureTestModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _general_moisture_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["GeneralMoistureTestRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralMoistureTestModule, {
          declarations: [_general_moisture_test_component__WEBPACK_IMPORTED_MODULE_3__["GeneralMoistureTestComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _general_moisture_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["GeneralMoistureTestRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralMoistureTestModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_general_moisture_test_component__WEBPACK_IMPORTED_MODULE_3__["GeneralMoistureTestComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _general_moisture_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["GeneralMoistureTestRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "T3V8":
    /*!******************************************************************************************************!*\
      !*** ./src/app/tests/general-moisture/general-moisture-test/general-moisture-test-routing.module.ts ***!
      \******************************************************************************************************/

    /*! exports provided: GeneralMoistureTestRoutingModule */

    /***/
    function T3V8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralMoistureTestRoutingModule", function () {
        return GeneralMoistureTestRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _general_moisture_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./general-moisture-test.component */
      "hCOW");

      var routes = [{
        path: '',
        component: _general_moisture_test_component__WEBPACK_IMPORTED_MODULE_2__["GeneralMoistureTestComponent"]
      }];

      var GeneralMoistureTestRoutingModule = function GeneralMoistureTestRoutingModule() {
        _classCallCheck(this, GeneralMoistureTestRoutingModule);
      };

      GeneralMoistureTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GeneralMoistureTestRoutingModule
      });
      GeneralMoistureTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GeneralMoistureTestRoutingModule_Factory(t) {
          return new (t || GeneralMoistureTestRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralMoistureTestRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralMoistureTestRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "hCOW":
    /*!*************************************************************************************************!*\
      !*** ./src/app/tests/general-moisture/general-moisture-test/general-moisture-test.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: GeneralMoistureTestComponent */

    /***/
    function hCOW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralMoistureTestComponent", function () {
        return GeneralMoistureTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/api.service */
      "HyEY");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function GeneralMoistureTestComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u012Eveskite m\u0117gini\u0173 registravimo dat\u0105 yyyyMMdd ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GeneralMoistureTestComponent_mat_step_16_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Sverkit\u0119 ", ctx_r6.tmArray[i_r5] == null ? null : ctx_r6.tmArray[i_r5].protocolId, " protokolo ", ctx_r6.tmArray[i_r5] == null ? null : ctx_r6.tmArray[i_r5].sampleId, " - ", i_r5 % 2 + 1, " m\u0117gin\u012F ");
        }
      }

      function GeneralMoistureTestComponent_mat_step_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralMoistureTestComponent_mat_step_16_ng_template_1_Template, 2, 3, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralMoistureTestComponent_mat_step_16_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var i_r5 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.tmArray[i_r5] && (ctx_r8.tmArray[i_r5].trayId = $event);
          })("keydown.enter", function GeneralMoistureTestComponent_mat_step_16_Template_input_keydown_enter_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var i_r5 = ctx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.sverti(ctx_r10.tmArray[i_r5]);
          })("focusout", function GeneralMoistureTestComponent_mat_step_16_Template_input_focusout_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var i_r5 = ctx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.action(ctx_r11.tmArray[i_r5]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tuscio pad\u0117klo svoris ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pad\u0117klo ir \u0117minio svoris ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Atgal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sekantis ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r5 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "input", i_r5 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.tmArray[i_r5] && ctx_r2.tmArray[i_r5].trayId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.tmArray[i_r5] && ctx_r2.tmArray[i_r5].trayWeight, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.tmArray[i_r5] && ctx_r2.tmArray[i_r5].trayAndSampleWeightBefore, "");
        }
      }

      function GeneralMoistureTestComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.protocol, " protokolo m\u0117giniai pasverti");
        }
      }

      var GeneralMoistureTestComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line:variable-name
        function GeneralMoistureTestComponent(_formBuilder, api) {
          _classCallCheck(this, GeneralMoistureTestComponent);

          this._formBuilder = _formBuilder;
          this.api = api;
          this.isLinear = false;
          this.tray = {}; // tmArray: Array<TotalMoistureSample> = [];

          this.tmArray = [];
          this.fixedArray = [];
          this.newArray = [];
          this.targetInput = 'input0';
        }

        _createClass(GeneralMoistureTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.firstFormGroup = this._formBuilder.group({
              firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.secondFormGroup = this._formBuilder.group({
              primaryCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              secondaryCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.thirdFormGroup = this._formBuilder.group({
              thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.formGroup = this._formBuilder.group({
              form: this._formBuilder.array([this.init()])
            });
          }
        }, {
          key: "init",
          value: function init() {
            return this._formBuilder.group({
              cont1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              cont2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
          }
        }, {
          key: "addItem",
          value: function addItem() {
            this.form = this.formGroup.get('form');
            this.form.push(this.init());
          }
        }, {
          key: "sverti",
          value: function sverti(sample) {
            var _this = this;

            this.api.get('/lei/scales').subscribe(function (weight) {
              _this.weight = weight;
              sample.trayAndSampleWeightBefore = _this.weight;
              console.log(_this.weight);
            });
          }
        }, {
          key: "getSamplesByProtocol",
          value: function getSamplesByProtocol(protocol) {
            var _this2 = this;

            this.api.get("/lei/samples/list/".concat(protocol)).subscribe(function (samples) {
              _this2.samples = samples;
              console.log(_this2.samples);
              var array = [];

              var _iterator = _createForOfIteratorHelper(_this2.samples),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var sample = _step.value;

                  for (var _i = 1; _i <= 2; _i++) {
                    var tt = {
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
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this2.tmArray = array;
              console.log(_this2.tmArray);

              for (var i = 1; i <= _this2.tmArray.length - 1; i++) {
                _this2.addItem();
              }
            });
          }
        }, {
          key: "action",
          value: function action(sample) {
            var _this3 = this;

            this.api.get("/lei/trays/".concat(sample.trayId)).subscribe(function (tray) {
              _this3.tray = tray;
              sample.trayWeight = _this3.tray.trayWeight;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(tmarray) {
            var _iterator2 = _createForOfIteratorHelper(this.tmArray),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var sample = _step2.value;
                sample.trayAndSampleWeightAfter = 0;
                sample.trayAndSampleWeightAfterPlus = 0;
                console.log(sample);
                this.api.post('/lei/journals', sample).subscribe(function (data) {
                  return console.log('Success!', data);
                }, function (error) {
                  return console.log('Error', error);
                });
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(' užregistruotas!', '', 'success');
          }
        }]);

        return GeneralMoistureTestComponent;
      }();

      GeneralMoistureTestComponent.ɵfac = function GeneralMoistureTestComponent_Factory(t) {
        return new (t || GeneralMoistureTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      GeneralMoistureTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeneralMoistureTestComponent,
        selectors: [["app-total-moisture-test"]],
        decls: 32,
        vars: 6,
        consts: [[1, "parent"], [3, "formGroup"], ["formArrayName", "form", 3, "selectionChange"], ["stepper", ""], [3, "stepControl"], ["matStepLabel", ""], ["matInput", "", "id", "input0", "formControlName", "firstCtrl", "required", "", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matStepperNext", "", 3, "click"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], [1, "lastWeight"], [1, "a"], [3, "formGroupName"], ["matInput", "", "placeholder", "Pad\u0117klo numeris", "formControlName", "cont1", "required", "", 3, "id", "ngModel", "ngModelChange", "keydown.enter", "focusout"], [1, "padekloSvoris"], [1, "meginioSvoris"], ["mat-button", "", "matStepperNext", ""]],
        template: function GeneralMoistureTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bendrosios dr\u0117gm\u0117s sv\u0117rimas Nr.1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-vertical-stepper", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function GeneralMoistureTestComponent_Template_mat_vertical_stepper_selectionChange_4_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralMoistureTestComponent_ng_template_8_Template, 2, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Protokolo Nr.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralMoistureTestComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.protocol = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralMoistureTestComponent_Template_button_click_14_listener() {
              return ctx.getSamplesByProtocol(ctx.protocol);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sekantis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GeneralMoistureTestComponent_mat_step_16_Template, 17, 5, "mat-step", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GeneralMoistureTestComponent_ng_template_18_Template, 2, 1, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pasirinkit\u0119 k\u0105 norite daryti.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Atgal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralMoistureTestComponent_Template_button_click_24_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return _r0.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pildyti i\u0161 naujo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralMoistureTestComponent_Template_button_click_26_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              _r0.reset();

              ctx.onSubmit(ctx.tmArray);
              return ctx.swalSamplesRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "I\u0161saugoti");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Paskutinio sv\u0117rimo svoris ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.protocol);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formGroup.controls.form["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weight, "");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatVerticalStepper"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperNext"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperPrevious"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]],
        styles: ["@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-stepper-vertical[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n  width: 500px !important;\r\n  float: left;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.parent[_ngcontent-%COMP%] {\r\n  position: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]   .svoris[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.lastWeight[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin: 0 auto;\r\n  position: fixed;\r\n  \r\n  right: 0;\r\n  left: 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  \r\n  min-height: 3em;\r\n  width: 450px;\r\n}\r\n\r\n.weightText[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.padekloSvoris[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.meginioSvoris[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 5px;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.a[_ngcontent-%COMP%] {\r\n  margin-top: -10px;\r\n  font-size: 10px;\r\n  vertical-align: top;\r\n  margin-bottom: 5px;\r\n  margin-left: -10px;\r\n  text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtbW9pc3R1cmUtdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTs7QUFFM0U7QUFDQTs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7QUFFckI7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJnZW5lcmFsLW1vaXN0dXJlLXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9ib290c3RyYXBAMy4zLjcvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTtcclxuXHJcbmRpdiB7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbmgxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhcmVudCB7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW5wdXQgLnN2b3JpcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sYXN0V2VpZ2h0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8qIGNlbnRlciB0aGUgZWxlbWVudCAqL1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIC8qIGdpdmUgaXQgZGltZW5zaW9ucyAqL1xyXG4gIG1pbi1oZWlnaHQ6IDNlbTtcclxuICB3aWR0aDogNDUwcHg7XHJcbn1cclxuLndlaWdodFRleHQge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5wYWRla2xvU3ZvcmlzIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1lZ2luaW9Tdm9yaXMge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbn1cclxuXHJcblxyXG4uYSB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralMoistureTestComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-total-moisture-test',
            templateUrl: './general-moisture-test.component.html',
            styleUrls: ['./general-moisture-test.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=tests-general-moisture-general-moisture-test-general-moisture-test-module-es5.js.map