(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tests-ash-ash-test-ash-test-module"],{

/***/ "TGX/":
/*!**********************************************************!*\
  !*** ./src/app/tests/ash/ash-test/ash-test.component.ts ***!
  \**********************************************************/
/*! exports provided: AshTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AshTestComponent", function() { return AshTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/api.service */ "HyEY");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
















function AshTestComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Nr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AshTestComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const index_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", index_r23 + 1, " ");
} }
function AshTestComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Protokolas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AshTestComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r24.protocolId, " ");
} }
function AshTestComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Meginys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AshTestComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r25.sampleId, " ");
} }
function AshTestComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Pad\u0117klas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AshTestComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r26.trayId, " ");
} }
function AshTestComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Indukas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AshTestComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r27.dishId, " ");
} }
function AshTestComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Induko svoris");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AshTestComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r28.dishWeight, " ");
} }
function AshTestComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Induko ir m\u0117ginio mas\u0117 PRIE\u0160");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AshTestComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r29.dishAndSampleWeightBefore, " ");
} }
function AshTestComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Induko ir m\u0117ginio mas\u0117 PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AshTestComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r30.dishAndSampleWeightAfter, " ");
} }
function AshTestComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 30);
} }
function AshTestComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 31);
} }
function AshTestComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " \u012Eveskite pad\u0117klo registravimo dat\u0105 yyyyMMdd ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AshTestComponent_mat_step_45_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Skenuok ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AshTestComponent_mat_step_45_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-step", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AshTestComponent_mat_step_45_ng_template_2_Template, 2, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Protokolo Nr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AshTestComponent_mat_step_45_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r35.protocol = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AshTestComponent_mat_step_45_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r37.getSamplesByProtocol(ctx_r37.protocol); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Sekantis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const i_r33 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroupName", i_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r20.firstFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", i_r33 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r20.protocol);
} }
function AshTestComponent_mat_step_46_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const i_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"](" Sverkit\u0119 ", ctx_r40.aArray[i_r39] == null ? null : ctx_r40.aArray[i_r39].protocolId, " protokolo ", ctx_r40.aArray[i_r39] == null ? null : ctx_r40.aArray[i_r39].sampleId, " - ", i_r39 % 2 + 1, " m\u0117gin\u012F ");
} }
function AshTestComponent_mat_step_46_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-step", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Atgal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Sekantis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, AshTestComponent_mat_step_46_ng_template_7_Template, 2, 3, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AshTestComponent_mat_step_46_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r43); const i_r39 = ctx.index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r42.aArray[i_r39] && (ctx_r42.aArray[i_r39].dishId = $event); })("keydown.enter", function AshTestComponent_mat_step_46_Template_input_keydown_enter_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r43); const i_r39 = ctx.index; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r44.sverti(ctx_r44.aArray[i_r39]); })("focusout", function AshTestComponent_mat_step_46_Template_input_focusout_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r43); const i_r39 = ctx.index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r45.action(ctx_r45.aArray[i_r39]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-card", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Tu\u0161\u010Dio induko svoris ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-card", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Induko ir \u0117minio svoris ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Atgal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Sekantis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const i_r39 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroupName", i_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "input", i_r39 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r21.aArray[i_r39] && ctx_r21.aArray[i_r39].dishId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r21.aArray[i_r39] && ctx_r21.aArray[i_r39].dishWeight, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r21.aArray[i_r39] && ctx_r21.aArray[i_r39].dishAndSampleWeightBefore, "");
} }
function AshTestComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r22.protocol, " protokolo m\u0117giniai pasverti");
} }
const _c0 = function (a5) { return [5, 10, 15, 20, 25, a5]; };
class AshTestComponent {
    // tslint:disable-next-line:variable-name
    constructor(_formBuilder, api) {
        this._formBuilder = _formBuilder;
        this.api = api;
        this.displayedColumns = ['id', 'protocolId', 'sampleId', 'trayId', 'dishId', 'dishWeight', 'dishAndSampleWeightBefore', 'dishAndSampleWeightAfter'];
        this.isLinear = false;
        this.pageSize = 5;
        this.dish = {};
        // tmArray: Array<TotalMoistureSample> = [];
        this.aArray = [];
        this.fixedArray = [];
        this.newArray = [];
        this.targetInput = 'input0';
    }
    ngOnInit() {
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
        const date = new Date();
        this.api.get('/lei/journals/ash')
            .subscribe((data) => this.dataSource.data = data
            .filter(result => ((Number.parseInt(result.date.toString()
            .substring(0, 5)) + Number.parseInt(result.date.toString()
            .substring(5, 7) + Number.parseInt(result.date.toString()
            .substring(9, 10))) === (date.getFullYear() + date.getMonth() + date.getDay())))));
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.dataSource.paginator = this.paginator;
    }
    init() {
        return this._formBuilder.group({
            cont1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            cont2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
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
            sample.dishAndSampleWeightBefore = this.weight;
            sample.date = this.date;
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
                        dishAndSampleWeightAfter: null,
                        dishAndSampleWeightBefore: null,
                        dishId: '',
                        dishWeight: null,
                        date: null
                    };
                    tt.protocolId = sample.protocolId;
                    tt.sampleId = sample.sampleId;
                    array.push(tt);
                }
            }
            this.aArray = array;
            console.log(this.aArray);
            for (let i = 1; i <= this.aArray.length - 1; i++) {
                this.addItem();
            }
        });
    }
    action(sample) {
        this.api.get(`/lei/trays/${sample.dishId}`).subscribe((dish) => {
            this.dish = dish;
            sample.dishWeight = this.dish.dishWeight;
        });
    }
    onSubmit(tmarray) {
        for (const sample of this.aArray) {
            sample.dishAndSampleWeightAfter = 0;
            console.log(sample);
            this.api.post('/lei/journals/ash', sample).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
        }
    }
    ngAfterViewInit() {
        this.setFocus();
        this.dataSource.paginator = this.paginator;
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
    onResize(event) {
        console.log(event.target.innerWidth);
        if (event.target.innerWidth > 400 && event.target.innerWidth < 600) {
            this.pageSize = 10;
        }
        else if (event.target.innerWidth > 600 && event.target.innerWidth < 800) {
            this.pageSize = 15;
        }
        else {
            this.pageSize = 5;
        }
    }
    swalSamplesRegister() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(' u??registruotas!', '', 'success');
    }
}
AshTestComponent.??fac = function AshTestComponent_Factory(t) { return new (t || AshTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
AshTestComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AshTestComponent, selectors: [["app-total-moisture-test"]], viewQuery: function AshTestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 62, vars: 14, consts: [[1, "mat-elevation-z8", 3, "resize"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "protocolId"], ["matColumnDef", "sampleId"], ["matColumnDef", "trayId"], ["matColumnDef", "dishId"], ["matColumnDef", "dishWeight"], ["matColumnDef", "dishAndSampleWeightBefore"], ["matColumnDef", "dishAndSampleWeightAfter"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], [1, "parent"], [3, "formGroup"], ["formArrayName", "form", 3, "selectionChange"], ["stepper", ""], [3, "stepControl"], ["matStepLabel", ""], ["matInput", "", "id", "input0", "formControlName", "firstCtrl", "required", "", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matStepperNext", "", 3, "click"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], [1, "lastWeight"], [1, "a"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [3, "formGroupName"], ["matInput", "", "formControlName", "firstCtrl", "required", "", 3, "id", "ngModel", "ngModelChange"], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Pad\u0117klo numeris", "formControlName", "cont1", "required", "", 3, "id", "ngModel", "ngModelChange", "keydown.enter", "focusout"], [1, "padekloSvoris"], [1, "meginioSvoris"]], template: function AshTestComponent_Template(rf, ctx) { if (rf & 1) {
        const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Peleningumas 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("resize", function AshTestComponent_Template_div_resize_2_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AshTestComponent_th_5_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AshTestComponent_td_6_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, AshTestComponent_th_8_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, AshTestComponent_td_9_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, AshTestComponent_th_11_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, AshTestComponent_td_12_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, AshTestComponent_th_14_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, AshTestComponent_td_15_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](16, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, AshTestComponent_th_17_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, AshTestComponent_td_18_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, AshTestComponent_th_20_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, AshTestComponent_td_21_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](22, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, AshTestComponent_th_23_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, AshTestComponent_td_24_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](25, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, AshTestComponent_th_26_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, AshTestComponent_td_27_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, AshTestComponent_tr_28_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, AshTestComponent_tr_29_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-vertical-stepper", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectionChange", function AshTestComponent_Template_mat_vertical_stepper_selectionChange_33_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-step", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, AshTestComponent_ng_template_37_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AshTestComponent_Template_input_ngModelChange_41_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AshTestComponent_Template_button_click_43_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Sekantis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, AshTestComponent_mat_step_45_Template, 10, 4, "mat-step", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, AshTestComponent_mat_step_46_Template, 23, 5, "mat-step", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, AshTestComponent_ng_template_48_Template, 2, 1, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Pasirinkit\u0119 k\u0105 norite daryti.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Atgal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AshTestComponent_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r46); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](34); return _r18.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Pildyti i\u0161 naujo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AshTestComponent_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r46); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](34); _r18.reset(); ctx.onSubmit(ctx.aArray); return ctx.swalSamplesRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "I\u0161saugoti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "mat-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Paskutinio sv\u0117rimo svoris ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSize", ctx.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c0, ctx.dataSource.data.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.formGroup.controls.form["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.formGroup.controls.form["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.weight, "");
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatVerticalStepper"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]], styles: ["@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-stepper-vertical[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n  width: 500px !important;\r\n  float: left;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.parent[_ngcontent-%COMP%] {\r\n  position: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  float: left;\r\n}\r\n\r\n.mat-elevation-z8[_ngcontent-%COMP%]{\r\n float: left;\r\n }\r\n\r\ninput[_ngcontent-%COMP%]   .svoris[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.lastWeight[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin: 0 auto;\r\n  position: fixed;\r\n  \r\n  top: 7%;\r\n  left: 1%;\r\n\r\n  \r\n  min-height: 3em;\r\n  width: 450px;\r\n}\r\n\r\n.weightText[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.padekloSvoris[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.meginioSvoris[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-color: #3f51b5;\r\n  margin-bottom: 5px;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.a[_ngcontent-%COMP%] {\r\n  margin-top: -10px;\r\n  font-size: 10px;\r\n  vertical-align: top;\r\n  margin-bottom: 5px;\r\n  margin-left: -10px;\r\n  text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaC10ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFOztBQUUzRTtBQUNBOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1g7O0FBRUQ7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1AsUUFBUTs7RUFFUix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1COztBQUVyQjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFzaC10ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly91bnBrZy5jb20vYm9vdHN0cmFwQDMuMy43L2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7XHJcblxyXG5kaXYge1xyXG59XHJcblxyXG5zcGFuIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LXN0ZXBwZXItdmVydGljYWwge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXJlbnQge1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm1hdC1lbGV2YXRpb24tejh7XHJcbiBmbG9hdDogbGVmdDtcclxuIH1cclxuXHJcbmlucHV0IC5zdm9yaXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubGFzdFdlaWdodCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAvKiBjZW50ZXIgdGhlIGVsZW1lbnQgKi9cclxuICB0b3A6IDclO1xyXG4gIGxlZnQ6IDElO1xyXG5cclxuICAvKiBnaXZlIGl0IGRpbWVuc2lvbnMgKi9cclxuICBtaW4taGVpZ2h0OiAzZW07XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG59XHJcbi53ZWlnaHRUZXh0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4ucGFkZWtsb1N2b3JpcyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tZWdpbmlvU3ZvcmlzIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcblxyXG5cclxuLmEge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AshTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-total-moisture-test',
                templateUrl: './ash-test.component.html',
                styleUrls: ['./ash-test.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "TJuR":
/*!*******************************************************!*\
  !*** ./src/app/tests/ash/ash-test/ash-test.module.ts ***!
  \*******************************************************/
/*! exports provided: AshTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AshTestModule", function() { return AshTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ash_test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ash-test-routing.module */ "zCGt");
/* harmony import */ var _ash_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ash-test.component */ "TGX/");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");













class AshTestModule {
}
AshTestModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AshTestModule });
AshTestModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AshTestModule_Factory(t) { return new (t || AshTestModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ash_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["AshTestRoutingModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AshTestModule, { declarations: [_ash_test_component__WEBPACK_IMPORTED_MODULE_3__["AshTestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ash_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["AshTestRoutingModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AshTestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ash_test_component__WEBPACK_IMPORTED_MODULE_3__["AshTestComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ash_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["AshTestRoutingModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zCGt":
/*!***************************************************************!*\
  !*** ./src/app/tests/ash/ash-test/ash-test-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AshTestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AshTestRoutingModule", function() { return AshTestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ash_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ash-test.component */ "TGX/");





const routes = [
    {
        path: '',
        component: _ash_test_component__WEBPACK_IMPORTED_MODULE_2__["AshTestComponent"]
    }
];
class AshTestRoutingModule {
}
AshTestRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AshTestRoutingModule });
AshTestRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AshTestRoutingModule_Factory(t) { return new (t || AshTestRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AshTestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AshTestRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tests-ash-ash-test-ash-test-module-es2015.js.map