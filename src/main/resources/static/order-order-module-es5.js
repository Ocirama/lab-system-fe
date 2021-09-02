(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"], {
    /***/
    "+p+5":
    /*!***************************************!*\
      !*** ./src/app/order/order.module.ts ***!
      \***************************************/

    /*! exports provided: OrderModule */

    /***/
    function p5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
        return OrderModule;
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


      var _order_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-routing.module */
      "DM6G");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _form_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./form/form.component */
      "BIvE");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./modal/modal.component */
      "gp5p");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");

      var OrderModule = function OrderModule() {
        _classCallCheck(this, OrderModule);
      };

      OrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OrderModule
      });
      OrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OrderModule_Factory(t) {
          return new (t || OrderModule)();
        },
        imports: [[_order_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderRoutingModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderModule, {
          declarations: [_form_form_component__WEBPACK_IMPORTED_MODULE_17__["FormComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_19__["ModalComponent"]],
          imports: [_order_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderRoutingModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_form_form_component__WEBPACK_IMPORTED_MODULE_17__["FormComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_19__["ModalComponent"]],
            imports: [_order_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderRoutingModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"]],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_19__["ModalComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "1jcm":
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
      \******************************************************************************/

    /*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */

    /***/
    function jcm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function () {
        return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function () {
        return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function () {
        return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function () {
        return MatSlideToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function () {
        return MatSlideToggleChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function () {
        return MatSlideToggleModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function () {
        return MatSlideToggleRequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function () {
        return _MatSlideToggleRequiredValidatorModule;
      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for `mat-slide-toggle`. */


      var _c0 = ["thumbContainer"];
      var _c1 = ["toggleBar"];
      var _c2 = ["input"];

      var _c3 = function _c3() {
        return {
          enterDuration: 150
        };
      };

      var _c4 = ["*"];
      var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
        providedIn: 'root',
        factory: function factory() {
          return {
            disableToggleValue: false
          };
        }
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Increasing integer for generating unique ids for slide-toggle components.

      var nextUniqueId = 0;
      /** @docs-private */

      var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSlideToggle;
        }),
        multi: true
      };
      /** Change event object emitted by a MatSlideToggle. */

      var MatSlideToggleChange = function MatSlideToggleChange(
      /** The source MatSlideToggle of the event. */
      source,
      /** The new `checked` value of the MatSlideToggle. */
      checked) {
        _classCallCheck(this, MatSlideToggleChange);

        this.source = source;
        this.checked = checked;
      }; // Boilerplate for applying mixins to MatSlideToggle.

      /** @docs-private */


      var MatSlideToggleBase = function MatSlideToggleBase(_elementRef) {
        _classCallCheck(this, MatSlideToggleBase);

        this._elementRef = _elementRef;
      };

      var _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
      /** Represents a slidable "switch" toggle that can be moved between on and off. */


      var MatSlideToggle = /*#__PURE__*/function (_MatSlideToggleMixinB) {
        _inherits(MatSlideToggle, _MatSlideToggleMixinB);

        var _super = _createSuper(MatSlideToggle);

        function MatSlideToggle(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, _animationMode) {
          var _this;

          _classCallCheck(this, MatSlideToggle);

          _this = _super.call(this, elementRef);
          _this._focusMonitor = _focusMonitor;
          _this._changeDetectorRef = _changeDetectorRef;
          _this.defaults = defaults;
          _this._animationMode = _animationMode;

          _this._onChange = function (_) {};

          _this._onTouched = function () {};

          _this._uniqueId = "mat-slide-toggle-".concat(++nextUniqueId);
          _this._required = false;
          _this._checked = false;
          /** Name value will be applied to the input element if present. */

          _this.name = null;
          /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */

          _this.id = _this._uniqueId;
          /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */

          _this.labelPosition = 'after';
          /** Used to set the aria-label attribute on the underlying input element. */

          _this.ariaLabel = null;
          /** Used to set the aria-labelledby attribute on the underlying input element. */

          _this.ariaLabelledby = null;
          /** An event will be dispatched each time the slide-toggle changes its value. */

          _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * An event will be dispatched each time the slide-toggle input is toggled.
           * This event is always emitted when the user toggles the slide toggle, but this does not mean
           * the slide toggle's value has changed.
           */

          _this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          _this.tabIndex = parseInt(tabIndex) || 0;
          return _this;
        }
        /** Whether the slide-toggle is required. */


        _createClass(MatSlideToggle, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this2 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (focusOrigin) {
              // Only forward focus manually when it was received programmatically or through the
              // keyboard. We should not do this for mouse/touch focus for two reasons:
              // 1. It can prevent clicks from landing in Chrome (see #18269).
              // 2. They're already handled by the wrapping `label` element.
              if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                _this2._inputElement.nativeElement.focus();
              } else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then(function () {
                  return _this2._onTouched();
                });
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Method being called whenever the underlying input emits a change event. */

        }, {
          key: "_onChangeEvent",
          value: function _onChangeEvent(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the component's `change` output.
            event.stopPropagation();
            this.toggleChange.emit(); // When the slide toggle's config disables toggle change event by setting
            // `disableToggleValue: true`, the slide toggle's value does not change, and the
            // checked state of the underlying input needs to be changed back.

            if (this.defaults.disableToggleValue) {
              this._inputElement.nativeElement.checked = this.checked;
              return;
            } // Sync the value from the underlying input element with the component instance.


            this.checked = this._inputElement.nativeElement.checked; // Emit our custom change event only if the underlying input emitted one. This ensures that
            // there is no change event, when the checked state changes programmatically.

            this._emitChangeEvent();
          }
          /** Method being called whenever the slide-toggle has been clicked. */

        }, {
          key: "_onInputClick",
          value: function _onInputClick(event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `slide-toggle` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.checked = !!value;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /** Implemented as a part of ControlValueAccessor. */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;

            this._changeDetectorRef.markForCheck();
          }
          /** Focuses the slide-toggle. */

        }, {
          key: "focus",
          value: function focus(options, origin) {
            if (origin) {
              this._focusMonitor.focusVia(this._inputElement, origin, options);
            } else {
              this._inputElement.nativeElement.focus(options);
            }
          }
          /** Toggles the checked state of the slide-toggle. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.checked = !this.checked;

            this._onChange(this.checked);
          }
          /**
           * Emits a change event on the `change` output. Also notifies the FormControl about the change.
           */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this._onChange(this.checked);

            this.change.emit(new MatSlideToggleChange(this, this.checked));
          }
          /** Method being called whenever the label text changes. */

        }, {
          key: "_onLabelTextChange",
          value: function _onLabelTextChange() {
            // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
            // slide-toggle component will be only marked for check, but no actual change detection runs
            // automatically. Instead of going back into the zone in order to trigger a change detection
            // which causes *all* components to be checked (if explicitly marked or not using OnPush),
            // we only trigger an explicit change detection for the slide-toggle view and its children.
            this._changeDetectorRef.detectChanges();
          }
        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /** Whether the slide-toggle element is checked or not. */

        }, {
          key: "checked",
          get: function get() {
            return this._checked;
          },
          set: function set(value) {
            this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            this._changeDetectorRef.markForCheck();
          }
          /** Returns the unique id for the visual hidden input. */

        }, {
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this._uniqueId, "-input");
          }
        }]);

        return MatSlideToggle;
      }(_MatSlideToggleMixinBase);

      MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) {
        return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatSlideToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatSlideToggle,
        selectors: [["mat-slide-toggle"]],
        viewQuery: function MatSlideToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
          }
        },
        hostAttrs: [1, "mat-slide-toggle"],
        hostVars: 12,
        hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-labelledby", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color",
          tabIndex: "tabIndex",
          name: "name",
          id: "id",
          labelPosition: "labelPosition",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          required: "required",
          checked: "checked"
        },
        outputs: {
          change: "change",
          toggleChange: "toggleChange"
        },
        exportAs: ["matSlideToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c4,
        decls: 16,
        vars: 18,
        consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]],
        template: function MatSlideToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) {
              return ctx._onChangeEvent($event);
            })("click", function MatSlideToggle_Template_input_click_4_listener($event) {
              return ctx._onInputClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() {
              return ctx._onLabelTextChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
        styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSlideToggle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatSlideToggle.propDecorators = {
        _thumbEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['thumbContainer']
        }],
        _thumbBarEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['toggleBar']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-labelledby']
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        toggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-slide-toggle',
            exportAs: 'matSlideToggle',
            host: {
              'class': 'mat-slide-toggle',
              '[id]': 'id',
              // Needs to be `-1` so it can still receive programmatic focus.
              '[attr.tabindex]': 'disabled ? null : -1',
              '[attr.aria-label]': 'null',
              '[attr.aria-labelledby]': 'null',
              '[class.mat-checked]': 'checked',
              '[class.mat-disabled]': 'disabled',
              '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
            providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
            inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-labelledby']
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          toggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _thumbEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['thumbContainer']
          }],
          _thumbBarEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['toggleBar']
          }],
          _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['input']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSlideToggleRequiredValidator;
        }),
        multi: true
      };
      /**
       * Validator for Material slide-toggle components with the required attribute in a
       * template-driven form. The default validator for required form controls asserts
       * that the control value is not undefined but that is not appropriate for a slide-toggle
       * where the value is always defined.
       *
       * Required slide-toggle form controls are valid when checked.
       */

      var MatSlideToggleRequiredValidator = /*#__PURE__*/function (_angular_forms__WEBPA) {
        _inherits(MatSlideToggleRequiredValidator, _angular_forms__WEBPA);

        var _super2 = _createSuper(MatSlideToggleRequiredValidator);

        function MatSlideToggleRequiredValidator() {
          _classCallCheck(this, MatSlideToggleRequiredValidator);

          return _super2.apply(this, arguments);
        }

        return MatSlideToggleRequiredValidator;
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxRequiredValidator"]);

      MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) {
        return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator);
      };

      MatSlideToggleRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatSlideToggleRequiredValidator,
        selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatSlideToggleRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
            providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** This module is used by both original and MDC-based slide-toggle implementations. */


      var _MatSlideToggleRequiredValidatorModule = function _MatSlideToggleRequiredValidatorModule() {
        _classCallCheck(this, _MatSlideToggleRequiredValidatorModule);
      };

      _MatSlideToggleRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _MatSlideToggleRequiredValidatorModule
      });
      _MatSlideToggleRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) {
          return new (t || _MatSlideToggleRequiredValidatorModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, {
          declarations: [MatSlideToggleRequiredValidator],
          exports: [MatSlideToggleRequiredValidator]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [MatSlideToggleRequiredValidator],
            declarations: [MatSlideToggleRequiredValidator]
          }]
        }], null, null);
      })();

      var MatSlideToggleModule = function MatSlideToggleModule() {
        _classCallCheck(this, MatSlideToggleModule);
      };

      MatSlideToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatSlideToggleModule
      });
      MatSlideToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatSlideToggleModule_Factory(t) {
          return new (t || MatSlideToggleModule)();
        },
        imports: [[_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSlideToggleModule, {
          declarations: function declarations() {
            return [MatSlideToggle];
          },
          imports: function imports() {
            return [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
          },
          exports: function exports() {
            return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
            exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatSlideToggle]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=slide-toggle.js.map

      /***/

    },

    /***/
    "40Uv":
    /*!*****************************************!*\
      !*** ./src/app/order/form/Customers.ts ***!
      \*****************************************/

    /*! exports provided: customerGroups */

    /***/
    function Uv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerGroups", function () {
        return customerGroups;
      });

      var customerGroups = [{
        letter: 'A',
        names: []
      }, {
        letter: 'B',
        names: []
      }, {
        letter: 'C',
        names: []
      }, {
        letter: 'D',
        names: ['']
      }, {
        letter: 'E',
        names: []
      }, {
        letter: 'F',
        names: []
      }, {
        letter: 'G',
        names: []
      }, {
        letter: 'H',
        names: []
      }, {
        letter: 'I',
        names: []
      }, {
        letter: 'J',
        names: []
      }, {
        letter: 'K',
        names: []
      }, {
        letter: 'L',
        names: []
      }, {
        letter: 'M',
        names: []
      }, {
        letter: 'N',
        names: []
      }, {
        letter: 'O',
        names: []
      }, {
        letter: 'P',
        names: []
      }, {
        letter: 'R',
        names: []
      }, {
        letter: 'S',
        names: []
      }, {
        letter: 'Š',
        names: []
      }, {
        letter: 'T',
        names: []
      }, {
        letter: 'U',
        names: []
      }, {
        letter: 'V',
        names: []
      }];
      /***/
    },

    /***/
    "BIvE":
    /*!**********************************************!*\
      !*** ./src/app/order/form/form.component.ts ***!
      \**********************************************/

    /*! exports provided: _filter, FormComponent */

    /***/
    function BIvE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_filter", function () {
        return _filter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
        return FormComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _DropdownList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./DropdownList */
      "tqVg");
      /* harmony import */


      var _Customers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Customers */
      "40Uv");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal/modal.component */
      "gp5p");
      /* harmony import */


      var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! sweetalert2/src/sweetalert2.scss */
      "QVta");
      /* harmony import */


      var _tab_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../tab.service */
      "uq4O");
      /* harmony import */


      var _SampleType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./SampleType */
      "FBiN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/api.service */
      "HyEY");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _tab_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../tab.directive */
      "0SXx");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function FormComponent_div_11_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u012Eveskite u\u017Esakymo numer\u012F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormComponent_div_11_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Max ", _r1.errors.maxlength.requiredLength, " chars allowed ");
        }
      }

      function FormComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_div_11_small_1_Template, 2, 0, "small", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormComponent_div_11_div_2_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors.maxlength);
        }
      }

      function FormComponent_mat_optgroup_18_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_mat_optgroup_18_mat_option_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var name_r21 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            ctx_r22.swalCustomerDelete();
            return ctx_r22["delete"](name_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var name_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", name_r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", name_r21, " ");
        }
      }

      function FormComponent_mat_optgroup_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-optgroup", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_mat_optgroup_18_mat_option_1_Template, 8, 2, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", group_r19.letter);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r19.names);
        }
      }

      function FormComponent_div_25_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u012Eveskite u\u017Esakov\u0105 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_div_25_small_1_Template, 2, 0, "small", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors.required);
        }
      }

      function FormComponent_div_31_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u012Eveskite m\u0117gini\u0173 kiek\u012F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_div_31_small_1_Template, 2, 0, "small", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r7.errors.required);
        }
      }

      function FormComponent_div_37_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u012Eveskite daromus tyrimus ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_div_37_small_1_Template, 2, 0, "small", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.errors.required);
        }
      }

      function FormComponent_mat_optgroup_45_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_mat_optgroup_45_mat_option_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

            var name_r29 = ctx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            ctx_r30.swalCustomerDelete();
            return ctx_r30.delete2(name_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var name_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", name_r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", name_r29, " ");
        }
      }

      function FormComponent_mat_optgroup_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-optgroup", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_mat_optgroup_45_mat_option_1_Template, 8, 2, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", group_r27.letter);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r27.names);
        }
      }

      function FormComponent_div_52_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u012Eveskite kuro r\u016B\u0161\u012F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_div_52_small_1_Template, 2, 0, "small", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r11.errors.required);
        }
      }

      function FormComponent_label_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " M\u0117gini\u0173 s\u0105ra\u0161as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormComponent_li_59_div_5_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u012Eveskite m\u0117ginio ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormComponent_li_59_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_li_59_div_5_small_1_Template, 2, 0, "small", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r36.errors.required);
        }
      }

      function FormComponent_li_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_li_59_Template_input_ngModelChange_2_listener($event) {
            var sample_r33 = ctx.$implicit;
            return sample_r33.sampleId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FormComponent_li_59_div_5_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sample_r33 = ctx.$implicit;
          var i_r34 = ctx.index;

          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("tabIndex", i_r34 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "sampleId-", i_r34, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", sample_r33.sampleId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r36.touched && !_r36.valid);
        }
      } // tslint:disable-next-line:variable-name


      var _filter = function _filter(opt, value) {
        var filterValue = value.toLowerCase();
        return opt.filter(function (item) {
          return item.toLowerCase().indexOf(filterValue) === 0;
        });
      };

      var FormComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line:variable-name
        function FormComponent(_formBuilder, // tslint:disable-next-line:variable-name
        _formBuilder2, api, dialog) {
          _classCallCheck(this, FormComponent);

          this._formBuilder = _formBuilder;
          this._formBuilder2 = _formBuilder2;
          this.api = api;
          this.dialog = dialog;
          this.color = 'accent';
          this.checked = false;
          this.disabled = false;
          this.orders = {};
          this.samples = {};
          this.typeHasError = false;
          this.customers = [];
          this.sampleTypes = [];
          this.sampleList = [];
          this.showVar = false;
          this.dropdownList = Array();
          this.selectedItems = [];
          this.dropdownSettings = {};
          this.customerForm = this._formBuilder.group({
            customerGroup: ''
          });
          this.sampleTypeForm = this._formBuilder2.group({
            sampleTypeGroup: ''
          });
          this.submitted = false;
        }

        _createClass(FormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.orders.year = new Date().getFullYear();
            this.selectedOption = 'Kuro rūšis';
            this.samples.sampleWeight = 0;
            this.dropdownList = _DropdownList__WEBPACK_IMPORTED_MODULE_3__["DropdownList"]; // tslint:disable-next-line:no-unused-expression

            this.dropdownSettings = {
              singleSelection: false,
              idField: 'item_id',
              textField: 'item_text',
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              itemsShowLimit: 3,
              allowSearchFilter: true
            };
          }
        }, {
          key: "getSampleTypes",
          value: function getSampleTypes() {
            var _this3 = this;

            this.sampleTypes = [];

            _SampleType__WEBPACK_IMPORTED_MODULE_9__["sampleTypeGroups"].forEach(function (item) {
              return item.names = [];
            });

            this.api.get('/lei/st').subscribe(function (samples) {
              _this3.sampleTypes = samples;

              var _iterator = _createForOfIteratorHelper(_this3.sampleTypes),
                  _step;

              try {
                var _loop = function _loop() {
                  var entry = _step.value;
                  var letteri = entry.title.charAt(0);
                  var name = entry.title;

                  var result = _SampleType__WEBPACK_IMPORTED_MODULE_9__["sampleTypeGroups"].find(function (_ref) {
                    var letter = _ref.letter;
                    return letter === letteri;
                  });

                  result.names.push(name);
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
            this.sampleTypeGroupOptions = this.sampleTypeForm.get('sampleTypeGroup').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return _this3._filterGroup2(value);
            }));
          }
        }, {
          key: "getCustomers",
          value: function getCustomers() {
            var _this4 = this;

            this.customers = [];

            _Customers__WEBPACK_IMPORTED_MODULE_4__["customerGroups"].forEach(function (item) {
              return item.names = [];
            });

            this.api.get('/lei/customers').subscribe(function (users) {
              _this4.customers = users;
              console.log(users);

              var _iterator2 = _createForOfIteratorHelper(_this4.customers),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var entry = _step2.value;
                  var letteri = entry.title.charAt(0);
                  var name = entry.title;

                  var result = _Customers__WEBPACK_IMPORTED_MODULE_4__["customerGroups"].find(function (_ref2) {
                    var letter = _ref2.letter;
                    return letter === letteri;
                  });

                  result.names.push(name);
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            });
            this.customerGroupOptions = this.customerForm.get('customerGroup').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return _this4._filterGroup(value);
            }));
          }
        }, {
          key: "onDropDownClose",
          value: function onDropDownClose(items) {
            if (items[0].item_text === 'Miksas') {
              this.orders.test = this.orders.orderAmount + ' - Drėgmė, 1 - Pelenai, Šilumingumas';
            } else {
              var strings = [];

              var _iterator3 = _createForOfIteratorHelper(items),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var item = _step3.value;
                  strings.push(item.item_text);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              this.orders.test = strings.join(', ');
            }
          }
        }, {
          key: "delete",
          value: function _delete(titlee) {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Ar tikrai norite ištrinti šį užsakovą?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'Atšaukti',
              confirmButtonText: 'Taip, ištrinti!'
            }).then(function (result) {
              if (result.value) {
                // tslint:disable-next-line:no-shadowed-variable
                var _result = _this5.customers.find(function (_ref3) {
                  var title = _ref3.title;
                  return title === titlee;
                });

                _this5.api["delete"]("/lei/customers/".concat(_result.title)).subscribe(function () {
                  return _this5.customers = _this5.customers.filter(function (item) {
                    return item.title !== _result.title;
                  });
                });

                _Customers__WEBPACK_IMPORTED_MODULE_4__["customerGroups"].push();

                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Ištrinta!', 'Užsakovas ištrintas.');
              }
            });
          }
        }, {
          key: "delete2",
          value: function delete2(titlee) {
            var _this6 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Ar tikrai norite ištrinti šį kuro tipą?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'Atšaukti',
              confirmButtonText: 'Taip, ištrinti!'
            }).then(function (result) {
              if (result.value) {
                // tslint:disable-next-line:no-shadowed-variable
                var _result2 = _this6.sampleTypes.find(function (_ref4) {
                  var title = _ref4.title;
                  return title === titlee;
                });

                _this6.api["delete"]("/lei/st/".concat(_result2.title)).subscribe(function () {
                  return _this6.sampleTypes = _this6.sampleTypes.filter(function (item) {
                    return item.title !== _result2.title;
                  });
                });

                _SampleType__WEBPACK_IMPORTED_MODULE_9__["sampleTypeGroups"].push();

                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Ištrinta!');
              }
            });
          }
        }, {
          key: "childFunction",
          value: function childFunction(value) {
            if (value.orderAmount < 100) {
              for (var i = 0; i <= value.orderAmount - 1; i++) {
                // tslint:disable-next-line:new-parens
                this.sampleList[i] = new ( /*#__PURE__*/function () {
                  function _class() {
                    _classCallCheck(this, _class);
                  }

                  return _class;
                }())();
                this.sampleList[i].protocolId = value.protocolId;
                this.sampleList[i].sampleWeight = 0;
              }
            } else {
              console.error('Too many samples ! Try less than 15.');
            }
          }
        }, {
          key: "toggleChild",
          value: function toggleChild() {
            this.showVar = !this.showVar;
          }
        }, {
          key: "protocolChange",
          value: function protocolChange(value) {
            this.samples.protocolId = value;
          }
        }, {
          key: "validateType",
          value: function validateType(value) {
            if (value === 'default') {
              this.typeHasError = true;
            } else {
              this.typeHasError = false;
            }
          }
        }, {
          key: "_filterGroup",
          value: function _filterGroup(value) {
            if (value) {
              return _Customers__WEBPACK_IMPORTED_MODULE_4__["customerGroups"].map(function (group) {
                return {
                  letter: group.letter,
                  names: _filter(group.names, value)
                };
              }).filter(function (group) {
                return group.names.length > 0;
              });
            }

            return _Customers__WEBPACK_IMPORTED_MODULE_4__["customerGroups"];
          }
        }, {
          key: "_filterGroup2",
          value: function _filterGroup2(value) {
            if (value) {
              return _SampleType__WEBPACK_IMPORTED_MODULE_9__["sampleTypeGroups"].map(function (group) {
                return {
                  letter: group.letter,
                  names: _filter(group.names, value)
                };
              }).filter(function (group) {
                return group.names.length > 0;
              });
            }

            return _SampleType__WEBPACK_IMPORTED_MODULE_9__["sampleTypeGroups"];
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            try {
              this.api.post('/lei/orders', this.orders).subscribe(function (data) {
                return console.log('Success!', data);
              }, function (error) {
                return console.log('Error', error);
              });
            } catch (e) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Klaida', '', 'error');
            }
          }
        }, {
          key: "delay",
          value: function delay(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          }
        }, {
          key: "onSubmit2",
          value: function onSubmit2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

              var _iterator4, _step4, sample;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _iterator4 = _createForOfIteratorHelper(this.sampleList);
                      _context.prev = 1;

                      _iterator4.s();

                    case 3:
                      if ((_step4 = _iterator4.n()).done) {
                        _context.next = 10;
                        break;
                      }

                      sample = _step4.value;
                      _context.next = 7;
                      return this.delay(300);

                    case 7:
                      this.api.post('/lei/samples', sample).subscribe(function (result) {
                        var row = _this7.sampleList.find(function (item) {
                          return item.id === result.id;
                        });

                        if (row) {
                          row.protocolId = result.protocolId;
                          row.sampleId = result.sampleId;
                          row.sampleWeight = result.sampleWeight;
                        } else {
                          _this7.sampleList = [].concat(_toConsumableArray(_this7.sampleList), [result]);
                        }
                      });

                    case 8:
                      _context.next = 3;
                      break;

                    case 10:
                      _context.next = 15;
                      break;

                    case 12:
                      _context.prev = 12;
                      _context.t0 = _context["catch"](1);

                      _iterator4.e(_context.t0);

                    case 15:
                      _context.prev = 15;

                      _iterator4.f();

                      return _context.finish(15);

                    case 18:
                      _context.next = 20;
                      return this.delay(300);

                    case 20:
                      this.sampleList = [];

                    case 21:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 12, 15, 18]]);
            }));
          }
        }, {
          key: "addCustomer",
          value: function addCustomer() {
            var _this8 = this;

            var dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], {
              width: '250px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function (data) {
              if (data) {
                _this8.api.post('/lei/customers', data).subscribe(function (result) {
                  var row = _this8.customers.find(function (item) {
                    return item.id === result.id;
                  });

                  if (row) {
                    row.title = result.title;
                  } else {
                    _this8.customers = [].concat(_toConsumableArray(_this8.customers), [result]);
                  }
                });
              }
            });
          }
        }, {
          key: "openDialog2",
          value: function openDialog2() {
            var _this9 = this;

            var dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], {
              width: '250px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function (data) {
              if (data) {
                _this9.api.post('/lei/st', data).subscribe(function (result) {
                  var row = _this9.sampleTypes.find(function (item) {
                    return item.id === result.id;
                  });

                  if (row) {
                    row.title = result.title;
                  } else {
                    _this9.sampleTypes = [].concat(_toConsumableArray(_this9.sampleTypes), [result]);
                  }
                });
              }

              _this9.swalCustomerAdd();
            });
          }
        }, {
          key: "clear",
          value: function clear() {
            this.orders.sampleType = '';
            this.orders.protocolId = '';
            this.orders.test = '';
            this.orders.customer = '';
            this.orders.orderAmount = null;
            this.sampleList = [];
          }
        }, {
          key: "swalOrderRegister",
          value: function swalOrderRegister() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Protokolas užregistruotas!', '', 'success');
          }
        }, {
          key: "swalCustomerAdd",
          value: function swalCustomerAdd() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Užsakovas pridėtas!', '', 'success');
          }
        }, {
          key: "swalCustomerDelete",
          value: function swalCustomerDelete() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Užsakovas ištrintas.', '', 'success');
          }
        }]);

        return FormComponent;
      }();

      FormComponent.ɵfac = function FormComponent_Factory(t) {
        return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]));
      };

      FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FormComponent,
        selectors: [["app-form"]],
        inputs: {
          value: "value"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_tab_service__WEBPACK_IMPORTED_MODULE_8__["TabService"]])],
        decls: 60,
        vars: 25,
        consts: [[1, "container-fluid"], [3, "hidden"], ["novalidate", "", "id", "orderForm", 3, "ngSubmit"], ["orderForm", "ngForm"], [1, "form-group"], ["for", "protocolId"], ["required", "", "pattern", "^[0-9]*$", "name", "protocolId", "id", "protocolId", "tabIndex", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["protocol", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "customer"], ["name", "customer", "type", "text", "id", "customer", "required", "", 1, "form-control", 3, "ngModel", "matAutocomplete", "click", "ngModelChange"], ["customer", "ngModel"], ["autoGroup", "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], ["for", "sampleAmount"], ["required", "", "name", "orderAmount", "pattern", "^[0-9]*$", "id", "sampleAmount", 1, "form-control", 3, "ngModel", "focusout", "ngModelChange"], ["sampleAmount", "ngModel"], ["name", "tests", "id", "tests", 3, "placeholder", "settings", "ngModel", "data", "ngModelChange", "onDropDownClose"], ["tests", "ngModel"], ["for", "sampleType"], ["name", "sampleType", "type", "text", "id", "sampleType", "required", "", 1, "form-control", 3, "ngModel", "matAutocomplete", "click", "ngModelChange"], ["sampleType", "ngModel"], ["autoGroup2", "matAutocomplete"], ["mat-button", "", "type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["mat-button", "", "type", "button", 1, "btn", "btn-secondary", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-danger"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "aParent"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["type", "text", "required", "", 1, "form-control", 3, "tabIndex", "name", "ngModel", "ngModelChange"], ["ft01", "ngModel", "samplesS", "ngModel"]],
        template: function FormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "U\u017Esakymo forma");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_4_listener() {
              ctx.onSubmit();
              return ctx.onSubmit2();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Protokolas");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.protocolChange($event);
            })("ngModelChange", function FormComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.orders.protocolId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FormComponent_div_11_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " U\u017Esakovas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_Template_input_click_14_listener() {
              return ctx.getCustomers();
            })("ngModelChange", function FormComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.orders.customer = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-autocomplete", null, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FormComponent_mat_optgroup_18_Template, 2, 2, "mat-optgroup", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_Template_button_click_20_listener() {
              return ctx.addCustomer();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Prid\u0117ti nauj\u0105 u\u017Esakov\u0105");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, FormComponent_div_25_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Kiekis ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function FormComponent_Template_input_focusout_29_listener() {
              ctx.toggleChild();
              return ctx.childFunction(ctx.orders);
            })("ngModelChange", function FormComponent_Template_input_ngModelChange_29_listener($event) {
              return ctx.orders.orderAmount = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, FormComponent_div_31_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Tyrimai");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ng-multiselect-dropdown", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_ng_multiselect_dropdown_ngModelChange_35_listener($event) {
              return ctx.selectedItems = $event;
            })("onDropDownClose", function FormComponent_Template_ng_multiselect_dropdown_onDropDownClose_35_listener() {
              return ctx.onDropDownClose(ctx.selectedItems);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, FormComponent_div_37_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Kuro r\u016B\u0161is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_Template_input_click_41_listener() {
              return ctx.getSampleTypes();
            })("ngModelChange", function FormComponent_Template_input_ngModelChange_41_listener($event) {
              return ctx.orders.sampleType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-autocomplete", null, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, FormComponent_mat_optgroup_45_Template, 2, 2, "mat-optgroup", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_Template_button_click_47_listener() {
              return ctx.openDialog2();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Prid\u0117ti nauj\u0105 r\u016B\u0161\u012F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, FormComponent_div_52_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_Template_button_click_53_listener() {
              return ctx.swalOrderRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Registruoti ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_Template_button_click_55_listener() {
              return ctx.clear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Valyti");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ol", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, FormComponent_label_58_Template, 2, 0, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, FormComponent_li_59_Template, 6, 4, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orders.protocolId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.touched && !_r1.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orders.customer)("matAutocomplete", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 21, ctx.customerGroupOptions));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.touched && !_r3.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orders.orderAmount);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r7.touched && !_r7.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "-")("settings", ctx.dropdownSettings)("ngModel", ctx.selectedItems)("data", ctx.dropdownList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.touched && !_r9.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orders.sampleType)("matAutocomplete", _r12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 23, ctx.sampleTypeGroupOptions));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r11.touched && !_r11.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.form.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showVar);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sampleList);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"], _tab_directive__WEBPACK_IMPORTED_MODULE_13__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["MultiSelectComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOptgroup"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]],
        styles: ["@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  border-color: #3f51b5;\r\n  border-style: none none double none;\r\n}\r\n.example-form[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n  max-width: 1000px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n\r\n}\r\n.example-h2[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n.example-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n.example-margin[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n padding-bottom: 50px;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n  padding-right: 8px;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\ndiv[_ngcontent-%COMP%]{\r\n\r\n}\r\n.example-margin[_ngcontent-%COMP%]{\r\nmargin-right: 50px;\r\n}\r\n.form-control.ng-touched.ng-invalid[_ngcontent-%COMP%]{\r\n  border:2px solid red;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n  width: 600px;\r\n  border-color: #3f51b5;\r\n  border-style: none none double none;\r\n}\r\nol[_ngcontent-%COMP%]{\r\n  font-size: 25px;\r\n}\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 5px;\r\n}\r\n.aParent[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  float: left;\r\n  clear: none;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDJFQUEyRTtBQUMzRTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjOztBQUVoQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztDQUNaLG9CQUFvQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7O0FBRWpCIiwiZmlsZSI6ImZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2Jvb3RzdHJhcEAzLjMuNy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycpO1xyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcclxuICBib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBkb3VibGUgbm9uZTtcclxufVxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxufVxyXG4uZXhhbXBsZS1oMiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5kaXZ7XHJcblxyXG59XHJcbi5leGFtcGxlLW1hcmdpbntcclxubWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wubmctdG91Y2hlZC5uZy1pbnZhbGlke1xyXG4gIGJvcmRlcjoycHggc29saWQgcmVkO1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcclxuICBib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBkb3VibGUgbm9uZTtcclxufVxyXG5vbHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgd2lkdGg6IDVweDtcclxufVxyXG4uYVBhcmVudCBkaXYge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNsZWFyOiBub25lO1xyXG59XHJcbmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-form',
            templateUrl: './form.component.html',
            providers: [_tab_service__WEBPACK_IMPORTED_MODULE_8__["TabService"]],
            styleUrls: ['./form.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
          }, {
            type: _core_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]
          }];
        }, {
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "DM6G":
    /*!***********************************************!*\
      !*** ./src/app/order/order-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: OrderRoutingModule */

    /***/
    function DM6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function () {
        return OrderRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form/form.component */
      "BIvE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]
      }];

      var OrderRoutingModule = function OrderRoutingModule() {
        _classCallCheck(this, OrderRoutingModule);
      };

      OrderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OrderRoutingModule
      });
      OrderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OrderRoutingModule_Factory(t) {
          return new (t || OrderRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Egam":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js ***!
      \***********************************************************************************************/

    /*! exports provided: MultiSelectComponent, NgMultiSelectDropDownModule, ɵa, ɵb, ɵc */

    /***/
    function Egam(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function () {
        return MultiSelectComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgMultiSelectDropDownModule", function () {
        return NgMultiSelectDropDownModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return DROPDOWN_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return ListFilterPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return ClickOutsideDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MultiSelectComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0._placeholder);
        }
      }

      function MultiSelectComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_span_4_Template_a_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var item_r7 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.onItemClick($event, item_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;
          var k_r8 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", k_r8 > ctx_r1._settings.itemsShowLimit - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.text, " ");
        }
      }

      function MultiSelectComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r2.itemShowRemaining(), "");
        }
      }

      function MultiSelectComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_10_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.toggleSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r3.isAllItemsSelected())("disabled", ctx_r3.disabled || ctx_r3.isLimitSelectionReached());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r3.isAllItemsSelected() ? ctx_r3._settings.selectAllText : ctx_r3._settings.unSelectAllText);
        }
      }

      function MultiSelectComponent_li_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.filter.text = $event;
          })("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.onFilterTextChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", ctx_r4.disabled)("placeholder", ctx_r4._settings.searchPlaceholderText)("ngModel", ctx_r4.filter.text);
        }
      }

      function MultiSelectComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_13_Template_li_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var item_r16 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.onItemClick($event, item_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r16 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r5.isSelected(item_r16))("disabled", ctx_r5.disabled || ctx_r5.isLimitSelectionReached() && !ctx_r5.isSelected(item_r16) || item_r16.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", item_r16.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.text);
        }
      }

      function MultiSelectComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6._settings.noDataAvailablePlaceholderText);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "dropdown-multiselect--active": a0
        };
      };

      var ListItem = function ListItem(source) {
        _classCallCheck(this, ListItem);

        if (typeof source === 'string' || typeof source === 'number') {
          this.id = this.text = source;
          this.isDisabled = false;
        }

        if (typeof source === 'object') {
          this.id = source.id;
          this.text = source.text;
          this.isDisabled = source.isDisabled;
        }
      };

      var ListFilterPipe = /*#__PURE__*/function () {
        function ListFilterPipe() {
          _classCallCheck(this, ListFilterPipe);
        }

        _createClass(ListFilterPipe, [{
          key: "transform",
          value: function transform(items, filter) {
            var _this10 = this;

            if (!items || !filter) {
              return items;
            }

            return items.filter(function (item) {
              return _this10.applyFilter(item, filter);
            });
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(item, filter) {
            if (typeof item.text === 'string' && typeof filter.text === 'string') {
              return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
            } else {
              return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
            }
          }
        }]);

        return ListFilterPipe;
      }();

      ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) {
        return new (t || ListFilterPipe)();
      };

      ListFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "multiSelectFilter",
        type: ListFilterPipe,
        pure: false
      });
      var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MultiSelectComponent;
        }),
        multi: true
      };

      var noop = function noop() {};

      var ɵ0 = noop;

      var MultiSelectComponent = /*#__PURE__*/function () {
        function MultiSelectComponent(listFilterPipe) {
          _classCallCheck(this, MultiSelectComponent);

          this.listFilterPipe = listFilterPipe;
          this._data = [];
          this.selectedItems = [];
          this.isDropdownOpen = true;
          this._placeholder = "Select";
          this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object

          this._sourceDataFields = []; // store source data fields names

          this.filter = new ListItem(this.data);
          this.defaultSettings = {
            singleSelection: false,
            idField: "id",
            textField: "text",
            disabledField: "isDisabled",
            enableCheckAll: true,
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: "Search",
            noDataAvailablePlaceholderText: "No data available",
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false,
            allowRemoteDataSearch: false
          };
          this.disabled = false;
          this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onTouchedCallback = noop;
          this.onChangeCallback = noop;
        }

        _createClass(MultiSelectComponent, [{
          key: "onFilterTextChange",
          value: function onFilterTextChange($event) {
            this.onFilterChange.emit($event);
          }
        }, {
          key: "onItemClick",
          value: function onItemClick($event, item) {
            if (this.disabled || item.isDisabled) {
              return false;
            }

            var found = this.isSelected(item);
            var allowAdd = this._settings.limitSelection === -1 || this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection;

            if (!found) {
              if (allowAdd) {
                this.addSelected(item);
              }
            } else {
              this.removeSelected(item);
            }

            if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
              this.closeDropdown();
            }
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this11 = this;

            if (value !== undefined && value !== null && value.length > 0) {
              if (this._settings.singleSelection) {
                try {
                  if (value.length >= 1) {
                    var firstItem = value[0];
                    this.selectedItems = [typeof firstItem === "string" || typeof firstItem === "number" ? new ListItem(firstItem) : new ListItem({
                      id: firstItem[this._settings.idField],
                      text: firstItem[this._settings.textField],
                      isDisabled: firstItem[this._settings.disabledField]
                    })];
                  }
                } catch (e) {// console.error(e.body.msg);
                }
              } else {
                var _data = value.map(function (item) {
                  return typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
                    id: item[_this11._settings.idField],
                    text: item[_this11._settings.textField],
                    isDisabled: item[_this11._settings.disabledField]
                  });
                });

                if (this._settings.limitSelection > 0) {
                  this.selectedItems = _data.splice(0, this._settings.limitSelection);
                } else {
                  this.selectedItems = _data;
                }
              }
            } else {
              this.selectedItems = [];
            }

            this.onChangeCallback(value);
          } // From ControlValueAccessor interface

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChangeCallback = fn;
          } // From ControlValueAccessor interface

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouchedCallback = fn;
          } // Set touched on blur

        }, {
          key: "onTouched",
          value: function onTouched() {
            this.closeDropdown();
            this.onTouchedCallback();
          }
        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return item.id;
          }
        }, {
          key: "isSelected",
          value: function isSelected(clickedItem) {
            var found = false;
            this.selectedItems.forEach(function (item) {
              if (clickedItem.id === item.id) {
                found = true;
              }
            });
            return found;
          }
        }, {
          key: "isLimitSelectionReached",
          value: function isLimitSelectionReached() {
            return this._settings.limitSelection === this.selectedItems.length;
          }
        }, {
          key: "isAllItemsSelected",
          value: function isAllItemsSelected() {
            // get disabld item count
            var filteredItems = this.listFilterPipe.transform(this._data, this.filter);
            var itemDisabledCount = filteredItems.filter(function (item) {
              return item.isDisabled;
            }).length; // take disabled items into consideration when checking

            if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
              return false;
            }

            return filteredItems.length === this.selectedItems.length + itemDisabledCount;
          }
        }, {
          key: "showButton",
          value: function showButton() {
            if (!this._settings.singleSelection) {
              if (this._settings.limitSelection > 0) {
                return false;
              } // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;


              return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
            } else {
              // should be disabled in single selection mode
              return false;
            }
          }
        }, {
          key: "itemShowRemaining",
          value: function itemShowRemaining() {
            return this.selectedItems.length - this._settings.itemsShowLimit;
          }
        }, {
          key: "addSelected",
          value: function addSelected(item) {
            if (this._settings.singleSelection) {
              this.selectedItems = [];
              this.selectedItems.push(item);
            } else {
              this.selectedItems.push(item);
            }

            this.onChangeCallback(this.emittedValue(this.selectedItems));
            this.onSelect.emit(this.emittedValue(item));
          }
        }, {
          key: "removeSelected",
          value: function removeSelected(itemSel) {
            var _this12 = this;

            this.selectedItems.forEach(function (item) {
              if (itemSel.id === item.id) {
                _this12.selectedItems.splice(_this12.selectedItems.indexOf(item), 1);
              }
            });
            this.onChangeCallback(this.emittedValue(this.selectedItems));
            this.onDeSelect.emit(this.emittedValue(itemSel));
          }
        }, {
          key: "emittedValue",
          value: function emittedValue(val) {
            var _this13 = this;

            var selected = [];

            if (Array.isArray(val)) {
              val.map(function (item) {
                selected.push(_this13.objectify(item));
              });
            } else {
              if (val) {
                return this.objectify(val);
              }
            }

            return selected;
          }
        }, {
          key: "objectify",
          value: function objectify(val) {
            if (this._sourceDataType === 'object') {
              var obj = {};
              obj[this._settings.idField] = val.id;
              obj[this._settings.textField] = val.text;

              if (this._sourceDataFields.includes(this._settings.disabledField)) {
                obj[this._settings.disabledField] = val.isDisabled;
              }

              return obj;
            }

            if (this._sourceDataType === 'number') {
              return Number(val.id);
            } else {
              return val.text;
            }
          }
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(evt) {
            evt.preventDefault();

            if (this.disabled && this._settings.singleSelection) {
              return;
            }

            this._settings.defaultOpen = !this._settings.defaultOpen;

            if (!this._settings.defaultOpen) {
              this.onDropDownClose.emit();
            }
          }
        }, {
          key: "closeDropdown",
          value: function closeDropdown() {
            this._settings.defaultOpen = false; // clear search text

            if (this._settings.clearSearchFilter) {
              this.filter.text = "";
            }

            this.onDropDownClose.emit();
          }
        }, {
          key: "toggleSelectAll",
          value: function toggleSelectAll() {
            if (this.disabled) {
              return false;
            }

            if (!this.isAllItemsSelected()) {
              // filter out disabled item first before slicing
              this.selectedItems = this.listFilterPipe.transform(this._data, this.filter).filter(function (item) {
                return !item.isDisabled;
              }).slice();
              this.onSelectAll.emit(this.emittedValue(this.selectedItems));
            } else {
              this.selectedItems = [];
              this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
            }

            this.onChangeCallback(this.emittedValue(this.selectedItems));
          }
        }, {
          key: "getFields",
          value: function getFields(inputData) {
            var fields = [];

            if (typeof inputData !== "object") {
              return fields;
            } // tslint:disable-next-line:forin


            for (var prop in inputData) {
              fields.push(prop);
            }

            return fields;
          }
        }, {
          key: "placeholder",
          set: function set(value) {
            if (value) {
              this._placeholder = value;
            } else {
              this._placeholder = "Select";
            }
          }
        }, {
          key: "settings",
          set: function set(value) {
            if (value) {
              this._settings = Object.assign(this.defaultSettings, value);
            } else {
              this._settings = Object.assign(this.defaultSettings);
            }
          }
        }, {
          key: "data",
          set: function set(value) {
            var _this14 = this;

            if (!value) {
              this._data = [];
            } else {
              var firstItem = value[0];
              this._sourceDataType = typeof firstItem;
              this._sourceDataFields = this.getFields(firstItem);
              this._data = value.map(function (item) {
                return typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
                  id: item[_this14._settings.idField],
                  text: item[_this14._settings.textField],
                  isDisabled: item[_this14._settings.disabledField]
                });
              });
            }
          }
        }]);

        return MultiSelectComponent;
      }();

      MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) {
        return new (t || MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ListFilterPipe));
      };

      MultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MultiSelectComponent,
        selectors: [["ng-multiselect-dropdown"]],
        hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          disabled: "disabled",
          placeholder: "placeholder",
          settings: "settings",
          data: "data"
        },
        outputs: {
          onFilterChange: "onFilterChange",
          onDropDownClose: "onDropDownClose",
          onSelect: "onSelect",
          onDeSelect: "onDeSelect",
          onSelectAll: "onSelectAll",
          onDeSelectAll: "onDeSelectAll"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR])],
        decls: 16,
        vars: 19,
        consts: [["tabindex", "0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], [4, "ngIf"], ["class", "selected-item", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "float", "right !important", "padding-right", "4px", 3, "ngClass"], ["style", "padding-right: 6px;", 4, "ngIf"], [1, "dropdown-multiselect__caret"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], [1, "selected-item", 3, "hidden"], [2, "padding-top", "2px", "padding-left", "2px", "color", "white", 3, "click"], [2, "padding-right", "6px"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "readOnly", "placeholder", "ngModel", "ngModelChange"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", 3, "checked", "disabled"], [1, "no-data"]],
        template: function MultiSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_Template_div_blur_0_listener() {
              return ctx.onTouched();
            })("clickOutside", function MultiSelectComponent_Template_div_clickOutside_0_listener() {
              return ctx.closeDropdown();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_Template_span_click_2_listener($event) {
              return ctx.toggleDropdown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MultiSelectComponent_span_3_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MultiSelectComponent_span_4_Template, 4, 2, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MultiSelectComponent_span_6_Template, 2, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MultiSelectComponent_li_10_Template, 4, 3, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MultiSelectComponent_li_11_Template, 2, 3, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MultiSelectComponent_li_13_Template, 4, 4, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "multiSelectFilter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MultiSelectComponent_li_15_Template, 3, 1, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItems.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedItems)("ngForTrackBy", ctx.trackByFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx._settings.defaultOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemShowRemaining() > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx._settings.defaultOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && !ctx._settings.singleSelection && ctx._settings.enableCheckAll && ctx._settings.limitSelection === -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && ctx._settings.allowSearchFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx._settings.maxHeight + "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 14, ctx._data, ctx.filter));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._data.length == 0 && !ctx._settings.allowRemoteDataSearch);
          }
        },
        directives: function directives() {
          return [ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]];
        },
        pipes: function pipes() {
          return [ListFilterPipe];
        },
        styles: [".multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0;border-color:#999 transparent;content:\"\"}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect--active[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{transform:rotateZ(180deg)}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0;width:100%;padding:0 0 0 26px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#e4e3e3}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"],
        changeDetection: 0
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], MultiSelectComponent.prototype, "placeholder", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MultiSelectComponent.prototype, "disabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], MultiSelectComponent.prototype, "settings", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], MultiSelectComponent.prototype, "data", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onFilterChange"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelectComponent.prototype, "onFilterChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDropDownClose"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelectComponent.prototype, "onDropDownClose", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelect"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelectComponent.prototype, "onSelect", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelect"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelectComponent.prototype, "onDeSelect", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelectAll"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelectComponent.prototype, "onSelectAll", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelectAll"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelectComponent.prototype, "onDeSelectAll", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("blur"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MultiSelectComponent.prototype, "onTouched", null);
      MultiSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ListFilterPipe])], MultiSelectComponent);

      var ClickOutsideDirective = /*#__PURE__*/function () {
        function ClickOutsideDirective(_elementRef) {
          _classCallCheck(this, ClickOutsideDirective);

          this._elementRef = _elementRef;
          this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ClickOutsideDirective, [{
          key: "onClick",
          value: function onClick(event, targetElement) {
            if (!targetElement) {
              return;
            }

            var clickedInside = this._elementRef.nativeElement.contains(targetElement);

            if (!clickedInside) {
              this.clickOutside.emit(event);
            }
          }
        }]);

        return ClickOutsideDirective;
      }();

      ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
        return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: ClickOutsideDirective,
        selectors: [["", "clickOutside", ""]],
        hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event, $event.target);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
          }
        },
        outputs: {
          clickOutside: "clickOutside"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ClickOutsideDirective.prototype, "clickOutside", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MouseEvent, HTMLElement]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ClickOutsideDirective.prototype, "onClick", null);
      ClickOutsideDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ClickOutsideDirective);
      var NgMultiSelectDropDownModule_1;

      var NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = /*#__PURE__*/function () {
        function NgMultiSelectDropDownModule() {
          _classCallCheck(this, NgMultiSelectDropDownModule);
        }

        _createClass(NgMultiSelectDropDownModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: NgMultiSelectDropDownModule_1
            };
          }
        }]);

        return NgMultiSelectDropDownModule;
      }();

      NgMultiSelectDropDownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: NgMultiSelectDropDownModule
      });
      NgMultiSelectDropDownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function NgMultiSelectDropDownModule_Factory(t) {
          return new (t || NgMultiSelectDropDownModule)();
        },
        providers: [ListFilterPipe],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListFilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
          args: [{
            name: 'multiSelectFilter',
            pure: false
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MultiSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "ng-multiselect-dropdown",
            template: "<div tabindex=\"0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\n      <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\n        {{item.text}}\n        <a style=\"padding-top:2px;padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\n      </span>\n      <span [ngClass]=\"{ 'dropdown-multiselect--active': _settings.defaultOpen }\" style=\"float:right !important;padding-right:4px\">\n        <span style=\"padding-right: 6px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n        <span class=\"dropdown-multiselect__caret\"></span>\n      </span>\n    </span>\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n        <input type=\"checkbox\" [attr.aria-label]=\"item.text\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\n        <div>{{item.text}}</div>\n      </li>\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\n      </li>\n    </ul>\n  </div>\n</div>\n",
            providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0;border-color:#999 transparent;content:\"\"}.multiselect-dropdown .dropdown-btn .dropdown-multiselect--active .dropdown-multiselect__caret{transform:rotateZ(180deg)}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox:hover{background-color:#e4e3e3}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"]
          }]
        }], function () {
          return [{
            type: ListFilterPipe
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onFilterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onFilterChange"]
          }],
          onDropDownClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDropDownClose"]
          }],
          onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onSelect"]
          }],
          onDeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDeSelect"]
          }],
          onSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onSelectAll"]
          }],
          onDeSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDeSelectAll"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          // Set touched on blur
          onTouched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["blur"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClickOutsideDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[clickOutside]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:click', ['$event', '$event.target']]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgMultiSelectDropDownModule, {
          declarations: function declarations() {
            return [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]];
          },
          exports: function exports() {
            return [MultiSelectComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMultiSelectDropDownModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
            providers: [ListFilterPipe],
            exports: [MultiSelectComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-multiselect-dropdown.js.map

      /***/

    },

    /***/
    "FBiN":
    /*!******************************************!*\
      !*** ./src/app/order/form/SampleType.ts ***!
      \******************************************/

    /*! exports provided: sampleTypeGroups */

    /***/
    function FBiN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sampleTypeGroups", function () {
        return sampleTypeGroups;
      });

      var sampleTypeGroups = [{
        letter: 'A',
        names: []
      }, {
        letter: 'B',
        names: []
      }, {
        letter: 'C',
        names: []
      }, {
        letter: 'D',
        names: ['']
      }, {
        letter: 'E',
        names: []
      }, {
        letter: 'F',
        names: []
      }, {
        letter: 'G',
        names: []
      }, {
        letter: 'H',
        names: []
      }, {
        letter: 'I',
        names: []
      }, {
        letter: 'J',
        names: []
      }, {
        letter: 'K',
        names: []
      }, {
        letter: 'L',
        names: []
      }, {
        letter: 'M',
        names: []
      }, {
        letter: 'N',
        names: []
      }, {
        letter: 'O',
        names: []
      }, {
        letter: 'P',
        names: []
      }, {
        letter: 'R',
        names: []
      }, {
        letter: 'S',
        names: []
      }, {
        letter: 'Š',
        names: []
      }, {
        letter: 'T',
        names: []
      }, {
        letter: 'U',
        names: []
      }, {
        letter: 'V',
        names: []
      }];
      /***/
    },

    /***/
    "QVta":
    /*!*******************************************************!*\
      !*** ./node_modules/sweetalert2/src/sweetalert2.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function QVta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".swal2-popup.swal2-toast {\n  flex-direction: row;\n  align-items: center;\n  width: auto;\n  padding: 0.625em;\n  overflow-y: hidden;\n  background: #fff;\n  box-shadow: 0 0 0.625em #d9d9d9;\n}\n.swal2-popup.swal2-toast .swal2-header {\n  flex-direction: row;\n  padding: 0;\n}\n.swal2-popup.swal2-toast .swal2-title {\n  flex-grow: 1;\n  justify-content: flex-start;\n  margin: 0 0.6em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-footer {\n  margin: 0.5em 0 0;\n  padding: 0.5em 0 0;\n  font-size: 0.8em;\n}\n.swal2-popup.swal2-toast .swal2-close {\n  position: static;\n  width: 0.8em;\n  height: 0.8em;\n  line-height: 0.8;\n}\n.swal2-popup.swal2-toast .swal2-content {\n  justify-content: flex-start;\n  padding: 0;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-icon {\n  width: 2em;\n  min-width: 2em;\n  height: 2em;\n  margin: 0;\n}\n.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n  display: flex;\n  align-items: center;\n  font-size: 1.8em;\n  font-weight: bold;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n    font-size: 0.25em;\n  }\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  top: 0.875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-actions {\n  flex-basis: auto !important;\n  width: auto;\n  height: auto;\n  margin: 0 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-styled {\n  margin: 0 0.3125em;\n  padding: 0.3125em 0.625em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-styled:focus {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4);\n}\n.swal2-popup.swal2-toast .swal2-success {\n  border-color: #a5dc86;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 1.6em;\n  height: 3em;\n  transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.8em;\n  left: -0.5em;\n  transform: rotate(-45deg);\n  transform-origin: 2em 2em;\n  border-radius: 4em 0 0 4em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.25em;\n  left: 0.9375em;\n  transform-origin: 0 1.5em;\n  border-radius: 0 4em 4em 0;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n  top: 0;\n  left: 0.4375em;\n  width: 0.4375em;\n  height: 2.6875em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line] {\n  height: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 1.125em;\n  left: 0.1875em;\n  width: 0.75em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long] {\n  top: 0.9375em;\n  right: 0.1875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {\n  -webkit-animation: swal2-toast-animate-success-line-tip 0.75s;\n          animation: swal2-toast-animate-success-line-tip 0.75s;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {\n  -webkit-animation: swal2-toast-animate-success-line-long 0.75s;\n          animation: swal2-toast-animate-success-line-long 0.75s;\n}\n.swal2-popup.swal2-toast.swal2-show {\n  -webkit-animation: swal2-toast-show 0.5s;\n          animation: swal2-toast-show 0.5s;\n}\n.swal2-popup.swal2-toast.swal2-hide {\n  -webkit-animation: swal2-toast-hide 0.1s forwards;\n          animation: swal2-toast-hide 0.1s forwards;\n}\n.swal2-container {\n  display: flex;\n  position: fixed;\n  z-index: 1060;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 0.625em;\n  overflow-x: hidden;\n  transition: background-color 0.1s;\n  -webkit-overflow-scrolling: touch;\n}\n.swal2-container.swal2-backdrop-show, .swal2-container.swal2-noanimation {\n  background: rgba(0, 0, 0, 0.4);\n}\n.swal2-container.swal2-backdrop-hide {\n  background: transparent !important;\n}\n.swal2-container.swal2-top {\n  align-items: flex-start;\n}\n.swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n.swal2-container.swal2-center {\n  align-items: center;\n}\n.swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n  align-items: center;\n  justify-content: flex-start;\n}\n.swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n.swal2-container.swal2-bottom {\n  align-items: flex-end;\n}\n.swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n  align-items: flex-end;\n  justify-content: flex-start;\n}\n.swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.swal2-container.swal2-bottom > :first-child, .swal2-container.swal2-bottom-start > :first-child, .swal2-container.swal2-bottom-left > :first-child, .swal2-container.swal2-bottom-end > :first-child, .swal2-container.swal2-bottom-right > :first-child {\n  margin-top: auto;\n}\n.swal2-container.swal2-grow-fullscreen > .swal2-modal {\n  display: flex !important;\n  flex: 1;\n  align-self: stretch;\n  justify-content: center;\n}\n.swal2-container.swal2-grow-row > .swal2-modal {\n  display: flex !important;\n  flex: 1;\n  align-content: center;\n  justify-content: center;\n}\n.swal2-container.swal2-grow-column {\n  flex: 1;\n  flex-direction: column;\n}\n.swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n  align-items: center;\n}\n.swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n  align-items: flex-start;\n}\n.swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n  align-items: flex-end;\n}\n.swal2-container.swal2-grow-column > .swal2-modal {\n  display: flex !important;\n  flex: 1;\n  align-content: center;\n  justify-content: center;\n}\n.swal2-container.swal2-no-transition {\n  transition: none !important;\n}\n.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen) > .swal2-modal {\n  margin: auto;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-container .swal2-modal {\n    margin: 0 !important;\n  }\n}\n.swal2-popup {\n  display: none;\n  position: relative;\n  box-sizing: border-box;\n  flex-direction: column;\n  justify-content: center;\n  width: 32em;\n  max-width: 100%;\n  padding: 1.25em;\n  border: none;\n  border-radius: 0.3125em;\n  background: #fff;\n  font-family: inherit;\n  font-size: 1rem;\n}\n.swal2-popup:focus {\n  outline: none;\n}\n.swal2-popup.swal2-loading {\n  overflow-y: hidden;\n}\n.swal2-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 1.8em;\n}\n.swal2-title {\n  position: relative;\n  max-width: 100%;\n  margin: 0 0 0.4em;\n  padding: 0;\n  color: #595959;\n  font-size: 1.875em;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  word-wrap: break-word;\n}\n.swal2-actions {\n  display: flex;\n  z-index: 1;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: 1.25em auto 0;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n  opacity: 0.4;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:active {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\n}\n.swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n  box-sizing: border-box;\n  width: 2.5em;\n  height: 2.5em;\n  margin: 0.46875em;\n  padding: 0;\n  -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n          animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n  border: 0.25em solid transparent;\n  border-radius: 100%;\n  border-color: transparent;\n  background-color: transparent !important;\n  color: transparent !important;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n  margin-right: 30px;\n  margin-left: 30px;\n}\n.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n  content: \"\";\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin-left: 5px;\n  -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n          animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n  border: 3px solid #999999;\n  border-radius: 50%;\n  border-right-color: transparent;\n  box-shadow: 1px 1px 1px #fff;\n}\n.swal2-styled {\n  margin: 0.3125em;\n  padding: 0.625em 2em;\n  box-shadow: none;\n  font-weight: 500;\n}\n.swal2-styled:not([disabled]) {\n  cursor: pointer;\n}\n.swal2-styled.swal2-confirm {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #3085d6;\n  color: #fff;\n  font-size: 1.0625em;\n}\n.swal2-styled.swal2-cancel {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #aaa;\n  color: #fff;\n  font-size: 1.0625em;\n}\n.swal2-styled:focus {\n  outline: none;\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4);\n}\n.swal2-styled::-moz-focus-inner {\n  border: 0;\n}\n.swal2-footer {\n  justify-content: center;\n  margin: 1.25em 0 0;\n  padding: 1em 0 0;\n  border-top: 1px solid #eee;\n  color: #545454;\n  font-size: 1em;\n}\n.swal2-timer-progress-bar-container {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 0.25em;\n  overflow: hidden;\n  border-bottom-right-radius: 0.3125em;\n  border-bottom-left-radius: 0.3125em;\n}\n.swal2-timer-progress-bar {\n  width: 100%;\n  height: 0.25em;\n  background: rgba(0, 0, 0, 0.2);\n}\n.swal2-image {\n  max-width: 100%;\n  margin: 1.25em auto;\n}\n.swal2-close {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  right: 0;\n  align-items: center;\n  justify-content: center;\n  width: 1.2em;\n  height: 1.2em;\n  padding: 0;\n  overflow: hidden;\n  transition: color 0.1s ease-out;\n  border: none;\n  border-radius: 0;\n  background: transparent;\n  color: #cccccc;\n  font-family: serif;\n  font-size: 2.5em;\n  line-height: 1.2;\n  cursor: pointer;\n}\n.swal2-close:hover {\n  transform: none;\n  background: transparent;\n  color: #f27474;\n}\n.swal2-close::-moz-focus-inner {\n  border: 0;\n}\n.swal2-content {\n  z-index: 1;\n  justify-content: center;\n  margin: 0;\n  padding: 0 1.6em;\n  color: #545454;\n  font-size: 1.125em;\n  font-weight: normal;\n  line-height: normal;\n  text-align: center;\n  word-wrap: break-word;\n}\n.swal2-input,\n.swal2-file,\n.swal2-textarea,\n.swal2-select,\n.swal2-radio,\n.swal2-checkbox {\n  margin: 1em auto;\n}\n.swal2-input,\n.swal2-file,\n.swal2-textarea {\n  box-sizing: border-box;\n  width: 100%;\n  transition: border-color 0.3s, box-shadow 0.3s;\n  border: 1px solid #d9d9d9;\n  border-radius: 0.1875em;\n  background: inherit;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n  color: inherit;\n  font-size: 1.125em;\n}\n.swal2-input.swal2-inputerror,\n.swal2-file.swal2-inputerror,\n.swal2-textarea.swal2-inputerror {\n  border-color: #f27474 !important;\n  box-shadow: 0 0 2px #f27474 !important;\n}\n.swal2-input:focus,\n.swal2-file:focus,\n.swal2-textarea:focus {\n  border: 1px solid #b4dbed;\n  outline: none;\n  box-shadow: 0 0 3px #c4e6f5;\n}\n.swal2-input::-moz-placeholder, .swal2-file::-moz-placeholder, .swal2-textarea::-moz-placeholder {\n  color: #cccccc;\n}\n.swal2-input::placeholder,\n.swal2-file::placeholder,\n.swal2-textarea::placeholder {\n  color: #cccccc;\n}\n.swal2-range {\n  margin: 1em auto;\n  background: #fff;\n}\n.swal2-range input {\n  width: 80%;\n}\n.swal2-range output {\n  width: 20%;\n  color: inherit;\n  font-weight: 600;\n  text-align: center;\n}\n.swal2-range input,\n.swal2-range output {\n  height: 2.625em;\n  padding: 0;\n  font-size: 1.125em;\n  line-height: 2.625em;\n}\n.swal2-input {\n  height: 2.625em;\n  padding: 0 0.75em;\n}\n.swal2-input[type=number] {\n  max-width: 10em;\n}\n.swal2-file {\n  background: inherit;\n  font-size: 1.125em;\n}\n.swal2-textarea {\n  height: 6.75em;\n  padding: 0.75em;\n}\n.swal2-select {\n  min-width: 50%;\n  max-width: 100%;\n  padding: 0.375em 0.625em;\n  background: inherit;\n  color: inherit;\n  font-size: 1.125em;\n}\n.swal2-radio,\n.swal2-checkbox {\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  color: inherit;\n}\n.swal2-radio label,\n.swal2-checkbox label {\n  margin: 0 0.6em;\n  font-size: 1.125em;\n}\n.swal2-radio input,\n.swal2-checkbox input {\n  margin: 0 0.4em;\n}\n.swal2-validation-message {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  padding: 0.625em;\n  overflow: hidden;\n  background: #f0f0f0;\n  color: #666666;\n  font-size: 1em;\n  font-weight: 300;\n}\n.swal2-validation-message::before {\n  content: \"!\";\n  display: inline-block;\n  width: 1.5em;\n  min-width: 1.5em;\n  height: 1.5em;\n  margin: 0 0.625em;\n  border-radius: 50%;\n  background-color: #f27474;\n  color: #fff;\n  font-weight: 600;\n  line-height: 1.5em;\n  text-align: center;\n}\n.swal2-icon {\n  position: relative;\n  box-sizing: content-box;\n  justify-content: center;\n  width: 5em;\n  height: 5em;\n  margin: 1.25em auto 1.875em;\n  border: 0.25em solid transparent;\n  border-radius: 50%;\n  font-family: inherit;\n  line-height: 5em;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.swal2-icon .swal2-icon-content {\n  display: flex;\n  align-items: center;\n  font-size: 3.75em;\n}\n.swal2-icon.swal2-error {\n  border-color: #f27474;\n  color: #f27474;\n}\n.swal2-icon.swal2-error .swal2-x-mark {\n  position: relative;\n  flex-grow: 1;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  display: block;\n  position: absolute;\n  top: 2.3125em;\n  width: 2.9375em;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #f27474;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 1.0625em;\n  transform: rotate(45deg);\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 1em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-error.swal2-icon-show {\n  -webkit-animation: swal2-animate-error-icon 0.5s;\n          animation: swal2-animate-error-icon 0.5s;\n}\n.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark {\n  -webkit-animation: swal2-animate-error-x-mark 0.5s;\n          animation: swal2-animate-error-x-mark 0.5s;\n}\n.swal2-icon.swal2-warning {\n  border-color: #facea8;\n  color: #f8bb86;\n}\n.swal2-icon.swal2-info {\n  border-color: #9de0f6;\n  color: #3fc3ee;\n}\n.swal2-icon.swal2-question {\n  border-color: #c9dae1;\n  color: #87adbd;\n}\n.swal2-icon.swal2-success {\n  border-color: #a5dc86;\n  color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 3.75em;\n  height: 7.5em;\n  transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.4375em;\n  left: -2.0635em;\n  transform: rotate(-45deg);\n  transform-origin: 3.75em 3.75em;\n  border-radius: 7.5em 0 0 7.5em;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.6875em;\n  left: 1.875em;\n  transform: rotate(-45deg);\n  transform-origin: 0 3.75em;\n  border-radius: 0 7.5em 7.5em 0;\n}\n.swal2-icon.swal2-success .swal2-success-ring {\n  position: absolute;\n  z-index: 2;\n  top: -0.25em;\n  left: -0.25em;\n  box-sizing: content-box;\n  width: 100%;\n  height: 100%;\n  border: 0.25em solid rgba(165, 220, 134, 0.3);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success .swal2-success-fix {\n  position: absolute;\n  z-index: 1;\n  top: 0.5em;\n  left: 1.625em;\n  width: 0.4375em;\n  height: 5.625em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line] {\n  display: block;\n  position: absolute;\n  z-index: 2;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 2.875em;\n  left: 0.8125em;\n  width: 1.5625em;\n  transform: rotate(45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=long] {\n  top: 2.375em;\n  right: 0.5em;\n  width: 2.9375em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip {\n  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n          animation: swal2-animate-success-line-tip 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long {\n  -webkit-animation: swal2-animate-success-line-long 0.75s;\n          animation: swal2-animate-success-line-long 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right {\n  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n          animation: swal2-rotate-success-circular-line 4.25s ease-in;\n}\n.swal2-progress-steps {\n  align-items: center;\n  margin: 0 0 1.25em;\n  padding: 0;\n  background: inherit;\n  font-weight: 600;\n}\n.swal2-progress-steps li {\n  display: inline-block;\n  position: relative;\n}\n.swal2-progress-steps .swal2-progress-step {\n  z-index: 20;\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  background: #3085d6;\n  color: #fff;\n  line-height: 2em;\n  text-align: center;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {\n  background: #3085d6;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background: #add8e6;\n  color: #fff;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line {\n  background: #add8e6;\n}\n.swal2-progress-steps .swal2-progress-step-line {\n  z-index: 10;\n  width: 2.5em;\n  height: 0.4em;\n  margin: 0 -1px;\n  background: #3085d6;\n}\n[class^=swal2] {\n  -webkit-tap-highlight-color: transparent;\n}\n.swal2-show {\n  -webkit-animation: swal2-show 0.3s;\n          animation: swal2-show 0.3s;\n}\n.swal2-hide {\n  -webkit-animation: swal2-hide 0.15s forwards;\n          animation: swal2-hide 0.15s forwards;\n}\n.swal2-noanimation {\n  transition: none;\n}\n.swal2-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n.swal2-rtl .swal2-close {\n  right: auto;\n  left: 0;\n}\n.swal2-rtl .swal2-timer-progress-bar {\n  right: 0;\n  left: auto;\n}\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important;\n  }\n  .swal2-range output {\n    display: none;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important;\n  }\n  .swal2-range output {\n    display: none;\n  }\n}\n@-moz-document url-prefix() {\n  .swal2-close:focus {\n    outline: 2px solid rgba(50, 100, 150, 0.4);\n  }\n}\n@-webkit-keyframes swal2-toast-show {\n  0% {\n    transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    transform: translateY(0) rotateZ(0deg);\n  }\n}\n@keyframes swal2-toast-show {\n  0% {\n    transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    transform: translateY(0) rotateZ(0deg);\n  }\n}\n@-webkit-keyframes swal2-toast-hide {\n  100% {\n    transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@keyframes swal2-toast-hide {\n  100% {\n    transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@-webkit-keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@-webkit-keyframes swal2-show {\n  0% {\n    transform: scale(0.7);\n  }\n  45% {\n    transform: scale(1.05);\n  }\n  80% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes swal2-show {\n  0% {\n    transform: scale(0.7);\n  }\n  45% {\n    transform: scale(1.05);\n  }\n  80% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes swal2-hide {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@keyframes swal2-hide {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@-webkit-keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@-webkit-keyframes swal2-rotate-success-circular-line {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes swal2-rotate-success-circular-line {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@-webkit-keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes swal2-animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes swal2-rotate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes swal2-rotate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow: hidden;\n}\nbody.swal2-height-auto {\n  height: auto !important;\n}\nbody.swal2-no-backdrop .swal2-container {\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  max-width: calc(100% - 0.625em * 2);\n  background-color: transparent !important;\n}\nbody.swal2-no-backdrop .swal2-container > .swal2-modal {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top {\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top-start, body.swal2-no-backdrop .swal2-container.swal2-top-left {\n  top: 0;\n  left: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top-end, body.swal2-no-backdrop .swal2-container.swal2-top-right {\n  top: 0;\n  right: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center-start, body.swal2-no-backdrop .swal2-container.swal2-center-left {\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center-end, body.swal2-no-backdrop .swal2-container.swal2-center-right {\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom-start, body.swal2-no-backdrop .swal2-container.swal2-bottom-left {\n  bottom: 0;\n  left: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom-end, body.swal2-no-backdrop .swal2-container.swal2-bottom-right {\n  right: 0;\n  bottom: 0;\n}\n@media print {\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n    overflow-y: scroll !important;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden=true] {\n    display: none;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {\n    position: static !important;\n  }\n}\nbody.swal2-toast-shown .swal2-container {\n  background-color: transparent;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-end, body.swal2-toast-shown .swal2-container.swal2-top-right {\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-start, body.swal2-toast-shown .swal2-container.swal2-top-left {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-start, body.swal2-toast-shown .swal2-container.swal2-center-left {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-end, body.swal2-toast-shown .swal2-container.swal2-center-right {\n  top: 50%;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-start, body.swal2-toast-shown .swal2-container.swal2-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-end, body.swal2-toast-shown .swal2-container.swal2-bottom-right {\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: auto;\n}\nbody.swal2-toast-column .swal2-toast {\n  flex-direction: column;\n  align-items: stretch;\n}\nbody.swal2-toast-column .swal2-toast .swal2-actions {\n  flex: 1;\n  align-self: stretch;\n  height: 2.2em;\n  margin-top: 0.3125em;\n}\nbody.swal2-toast-column .swal2-toast .swal2-loading {\n  justify-content: center;\n}\nbody.swal2-toast-column .swal2-toast .swal2-input {\n  height: 2em;\n  margin: 0.3125em auto;\n  font-size: 1em;\n}\nbody.swal2-toast-column .swal2-toast .swal2-validation-message {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjc3NcXF90b2FzdHMuc2NzcyIsIi4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcc3dlZXRhbGVydDIuc2NzcyIsIi4uXFwuLlxcLi5cXHNjc3NcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXHNjc3NcXF9jb3JlLnNjc3MiLCIuLlxcLi5cXC4uXFxzY3NzXFxfcG9seWZpbGxzLnNjc3MiLCIuLlxcLi5cXC4uXFxzY3NzXFxfdG9hc3RzLWFuaW1hdGlvbnMuc2NzcyIsIi4uXFwuLlxcLi5cXHNjc3NcXF9hbmltYXRpb25zLnNjc3MiLCIuLlxcLi5cXC4uXFxzY3NzXFxfYm9keS5zY3NzIiwiLi5cXC4uXFwuLlxcc2Nzc1xcX3RvYXN0cy1ib2R5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0MrS2dCO0VEOUtoQixnQkMrS2tCO0VEOUtsQixrQkFBQTtFQUNBLGdCQ1BrQjtFRFFsQiwrQkNzS3FCO0FDdEt6QjtBRkVJO0VBQ0UsbUJBQUE7RUFDQSxVQ3lLdUI7QUN6SzdCO0FGR0k7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQ29LcUI7RURuS3JCLGNDb0t3QjtBQ3JLOUI7QUZJSTtFQUNFLGlCQ3VLc0I7RUR0S3RCLGtCQ3NLc0I7RURyS3RCLGdCQ3VLeUI7QUN6Sy9CO0FGS0k7RUFDRSxnQkFBQTtFQUNBLFlDa0oyQjtFRGpKM0IsYUNrSjRCO0VEako1QixnQkNrSmlDO0FDckp2QztBRk1JO0VBQ0UsMkJBQUE7RUFDQSxVQ21Kd0I7RURsSnhCLGNDbUowQjtBQ3ZKaEM7QUZPSTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUVMTjtBRk9NO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRUxSO0FDN0NFO0VIOENJO0lBT0ksaUJBQUE7RUVKUjtBQUNGO0FGUVE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBRU5WO0FGV1E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBRVRWO0FGV1U7RUFDRSxjQUFBO0FFVFo7QUZZVTtFQUNFLGVBQUE7QUVWWjtBRmdCSTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRWROO0FGaUJJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNDaUcwQjtBQ2hIaEM7QUZpQk07RUFDRSw2REMrRjhCO0FDOUd0QztBRm1CSTtFQUNFLHFCQzlEVTtBQzZDaEI7QUZtQk07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBRWpCUjtBRm1CUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FFakJWO0FGb0JRO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FFbEJWO0FGc0JNO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUVwQlI7QUZ1Qk07RUFDRSxNQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRXJCUjtBRndCTTtFQUNFLGdCQUFBO0FFdEJSO0FGd0JRO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FFdEJWO0FGeUJRO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FFdkJWO0FGNkJVO0VBQ0UsNkRBQUE7VUFBQSxxREFBQTtBRTNCWjtBRjhCVTtFQUNFLDhEQUFBO1VBQUEsc0RBQUE7QUU1Qlo7QUZrQ0k7RUFDRSx3Q0NLdUI7VURMdkIsZ0NDS3VCO0FDckM3QjtBRm1DSTtFQUNFLGlEQ0V1QjtVREZ2Qix5Q0NFdUI7QUNuQzdCO0FFeklBO0VBRUUsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCSFB3QjtFR1F4QixrQkFBQTtFQUNBLGlDSGEwQjtFR1YxQixpQ0FBQTtBRnlJRjtBRXZJRTtFQUVFLDhCSEthO0FDbUlqQjtBRXJJRTtFQUNFLGtDQUFBO0FGdUlKO0FFcElFO0VBQ0UsdUJBQUE7QUZzSUo7QUVuSUU7RUFFRSx1QkFBQTtFQUNBLDJCQUFBO0FGb0lKO0FFaklFO0VBRUUsdUJBQUE7RUFDQSx5QkFBQTtBRmtJSjtBRS9IRTtFQUNFLG1CQUFBO0FGaUlKO0FFOUhFO0VBRUUsbUJBQUE7RUFDQSwyQkFBQTtBRitISjtBRTVIRTtFQUVFLG1CQUFBO0VBQ0EseUJBQUE7QUY2SEo7QUUxSEU7RUFDRSxxQkFBQTtBRjRISjtBRXpIRTtFQUVFLHFCQUFBO0VBQ0EsMkJBQUE7QUYwSEo7QUV2SEU7RUFFRSxxQkFBQTtFQUNBLHlCQUFBO0FGd0hKO0FFckhFO0VBS0UsZ0JBQUE7QUZtSEo7QUVoSEU7RUFDRSx3QkFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FGa0hKO0FFL0dFO0VBQ0Usd0JBQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBRmlISjtBRTlHRTtFQUNFLE9BQUE7RUFDQSxzQkFBQTtBRmdISjtBRTlHSTtFQUdFLG1CQUFBO0FGOEdOO0FFM0dJO0VBTUUsdUJBQUE7QUZ3R047QUVyR0k7RUFNRSxxQkFBQTtBRmtHTjtBRS9GSTtFQUNFLHdCQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUZpR047QUU3RkU7RUFDRSwyQkFBQTtBRitGSjtBRTdFSTtFQUNFLFlBQUE7QUYrRU47QUN4T0U7RUM4SkU7SUFDRSxvQkFBQTtFRjZFSjtBQUNGO0FFekVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0huS1k7RUdvS1osZUFBQTtFQUNBLGVIcEtjO0VHcUtkLFlIcEthO0VHcUtiLHVCSHBLb0I7RUdxS3BCLGdCSGhMb0I7RUdpTHBCLG9CSDNKVztFRzRKWCxlSDNKZ0I7QUN1T2xCO0FFMUVFO0VBQ0UsYUFBQTtBRjRFSjtBRXpFRTtFQUNFLGtCQUFBO0FGMkVKO0FFdkVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkhuS3FCO0FDNk92QjtBRXZFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCSHRKbUI7RUd1Sm5CLFVBQUE7RUFDQSxjSHZKa0I7RUd3SmxCLGtCSHZKc0I7RUd3SnRCLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FGMEVGO0FFdkVBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxlSHJFd0I7RUdzRXhCLG1CSHJFMEI7RUdzRTFCLHVCSHJFOEI7RUdzRTlCLFdIckVvQjtFR3NFcEIscUJIckVxQjtBQytJdkI7QUV0RU07RUFDRSxZQUFBO0FGd0VSO0FFckVNO0VBQ0UseUVBQUE7QUZ1RVI7QUVwRU07RUFDRSx5RUFBQTtBRnNFUjtBRS9ETTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxzRUFBQTtVQUFBLDhEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUZpRVI7QUU5RE07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FGZ0VSO0FFMURRO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNFQUFBO1VBQUEsOERBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBRjREVjtBRXJEQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FGd0RGO0FFdERFO0VBQ0UsZUFBQTtBRndESjtBRXJERTtFQUNFLFNIMUkwQjtFRzJJMUIscUJIMUlpQztFRzJJakMsbUJBQUE7RUFDQSx5QkgzSW9DO0VHNElwQyxXSHBTa0I7RUdxU2xCLG1CSDNJNkI7QUNrTWpDO0FFcERFO0VBQ0UsU0g1SXlCO0VHNkl6QixxQkg1SWdDO0VHNkloQyxtQkFBQTtFQUNBLHNCSDdJbUM7RUc4SW5DLFdIN1NrQjtFRzhTbEIsbUJIN0k0QjtBQ21NaEM7QUVuREU7RUFDRSxhSDVJeUI7RUc4SXpCLDZESDVJNEI7QUNnTWhDO0FFakRFO0VBQ0UsU0FBQTtBRm1ESjtBRS9DQTtFQUNFLHVCQUFBO0VBQ0Esa0JIaE5vQjtFR2lOcEIsZ0JIaE5xQjtFR2lOckIsMEJBQUE7RUFDQSxjSGhObUI7RUdpTm5CLGNIaE51QjtBQ2tRekI7QUUvQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGNIck5nQztFR3NOaEMsZ0JBQUE7RUFDQSxvQ0hqVW9CO0VHa1VwQixtQ0hsVW9CO0FDb1h0QjtBRS9DQTtFQUNFLFdBQUE7RUFDQSxjSDdOZ0M7RUc4TmhDLDhCSDdOb0M7QUMrUXRDO0FFL0NBO0VBQ0UsZUFBQTtFQUNBLG1CSDFTbUI7QUM0VnJCO0FFL0NBO0VBQ0Usa0JIOU40QjtFRytONUIsVUFBQTtFQUNBLE1IL051QjtFR2dPdkIsUUhoT3VCO0VHaU92QixtQkh2TytCO0VHd08vQix1Qkh2T21DO0VHd09uQyxZSHZPeUI7RUd3T3pCLGFIdk8wQjtFR3dPMUIsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JIdE84QjtFR3VPOUIsWUh0TzBCO0VHdU8xQixnQkh0T2lDO0VHd09qQyx1Qkh0TzhCO0VHdU85QixjSHRPeUI7RUd1T3pCLGtCSHRPK0I7RUd1Ty9CLGdCSHRPNkI7RUd1TzdCLGdCSGpQK0I7RUdrUC9CLGVBQUE7QUZpREY7QUUvQ0U7RUFDRSxlSHhPaUM7RUd5T2pDLHVCSHZPa0M7RUd3T2xDLGNIN1VVO0FDOFhkO0FFOUNFO0VBQ0UsU0FBQTtBRmdESjtBRTVDQTtFQUNFLFVBQUE7RUFDQSx1Qkh4VThCO0VHeVU5QixTSHhVcUI7RUd5VXJCLGdCSHhVc0I7RUd5VXRCLGNIeFVvQjtFR3lVcEIsa0JIeFV3QjtFR3lVeEIsbUJIeFUwQjtFR3lVMUIsbUJIeFUwQjtFR3lVMUIsa0JIeFV5QjtFR3lVekIscUJIeFV3QjtBQ3VYMUI7QUU1Q0E7Ozs7OztFQU1FLGdCSDlVbUI7QUM2WHJCO0FFNUNBOzs7RUFHRSxzQkFBQTtFQUNBLFdIcFZrQjtFR3FWbEIsOENIelV1QjtFRzBVdkIseUJIblZtQjtFR29WbkIsdUJIblYwQjtFR29WMUIsbUJIOVV1QjtFRytVdkIsK0NIcFZ1QjtFR3FWdkIsY0gvVWtCO0VHZ1ZsQixrQkhsVnNCO0FDaVl4QjtBRTdDRTs7O0VBQ0UsZ0NBQUE7RUFDQSxzQ0FBQTtBRmlESjtBRTlDRTs7O0VBQ0UseUJIN1Z1QjtFRzhWdkIsYUg3VndCO0VHOFZ4QiwyQkg3VjJCO0FDK1kvQjtBRS9DRTtFQUNFLGNBQUE7QUZtREo7QUVwREU7OztFQUNFLGNBQUE7QUZtREo7QUUvQ0E7RUFDRSxnQkgvV21CO0VHZ1huQixnQkhqYm9CO0FDbWV0QjtBRWhERTtFQUNFLFVBQUE7QUZrREo7QUUvQ0U7RUFDRSxVQUFBO0VBQ0EsY0g1V2dCO0VHNldoQixnQkFBQTtFQUNBLGtCQUFBO0FGaURKO0FFOUNFOztFQUVFLGVIN1hpQjtFRzhYakIsVUFBQTtFQUNBLGtCSHZYb0I7RUd3WHBCLG9CSGhZaUI7QUNnYnJCO0FFNUNBO0VBQ0UsZUhyWW1CO0VHc1luQixpQkhyWW9CO0FDb2J0QjtBRTdDRTtFQUNFLGVBQUE7QUYrQ0o7QUUzQ0E7RUFDRSxtQkhyWXVCO0VHc1l2QixrQkh2WXNCO0FDcWJ4QjtBRTNDQTtFQUNFLGNIcllzQjtFR3NZdEIsZUhyWXVCO0FDbWJ6QjtBRTNDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkhsWnVCO0VHbVp2QixjSGxaa0I7RUdtWmxCLGtCSHJac0I7QUNtY3hCO0FFM0NBOztFQUVFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkh2ZW9CO0VHd2VwQixjSDNaa0I7QUN5Y3BCO0FFNUNFOztFQUNFLGVBQUE7RUFDQSxrQkhqYW9CO0FDZ2R4QjtBRTVDRTs7RUFDRSxlQUFBO0FGK0NKO0FFM0NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJIbGF5QztFR21hekMsZ0JIbGFpQztFR21hakMsZ0JBQUE7RUFDQSxtQkhuYW9DO0VHb2FwQyxjSG5hK0I7RUdvYS9CLGNIbmFtQztFR29hbkMsZ0JIbmFxQztBQ2lkdkM7QUU1Q0U7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLHlCSGplVTtFR2tlVixXSHpnQmtCO0VHMGdCbEIsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FGNkNKO0FFekNBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUhuZmdCO0VHb2ZoQixXSHBmZ0I7RUdxZmhCLDJCSG5ma0I7RUdxZmxCLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkgvZXVCO0VHZ2Z2QixnQkgxZmdCO0VHMmZoQixlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FGMkNGO0FFekNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUYyQ0o7QUV4Q0U7RUFDRSxxQkgvZlU7RUdnZ0JWLGNIaGdCVTtBQzBpQmQ7QUV4Q0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUYwQ047QUV2Q0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Qkg5Z0JRO0FDdWpCZDtBRXZDTTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBRnlDUjtBRXRDTTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBRndDUjtBRW5DSTtFQUVJLGdEQUFBO1VBQUEsd0NBQUE7QUZvQ1I7QUVsQ1E7RUFDRSxrREFBQTtVQUFBLDBDQUFBO0FGb0NWO0FFOUJFO0VBQ0UscUJBQUE7RUFDQSxjSHhpQlk7QUN3a0JoQjtBRTdCRTtFQUNFLHFCQUFBO0VBQ0EsY0g1aUJTO0FDMmtCYjtBRTVCRTtFQUNFLHFCQUFBO0VBQ0EsY0hoakJhO0FDOGtCakI7QUUzQkU7RUFDRSxxQkh6akJZO0VHMGpCWixjSDFqQlk7QUN1bEJoQjtBRTNCSTtFQUVFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FGNEJOO0FFMUJNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7QUY0QlI7QUV6Qk07RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBRjJCUjtBRXZCSTtFQUVFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7QUZ3Qk47QUVyQkk7RUFFRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUZzQk47QUVuQkk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCSG5uQlU7QUN3b0JoQjtBRW5CTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FGcUJSO0FFbEJNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUZvQlI7QUViUTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QUZlVjtBRVpRO0VBQ0Usd0RBQUE7VUFBQSxnREFBQTtBRmNWO0FFWFE7RUFDRSxtRUFBQTtVQUFBLDJEQUFBO0FGYVY7QUVOQTtFQUNFLG1CQUFBO0VBQ0Esa0JIN2xCNEI7RUc4bEI1QixVSDdsQjZCO0VHOGxCN0IsbUJIaG1CZ0M7RUdpbUJoQyxnQkg5bEJpQztBQ3VtQm5DO0FFUEU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FGU0o7QUVORTtFQUNFLFdBQUE7RUFDQSxVSHJtQndCO0VHc21CeEIsV0hybUJ5QjtFR3NtQnpCLGtCSHJtQmdDO0VHc21CaEMsbUJIbm1CMkI7RUdvbUIzQixXSDlzQmtCO0VHK3NCbEIsZ0JIem1CeUI7RUcwbUJ6QixrQkFBQTtBRlFKO0FFTkk7RUFDRSxtQkh6bUJ5QjtBQ2luQi9CO0FFTk07RUFDRSxtQkg5bUJ5QjtFRyttQnpCLFdIdnRCYztBQyt0QnRCO0FFTE07RUFDRSxtQkhubkJ5QjtBQzBuQmpDO0FFRkU7RUFDRSxXQUFBO0VBQ0EsWUg5bkI0QjtFRytuQjVCLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJIM25CMkI7QUMrbkIvQjtBRUNBO0VBQ0Usd0NBQUE7QUZFRjtBRUNBO0VBQ0Usa0NIaHVCcUI7VUdndUJyQiwwQkhodUJxQjtBQ2t1QnZCO0FFQ0E7RUFDRSw0Q0hudUJxQjtVR211QnJCLG9DSG51QnFCO0FDcXVCdkI7QUVDQTtFQUNFLGdCQUFBO0FGRUY7QUVFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUZDRjtBRUlFO0VBQ0UsV0FBQTtFQUNBLE9IeG9CcUI7QUN1b0J6QjtBRUlFO0VBQ0UsUUFBQTtFQUNBLFVBQUE7QUZGSjtBR3Z3QkE7RUFFSTtJQUNFLHNCQUFBO0VIeXdCSjtFR3R3QkU7SUFDRSxhQUFBO0VId3dCSjtBQUNGO0FHbndCQTtFQUdJO0lBQ0Usc0JBQUE7RUhtd0JKO0VHaHdCRTtJQUNFLGFBQUE7RUhrd0JKO0FBQ0Y7QUc3dkJBO0VBRUk7SUFDRSwwQ0FBQTtFSDh2Qko7QUFDRjtBSS94QkE7RUFDRTtJQUNFLDZDQUFBO0VKaXlCRjtFSTl4QkE7SUFDRSx1Q0FBQTtFSmd5QkY7RUk3eEJBO0lBQ0UsNkNBQUE7RUoreEJGO0VJNXhCQTtJQUNFLHNDQUFBO0VKOHhCRjtBQUNGO0FJN3lCQTtFQUNFO0lBQ0UsNkNBQUE7RUppeUJGO0VJOXhCQTtJQUNFLHVDQUFBO0VKZ3lCRjtFSTd4QkE7SUFDRSw2Q0FBQTtFSit4QkY7RUk1eEJBO0lBQ0Usc0NBQUE7RUo4eEJGO0FBQ0Y7QUkzeEJBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUo2eEJGO0FBQ0Y7QUlqeUJBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUo2eEJGO0FBQ0Y7QUkxeEJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUo0eEJGO0VJenhCQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsUUFBQTtFSjJ4QkY7RUl4eEJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0VKMHhCRjtFSXZ4QkE7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUp5eEJGO0VJdHhCQTtJQUNFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtFSnd4QkY7QUFDRjtBSXJ6QkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFSjR4QkY7RUl6eEJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxRQUFBO0VKMnhCRjtFSXh4QkE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUoweEJGO0VJdnhCQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFSnl4QkY7RUl0eEJBO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0VKd3hCRjtBQUNGO0FJcnhCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VKdXhCRjtFSXB4QkE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7RUpzeEJGO0VJbnhCQTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsY0FBQTtFSnF4QkY7RUlseEJBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VKb3hCRjtBQUNGO0FJM3lCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VKdXhCRjtFSXB4QkE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7RUpzeEJGO0VJbnhCQTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsY0FBQTtFSnF4QkY7RUlseEJBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VKb3hCRjtBQUNGO0FLbDJCQTtFQUNFO0lBQ0UscUJBQUE7RUxvMkJGO0VLajJCQTtJQUNFLHNCQUFBO0VMbTJCRjtFS2gyQkE7SUFDRSxzQkFBQTtFTGsyQkY7RUsvMUJBO0lBQ0UsbUJBQUE7RUxpMkJGO0FBQ0Y7QUtoM0JBO0VBQ0U7SUFDRSxxQkFBQTtFTG8yQkY7RUtqMkJBO0lBQ0Usc0JBQUE7RUxtMkJGO0VLaDJCQTtJQUNFLHNCQUFBO0VMazJCRjtFSy8xQkE7SUFDRSxtQkFBQTtFTGkyQkY7QUFDRjtBSzcxQkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFTCsxQkY7RUs1MUJBO0lBQ0UscUJBQUE7SUFDQSxVQUFBO0VMODFCRjtBQUNGO0FLdjJCQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VMKzFCRjtFSzUxQkE7SUFDRSxxQkFBQTtJQUNBLFVBQUE7RUw4MUJGO0FBQ0Y7QUsxMUJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUw0MUJGO0VLejFCQTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsUUFBQTtFTDIxQkY7RUt4MUJBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VMMDFCRjtFS3YxQkE7SUFDRSxRQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUx5MUJGO0VLdDFCQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFTHcxQkY7QUFDRjtBS3IzQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFTDQxQkY7RUt6MUJBO0lBQ0UsYUFBQTtJQUNBLGFBQUE7SUFDQSxRQUFBO0VMMjFCRjtFS3gxQkE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7RUwwMUJGO0VLdjFCQTtJQUNFLFFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFTHkxQkY7RUt0MUJBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VMdzFCRjtBQUNGO0FLcjFCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VMdTFCRjtFS3AxQkE7SUFDRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUxzMUJGO0VLbjFCQTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtFTHExQkY7RUtsMUJBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VMbzFCRjtBQUNGO0FLMzJCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VMdTFCRjtFS3AxQkE7SUFDRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUxzMUJGO0VLbjFCQTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtFTHExQkY7RUtsMUJBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VMbzFCRjtBQUNGO0FLajFCQTtFQUNFO0lBQ0UseUJBQUE7RUxtMUJGO0VLaDFCQTtJQUNFLHlCQUFBO0VMazFCRjtFSy8wQkE7SUFDRSwwQkFBQTtFTGkxQkY7RUs5MEJBO0lBQ0UsMEJBQUE7RUxnMUJGO0FBQ0Y7QUsvMUJBO0VBQ0U7SUFDRSx5QkFBQTtFTG0xQkY7RUtoMUJBO0lBQ0UseUJBQUE7RUxrMUJGO0VLLzBCQTtJQUNFLDBCQUFBO0VMaTFCRjtFSzkwQkE7SUFDRSwwQkFBQTtFTGcxQkY7QUFDRjtBSzUwQkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxVQUFBO0VMODBCRjtFSzMwQkE7SUFDRSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsVUFBQTtFTDYwQkY7RUsxMEJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFBQTtFTDQwQkY7RUt6MEJBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFTDIwQkY7QUFDRjtBS2oyQkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxVQUFBO0VMODBCRjtFSzMwQkE7SUFDRSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsVUFBQTtFTDYwQkY7RUsxMEJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFBQTtFTDQwQkY7RUt6MEJBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFTDIwQkY7QUFDRjtBS3gwQkE7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFTDAwQkY7RUt2MEJBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VMeTBCRjtBQUNGO0FLbDFCQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VMMDBCRjtFS3YwQkE7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUx5MEJGO0FBQ0Y7QUt0MEJBO0VBQ0U7SUFDRSx1QkFBQTtFTHcwQkY7RUtyMEJBO0lBQ0UseUJBQUE7RUx1MEJGO0FBQ0Y7QUs5MEJBO0VBQ0U7SUFDRSx1QkFBQTtFTHcwQkY7RUtyMEJBO0lBQ0UseUJBQUE7RUx1MEJGO0FBQ0Y7QUNqOUJFO0VLYkksZ0JBQUE7QU5pK0JOO0FNNzlCRTtFQUNFLHVCQUFBO0FOKzlCSjtBTTM5Qkk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtBTjY5Qk47QU0zOUJNO0VBQ0UsdUNBQUE7QU42OUJSO0FNMTlCTTtFQUNFLE1BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QU40OUJSO0FNejlCTTtFQUVFLE1BQUE7RUFDQSxPQUFBO0FOMDlCUjtBTXY5Qk07RUFFRSxNQUFBO0VBQ0EsUUFBQTtBTnc5QlI7QU1yOUJNO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBTnU5QlI7QU1wOUJNO0VBRUUsUUFBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtBTnE5QlI7QU1sOUJNO0VBRUUsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBTm05QlI7QU1oOUJNO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBTms5QlI7QU0vOEJNO0VBRUUsU0FBQTtFQUNBLE9BQUE7QU5nOUJSO0FNNzhCTTtFQUVFLFFBQUE7RUFDQSxTQUFBO0FOODhCUjtBTXo4QkU7RUxsRUE7SUtxRU0sNkJBQUE7RU4wOEJOO0VNeDhCTTtJQUNFLGFBQUE7RU4wOEJSO0VNdjhCTTtJQUNFLDJCQUFBO0VOeThCUjtBQUNGO0FPdGlDSTtFQUNFLDZCQUFBO0FQd2lDTjtBT3RpQ007RUFDRSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QVB3aUNSO0FPcmlDTTtFQUVFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QVBzaUNSO0FPbmlDTTtFQUVFLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QVBvaUNSO0FPamlDTTtFQUVFLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtBUGtpQ1I7QU8vaENNO0VBQ0UsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FQaWlDUjtBTzloQ007RUFFRSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QVAraENSO0FPNWhDTTtFQUVFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QVA2aENSO0FPMWhDTTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBUDRoQ1I7QU96aENNO0VBRUUsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBUDBoQ1I7QU9waENJO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBUHNoQ047QU9waENNO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FQc2hDUjtBT25oQ007RUFDRSx1QkFBQTtBUHFoQ1I7QU9saENNO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY1JzRnNCO0FDODdCOUI7QU9qaENNO0VBQ0UsY1JtRjJCO0FDZzhCbkMiLCJmaWxlIjoic3dlZXRhbGVydDIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2FsMi1wb3B1cCB7XG4gICYuc3dhbDItdG9hc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogJHN3YWwyLXRvYXN0LXdpZHRoO1xuICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1wYWRkaW5nO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItdG9hc3QtYmFja2dyb3VuZDtcbiAgICBib3gtc2hhZG93OiAkc3dhbDItdG9hc3QtYm94LXNoYWRvdztcblxuICAgIC5zd2FsMi1oZWFkZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1oZWFkZXItcGFkZGluZztcbiAgICB9XG5cbiAgICAuc3dhbDItdGl0bGUge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luOiAkc3dhbDItdG9hc3QtdGl0bGUtbWFyZ2luO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtdGl0bGUtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1mb290ZXIge1xuICAgICAgbWFyZ2luOiAkc3dhbDItdG9hc3QtZm9vdGVyLW1hcmdpbjtcbiAgICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1mb290ZXItbWFyZ2luO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtZm9vdGVyLWZvbnQtc2l6ZTtcbiAgICB9XG5cbiAgICAuc3dhbDItY2xvc2Uge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIHdpZHRoOiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLXdpZHRoO1xuICAgICAgaGVpZ2h0OiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWhlaWdodDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC5zd2FsMi1jb250ZW50IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1jb250ZW50LXBhZGRpbmc7XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1jb250ZW50LWZvbnQtc2l6ZTtcbiAgICB9XG5cbiAgICAuc3dhbDItaWNvbiB7XG4gICAgICB3aWR0aDogMmVtO1xuICAgICAgbWluLXdpZHRoOiAyZW07XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgIG1hcmdpbjogMDtcblxuICAgICAgLnN3YWwyLWljb24tY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgIEBpbmNsdWRlIGllIHtcbiAgICAgICAgICBmb250LXNpemU6IC4yNWVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItc3VjY2VzcyB7XG4gICAgICAgIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICAgICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1lcnJvciB7XG4gICAgICAgIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ10ge1xuICAgICAgICAgIHRvcDogLjg3NWVtO1xuICAgICAgICAgIHdpZHRoOiAxLjM3NWVtO1xuXG4gICAgICAgICAgJltjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgICAgICBsZWZ0OiAuMzEyNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICZbY2xhc3MkPSdyaWdodCddIHtcbiAgICAgICAgICAgIHJpZ2h0OiAuMzEyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zd2FsMi1hY3Rpb25zIHtcbiAgICAgIGZsZXgtYmFzaXM6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luOiAwIC4zMTI1ZW07XG4gICAgfVxuXG4gICAgLnN3YWwyLXN0eWxlZCB7XG4gICAgICBtYXJnaW46IDAgLjMxMjVlbTtcbiAgICAgIHBhZGRpbmc6IC4zMTI1ZW0gLjYyNWVtO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtYnV0dG9ucy1mb250LXNpemU7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiAkc3dhbDItdG9hc3QtYnV0dG9uLWZvY3VzLWJveC1zaGFkb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN3YWwyLXN1Y2Nlc3Mge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkc3dhbDItc3VjY2VzcztcblxuICAgICAgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ10geyAvLyBFbXVsYXRlIG1vdmluZyBjaXJjdWxhciBsaW5lXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEuNmVtO1xuICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgJltjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgICAgdG9wOiAtLjhlbTtcbiAgICAgICAgICBsZWZ0OiAtLjVlbTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDJlbSAyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNGVtIDAgMCA0ZW07XG4gICAgICAgIH1cblxuICAgICAgICAmW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgICAgdG9wOiAtLjI1ZW07XG4gICAgICAgICAgbGVmdDogLjkzNzVlbTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEuNWVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNGVtIDRlbSAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICAgICAgICB3aWR0aDogMmVtO1xuICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgIH1cblxuICAgICAgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAuNDM3NWVtO1xuICAgICAgICB3aWR0aDogLjQzNzVlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjY4NzVlbTtcbiAgICAgIH1cblxuICAgICAgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ10ge1xuICAgICAgICBoZWlnaHQ6IC4zMTI1ZW07XG5cbiAgICAgICAgJltjbGFzcyQ9J3RpcCddIHtcbiAgICAgICAgICB0b3A6IDEuMTI1ZW07XG4gICAgICAgICAgbGVmdDogLjE4NzVlbTtcbiAgICAgICAgICB3aWR0aDogLjc1ZW07XG4gICAgICAgIH1cblxuICAgICAgICAmW2NsYXNzJD0nbG9uZyddIHtcbiAgICAgICAgICB0b3A6IC45Mzc1ZW07XG4gICAgICAgICAgcmlnaHQ6IC4xODc1ZW07XG4gICAgICAgICAgd2lkdGg6IDEuMzc1ZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1pY29uLXNob3cge1xuICAgICAgICBAaWYgJHN3YWwyLWljb24tYW5pbWF0aW9ucyB7XG4gICAgICAgICAgLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5zd2FsMi1zaG93IHtcbiAgICAgIGFuaW1hdGlvbjogJHN3YWwyLXRvYXN0LXNob3ctYW5pbWF0aW9uO1xuICAgIH1cblxuICAgICYuc3dhbDItaGlkZSB7XG4gICAgICBhbmltYXRpb246ICRzd2FsMi10b2FzdC1oaWRlLWFuaW1hdGlvbjtcbiAgICB9XG4gIH1cbn1cbiIsIiRzd2FsMi13aGl0ZTogICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHN3YWwyLWJsYWNrOiAgICAgICAgICMwMDAgIWRlZmF1bHQ7XG4kc3dhbDItb3V0bGluZS1jb2xvcjogcmdiYSg1MCwgMTAwLCAxNTAsIC40KSAhZGVmYXVsdDtcblxuLy8gQ09OVEFJTkVSXG4kc3dhbDItY29udGFpbmVyLXBhZGRpbmc6IC42MjVlbSAhZGVmYXVsdDtcblxuLy8gQk9YIE1PREVMXG4kc3dhbDItd2lkdGg6IDMyZW0gIWRlZmF1bHQ7XG4kc3dhbDItcGFkZGluZzogMS4yNWVtICFkZWZhdWx0O1xuJHN3YWwyLWJvcmRlcjogbm9uZSAhZGVmYXVsdDtcbiRzd2FsMi1ib3JkZXItcmFkaXVzOiAuMzEyNWVtICFkZWZhdWx0O1xuJHN3YWwyLWJveC1zaGFkb3c6ICNkOWQ5ZDkgIWRlZmF1bHQ7XG5cbi8vIEFOSU1BVElPTlNcbiRzd2FsMi1zaG93LWFuaW1hdGlvbjogc3dhbDItc2hvdyAuM3MgIWRlZmF1bHQ7XG4kc3dhbDItaGlkZS1hbmltYXRpb246IHN3YWwyLWhpZGUgLjE1cyBmb3J3YXJkcyAhZGVmYXVsdDtcblxuLy8gQkFDS0dST1VORFxuJHN3YWwyLWJhY2tncm91bmQ6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcblxuLy8gVFlQT0dSQVBIWVxuJHN3YWwyLWZvbnQ6IGluaGVyaXQgIWRlZmF1bHQ7XG4kc3dhbDItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuXG4vLyBCQUNLRFJPUFxuJHN3YWwyLWJhY2tkcm9wOiByZ2JhKCRzd2FsMi1ibGFjaywgLjQpICFkZWZhdWx0O1xuJHN3YWwyLWJhY2tkcm9wLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjFzICFkZWZhdWx0O1xuXG4vLyBIRUFERVJcbiRzd2FsMi1oZWFkZXItcGFkZGluZzogMCAxLjhlbSAhZGVmYXVsdDtcblxuLy8gSUNPTlNcbiRzd2FsMi1pY29uLXNpemU6IDVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pY29uLWFuaW1hdGlvbnM6IHRydWUgIWRlZmF1bHQ7XG4kc3dhbDItaWNvbi1tYXJnaW46IDEuMjVlbSBhdXRvIDEuODc1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaWNvbi16b29tOiBudWxsICFkZWZhdWx0O1xuJHN3YWwyLXN1Y2Nlc3M6ICNhNWRjODYgIWRlZmF1bHQ7XG4kc3dhbDItc3VjY2Vzcy1ib3JkZXI6IHJnYmEoJHN3YWwyLXN1Y2Nlc3MsIC4zKSAhZGVmYXVsdDtcbiRzd2FsMi1lcnJvcjogI2YyNzQ3NCAhZGVmYXVsdDtcbiRzd2FsMi13YXJuaW5nOiAjZjhiYjg2ICFkZWZhdWx0O1xuJHN3YWwyLWluZm86ICMzZmMzZWUgIWRlZmF1bHQ7XG4kc3dhbDItcXVlc3Rpb246ICM4N2FkYmQgIWRlZmF1bHQ7XG4kc3dhbDItaWNvbi1mb250LWZhbWlseTogaW5oZXJpdCAhZGVmYXVsdDtcblxuLy8gSU1BR0VcbiRzd2FsMi1pbWFnZS1tYXJnaW46IDEuMjVlbSBhdXRvICFkZWZhdWx0O1xuXG4vLyBUSVRMRVxuJHN3YWwyLXRpdGxlLW1hcmdpbjogMCAwIC40ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdGl0bGUtY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCAzNSkgIWRlZmF1bHQ7XG4kc3dhbDItdGl0bGUtZm9udC1zaXplOiAxLjg3NWVtICFkZWZhdWx0O1xuXG4vLyBDT05URU5UXG4kc3dhbDItY29udGVudC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LW1hcmdpbjogMCAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LXBhZGRpbmc6IDAgMS42ZW0gIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1jb2xvcjogbGlnaHRlbigkc3dhbDItYmxhY2ssIDMzKSAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LWZvbnQtc2l6ZTogMS4xMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LWZvbnQtd2VpZ2h0OiBub3JtYWwgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1saW5lLWhlaWdodDogbm9ybWFsICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtdGV4dC1hbGlnbjogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtd29yZC13cmFwOiBicmVhay13b3JkICFkZWZhdWx0O1xuXG4vLyBJTlBVVFxuJHN3YWwyLWlucHV0LW1hcmdpbjogMWVtIGF1dG8gIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtd2lkdGg6IDEwMCUgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtaGVpZ2h0OiAyLjYyNWVtICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LXBhZGRpbmc6IDAgLjc1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbigkc3dhbDItYmxhY2ssIDg1KSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1ib3JkZXItcmFkaXVzOiAuMTg3NWVtICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKCRzd2FsMi1ibGFjaywgLjA2KSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1mb2N1cy1ib3JkZXI6IDFweCBzb2xpZCAjYjRkYmVkICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWZvY3VzLW91dGxpbmU6IG5vbmUgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogMCAwIDNweCAjYzRlNmY1ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTogMS4xMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1iYWNrZ3JvdW5kOiBpbmhlcml0ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MsIGJveC1zaGFkb3cgLjNzICFkZWZhdWx0O1xuXG4vLyBURVhUQVJFQSBTUEVDSUZJQyBWQVJJQUJMRVNcbiRzd2FsMi10ZXh0YXJlYS1oZWlnaHQ6IDYuNzVlbSAhZGVmYXVsdDtcbiRzd2FsMi10ZXh0YXJlYS1wYWRkaW5nOiAuNzVlbSAhZGVmYXVsdDtcblxuLy8gVkFMSURBVElPTiBNRVNTQUdFXG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWp1c3RpZnktY29udGVudDogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1wYWRkaW5nOiAuNjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWJhY2tncm91bmQ6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA5NCkgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgNDApICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtZm9udC13ZWlnaHQ6IDMwMCAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi1iYWNrZ3JvdW5kOiAkc3dhbDItZXJyb3IgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWljb24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi16b29tOiBudWxsICFkZWZhdWx0O1xuXG4vLyBQUk9HUkVTUyBTVEVQU1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWJhY2tncm91bmQ6IGluaGVyaXQgIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtbWFyZ2luOiAwIDAgMS4yNWVtICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLXBhZGRpbmc6IDAgIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtZm9udC13ZWlnaHQ6IDYwMCAhZGVmYXVsdDtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwcy1kaXN0YW5jZTogMi41ZW0gIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC13aWR0aDogMmVtO1xuJHN3YWwyLXByb2dyZXNzLXN0ZXAtaGVpZ2h0OiAyZW07XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC1ib3JkZXItcmFkaXVzOiAyZW07XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC1iYWNrZ3JvdW5kOiAjYWRkOGU2ICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXAtY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi1hY3RpdmUtc3RlcC1iYWNrZ3JvdW5kOiAjMzA4NWQ2ICFkZWZhdWx0O1xuJHN3YWwyLWFjdGl2ZS1zdGVwLWNvbG9yOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIEZPT1RFUlxuJHN3YWwyLWZvb3Rlci1tYXJnaW46IDEuMjVlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLXBhZGRpbmc6IDFlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLWJvcmRlci1jb2xvcjogI2VlZSAhZGVmYXVsdDtcbiRzd2FsMi1mb290ZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCAzMykgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuXG4vLyBUSU1FUiBQT0dSRVNTIEJBUlxuJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1oZWlnaHQ6IC4yNWVtO1xuJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiByZ2JhKCRzd2FsMi1ibGFjaywgLjIpICFkZWZhdWx0O1xuXG4vLyBDTE9TRSBCVVRUT05cbiRzd2FsMi1jbG9zZS1idXR0b24tYWxpZ24taXRlbXM6IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tanVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLXdpZHRoOiAxLjJlbSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24taGVpZ2h0OiAxLjJlbSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tbGluZS1oZWlnaHQ6IDEuMiAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tcG9zaXRpb246IGFic29sdXRlICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1nYXA6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLXRyYW5zaXRpb246IGNvbG9yIC4xcyBlYXNlLW91dCAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAwICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1vdXRsaW5lOiBudWxsICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA4MCkgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWZvbnQtZmFtaWx5OiBzZXJpZiAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1zaXplOiAyLjVlbSAhZGVmYXVsdDtcblxuLy8gQ0xPU0UgQlVUVE9OOkhPVkVSXG4kc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLXRyYW5zZm9ybTogbm9uZSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItY29sb3I6ICRzd2FsMi1lcnJvciAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIEFDVElPTlNcbiRzd2FsMi1hY3Rpb25zLWZsZXgtd3JhcDogd3JhcCAhZGVmYXVsdDtcbiRzd2FsMi1hY3Rpb25zLWFsaWduLWl0ZW1zOiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItYWN0aW9ucy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1hY3Rpb25zLXdpZHRoOiAxMDAlICFkZWZhdWx0O1xuJHN3YWwyLWFjdGlvbnMtbWFyZ2luOiAxLjI1ZW0gYXV0byAwICFkZWZhdWx0O1xuXG4vLyBDT05GSVJNIEJVVFRPTlxuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlcjogMCAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAuMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzA4NWQ2ICFkZWZhdWx0O1xuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWNvbG9yOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG4kc3dhbDItY29uZmlybS1idXR0b24tZm9udC1zaXplOiAxLjA2MjVlbSAhZGVmYXVsdDtcblxuLy8gQ0FOQ0VMIEJVVFRPTlxuJHN3YWwyLWNhbmNlbC1idXR0b24tYm9yZGVyOiAwICFkZWZhdWx0O1xuJHN3YWwyLWNhbmNlbC1idXR0b24tYm9yZGVyLXJhZGl1czogLjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjYWFhICFkZWZhdWx0O1xuJHN3YWwyLWNhbmNlbC1idXR0b24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi1jYW5jZWwtYnV0dG9uLWZvbnQtc2l6ZTogMS4wNjI1ZW0gIWRlZmF1bHQ7XG5cbi8vIENPTU1PTiBWQVJJQUJMRVMgRk9SIENPTkZJUk0gQU5EIENBTkNFTCBCVVRUT05TXG4kc3dhbDItYnV0dG9uLWRhcmtlbi1ob3ZlcjogcmdiYSgkc3dhbDItYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZGFya2VuLWFjdGl2ZTogcmdiYSgkc3dhbDItYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZm9jdXMtb3V0bGluZTogbm9uZSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogbnVsbCAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgMXB4ICRzd2FsMi1iYWNrZ3JvdW5kLCAwIDAgMCAzcHggJHN3YWwyLW91dGxpbmUtY29sb3IgIWRlZmF1bHQ7XG5cbi8vIFRPQVNUU1xuJHN3YWwyLXRvYXN0LXNob3ctYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1zaG93IC41cyAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1oaWRlLWFuaW1hdGlvbjogc3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHMgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWJveC1zaGFkb3c6IDAgMCAuNjI1ZW0gI2Q5ZDlkOSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1iYWNrZ3JvdW5kOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLXdpZHRoOiAuOGVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWNsb3NlLWJ1dHRvbi1oZWlnaHQ6IC44ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0OiAuOCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC13aWR0aDogYXV0byAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1wYWRkaW5nOiAuNjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtaGVhZGVyLXBhZGRpbmc6IDAgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtdGl0bGUtbWFyZ2luOiAwIC42ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtdGl0bGUtZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY29udGVudC1wYWRkaW5nOiAwICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWNvbnRlbnQtZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtaW5wdXQtZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtdmFsaWRhdGlvbi1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1idXR0b25zLWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWJ1dHRvbi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAxcHggJHN3YWwyLWJhY2tncm91bmQsIDAgMCAwIDNweCAkc3dhbDItb3V0bGluZS1jb2xvciAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1mb290ZXItbWFyZ2luOiAuNWVtIDAgMCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1mb290ZXItcGFkZGluZzogLjVlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtZm9vdGVyLWZvbnQtc2l6ZTogLjhlbSAhZGVmYXVsdDtcbiIsIi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAwLjYyNWVtO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjYyNWVtICNkOWQ5ZDk7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWhlYWRlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDA7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXRpdGxlIHtcbiAgZmxleC1ncm93OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMCAwLjZlbTtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWZvb3RlciB7XG4gIG1hcmdpbjogMC41ZW0gMCAwO1xuICBwYWRkaW5nOiAwLjVlbSAwIDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNsb3NlIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgd2lkdGg6IDAuOGVtO1xuICBoZWlnaHQ6IDAuOGVtO1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiB7XG4gIHdpZHRoOiAyZW07XG4gIG1pbi13aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgbWFyZ2luOiAwO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIC5zd2FsMi1pY29uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuOGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDAuMjVlbTtcbiAgfVxufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdIHtcbiAgdG9wOiAwLjg3NWVtO1xuICB3aWR0aDogMS4zNzVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF0ge1xuICBsZWZ0OiAwLjMxMjVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRdIHtcbiAgcmlnaHQ6IDAuMzEyNWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25zIHtcbiAgZmxleC1iYXNpczogYXV0byAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgMC4zMTI1ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZCB7XG4gIG1hcmdpbjogMCAwLjMxMjVlbTtcbiAgcGFkZGluZzogMC4zMTI1ZW0gMC42MjVlbTtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjZmZmLCAwIDAgMCAzcHggcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICNhNWRjODY7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMS42ZW07XG4gIGhlaWdodDogM2VtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRdIHtcbiAgdG9wOiAtMC44ZW07XG4gIGxlZnQ6IC0wLjVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcbiAgYm9yZGVyLXJhZGl1czogNGVtIDAgMCA0ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF0ge1xuICB0b3A6IC0wLjI1ZW07XG4gIGxlZnQ6IDAuOTM3NWVtO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiAwIDRlbSA0ZW0gMDtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwLjQzNzVlbTtcbiAgd2lkdGg6IDAuNDM3NWVtO1xuICBoZWlnaHQ6IDIuNjg3NWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXSB7XG4gIGhlaWdodDogMC4zMTI1ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBdIHtcbiAgdG9wOiAxLjEyNWVtO1xuICBsZWZ0OiAwLjE4NzVlbTtcbiAgd2lkdGg6IDAuNzVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmddIHtcbiAgdG9wOiAwLjkzNzVlbTtcbiAgcmlnaHQ6IDAuMTg3NWVtO1xuICB3aWR0aDogMS4zNzVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAge1xuICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAwLjc1cztcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIDAuNzVzO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLXNob3cge1xuICBhbmltYXRpb246IHN3YWwyLXRvYXN0LXNob3cgMC41cztcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdC5zd2FsMi1oaWRlIHtcbiAgYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1oaWRlIDAuMXMgZm9yd2FyZHM7XG59XG5cbi5zd2FsMi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwNjA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNjI1ZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLXNob3csIC5zd2FsMi1jb250YWluZXIuc3dhbDItbm9hbmltYXRpb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLWhpZGUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20gPiA6Zmlyc3QtY2hpbGQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0ID4gOmZpcnN0LWNoaWxkLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0ID4gOmZpcnN0LWNoaWxkLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQgPiA6Zmlyc3QtY2hpbGQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0ID4gOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuID4gLnN3YWwyLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4OiAxO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1yb3cgPiAuc3dhbDItbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDE7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uIHtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlciwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3Atc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtbGVmdCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItbGVmdCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtcmlnaHQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLXJpZ2h0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4gPiAuc3dhbDItbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDE7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLW5vLXRyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4uc3dhbDItY29udGFpbmVyOm5vdCguc3dhbDItdG9wKTpub3QoLnN3YWwyLXRvcC1zdGFydCk6bm90KC5zd2FsMi10b3AtZW5kKTpub3QoLnN3YWwyLXRvcC1sZWZ0KTpub3QoLnN3YWwyLXRvcC1yaWdodCk6bm90KC5zd2FsMi1jZW50ZXItc3RhcnQpOm5vdCguc3dhbDItY2VudGVyLWVuZCk6bm90KC5zd2FsMi1jZW50ZXItbGVmdCk6bm90KC5zd2FsMi1jZW50ZXItcmlnaHQpOm5vdCguc3dhbDItYm90dG9tKTpub3QoLnN3YWwyLWJvdHRvbS1zdGFydCk6bm90KC5zd2FsMi1ib3R0b20tZW5kKTpub3QoLnN3YWwyLWJvdHRvbS1sZWZ0KTpub3QoLnN3YWwyLWJvdHRvbS1yaWdodCk6bm90KC5zd2FsMi1ncm93LWZ1bGxzY3JlZW4pID4gLnN3YWwyLW1vZGFsIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLnN3YWwyLWNvbnRhaW5lciAuc3dhbDItbW9kYWwge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5zd2FsMi1wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEuMjVlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5zd2FsMi1wb3B1cDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItbG9hZGluZyB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLnN3YWwyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMS44ZW07XG59XG5cbi5zd2FsMi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAwLjRlbTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtc2l6ZTogMS44NzVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uc3dhbDItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDE7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEuMjVlbSBhdXRvIDA7XG59XG4uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWRbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC40O1xufVxuLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwLjEpKTtcbn1cbi5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpO1xufVxuLnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIG1hcmdpbjogMC40Njg3NWVtO1xuICBwYWRkaW5nOiAwO1xuICBhbmltYXRpb246IHN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4uc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIDpub3QoLnN3YWwyLXN0eWxlZCkuc3dhbDItY29uZmlybTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICBib3JkZXI6IDNweCBzb2xpZCAjOTk5OTk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICNmZmY7XG59XG5cbi5zd2FsMi1zdHlsZWQge1xuICBtYXJnaW46IDAuMzEyNWVtO1xuICBwYWRkaW5nOiAwLjYyNWVtIDJlbTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zd2FsMi1zdHlsZWQ6bm90KFtkaXNhYmxlZF0pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJtIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDg1ZDY7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMDYyNWVtO1xufVxuLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWwge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4wNjI1ZW07XG59XG4uc3dhbDItc3R5bGVkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmYsIDAgMCAwIDNweCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTtcbn1cbi5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG59XG5cbi5zd2FsMi1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxLjI1ZW0gMCAwO1xuICBwYWRkaW5nOiAxZW0gMCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAwLjI1ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjMxMjVlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zMTI1ZW07XG59XG5cbi5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwLjI1ZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnN3YWwyLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEuMjVlbSBhdXRvO1xufVxuXG4uc3dhbDItY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMS4yZW07XG4gIGhlaWdodDogMS4yZW07XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZS1vdXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBmb250LWZhbWlseTogc2VyaWY7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zd2FsMi1jbG9zZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZjI3NDc0O1xufVxuLnN3YWwyLWNsb3NlOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uc3dhbDItY29udGVudCB7XG4gIHotaW5kZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMS42ZW07XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXNpemU6IDEuMTI1ZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uc3dhbDItaW5wdXQsXG4uc3dhbDItZmlsZSxcbi5zd2FsMi10ZXh0YXJlYSxcbi5zd2FsMi1zZWxlY3QsXG4uc3dhbDItcmFkaW8sXG4uc3dhbDItY2hlY2tib3gge1xuICBtYXJnaW46IDFlbSBhdXRvO1xufVxuXG4uc3dhbDItaW5wdXQsXG4uc3dhbDItZmlsZSxcbi5zd2FsMi10ZXh0YXJlYSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcywgYm94LXNoYWRvdyAwLjNzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBib3JkZXItcmFkaXVzOiAwLjE4NzVlbTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMTI1ZW07XG59XG4uc3dhbDItaW5wdXQuc3dhbDItaW5wdXRlcnJvcixcbi5zd2FsMi1maWxlLnN3YWwyLWlucHV0ZXJyb3IsXG4uc3dhbDItdGV4dGFyZWEuc3dhbDItaW5wdXRlcnJvciB7XG4gIGJvcmRlci1jb2xvcjogI2YyNzQ3NCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMnB4ICNmMjc0NzQgIWltcG9ydGFudDtcbn1cbi5zd2FsMi1pbnB1dDpmb2N1cyxcbi5zd2FsMi1maWxlOmZvY3VzLFxuLnN3YWwyLXRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I0ZGJlZDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjYzRlNmY1O1xufVxuLnN3YWwyLWlucHV0OjpwbGFjZWhvbGRlcixcbi5zd2FsMi1maWxlOjpwbGFjZWhvbGRlcixcbi5zd2FsMi10ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuLnN3YWwyLXJhbmdlIHtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zd2FsMi1yYW5nZSBpbnB1dCB7XG4gIHdpZHRoOiA4MCU7XG59XG4uc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgd2lkdGg6IDIwJTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zd2FsMi1yYW5nZSBpbnB1dCxcbi5zd2FsMi1yYW5nZSBvdXRwdXQge1xuICBoZWlnaHQ6IDIuNjI1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNjI1ZW07XG59XG5cbi5zd2FsMi1pbnB1dCB7XG4gIGhlaWdodDogMi42MjVlbTtcbiAgcGFkZGluZzogMCAwLjc1ZW07XG59XG4uc3dhbDItaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgbWF4LXdpZHRoOiAxMGVtO1xufVxuXG4uc3dhbDItZmlsZSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cblxuLnN3YWwyLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiA2Ljc1ZW07XG4gIHBhZGRpbmc6IDAuNzVlbTtcbn1cblxuLnN3YWwyLXNlbGVjdCB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuMzc1ZW0gMC42MjVlbTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cblxuLnN3YWwyLXJhZGlvLFxuLnN3YWwyLWNoZWNrYm94IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLnN3YWwyLXJhZGlvIGxhYmVsLFxuLnN3YWwyLWNoZWNrYm94IGxhYmVsIHtcbiAgbWFyZ2luOiAwIDAuNmVtO1xuICBmb250LXNpemU6IDEuMTI1ZW07XG59XG4uc3dhbDItcmFkaW8gaW5wdXQsXG4uc3dhbDItY2hlY2tib3ggaW5wdXQge1xuICBtYXJnaW46IDAgMC40ZW07XG59XG5cbi5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC42MjVlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIhXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEuNWVtO1xuICBtaW4td2lkdGg6IDEuNWVtO1xuICBoZWlnaHQ6IDEuNWVtO1xuICBtYXJnaW46IDAgMC42MjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI3NDc0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zd2FsMi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1ZW07XG4gIGhlaWdodDogNWVtO1xuICBtYXJnaW46IDEuMjVlbSBhdXRvIDEuODc1ZW07XG4gIGJvcmRlcjogMC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogNWVtO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMy43NWVtO1xufVxuLnN3YWwyLWljb24uc3dhbDItZXJyb3Ige1xuICBib3JkZXItY29sb3I6ICNmMjc0NzQ7XG4gIGNvbG9yOiAjZjI3NDc0O1xufVxuLnN3YWwyLWljb24uc3dhbDItZXJyb3IgLnN3YWwyLXgtbWFyayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1ncm93OiAxO1xufVxuLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIuMzEyNWVtO1xuICB3aWR0aDogMi45Mzc1ZW07XG4gIGhlaWdodDogMC4zMTI1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjc0NzQ7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF0ge1xuICBsZWZ0OiAxLjA2MjVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XSB7XG4gIHJpZ2h0OiAxZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3cge1xuICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAwLjVzO1xufVxuLnN3YWwyLWljb24uc3dhbDItZXJyb3Iuc3dhbDItaWNvbi1zaG93IC5zd2FsMi14LW1hcmsge1xuICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIDAuNXM7XG59XG4uc3dhbDItaWNvbi5zd2FsMi13YXJuaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmFjZWE4O1xuICBjb2xvcjogI2Y4YmI4Njtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLWluZm8ge1xuICBib3JkZXItY29sb3I6ICM5ZGUwZjY7XG4gIGNvbG9yOiAjM2ZjM2VlO1xufVxuLnN3YWwyLWljb24uc3dhbDItcXVlc3Rpb24ge1xuICBib3JkZXItY29sb3I6ICNjOWRhZTE7XG4gIGNvbG9yOiAjODdhZGJkO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogI2E1ZGM4NjtcbiAgY29sb3I6ICNhNWRjODY7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMuNzVlbTtcbiAgaGVpZ2h0OiA3LjVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF0ge1xuICB0b3A6IC0wLjQzNzVlbTtcbiAgbGVmdDogLTIuMDYzNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAzLjc1ZW0gMy43NWVtO1xuICBib3JkZXItcmFkaXVzOiA3LjVlbSAwIDAgNy41ZW07XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9cmlnaHRdIHtcbiAgdG9wOiAtMC42ODc1ZW07XG4gIGxlZnQ6IDEuODc1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMy43NWVtO1xuICBib3JkZXItcmFkaXVzOiAwIDcuNWVtIDcuNWVtIDA7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogLTAuMjVlbTtcbiAgbGVmdDogLTAuMjVlbTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMC4yNWVtIHNvbGlkIHJnYmEoMTY1LCAyMjAsIDEzNCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMC41ZW07XG4gIGxlZnQ6IDEuNjI1ZW07XG4gIHdpZHRoOiAwLjQzNzVlbTtcbiAgaGVpZ2h0OiA1LjYyNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IDAuMzEyNWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjEyNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkYzg2O1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF0ge1xuICB0b3A6IDIuODc1ZW07XG4gIGxlZnQ6IDAuODEyNWVtO1xuICB3aWR0aDogMS41NjI1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXSB7XG4gIHRvcDogMi4zNzVlbTtcbiAgcmlnaHQ6IDAuNWVtO1xuICB3aWR0aDogMi45Mzc1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIDAuNzVzO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIDAuNzVzO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodCB7XG4gIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWluO1xufVxuXG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMCAxLjI1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcCB7XG4gIHotaW5kZXg6IDIwO1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xuICBiYWNrZ3JvdW5kOiAjMzA4NWQ2O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwIHtcbiAgYmFja2dyb3VuZDogIzMwODVkNjtcbn1cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcCB+IC5zd2FsMi1wcm9ncmVzcy1zdGVwIHtcbiAgYmFja2dyb3VuZDogI2FkZDhlNjtcbiAgY29sb3I6ICNmZmY7XG59XG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXAgfiAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5lIHtcbiAgYmFja2dyb3VuZDogI2FkZDhlNjtcbn1cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5lIHtcbiAgei1pbmRleDogMTA7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAwLjRlbTtcbiAgbWFyZ2luOiAwIC0xcHg7XG4gIGJhY2tncm91bmQ6ICMzMDg1ZDY7XG59XG5cbltjbGFzc149c3dhbDJdIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnN3YWwyLXNob3cge1xuICBhbmltYXRpb246IHN3YWwyLXNob3cgMC4zcztcbn1cblxuLnN3YWwyLWhpZGUge1xuICBhbmltYXRpb246IHN3YWwyLWhpZGUgMC4xNXMgZm9yd2FyZHM7XG59XG5cbi5zd2FsMi1ub2FuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbi5zd2FsMi1zY3JvbGxiYXItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uc3dhbDItcnRsIC5zd2FsMi1jbG9zZSB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xufVxuLnN3YWwyLXJ0bCAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyIHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG5cbkBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOiB0cnVlKSB7XG4gIC5zd2FsMi1yYW5nZSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuc3dhbDItcmFuZ2UgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN3YWwyLXJhbmdlIG91dHB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgLnN3YWwyLWNsb3NlOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3Qtc2hvdyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNjI1ZW0pIHJvdGF0ZVooMmRlZyk7XG4gIH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7XG4gIH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XG4gIDAlIHtcbiAgICB0b3A6IDAuNTYyNWVtO1xuICAgIGxlZnQ6IDAuMDYyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDU0JSB7XG4gICAgdG9wOiAwLjEyNWVtO1xuICAgIGxlZnQ6IDAuMTI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNzAlIHtcbiAgICB0b3A6IDAuNjI1ZW07XG4gICAgbGVmdDogLTAuMjVlbTtcbiAgICB3aWR0aDogMS42MjVlbTtcbiAgfVxuICA4NCUge1xuICAgIHRvcDogMS4wNjI1ZW07XG4gICAgbGVmdDogMC43NWVtO1xuICAgIHdpZHRoOiAwLjVlbTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDEuMTI1ZW07XG4gICAgbGVmdDogMC4xODc1ZW07XG4gICAgd2lkdGg6IDAuNzVlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgMCUge1xuICAgIHRvcDogMS42MjVlbTtcbiAgICByaWdodDogMS4zNzVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA2NSUge1xuICAgIHRvcDogMS4yNWVtO1xuICAgIHJpZ2h0OiAwLjkzNzVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA4NCUge1xuICAgIHRvcDogMC45Mzc1ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEuMTI1ZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAwLjkzNzVlbTtcbiAgICByaWdodDogMC4xODc1ZW07XG4gICAgd2lkdGg6IDEuMzc1ZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItc2hvdyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIH1cbiAgNDUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWhpZGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XG4gIDAlIHtcbiAgICB0b3A6IDEuMTg3NWVtO1xuICAgIGxlZnQ6IDAuMDYyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDU0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAwLjEyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDcwJSB7XG4gICAgdG9wOiAyLjE4NzVlbTtcbiAgICBsZWZ0OiAtMC4zNzVlbTtcbiAgICB3aWR0aDogMy4xMjVlbTtcbiAgfVxuICA4NCUge1xuICAgIHRvcDogM2VtO1xuICAgIGxlZnQ6IDEuMzEyNWVtO1xuICAgIHdpZHRoOiAxLjA2MjVlbTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDIuODEyNWVtO1xuICAgIGxlZnQ6IDAuODEyNWVtO1xuICAgIHdpZHRoOiAxLjU2MjVlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgMCUge1xuICAgIHRvcDogMy4zNzVlbTtcbiAgICByaWdodDogMi44NzVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA2NSUge1xuICAgIHRvcDogMy4zNzVlbTtcbiAgICByaWdodDogMi44NzVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA4NCUge1xuICAgIHRvcDogMi4xODc1ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDMuNDM3NWVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMi4zNzVlbTtcbiAgICByaWdodDogMC41ZW07XG4gICAgd2lkdGg6IDIuOTM3NWVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICA1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAxMiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIHtcbiAgMCUge1xuICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDgwJSB7XG4gICAgbWFyZ2luLXRvcDogLTAuMzc1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmJvZHkuc3dhbDItaGVpZ2h0LWF1dG8ge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lciB7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAwLjYyNWVtICogMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIgPiAuc3dhbDItbW9kYWwge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdCB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0IHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXIge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5AbWVkaWEgcHJpbnQge1xuICBib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgfVxuICBib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pID4gW2FyaWEtaGlkZGVuPXRydWVdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikgLnN3YWwyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICB9XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xuICB0b3A6IDA7XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IGF1dG87XG4gIGxlZnQ6IGF1dG87XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IGF1dG87XG4gIGxlZnQ6IDA7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQge1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XG4gIHRvcDogNTAlO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHQge1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogYXV0bztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSB7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogYXV0bztcbn1cbmJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25zIHtcbiAgZmxleDogMTtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgaGVpZ2h0OiAyLjJlbTtcbiAgbWFyZ2luLXRvcDogMC4zMTI1ZW07XG59XG5ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRpbmcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXQge1xuICBoZWlnaHQ6IDJlbTtcbiAgbWFyZ2luOiAwLjMxMjVlbSBhdXRvO1xuICBmb250LXNpemU6IDFlbTtcbn1cbmJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxZW07XG59IiwiQG1peGluIGllIHtcbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzAyNTAxNjFcbkBtaXhpbiBub3QoJGlnbm9yLWxpc3QuLi4pIHtcbiAgQGlmIChsZW5ndGgoJGlnbm9yLWxpc3QpID09IDEpIHtcbiAgICAkaWdub3ItbGlzdDogbnRoKCRpZ25vci1saXN0LCAxKTtcbiAgfVxuXG4gICRub3Qtb3V0cHV0OiAnJztcblxuICBAZWFjaCAkbm90IGluICRpZ25vci1saXN0IHtcbiAgICAkbm90LW91dHB1dDogJG5vdC1vdXRwdXQgKyAnOm5vdCgjeyRub3R9KSc7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgc2Nzcy9uby1kdXBsaWNhdGUtZG9sbGFyLXZhcmlhYmxlc1xuICB9XG5cbiAgJiN7JG5vdC1vdXRwdXR9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiLnN3YWwyLWNvbnRhaW5lciB7XG4gIC8vIGNlbnRlcmluZ1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwNjA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6ICRzd2FsMi1jb250YWluZXItcGFkZGluZztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAkc3dhbDItYmFja2Ryb3AtdHJhbnNpdGlvbjtcblxuICAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvOTA1XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblxuICAmLnN3YWwyLWJhY2tkcm9wLXNob3csXG4gICYuc3dhbDItbm9hbmltYXRpb24ge1xuICAgIGJhY2tncm91bmQ6ICRzd2FsMi1iYWNrZHJvcDtcbiAgfVxuXG4gICYuc3dhbDItYmFja2Ryb3AtaGlkZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuXG4gICYuc3dhbDItdG9wIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gICYuc3dhbDItdG9wLXN0YXJ0LFxuICAmLnN3YWwyLXRvcC1sZWZ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmLnN3YWwyLXRvcC1lbmQsXG4gICYuc3dhbDItdG9wLXJpZ2h0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgJi5zd2FsMi1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmLnN3YWwyLWNlbnRlci1zdGFydCxcbiAgJi5zd2FsMi1jZW50ZXItbGVmdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmLnN3YWwyLWNlbnRlci1lbmQsXG4gICYuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICAmLnN3YWwyLWJvdHRvbSB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB9XG5cbiAgJi5zd2FsMi1ib3R0b20tc3RhcnQsXG4gICYuc3dhbDItYm90dG9tLWxlZnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmLnN3YWwyLWJvdHRvbS1lbmQsXG4gICYuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gICYuc3dhbDItYm90dG9tID4gOmZpcnN0LWNoaWxkLFxuICAmLnN3YWwyLWJvdHRvbS1zdGFydCA+IDpmaXJzdC1jaGlsZCxcbiAgJi5zd2FsMi1ib3R0b20tbGVmdCA+IDpmaXJzdC1jaGlsZCxcbiAgJi5zd2FsMi1ib3R0b20tZW5kID4gOmZpcnN0LWNoaWxkLFxuICAmLnN3YWwyLWJvdHRvbS1yaWdodCA+IDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxuXG4gICYuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuID4gLnN3YWwyLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMTtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgJi5zd2FsMi1ncm93LXJvdyA+IC5zd2FsMi1tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgJi5zd2FsMi1ncm93LWNvbHVtbiB7XG4gICAgZmxleDogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJi5zd2FsMi10b3AsXG4gICAgJi5zd2FsMi1jZW50ZXIsXG4gICAgJi5zd2FsMi1ib3R0b20ge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmLnN3YWwyLXRvcC1zdGFydCxcbiAgICAmLnN3YWwyLWNlbnRlci1zdGFydCxcbiAgICAmLnN3YWwyLWJvdHRvbS1zdGFydCxcbiAgICAmLnN3YWwyLXRvcC1sZWZ0LFxuICAgICYuc3dhbDItY2VudGVyLWxlZnQsXG4gICAgJi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAmLnN3YWwyLXRvcC1lbmQsXG4gICAgJi5zd2FsMi1jZW50ZXItZW5kLFxuICAgICYuc3dhbDItYm90dG9tLWVuZCxcbiAgICAmLnN3YWwyLXRvcC1yaWdodCxcbiAgICAmLnN3YWwyLWNlbnRlci1yaWdodCxcbiAgICAmLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuXG4gICAgJiA+IC5zd2FsMi1tb2RhbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICBmbGV4OiAxO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJi5zd2FsMi1uby10cmFuc2l0aW9uIHtcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICBAaW5jbHVkZSBub3QoJy5zd2FsMi10b3AnLFxuICAnLnN3YWwyLXRvcC1zdGFydCcsXG4gICcuc3dhbDItdG9wLWVuZCcsXG4gICcuc3dhbDItdG9wLWxlZnQnLFxuICAnLnN3YWwyLXRvcC1yaWdodCcsXG4gICcuc3dhbDItY2VudGVyLXN0YXJ0JyxcbiAgJy5zd2FsMi1jZW50ZXItZW5kJyxcbiAgJy5zd2FsMi1jZW50ZXItbGVmdCcsXG4gICcuc3dhbDItY2VudGVyLXJpZ2h0JyxcbiAgJy5zd2FsMi1ib3R0b20nLFxuICAnLnN3YWwyLWJvdHRvbS1zdGFydCcsXG4gICcuc3dhbDItYm90dG9tLWVuZCcsXG4gICcuc3dhbDItYm90dG9tLWxlZnQnLFxuICAnLnN3YWwyLWJvdHRvbS1yaWdodCcsXG4gICcuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuJykge1xuICAgICYgPiAuc3dhbDItbW9kYWwge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIGllIHtcbiAgICAuc3dhbDItbW9kYWwge1xuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5zd2FsMi1wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAkc3dhbDItd2lkdGg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHN3YWwyLXBhZGRpbmc7XG4gIGJvcmRlcjogJHN3YWwyLWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJHN3YWwyLWJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1iYWNrZ3JvdW5kO1xuICBmb250LWZhbWlseTogJHN3YWwyLWZvbnQ7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWZvbnQtc2l6ZTtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJi5zd2FsMi1sb2FkaW5nIHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cbn1cblxuLnN3YWwyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6ICRzd2FsMi1oZWFkZXItcGFkZGluZztcbn1cblxuLnN3YWwyLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogJHN3YWwyLXRpdGxlLW1hcmdpbjtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICRzd2FsMi10aXRsZS1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItdGl0bGUtZm9udC1zaXplO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zd2FsMi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTsgLy8gcHJldmVudCBzdWNlc3MgaWNvbiBmcm9tIG92ZXJsYXBwaW5nIGJ1dHRvbnNcbiAgZmxleC13cmFwOiAkc3dhbDItYWN0aW9ucy1mbGV4LXdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkc3dhbDItYWN0aW9ucy1hbGlnbi1pdGVtcztcbiAganVzdGlmeS1jb250ZW50OiAkc3dhbDItYWN0aW9ucy1qdXN0aWZ5LWNvbnRlbnQ7XG4gIHdpZHRoOiAkc3dhbDItYWN0aW9ucy13aWR0aDtcbiAgbWFyZ2luOiAkc3dhbDItYWN0aW9ucy1tYXJnaW47XG5cbiAgJjpub3QoLnN3YWwyLWxvYWRpbmcpIHtcbiAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN3YWwyLWJ1dHRvbi1kYXJrZW4taG92ZXIsICRzd2FsMi1idXR0b24tZGFya2VuLWhvdmVyKTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN3YWwyLWJ1dHRvbi1kYXJrZW4tYWN0aXZlLCAkc3dhbDItYnV0dG9uLWRhcmtlbi1hY3RpdmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItbG9hZGluZyB7XG4gICAgLnN3YWwyLXN0eWxlZCB7XG4gICAgICAmLnN3YWwyLWNvbmZpcm0ge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgIG1hcmdpbjogLjQ2ODc1ZW07XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICAgICAgICBib3JkZXI6IC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jYW5jZWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIDpub3QoLnN3YWwyLXN0eWxlZCkge1xuICAgICAgJi5zd2FsMi1jb25maXJtIHtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodGVuKCRzd2FsMi1ibGFjaywgNjApO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICRzd2FsMi13aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc3dhbDItc3R5bGVkIHtcbiAgbWFyZ2luOiAuMzEyNWVtO1xuICBwYWRkaW5nOiAuNjI1ZW0gMmVtO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmLnN3YWwyLWNvbmZpcm0ge1xuICAgIGJvcmRlcjogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkc3dhbDItY29uZmlybS1idXR0b24tYm9yZGVyLXJhZGl1cztcbiAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiAkc3dhbDItY29uZmlybS1idXR0b24tY29sb3I7XG4gICAgZm9udC1zaXplOiAkc3dhbDItY29uZmlybS1idXR0b24tZm9udC1zaXplO1xuICB9XG5cbiAgJi5zd2FsMi1jYW5jZWwge1xuICAgIGJvcmRlcjogJHN3YWwyLWNhbmNlbC1idXR0b24tYm9yZGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLWJvcmRlci1yYWRpdXM7XG4gICAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1jb2xvcjtcbiAgICBmb250LXNpemU6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLWZvbnQtc2l6ZTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6ICRzd2FsMi1idXR0b24tZm9jdXMtb3V0bGluZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItYnV0dG9uLWZvY3VzLWJhY2tncm91bmQtY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHN3YWwyLWJ1dHRvbi1mb2N1cy1ib3gtc2hhZG93O1xuICB9XG5cbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbi5zd2FsMi1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAkc3dhbDItZm9vdGVyLW1hcmdpbjtcbiAgcGFkZGluZzogJHN3YWwyLWZvb3Rlci1wYWRkaW5nO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHN3YWwyLWZvb3Rlci1ib3JkZXItY29sb3I7XG4gIGNvbG9yOiAkc3dhbDItZm9vdGVyLWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi1mb290ZXItZm9udC1zaXplO1xufVxuXG4uc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAkc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWhlaWdodDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRzd2FsMi1ib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkc3dhbDItYm9yZGVyLXJhZGl1cztcbn1cblxuLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICRzd2FsMi10aW1lci1wcm9ncmVzcy1iYXItaGVpZ2h0O1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ7XG59XG5cbi5zd2FsMi1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAkc3dhbDItaW1hZ2UtbWFyZ2luO1xufVxuXG4uc3dhbDItY2xvc2Uge1xuICBwb3NpdGlvbjogJHN3YWwyLWNsb3NlLWJ1dHRvbi1wb3NpdGlvbjtcbiAgei1pbmRleDogMjsgLy8gc3dlZXRhbGVydDIvaXNzdWVzLzE2MTdcbiAgdG9wOiAkc3dhbDItY2xvc2UtYnV0dG9uLWdhcDtcbiAgcmlnaHQ6ICRzd2FsMi1jbG9zZS1idXR0b24tZ2FwO1xuICBhbGlnbi1pdGVtczogJHN3YWwyLWNsb3NlLWJ1dHRvbi1hbGlnbi1pdGVtcztcbiAganVzdGlmeS1jb250ZW50OiAkc3dhbDItY2xvc2UtYnV0dG9uLWp1c3RpZnktY29udGVudDtcbiAgd2lkdGg6ICRzd2FsMi1jbG9zZS1idXR0b24td2lkdGg7XG4gIGhlaWdodDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1oZWlnaHQ7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246ICRzd2FsMi1jbG9zZS1idXR0b24tdHJhbnNpdGlvbjtcbiAgYm9yZGVyOiAkc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJHN3YWwyLWNsb3NlLWJ1dHRvbi1ib3JkZXItcmFkaXVzO1xuICBvdXRsaW5lOiAkc3dhbDItY2xvc2UtYnV0dG9uLW91dGxpbmU7XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1jbG9zZS1idXR0b24tYmFja2dyb3VuZDtcbiAgY29sb3I6ICRzd2FsMi1jbG9zZS1idXR0b24tY29sb3I7XG4gIGZvbnQtZmFtaWx5OiAkc3dhbDItY2xvc2UtYnV0dG9uLWZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6ICRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1zaXplO1xuICBsaW5lLWhlaWdodDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1saW5lLWhlaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogJHN3YWwyLWNsb3NlLWJ1dHRvbi1ob3Zlci10cmFuc2Zvcm07XG4gICAgYmFja2dyb3VuZDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLWNvbG9yO1xuICB9XG5cbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbi5zd2FsMi1jb250ZW50IHtcbiAgei1pbmRleDogMTsgLy8gcHJldmVudCBzdWNlc3MgaWNvbiBvdmVybGFwcGluZyB0aGUgY29udGVudFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRzd2FsMi1jb250ZW50LWp1c3RpZnktY29udGVudDtcbiAgbWFyZ2luOiAkc3dhbDItY29udGVudC1tYXJnaW47XG4gIHBhZGRpbmc6ICRzd2FsMi1jb250ZW50LXBhZGRpbmc7XG4gIGNvbG9yOiAkc3dhbDItY29udGVudC1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItY29udGVudC1mb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkc3dhbDItY29udGVudC1mb250LXdlaWdodDtcbiAgbGluZS1oZWlnaHQ6ICRzd2FsMi1jb250ZW50LWxpbmUtaGVpZ2h0O1xuICB0ZXh0LWFsaWduOiAkc3dhbDItY29udGVudC10ZXh0LWFsaWduO1xuICB3b3JkLXdyYXA6ICRzd2FsMi1jb250ZW50LXdvcmQtd3JhcDtcbn1cblxuLnN3YWwyLWlucHV0LFxuLnN3YWwyLWZpbGUsXG4uc3dhbDItdGV4dGFyZWEsXG4uc3dhbDItc2VsZWN0LFxuLnN3YWwyLXJhZGlvLFxuLnN3YWwyLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAkc3dhbDItaW5wdXQtbWFyZ2luO1xufVxuXG4uc3dhbDItaW5wdXQsXG4uc3dhbDItZmlsZSxcbi5zd2FsMi10ZXh0YXJlYSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAkc3dhbDItaW5wdXQtd2lkdGg7XG4gIHRyYW5zaXRpb246ICRzd2FsMi1pbnB1dC10cmFuc2l0aW9uO1xuICBib3JkZXI6ICRzd2FsMi1pbnB1dC1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRzd2FsMi1pbnB1dC1ib3JkZXItcmFkaXVzO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItaW5wdXQtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogJHN3YWwyLWlucHV0LWJveC1zaGFkb3c7XG4gIGNvbG9yOiAkc3dhbDItaW5wdXQtY29sb3I7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTtcblxuICAmLnN3YWwyLWlucHV0ZXJyb3Ige1xuICAgIGJvcmRlci1jb2xvcjogJHN3YWwyLWVycm9yICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAkc3dhbDItZXJyb3IgIWltcG9ydGFudDtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlcjogJHN3YWwyLWlucHV0LWZvY3VzLWJvcmRlcjtcbiAgICBvdXRsaW5lOiAkc3dhbDItaW5wdXQtZm9jdXMtb3V0bGluZTtcbiAgICBib3gtc2hhZG93OiAkc3dhbDItaW5wdXQtZm9jdXMtYm94LXNoYWRvdztcbiAgfVxuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogbGlnaHRlbigkc3dhbDItYmxhY2ssIDgwKTtcbiAgfVxufVxuXG4uc3dhbDItcmFuZ2Uge1xuICBtYXJnaW46ICRzd2FsMi1pbnB1dC1tYXJnaW47XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1iYWNrZ3JvdW5kO1xuXG4gIGlucHV0IHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgb3V0cHV0IHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGNvbG9yOiAkc3dhbDItaW5wdXQtY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBpbnB1dCxcbiAgb3V0cHV0IHtcbiAgICBoZWlnaHQ6ICRzd2FsMi1pbnB1dC1oZWlnaHQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRzd2FsMi1pbnB1dC1oZWlnaHQ7XG4gIH1cbn1cblxuLnN3YWwyLWlucHV0IHtcbiAgaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICBwYWRkaW5nOiAkc3dhbDItaW5wdXQtcGFkZGluZztcblxuICAmW3R5cGU9J251bWJlciddIHtcbiAgICBtYXgtd2lkdGg6IDEwZW07XG4gIH1cbn1cblxuLnN3YWwyLWZpbGUge1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItaW5wdXQtYmFja2dyb3VuZDtcbiAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xufVxuXG4uc3dhbDItdGV4dGFyZWEge1xuICBoZWlnaHQ6ICRzd2FsMi10ZXh0YXJlYS1oZWlnaHQ7XG4gIHBhZGRpbmc6ICRzd2FsMi10ZXh0YXJlYS1wYWRkaW5nO1xufVxuXG4uc3dhbDItc2VsZWN0IHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogLjM3NWVtIC42MjVlbTtcbiAgYmFja2dyb3VuZDogJHN3YWwyLWlucHV0LWJhY2tncm91bmQ7XG4gIGNvbG9yOiAkc3dhbDItaW5wdXQtY29sb3I7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTtcbn1cblxuLnN3YWwyLXJhZGlvLFxuLnN3YWwyLWNoZWNrYm94IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1iYWNrZ3JvdW5kO1xuICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuXG4gIGxhYmVsIHtcbiAgICBtYXJnaW46IDAgLjZlbTtcbiAgICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgbWFyZ2luOiAwIC40ZW07XG4gIH1cbn1cblxuLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1qdXN0aWZ5LWNvbnRlbnQ7XG4gIHBhZGRpbmc6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtcGFkZGluZztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1iYWNrZ3JvdW5kO1xuICBjb2xvcjogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtZm9udC13ZWlnaHQ7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnISc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBtaW4td2lkdGg6IDEuNWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbWFyZ2luOiAwIC42MjVlbTtcbiAgICB6b29tOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWljb24tem9vbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1pY29uLWJhY2tncm91bmQ7XG4gICAgY29sb3I6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi1jb2xvcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLnN3YWwyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6ICRzd2FsMi1pY29uLXNpemU7XG4gIGhlaWdodDogJHN3YWwyLWljb24tc2l6ZTtcbiAgbWFyZ2luOiAkc3dhbDItaWNvbi1tYXJnaW47XG4gIHpvb206ICRzd2FsMi1pY29uLXpvb207XG4gIGJvcmRlcjogLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1mYW1pbHk6ICRzd2FsMi1pY29uLWZvbnQtZmFtaWx5O1xuICBsaW5lLWhlaWdodDogJHN3YWwyLWljb24tc2l6ZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzLjc1ZW07XG4gIH1cblxuICAmLnN3YWwyLWVycm9yIHtcbiAgICBib3JkZXItY29sb3I6ICRzd2FsMi1lcnJvcjtcbiAgICBjb2xvcjogJHN3YWwyLWVycm9yO1xuXG4gICAgLnN3YWwyLXgtbWFyayB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuXG4gICAgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMi4zMTI1ZW07XG4gICAgICB3aWR0aDogMi45Mzc1ZW07XG4gICAgICBoZWlnaHQ6IC4zMTI1ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAuMTI1ZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItZXJyb3I7XG5cbiAgICAgICZbY2xhc3MkPSdsZWZ0J10ge1xuICAgICAgICBsZWZ0OiAxLjA2MjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICAmW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgIHJpZ2h0OiAxZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXJyb3IgaWNvbiBhbmltYXRpb25cbiAgICAmLnN3YWwyLWljb24tc2hvdyB7XG4gICAgICBAaWYgJHN3YWwyLWljb24tYW5pbWF0aW9ucyB7XG4gICAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41cztcblxuICAgICAgICAuc3dhbDIteC1tYXJrIHtcbiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIC41cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItd2FybmluZyB7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRzd2FsMi13YXJuaW5nLCA3KTtcbiAgICBjb2xvcjogJHN3YWwyLXdhcm5pbmc7XG4gIH1cblxuICAmLnN3YWwyLWluZm8ge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigkc3dhbDItaW5mbywgMjApO1xuICAgIGNvbG9yOiAkc3dhbDItaW5mbztcbiAgfVxuXG4gICYuc3dhbDItcXVlc3Rpb24ge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigkc3dhbDItcXVlc3Rpb24sIDIwKTtcbiAgICBjb2xvcjogJHN3YWwyLXF1ZXN0aW9uO1xuICB9XG5cbiAgJi5zd2FsMi1zdWNjZXNzIHtcbiAgICBib3JkZXItY29sb3I6ICRzd2FsMi1zdWNjZXNzO1xuICAgIGNvbG9yOiAkc3dhbDItc3VjY2VzcztcblxuICAgIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddIHtcbiAgICAgIC8vIEVtdWxhdGUgbW92aW5nIGNpcmN1bGFyIGxpbmVcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAzLjc1ZW07XG4gICAgICBoZWlnaHQ6IDcuNWVtO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgdG9wOiAtLjQzNzVlbTtcbiAgICAgICAgbGVmdDogLTIuMDYzNWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzLjc1ZW0gMy43NWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3LjVlbSAwIDAgNy41ZW07XG4gICAgICB9XG5cbiAgICAgICZbY2xhc3MkPSdyaWdodCddIHtcbiAgICAgICAgdG9wOiAtLjY4NzVlbTtcbiAgICAgICAgbGVmdDogMS44NzVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAzLjc1ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNy41ZW0gNy41ZW0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcbiAgICAgIC8vIFJpbmdcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICB0b3A6IC0uMjVlbTtcbiAgICAgIGxlZnQ6IC0uMjVlbTtcbiAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXI6IC4yNWVtIHNvbGlkICRzd2FsMi1zdWNjZXNzLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG5cbiAgICAuc3dhbDItc3VjY2Vzcy1maXgge1xuICAgICAgLy8gSGlkZSBjb3JuZXJzIGxlZnQgZnJvbSBhbmltYXRpb25cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB0b3A6IC41ZW07XG4gICAgICBsZWZ0OiAxLjYyNWVtO1xuICAgICAgd2lkdGg6IC40Mzc1ZW07XG4gICAgICBoZWlnaHQ6IDUuNjI1ZW07XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cblxuICAgIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGhlaWdodDogLjMxMjVlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4xMjVlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2FsMi1zdWNjZXNzO1xuXG4gICAgICAmW2NsYXNzJD0ndGlwJ10ge1xuICAgICAgICB0b3A6IDIuODc1ZW07XG4gICAgICAgIGxlZnQ6IC44MTI1ZW07XG4gICAgICAgIHdpZHRoOiAxLjU2MjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICAmW2NsYXNzJD0nbG9uZyddIHtcbiAgICAgICAgdG9wOiAyLjM3NWVtO1xuICAgICAgICByaWdodDogLjVlbTtcbiAgICAgICAgd2lkdGg6IDIuOTM3NWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN1Y2Nlc3MgaWNvbiBhbmltYXRpb25cbiAgICAmLnN3YWwyLWljb24tc2hvdyB7XG4gICAgICBAaWYgJHN3YWwyLWljb24tYW5pbWF0aW9ucyB7XG4gICAgICAgIC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHQge1xuICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLW1hcmdpbjtcbiAgcGFkZGluZzogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLXBhZGRpbmc7XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1iYWNrZ3JvdW5kO1xuICBmb250LXdlaWdodDogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWZvbnQtd2VpZ2h0O1xuXG4gIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnN3YWwyLXByb2dyZXNzLXN0ZXAge1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHdpZHRoOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC13aWR0aDtcbiAgICBoZWlnaHQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1ib3JkZXItcmFkaXVzO1xuICAgIGJhY2tncm91bmQ6ICRzd2FsMi1hY3RpdmUtc3RlcC1iYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAkc3dhbDItYWN0aXZlLXN0ZXAtY29sb3I7XG4gICAgbGluZS1oZWlnaHQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWhlaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwIHtcbiAgICAgIGJhY2tncm91bmQ6ICRzd2FsMi1hY3RpdmUtc3RlcC1iYWNrZ3JvdW5kO1xuXG4gICAgICB+IC5zd2FsMi1wcm9ncmVzcy1zdGVwIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHN3YWwyLXByb2dyZXNzLXN0ZXAtYmFja2dyb3VuZDtcbiAgICAgICAgY29sb3I6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICB+IC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1iYWNrZ3JvdW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHdpZHRoOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtZGlzdGFuY2U7XG4gICAgaGVpZ2h0OiAuNGVtO1xuICAgIG1hcmdpbjogMCAtMXB4O1xuICAgIGJhY2tncm91bmQ6ICRzd2FsMi1hY3RpdmUtc3RlcC1iYWNrZ3JvdW5kO1xuICB9XG59XG5cbi8vIGdpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzI2OFxuW2NsYXNzXj0nc3dhbDInXSB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zd2FsMi1zaG93IHtcbiAgYW5pbWF0aW9uOiAkc3dhbDItc2hvdy1hbmltYXRpb247XG59XG5cbi5zd2FsMi1oaWRlIHtcbiAgYW5pbWF0aW9uOiAkc3dhbDItaGlkZS1hbmltYXRpb247XG59XG5cbi5zd2FsMi1ub2FuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbi8vIE1lYXN1cmUgc2Nyb2xsYmFyIHdpZHRoIGZvciBwYWRkaW5nIGJvZHkgZHVyaW5nIG1vZGFsIHNob3cvaGlkZVxuLnN3YWwyLXNjcm9sbGJhci1tZWFzdXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC05OTk5cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi8vIFJpZ2h0LXRvLWxlZnQgc3VwcG9ydFxuLnN3YWwyLXJ0bCB7XG4gIC5zd2FsMi1jbG9zZSB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1nYXA7XG4gIH1cblxuICAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyIHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi92YXJpYWJsZXMnO1xuXG4vLyBNaWNyb3NvZnQgRWRnZVxuQHN1cHBvcnRzICgtbXMtYWNjZWxlcmF0b3I6IHRydWUpIHtcbiAgLnN3YWwyLXJhbmdlIHtcbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIG91dHB1dCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBJRTExXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLFxuICAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuc3dhbDItcmFuZ2Uge1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgb3V0cHV0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIEZpcmVmb3hcbkAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gIC5zd2FsMi1jbG9zZSB7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAycHggc29saWQgJHN3YWwyLW91dGxpbmUtY29sb3I7XG4gICAgfVxuICB9XG59XG4iLCIvLyBBbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LXNob3cge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyk7XG4gIH1cblxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcbiAgfVxuXG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWhpZGUge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XG4gIDAlIHtcbiAgICB0b3A6IC41NjI1ZW07XG4gICAgbGVmdDogLjA2MjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDU0JSB7XG4gICAgdG9wOiAuMTI1ZW07XG4gICAgbGVmdDogLjEyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNzAlIHtcbiAgICB0b3A6IC42MjVlbTtcbiAgICBsZWZ0OiAtLjI1ZW07XG4gICAgd2lkdGg6IDEuNjI1ZW07XG4gIH1cblxuICA4NCUge1xuICAgIHRvcDogMS4wNjI1ZW07XG4gICAgbGVmdDogLjc1ZW07XG4gICAgd2lkdGg6IC41ZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICB0b3A6IDEuMTI1ZW07XG4gICAgbGVmdDogLjE4NzVlbTtcbiAgICB3aWR0aDogLjc1ZW07XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgMCUge1xuICAgIHRvcDogMS42MjVlbTtcbiAgICByaWdodDogMS4zNzVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDY1JSB7XG4gICAgdG9wOiAxLjI1ZW07XG4gICAgcmlnaHQ6IC45Mzc1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA4NCUge1xuICAgIHRvcDogLjkzNzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMS4xMjVlbTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRvcDogLjkzNzVlbTtcbiAgICByaWdodDogLjE4NzVlbTtcbiAgICB3aWR0aDogMS4zNzVlbTtcbiAgfVxufVxuIiwiQGltcG9ydCAndG9hc3RzLWFuaW1hdGlvbnMnO1xuXG4vLyBBcHBlYXJhbmNlIGFuaW1hdGlvblxuQGtleWZyYW1lcyBzd2FsMi1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xuICB9XG5cbiAgNDUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG5cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbi8vIERpc3BwZWFyYW5jZSBhbmltYXRpb25cbkBrZXlmcmFtZXMgc3dhbDItaGlkZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi8vIFN1Y2Nlc3MgaWNvbiBhbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XG4gIDAlIHtcbiAgICB0b3A6IDEuMTg3NWVtO1xuICAgIGxlZnQ6IC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA1NCUge1xuICAgIHRvcDogMS4wNjI1ZW07XG4gICAgbGVmdDogLjEyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNzAlIHtcbiAgICB0b3A6IDIuMTg3NWVtO1xuICAgIGxlZnQ6IC0uMzc1ZW07XG4gICAgd2lkdGg6IDMuMTI1ZW07XG4gIH1cblxuICA4NCUge1xuICAgIHRvcDogM2VtO1xuICAgIGxlZnQ6IDEuMzEyNWVtO1xuICAgIHdpZHRoOiAxLjA2MjVlbTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRvcDogMi44MTI1ZW07XG4gICAgbGVmdDogLjgxMjVlbTtcbiAgICB3aWR0aDogMS41NjI1ZW07XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgMCUge1xuICAgIHRvcDogMy4zNzVlbTtcbiAgICByaWdodDogMi44NzVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDY1JSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgODQlIHtcbiAgICB0b3A6IDIuMTg3NWVtO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAzLjQzNzVlbTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRvcDogMi4zNzVlbTtcbiAgICByaWdodDogLjVlbTtcbiAgICB3aWR0aDogMi45Mzc1ZW07XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cblxuICA1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG4gIDEyJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcbiAgfVxufVxuXG4vLyBFcnJvciBpY29uIGFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsge1xuICAwJSB7XG4gICAgbWFyZ2luLXRvcDogMS42MjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC40KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNTAlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA4MCUge1xuICAgIG1hcmdpbi10b3A6IC0uMzc1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIiwiQGltcG9ydCAndG9hc3RzLWJvZHknO1xuXG5AbWl4aW4gc3dlZXRhbGVydDItYm9keSgpIHtcbiAgJi5zd2FsMi1zaG93biB7XG4gICAgQGluY2x1ZGUgbm90KCcuc3dhbDItbm8tYmFja2Ryb3AnLCAnLnN3YWwyLXRvYXN0LXNob3duJykge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLy8gbm90IG92ZXJmbG93LXkgYmVjYXVzZSBvZiBTYXJhcmksICMxMjUzXG4gICAgfVxuICB9XG5cbiAgJi5zd2FsMi1oZWlnaHQtYXV0byB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IC8vICM3ODEgIzExMDdcbiAgfVxuXG4gICYuc3dhbDItbm8tYmFja2Ryb3Age1xuICAgIC5zd2FsMi1jb250YWluZXIge1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBib3R0b206IGF1dG87XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRzd2FsMi1jb250YWluZXItcGFkZGluZ30gKiAyKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICYgPiAuc3dhbDItbW9kYWwge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAkc3dhbDItYmFja2Ryb3A7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3Atc3RhcnQsXG4gICAgICAmLnN3YWwyLXRvcC1sZWZ0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXRvcC1lbmQsXG4gICAgICAmLnN3YWwyLXRvcC1yaWdodCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2VudGVyIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2VudGVyLXN0YXJ0LFxuICAgICAgJi5zd2FsMi1jZW50ZXItbGVmdCB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2VudGVyLWVuZCxcbiAgICAgICYuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20tc3RhcnQsXG4gICAgICAmLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbS1lbmQsXG4gICAgICAmLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHByaW50IHtcbiAgICAmLnN3YWwyLXNob3duIHtcbiAgICAgIEBpbmNsdWRlIG5vdCgnLnN3YWwyLW5vLWJhY2tkcm9wJywgJy5zd2FsMi10b2FzdC1zaG93bicpIHtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgPiBbYXJpYS1oaWRkZW49J3RydWUnXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zd2FsMi1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIHN3ZWV0YWxlcnQyLXRvYXN0cy1ib2R5KCkge1xuICAmLnN3YWwyLXRvYXN0LXNob3duIHtcbiAgICAuc3dhbDItY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAmLnN3YWwyLXRvcCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wLWVuZCxcbiAgICAgICYuc3dhbDItdG9wLXJpZ2h0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXRvcC1zdGFydCxcbiAgICAgICYuc3dhbDItdG9wLWxlZnQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2VudGVyLXN0YXJ0LFxuICAgICAgJi5zd2FsMi1jZW50ZXItbGVmdCB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2VudGVyIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2VudGVyLWVuZCxcbiAgICAgICYuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20tc3RhcnQsXG4gICAgICAmLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbSB7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tLWVuZCxcbiAgICAgICYuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItdG9hc3QtY29sdW1uIHtcbiAgICAuc3dhbDItdG9hc3Qge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gICAgICAuc3dhbDItYWN0aW9ucyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIGhlaWdodDogMi4yZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC4zMTI1ZW07XG4gICAgICB9XG5cbiAgICAgIC5zd2FsMi1sb2FkaW5nIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5zd2FsMi1pbnB1dCB7XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICBtYXJnaW46IC4zMTI1ZW0gYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtaW5wdXQtZm9udC1zaXplO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtdmFsaWRhdGlvbi1mb250LXNpemU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "gp5p":
    /*!************************************************!*\
      !*** ./src/app/order/modal/modal.component.ts ***!
      \************************************************/

    /*! exports provided: ModalComponent */

    /***/
    function gp5p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ModalComponent = /*#__PURE__*/function () {
        function ModalComponent(dialogRef, data) {
          _classCallCheck(this, ModalComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          data.title = data.title;
        }

        _createClass(ModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "success",
          value: function success() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Užsakovas pridėtas!', '', 'success');
          }
        }]);

        return ModalComponent;
      }();

      ModalComponent.ɵfac = function ModalComponent_Factory(t) {
        return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalComponent,
        selectors: [["app-modal"]],
        decls: 9,
        vars: 2,
        consts: [["mat-dialog-content", ""], ["matInput", "", "placeholder", "U\u017Esakovas", "cdkFocusInitial", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "mat-dialog-close", "click"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.data.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_5_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_7_listener() {
              return ctx.success();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["h3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\ndiv.mat-dialog-actions[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tqVg":
    /*!********************************************!*\
      !*** ./src/app/order/form/DropdownList.ts ***!
      \********************************************/

    /*! exports provided: DropdownList */

    /***/
    function tqVg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownList", function () {
        return DropdownList;
      });

      var DropdownList = [{
        item_id: 0,
        item_text: 'Miksas'
      }, {
        item_id: 1,
        item_text: 'Drėgmė'
      }, {
        item_id: 2,
        item_text: 'Pelenai'
      }, {
        item_id: 3,
        item_text: 'Šilumingumas'
      }, {
        item_id: 4,
        item_text: 'Lydumas'
      }, {
        item_id: 5,
        item_text: 'C'
      }, {
        item_id: 6,
        item_text: 'H'
      }, {
        item_id: 7,
        item_text: 'N'
      }, {
        item_id: 8,
        item_text: 'S'
      }, {
        item_id: 9,
        item_text: 'Chloras'
      }, {
        item_id: 10,
        item_text: 'O'
      }, {
        item_id: 11,
        item_text: 'pH'
      }, {
        item_id: 12,
        item_text: 'Tankis'
      }, {
        item_id: 13,
        item_text: 'Frakcija'
      }, {
        item_id: 14,
        item_text: 'LOJ'
      }, {
        item_id: 15,
        item_text: 'Org. C'
      }, {
        item_id: 16,
        item_text: 'P'
      }, {
        item_id: 17,
        item_text: 'Cl'
      }, {
        item_id: 18,
        item_text: 'F'
      }, {
        item_id: 19,
        item_text: 'Br'
      }, {
        item_id: 20,
        item_text: 'As'
      }, {
        item_id: 21,
        item_text: 'Be'
      }, {
        item_id: 22,
        item_text: 'Ca'
      }, {
        item_id: 23,
        item_text: 'Cd'
      }, {
        item_id: 24,
        item_text: 'Co'
      }, {
        item_id: 25,
        item_text: 'Cr'
      }, {
        item_id: 26,
        item_text: 'Cu'
      }, {
        item_id: 27,
        item_text: 'Fe'
      }, {
        item_id: 28,
        item_text: 'Li'
      }, {
        item_id: 29,
        item_text: 'Mg'
      }, {
        item_id: 30,
        item_text: 'Mn'
      }, {
        item_id: 31,
        item_text: 'Mo'
      }, {
        item_id: 32,
        item_text: 'Ni'
      }, {
        item_id: 33,
        item_text: 'Pb'
      }, {
        item_id: 34,
        item_text: 'Sb'
      }, {
        item_id: 35,
        item_text: 'Se'
      }, {
        item_id: 36,
        item_text: 'Sr'
      }, {
        item_id: 37,
        item_text: 'Ti'
      }, {
        item_id: 38,
        item_text: 'Tl'
      }, {
        item_id: 39,
        item_text: 'V'
      }, {
        item_id: 40,
        item_text: 'Zn'
      }, {
        item_id: 41,
        item_text: 'K'
      }, {
        item_id: 42,
        item_text: 'Si'
      }, {
        item_id: 43,
        item_text: 'Al'
      }, {
        item_id: 44,
        item_text: 'B'
      }, {
        item_id: 45,
        item_text: 'Ba'
      }, {
        item_id: 46,
        item_text: 'Na'
      }, {
        item_id: 47,
        item_text: 'Ag'
      }, {
        item_id: 48,
        item_text: 'Fiksuota C'
      }, {
        item_id: 49,
        item_text: 'Hg'
      }, {
        item_id: 50,
        item_text: 'Benzapirenas'
      }, {
        item_id: 51,
        item_text: 'Radiacija'
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-order-module-es5.js.map