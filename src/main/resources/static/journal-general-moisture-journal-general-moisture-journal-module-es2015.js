(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journal-general-moisture-journal-general-moisture-journal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/general-moisture-journal/general-moisture-list/general-moisture-list.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal/general-moisture-journal/general-moisture-list/general-moisture-list.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Bendrosios drėgmės žurnalas</h3>\r\n\r\n<div>\r\n  <mat-form-field>\r\n    <input matInput  (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtruoti\">\r\n  </mat-form-field>\r\n  <table mat-table matTableExporter [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" #exporter=\"matTableExporter\">\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef> Nr.</th>\r\n      <td mat-cell *matCellDef=\"let index = index\"> {{index + 1}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"protocolId\">\r\n      <th mat-header-cell *matHeaderCellDef> Protokolas</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.protocolId}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"sampleId\">\r\n      <th mat-header-cell *matHeaderCellDef> Meginys</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.sampleId}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"trayId\">\r\n      <th mat-header-cell *matHeaderCellDef> Padėklas</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.trayId}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"jarId\">\r\n      <th mat-header-cell *matHeaderCellDef> Indukas</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.jarId}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"jarWeight\">\r\n      <th mat-header-cell *matHeaderCellDef> Induko svoris</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.jarWeight}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"jarAndSampleWeightBefore\">\r\n      <th mat-header-cell *matHeaderCellDef> Induko ir mėginio masė PRIEŠ</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.jarAndSampleWeightBefore}} </td>\r\n    </ng-container>\r\n    -->\r\n\r\n    <ng-container matColumnDef=\"jarAndSampleWeightAfter\">\r\n      <th mat-header-cell *matHeaderCellDef> Induko ir mėginio masė PO</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.jarAndSampleWeightAfter}} </td>\r\n    </ng-container>\r\n    -->\r\n\r\n    <ng-container matColumnDef=\"jarAndSampleWeightAfterPlus\">\r\n      <th mat-header-cell *matHeaderCellDef> Induko ir mėginio masė PO + n val</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.jarAndSampleWeightAfterPlus}} </td>\r\n    </ng-container>\r\n    -->\r\n\r\n    <ng-container matColumnDef=\"date\">\r\n      <th mat-header-cell *matHeaderCellDef> Data</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.date.toString().substring(0,10)}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n\r\n          <button mat-menu-item (click)=\"openDialog(element)\">\r\n            <mat-icon>edit</mat-icon>\r\n            <span>Redaguoti</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"delete(element.id)\">\r\n            <mat-icon>delete</mat-icon>\r\n            <span>Ištrinti</span>\r\n          </button>\r\n        </mat-menu>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <div class=\"footer\">\r\n    <mat-toolbar>\r\n      <mat-toolbar-row>\r\n        <button mat-stroked-button color=\"primary\" (click)=\"displayFilter('pilnas')\" title=\"pilna lentele\">Pilnas</button>\r\n        <button mat-stroked-button color=\"primary\" (click)=\"displayFilter('metai')\" title=\"Rodyti šių metų\">Metai</button>\r\n        <button mat-stroked-button color=\"primary\" (click)=\"displayFilter('menuo')\" title=\"menuo\">Mėnesis</button>\r\n        <button mat-stroked-button color=\"primary\" (click)=\"openDialog2()\" title=\"menuo\">Diena</button>\r\n        <button mat-icon-button color=\"primary\" (click)=\"exporter.exportTable('xlsx', {fileName: 'Bendroji drėgmė ' + this.excelDate, sheet: 'sheet_name'})\" title=\"Išsaugoti XSLX formatu\"><mat-icon>save_alt</mat-icon></button>\r\n        <span class=\"example-spacer\"></span>\r\n        <mat-paginator showFirstLastButtons=\"true\" class=\"paginator\" [pageSizeOptions]=\"[10, 20, 50]\"></mat-paginator>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/general-moisture-journal/general-moisture-modal/general-moisture-modal.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal/general-moisture-journal/general-moisture-modal/general-moisture-modal.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 mat-dialog-title>Mėginio nr.: {{ data.id }}</h3>\r\n\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Induko ID\" [(ngModel)]=\"data.jarId\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Induko svoris\" [(ngModel)]=\"data.jarWeight\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Induko ir ėminio svoris PRIEŠ\" [(ngModel)]=\"data.jarAndSampleWeightBefore\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Induko ir ėminio svoris PO\" [(ngModel)]=\"data.jarAndSampleWeightAfter\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Induko ir ėminio svoris PO + n val\" [(ngModel)]=\"data.jarAndSampleWeightAfterPlus\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Atšaukti</button>\r\n  <button mat-button [mat-dialog-close]=\"data\">Išsaugoti</button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/app/journal/general-moisture-journal/general-moisture-journal-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/journal/general-moisture-journal/general-moisture-journal-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: GeneralMoistureJournalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralMoistureJournalRoutingModule", function() { return GeneralMoistureJournalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _general_moisture_list_general_moisture_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-moisture-list/general-moisture-list.component */ "./src/app/journal/general-moisture-journal/general-moisture-list/general-moisture-list.component.ts");




const routes = [
    {
        path: '',
        component: _general_moisture_list_general_moisture_list_component__WEBPACK_IMPORTED_MODULE_3__["GeneralMoistureListComponent"]
    }
];
let GeneralMoistureJournalRoutingModule = class GeneralMoistureJournalRoutingModule {
};
GeneralMoistureJournalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GeneralMoistureJournalRoutingModule);



/***/ }),

