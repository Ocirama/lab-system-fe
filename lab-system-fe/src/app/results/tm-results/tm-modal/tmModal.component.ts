import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import Swal from 'sweetalert2';

interface DialogData {
  id: number;
  oldProtocolId: string;
  protocolId: string;
  oldCustomer: string;
  oldTest: string;
  oldSampleType: string;
  oldOrderAmount: number;
  oldDate: string;
  customer: string;
  test: string;
  sampleType: string;
  orderAmount: number;
  date: string;
  oldYear: number;
  year: number;
}

@Component({
  selector: 'app-modal',
  templateUrl: './tmModal.component.html',
  styleUrls: ['./tmModal.component.css']
})
export class TmModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    data.oldProtocolId = data.protocolId;
    data.oldCustomer = data.customer;
    data.oldTest = data.test;
    data.oldSampleType = data.sampleType;
    data.oldOrderAmount = data.orderAmount;
    data.oldDate = data.date;
    data.oldYear = data.year;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  swalOrderUpdate() {
    Swal.fire(
      'Užsakymas papildytas.',
      '',
      'success'
    );
  }
}
