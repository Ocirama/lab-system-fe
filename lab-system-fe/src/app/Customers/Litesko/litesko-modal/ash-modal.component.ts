import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface DialogData {
  id: number;
  oldDishWeight: number;
  dishWeight: number;
  oldDishAndSampleWeightBefore: number;
  dishAndSampleWeightBefore: number;
  oldDishAndSampleWeightAfter: number;
  // oldDate: Date;
  dishAndSampleWeightAfter: number;
  dishId: string;
  oldDishId: string;
  // date: Date;
}

@Component({
  selector: 'app-total-moisture-modal',
  templateUrl: './ash-modal.component.html',
  styleUrls: ['./ash-modal.component.css']
})
export class AshModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AshModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    data.oldDishId = data.dishId;
    data.oldDishWeight = data.dishWeight;
    data.oldDishAndSampleWeightBefore = data.dishAndSampleWeightBefore;
    data.oldDishAndSampleWeightAfter = data.dishAndSampleWeightAfter;
    // data.oldDate = data.date;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

