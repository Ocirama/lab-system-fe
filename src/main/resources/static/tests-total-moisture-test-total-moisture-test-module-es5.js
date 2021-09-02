(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tests-total-moisture-test-total-moisture-test-module"], {
    /***/
    "6fX+":
    /*!*************************************************************************!*\
      !*** ./src/app/tests/total-moisture-test/total-moisture-test.module.ts ***!
      \*************************************************************************/

    /*! exports provided: TotalMoistureTestModule */

    /***/
    function fX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TotalMoistureTestModule", function () {
        return TotalMoistureTestModule;
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


      var _total_moisture_test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./total-moisture-test-routing.module */
      "QO8o");
      /* harmony import */


      var _total_moisture_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./total-moisture-test.component */
      "MdUo");
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

      var TotalMoistureTestModule = function TotalMoistureTestModule() {
        _classCallCheck(this, TotalMoistureTestModule);
      };

      TotalMoistureTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TotalMoistureTestModule
      });
      TotalMoistureTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TotalMoistureTestModule_Factory(t) {
          return new (t || TotalMoistureTestModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _total_moisture_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["TotalMoistureTestRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TotalMoistureTestModule, {
          declarations: [_total_moisture_test_component__WEBPACK_IMPORTED_MODULE_3__["TotalMoistureTestComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _total_moisture_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["TotalMoistureTestRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalMoistureTestModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_total_moisture_test_component__WEBPACK_IMPORTED_MODULE_3__["TotalMoistureTestComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _total_moisture_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["TotalMoistureTestRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "MdUo":
    /*!****************************************************************************!*\
      !*** ./src/app/tests/total-moisture-test/total-moisture-test.component.ts ***!
      \****************************************************************************/

    /*! exports provided: TotalMoistureTestComponent */

    /***/
    function MdUo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TotalMoistureTestComponent", function () {
        return TotalMoistureTestComponent;
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
      /*! ../../core/api.service */
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

      function TotalMoistureTestComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u012Eveskite protokolo numer\u012F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TotalMoistureTestComponent_mat_step_16_ng_template_1_Template(rf, ctx) {
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

      function TotalMoistureTestComponent_mat_step_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TotalMoistureTestComponent_mat_step_16_ng_template_1_Template, 2, 3, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TotalMoistureTestComponent_mat_step_16_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var i_r5 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.tmArray[i_r5] && (ctx_r8.tmArray[i_r5].trayId = $event);
          })("keydown.enter", function TotalMoistureTestComponent_mat_step_16_Template_input_keydown_enter_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var i_r5 = ctx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.sverti(ctx_r10.tmArray[i_r5]);
          })("focusout", function TotalMoistureTestComponent_mat_step_16_Template_input_focusout_3_listener() {
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

      function TotalMoistureTestComponent_ng_template_18_Template(rf, ctx) {
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

      var TotalMoistureTestComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line:variable-name
        function TotalMoistureTestComponent(_formBuilder, api) {
          _classCallCheck(this, TotalMoistureTestComponent);

          this._formBuilder = _formBuilder;
          this.api = api;
          this.isLinear = false;
          this.tray = {}; // tmArray: Array<TotalMoistureSample> = [];

          this.tmArray = [];
          this.fixedArray = [];
          this.newArray = [];
          this.targetInput = 'input0';
        }

        _createClass(TotalMoistureTestComponent, [{
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

        return TotalMoistureTestComponent;
      }();

      TotalMoistureTestComponent.ɵfac = function TotalMoistureTestComponent_Factory(t) {
        return new (t || TotalMoistureTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      TotalMoistureTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TotalMoistureTestComponent,
        selectors: [["app-total-moisture-test"]],
        decls: 32,
        vars: 6,
        consts: [[1, "parent"], [3, "formGroup"], ["formArrayName", "form", 3, "selectionChange"], ["stepper", ""], [3, "stepControl"], ["matStepLabel", ""], ["matInput", "", "id", "input0", "formControlName", "firstCtrl", "required", "", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matStepperNext", "", 3, "click"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], [1, "lastWeight"], [1, "a"], [3, "formGroupName"], ["matInput", "", "placeholder", "Pad\u0117klo numeris", "formControlName", "cont1", "required", "", 3, "id", "ngModel", "ngModelChange", "keydown.enter", "focusout"], [1, "padekloSvoris"], [1, "meginioSvoris"], ["mat-button", "", "matStepperNext", ""]],
        template: function TotalMoistureTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visumin\u0117s dr\u0117gm\u0117s sv\u0117rimas prie\u0161 d\u017Eiovinim\u0105");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-vertical-stepper", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function TotalMoistureTestComponent_Template_mat_vertical_stepper_selectionChange_4_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TotalMoistureTestComponent_ng_template_8_Template, 2, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Protokolo Nr.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TotalMoistureTestComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.protocol = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TotalMoistureTestComponent_Template_button_click_14_listener() {
              return ctx.getSamplesByProtocol(ctx.protocol);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sekantis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TotalMoistureTestComponent_mat_step_16_Template, 17, 5, "mat-step", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TotalMoistureTestComponent_ng_template_18_Template, 2, 1, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pasirinkit\u0119 k\u0105 norite daryti.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Atgal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TotalMoistureTestComponent_Template_button_click_24_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return _r0.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pildyti i\u0161 naujo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TotalMoistureTestComponent_Template_button_click_26_listener() {
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
        styles: ["@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-stepper-vertical[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n  width: 500px !important;\r\n  float: left;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.parent[_ngcontent-%COMP%] {\r\n  position: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]   .svoris[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.lastWeight[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin: 0 auto;\r\n  position: fixed;\r\n  \r\n  right: 0;\r\n  left: 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  \r\n  min-height: 3em;\r\n  width: 450px;\r\n}\r\n\r\n.weightText[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.padekloSvoris[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.meginioSvoris[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 5px;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.a[_ngcontent-%COMP%] {\r\n  margin-top: -10px;\r\n  font-size: 10px;\r\n  vertical-align: top;\r\n  margin-bottom: 5px;\r\n  margin-left: -10px;\r\n  text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdGFsLW1vaXN0dXJlLXRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7O0FBRTNFO0FBQ0E7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7O0FBRXJCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoidG90YWwtbW9pc3R1cmUtdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2Jvb3RzdHJhcEAzLjMuNy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycpO1xyXG5cclxuZGl2IHtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuaDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFyZW50IHtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pbnB1dCAuc3ZvcmlzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmxhc3RXZWlnaHQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLyogY2VudGVyIHRoZSBlbGVtZW50ICovXHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgLyogZ2l2ZSBpdCBkaW1lbnNpb25zICovXHJcbiAgbWluLWhlaWdodDogM2VtO1xyXG4gIHdpZHRoOiA0NTBweDtcclxufVxyXG4ud2VpZ2h0VGV4dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnBhZGVrbG9Tdm9yaXMge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWVnaW5pb1N2b3JpcyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuXHJcbi5hIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalMoistureTestComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-total-moisture-test',
            templateUrl: './total-moisture-test.component.html',
            styleUrls: ['./total-moisture-test.component.css']
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

    },

    /***/
    "QO8o":
    /*!*********************************************************************************!*\
      !*** ./src/app/tests/total-moisture-test/total-moisture-test-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: TotalMoistureTestRoutingModule */

    /***/
    function QO8o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TotalMoistureTestRoutingModule", function () {
        return TotalMoistureTestRoutingModule;
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


      var _total_moisture_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./total-moisture-test.component */
      "MdUo");

      var routes = [{
        path: '',
        component: _total_moisture_test_component__WEBPACK_IMPORTED_MODULE_2__["TotalMoistureTestComponent"]
      }];

      var TotalMoistureTestRoutingModule = function TotalMoistureTestRoutingModule() {
        _classCallCheck(this, TotalMoistureTestRoutingModule);
      };

      TotalMoistureTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TotalMoistureTestRoutingModule
      });
      TotalMoistureTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TotalMoistureTestRoutingModule_Factory(t) {
          return new (t || TotalMoistureTestRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TotalMoistureTestRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalMoistureTestRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=tests-total-moisture-test-total-moisture-test-module-es5.js.map