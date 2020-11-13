import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import Swal from 'sweetalert2';

interface DialogData {
  id: number;
  oldProtocolId: string;
  protocolId: string;
  oldSampleId: string;
  oldSampleWeight: number;
  sampleId: string;
  sampleWeight: number;
}

@Component({
  selector: 'app-sample-modal',
  templateUrl: './sample-modal.component.html',
  styleUrls: ['./sample-modal.component.css']
})
export class SampleModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SampleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    data.oldProtocolId = data.protocolId;
    data.oldSampleId = data.sampleId;
    data.oldSampleWeight = data.sampleWeight;
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