/***/ "./src/app/journal/general-moisture-journal/general-moisture-journal.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/journal/general-moisture-journal/general-moisture-journal.module.ts ***!
  \*************************************************************************************/
/*! exports provided: GeneralMoistureJournalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralMoistureJournalModule", function() { return GeneralMoistureJournalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _general_moisture_journal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-moisture-journal-routing.module */ "./src/app/journal/general-moisture-journal/general-moisture-journal-routing.module.ts");
/* harmony import */ var _general_moisture_list_general_moisture_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-moisture-list/general-moisture-list.component */ "./src/app/journal/general-moisture-journal/general-moisture-list/general-moisture-list.component.ts");
/* harmony import */ var _general_moisture_modal_general_moisture_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-moisture-modal/general-moisture-modal.component */ "./src/app/journal/general-moisture-journal/general-moisture-modal/general-moisture-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _total_moisture_journal_date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../total-moisture-journal/date-modal/date-modal.component */ "./src/app/journal/total-moisture-journal/date-modal/date-modal.component.ts");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm2015/mat-table-exporter.js");
/* harmony import */ var _log_log_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../log/log.module */ "./src/app/log/log.module.ts");












let GeneralMoistureJournalModule = class GeneralMoistureJournalModule {
};
GeneralMoistureJournalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_general_moisture_list_general_moisture_list_component__WEBPACK_IMPORTED_MODULE_4__["GeneralMoistureListComponent"], _general_moisture_modal_general_moisture_modal_component__WEBPACK_IMPORTED_MODULE_5__["GeneralMoistureModalComponent"]],
        imports: [
            _general_moisture_journal_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralMoistureJournalRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["_MatMenuDirectivesModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_10__["MatTableExporterModule"],
            _log_log_module__WEBPACK_IMPORTED_MODULE_11__["LogModule"]
        ],
        entryComponents: [
            _general_moisture_modal_general_moisture_modal_component__WEBPACK_IMPORTED_MODULE_5__["GeneralMoistureModalComponent"], _total_moisture_journal_date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_9__["DateModalComponent"]
        ]
    })
], GeneralMoistureJournalModule);



/***/ }),

