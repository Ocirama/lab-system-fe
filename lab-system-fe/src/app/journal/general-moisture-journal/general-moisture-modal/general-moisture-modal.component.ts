import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from "sweetalert2";

interface DialogData {
  id: number;
  oldJarWeight: number;
  jarWeight: number;
  oldJarAndSampleWeightBefore: number;
  jarAndSampleWeightBefore: number;
  oldJarAndSampleWeightAfter: number;
  oldJarAndSampleWeightAfterPlus: number;
  // oldDate: Date;
  jarAndSampleWeightAfter: number;
  jarAndSampleWeightAfterPlus: number;
  jarId: string;
  oldJarId: string;
  // date: Date;
}

@Component({
  selector: 'app-total-moisture-modal',
  templateUrl: './general-moisture-modal.component.html',
  styleUrls: ['./general-moisture-modal.component.css']
})
export class GeneralMoistureModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GeneralMoistureModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    data.oldJarId = data.jarId;
    data.oldJarWeight = data.jarWeight;
    data.oldJarAndSampleWeightBefore = data.jarAndSampleWeightBefore;
    data.oldJarAndSampleWeightAfter = data.jarAndSampleWeightAfter;
    data.oldJarAndSampleWeightAfterPlus = data.jarAndSampleWeightAfterPlus;
    // data.oldDate = data.date;
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

