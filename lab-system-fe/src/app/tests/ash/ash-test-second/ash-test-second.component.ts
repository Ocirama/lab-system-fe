import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../core/api.service';
import Swal from 'sweetalert2';

interface Sample {
  id: number;
  protocolId: string;
  sampleId: string;
  sampleWeight: number;
}

export interface AshSample {
  id: number;
  protocolId: string;
  sampleId: string;
  dishId: string;
  dishWeight: number;
  dishAndSampleWeightBefore: number;
  dishAndSampleWeightAfter: number;
  date: string;
  // date: Date;
}

export interface Dish {
  id: number;
  dishId: string;
  dishWeight: number;
}

@Component({
  selector: 'app-total-moisture-test',
  templateUrl: './ash-test-second.component.html',
  styleUrls: ['./ash-test-second.component.css']
})

export class AshTestSecondComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  forms: FormGroup[];
  weight: number;

  tray: Dish = {} as Dish;
  aArray: AshSample[] = [];

  formGroup: FormGroup;
  form: FormArray;

  public targetInput = 'input0';
  date: string;


  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder,
              private api: ApiService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      primaryCtrl: ['', Validators.required],
      secondaryCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

    this.formGroup = this._formBuilder.group({
      form: this._formBuilder.array([])
    });
  }

  init() {
    return this._formBuilder.group({
      cont1: new FormControl('', [Validators.required]),
      cont2: new FormControl('', [Validators.required])
    });
  }

  addItem() {
    this.form = this.formGroup.get('form') as FormArray;
    this.form.push(this.init());
    this.aArray.push(
      new class implements AshSample {
        date: string;
        id: number;
        protocolId: string;
        sampleId: string;
        dishAndSampleWeightAfter: number;
        dishAndSampleWeightBefore: number;
        dishId: string;
        dishWeight: number;
      });
  }

  sverti(sample: AshSample) {
    this.api.get('/lei/scales')
      .subscribe((weight: any) => {
        this.weight = weight;
        sample.dishAndSampleWeightAfter = this.weight;
        sample.date = this.date;
        console.log(this.weight);
      });
  }

  action(sample: AshSample) {
    this.api.get(`/lei/trays/${sample.dishId}`).subscribe((tray: any) => {
      this.tray = tray;
      sample.dishWeight = this.tray.dishWeight;
    });
  }

  onSubmit(a: AshSample[]) {
    for (const sample of this.aArray) {
      console.log(sample);
      this.api.post('/lei/journals/ash/second', sample).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
    }
  }

  ngAfterViewInit() {
    this.setFocus();
  }

  private setFocus() {
    const targetElem = document.getElementById(this.targetInput);
    setTimeout(function waitTargetElem() {
      if (document.body.contains(targetElem)) {
        targetElem.focus();
      } else {
        setTimeout(waitTargetElem, 100);
      }
    }, 100);
  }

  onChange(event: any) {
    const index = String(event.selectedIndex);
    this.targetInput = 'input' + index;
    this.setFocus();
  }

  swalSamplesRegister() {
    if (this.aArray !== []) {
      Swal.fire(
        ' užregistruotas!',
        '',
        'success'
      );
    } else {
      Swal.fire(
        ' Klaida',
        '',
        'error'
      );
    }

  }

  reset() {
    this.aArray = [];
  }
}