/***/ "./src/app/journal/general-moisture-journal/general-moisture-list/general-moisture-list.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/journal/general-moisture-journal/general-moisture-list/general-moisture-list.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  text-align: center;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  max-width: 1500px;\r\n  width: 100%;\r\n}\r\n\r\ntable th:first-child {\r\n  width: 50px;\r\n}\r\n\r\ntable th:last-child {\r\n  width: 10px;\r\n}\r\n\r\n.mat-row:hover {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: red;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\nmat-form-field {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5hbC9nZW5lcmFsLW1vaXN0dXJlLWpvdXJuYWwvZ2VuZXJhbC1tb2lzdHVyZS1saXN0L2dlbmVyYWwtbW9pc3R1cmUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwvZ2VuZXJhbC1tb2lzdHVyZS1qb3VybmFsL2dlbmVyYWwtbW9pc3R1cmUtbGlzdC9nZW5lcmFsLW1vaXN0dXJlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxudGFibGUgdGg6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/journal/general-moisture-journal/general-moisture-list/general-moisture-list.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/journal/general-moisture-journal/general-moisture-list/general-moisture-list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GeneralMoistureListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralMoistureListComponent", function() { return GeneralMoistureListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _general_moisture_modal_general_moisture_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general-moisture-modal/general-moisture-modal.component */ "./src/app/journal/general-moisture-journal/general-moisture-modal/general-moisture-modal.component.ts");
/* harmony import */ var _total_moisture_journal_date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../total-moisture-journal/date-modal/date-modal.component */ "./src/app/journal/total-moisture-journal/date-modal/date-modal.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let GeneralMoistureListComponent = class GeneralMoistureListComponent {
    constructor(api, dialog) {
        this.api = api;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'protocolId', 'sampleId', 'trayId', 'jarId', 'jarWeight', 'jarAndSampleWeightBefore', 'jarAndSampleWeightAfter', 'jarAndSampleWeightAfterPlus', 'date', 'actions'];
        this.generalMoistureJournals = [];
    }
    ngOnInit() {
        this.getGm();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
        this.dataSource.filterPredicate = function (data, filter) {
            return data.protocolId.includes(filter);
        };
    }
    getGm() {
        this.api.get('/lei/journals/gm').subscribe((data) => this.dataSource.data = data);
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    delete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Ar tikrai norite ištrinti šį svėrimą?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Atšaukti',
            confirmButtonText: 'Taip, ištrinti!'
        }).then((result) => {
            if (result.value) {
                // tslint:disable-next-line:no-shadowed-variable
                this.api.delete(`/lei/journals/gm/${id}`).subscribe(() => this.generalMoistureJournals = this.generalMoistureJournals.filter(item => item.id !== id));
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Ištrinta!', 'Užsakymas ištrintas.');
                this.dataSource.data = [];
                setTimeout(() => this.getGm(), 1000);
            }
        });
    }
    openDialog(generalMoistureJournal) {
        const dialogRef = this.dialog.open(_general_moisture_modal_general_moisture_modal_component__WEBPACK_IMPORTED_MODULE_4__["GeneralMoistureModalComponent"], {
            width: '250px',
            data: {
                id: generalMoistureJournal ? generalMoistureJournal.id : null,
                jarId: generalMoistureJournal ? generalMoistureJournal.jarId : null,
                jarWeight: generalMoistureJournal ? generalMoistureJournal.jarWeight : null,
                jarAndSampleWeightBefore: generalMoistureJournal ? generalMoistureJournal.jarAndSampleWeightBefore : null,
                jarAndSampleWeightAfter: generalMoistureJournal ? generalMoistureJournal.jarAndSampleWeightAfter : null,
                jarAndSampleWeightAfterPlus: generalMoistureJournal ? generalMoistureJournal.jarAndSampleWeightAfterPlus : null,
                date: generalMoistureJournal ? generalMoistureJournal.date : null
            }
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.api.post('/lei/journals/gm', data).subscribe((result) => {
                    const row = this.generalMoistureJournals.find(item => item.id === result.id);
                    if (row) {
                        row.jarId = result.jarId;
                        row.jarWeight = result.jarWeight;
                        row.jarAndSampleWeightBefore = result.jarAndSampleWeightBefore;
                        row.jarAndSampleWeightAfter = result.jarAndSampleWeightAfter;
                        row.jarAndSampleWeightAfterPlus = result.jarAndSampleWeightAfterPlus;
                        row.date = result.date;
                        setTimeout(() => this.getGm(), 1000);
                    }
                    else {
                        this.generalMoistureJournals = [...this.generalMoistureJournals, result];
                        setTimeout(() => this.getGm(), 1000);
                    }
                });
            }
        });
    }
    displayFilter(value) {
        if (value === 'metai') {
            this.api.get('/lei/journals/gm')
                .subscribe((data) => this.dataSource.data = data
                .filter(result => Number
                .parseInt(result.date.toString()
                .substring(0, 4)) === new Date().getFullYear()));
        }
        if (value === 'pilnas') {
            this.api.get('/lei/journals/gm');
            this.api.get('/lei/journals/gm').subscribe((data) => this.dataSource.data = data);
            const date = new Date();
            console.log(date.getFullYear() + '-' + date.getMonth() + 1);
            console.log(this.dataSource.data[1].date.toString()
                .substring(0, 10));
        }
        if (value === 'menuo') {
            const date = new Date();
            this.api.get('/lei/journals/gm')
                .subscribe((data) => this.dataSource.data = data
                .filter(result => ((Number.parseInt(result.date.toString()
                .substring(0, 5)) + Number.parseInt(result.date.toString()
                .substring(5, 7))) === (date.getFullYear() + date.getMonth() + 1))));
            console.log();
        }
    }
    openDialog2(excelDate) {
        const dialogRef = this.dialog.open(_total_moisture_journal_date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_5__["DateModalComponent"], {
            width: '250px',
            data: {
                date: excelDate ? excelDate : null,
            }
        });
        dialogRef.afterClosed().subscribe(dataa => {
            if (dataa) {
                this.api.get('/lei/journals/gm')
                    // tslint:disable-next-line:no-shadowed-variable
                    .subscribe((data) => this.dataSource.data = data
                    .filter(result => ((result.date.toString()
                    .substring(0, 10)) === dataa.date)));
                console.log(dataa.date);
            }
        });
    }
};
GeneralMoistureListComponent.ctorParameters = () => [
    { type: _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], GeneralMoistureListComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], GeneralMoistureListComponent.prototype, "sort", void 0);
GeneralMoistureListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-total-moisture-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-moisture-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/general-moisture-journal/general-moisture-list/general-moisture-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./general-moisture-list.component.css */ "./src/app/journal/general-moisture-journal/general-moisture-list/general-moisture-list.component.css")).default]
    })
], GeneralMoistureListComponent);



/***/ }),

/***/ "./src/app/journal/general-moisture-journal/general-moisture-modal/general-moisture-modal.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/journal/general-moisture-journal/general-moisture-modal/general-moisture-modal.component.css ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  text-align: center;\r\n}\r\n\r\ndiv.mat-dialog-actions {\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5hbC9nZW5lcmFsLW1vaXN0dXJlLWpvdXJuYWwvZ2VuZXJhbC1tb2lzdHVyZS1tb2RhbC9nZW5lcmFsLW1vaXN0dXJlLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwvZ2VuZXJhbC1tb2lzdHVyZS1qb3VybmFsL2dlbmVyYWwtbW9pc3R1cmUtbW9kYWwvZ2VuZXJhbC1tb2lzdHVyZS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2Lm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/journal/general-moisture-journal/general-moisture-modal/general-moisture-modal.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/journal/general-moisture-journal/general-moisture-modal/general-moisture-modal.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: GeneralMoistureModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralMoistureModalComponent", function() { return GeneralMoistureModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let GeneralMoistureModalComponent = class GeneralMoistureModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.oldJarId = data.jarId;
        data.oldJarWeight = data.jarWeight;
        data.oldJarAndSampleWeightBefore = data.jarAndSampleWeightBefore;
        data.oldJarAndSampleWeightAfter = data.jarAndSampleWeightAfter;
        data.oldJarAndSampleWeightAfterPlus = data.jarAndSampleWeightAfterPlus;
        // data.oldDate = data.date;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
GeneralMoistureModalComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
GeneralMoistureModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-total-moisture-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-moisture-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/general-moisture-journal/general-moisture-modal/general-moisture-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./general-moisture-modal.component.css */ "./src/app/journal/general-moisture-journal/general-moisture-modal/general-moisture-modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], GeneralMoistureModalComponent);



/***/ })

}]);
//# sourceMappingURL=journal-general-moisture-journal-general-moisture-journal-module-es2015.js.map