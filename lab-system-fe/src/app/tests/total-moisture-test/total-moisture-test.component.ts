import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../core/api.service';
import Swal from "sweetalert2";

interface Sample {
  id: number;
  protocolId: string;
  sampleId: string;
  sampleWeight: number;
}

export interface TotalMoistureSample {
  id: number;
  protocolId: string;
  sampleId: string;
  trayId: string;
  trayWeight: number;
  trayAndSampleWeightBefore: number;
  trayAndSampleWeightAfter: number;
  trayAndSampleWeightAfterPlus: number;
  // date: Date;
}

export interface Tray {
  id: number;
  trayId: string;
  trayWeight: number;
}

@Component({
  selector: 'app-total-moisture-test',
  templateUrl: './total-moisture-test.component.html',
  styleUrls: ['./total-moisture-test.component.css']
})

export class TotalMoistureTestComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  forms: FormGroup[];
  weight: number;
  samples: Sample[];
  tray: Tray = {} as Tray;
  // tmArray: Array<TotalMoistureSample> = [];
  tmArray: TotalMoistureSample[] = [];
  fixedArray: TotalMoistureSample[] = [];
  formGroup: FormGroup;
  form: FormArray;
  newArray = [];
  public targetInput = 'input0';
  protocol: string;


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
      form: this._formBuilder.array([this.init()])
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
  }


  sverti(sample: TotalMoistureSample) {
    this.api.get('/lei/scales')
      .subscribe((weight: any) => {
        this.weight = weight;
        sample.trayAndSampleWeightBefore = this.weight;
        console.log(this.weight);
      });
  }

  getSamplesByProtocol(protocol: any) {
    this.api.get(`/lei/samples/list/${protocol}`).subscribe((samples: any) => {
      this.samples = samples;
      console.log(this.samples);
      const array = [];
      for (const sample of this.samples) {
        for (let i = 1; i <= 2; i++) {


          const tt: TotalMoistureSample = {
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
      this.tmArray = array;
      console.log(this.tmArray);
      for (let i = 1; i <= this.tmArray.length - 1; i++) {
        this.addItem();
      }
    });
  }


  action(sample: TotalMoistureSample) {
    this.api.get(`/lei/trays/${sample.trayId}`).subscribe((tray: any) => {
      this.tray = tray;

      sample.trayWeight = this.tray.trayWeight;
    });
  }

  onSubmit(tmarray: TotalMoistureSample[]) {
    for (const sample of this.tmArray) {
      sample.trayAndSampleWeightAfter = 0;
      sample.trayAndSampleWeightAfterPlus = 0;
      console.log(sample);
      this.api.post('/lei/journals', sample).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
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
    Swal.fire(
      ' užregistruotas!',
      '',
      'success'
    );
  }
}
