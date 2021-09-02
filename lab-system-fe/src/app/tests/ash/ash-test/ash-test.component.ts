import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../core/api.service';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
}

export interface Dish {
  id: number;
  dishId: string;
  dishWeight: number;
}

@Component({
  selector: 'app-total-moisture-test',
  templateUrl: './ash-test.component.html',
  styleUrls: ['./ash-test.component.css']
})

export class AshTestComponent implements OnInit {
  displayedColumns: string[] = ['id', 'protocolId', 'sampleId', 'trayId', 'dishId', 'dishWeight', 'dishAndSampleWeightBefore', 'dishAndSampleWeightAfter'];
  dataSource: MatTableDataSource<AshSample>;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  forms: FormGroup[];
  weight: number;
  pageSize = 5;
  samples: Sample[];
  dish: Dish = {} as Dish;
  // tmArray: Array<TotalMoistureSample> = [];
  aArray: AshSample[] = [];
  fixedArray: AshSample[] = [];
  formGroup: FormGroup;
  form: FormArray;
  newArray = [];
  public targetInput = 'input0';
  date: string;
  protocol: string;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
    const date = new Date();
    this.api.get('/lei/journals/ash')
      .subscribe((data: AshSample[]) => this.dataSource.data = data
        .filter(result => ((Number.parseInt(result.date.toString()
          .substring(0, 5)) + Number.parseInt(result.date.toString()
          .substring(5, 7) + Number.parseInt(result.date.toString()
          .substring(9, 10))) === (date.getFullYear() + date.getMonth() + date.getDay())))));
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
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


  sverti(sample: AshSample) {
    this.api.get('/lei/scales')
      .subscribe((weight: any) => {
        this.weight = weight;
        sample.dishAndSampleWeightBefore = this.weight;
        sample.date = this.date;
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


          const tt: AshSample = {
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


  action(sample: AshSample) {
    this.api.get(`/lei/trays/${sample.dishId}`).subscribe((dish: any) => {
      this.dish = dish;

      sample.dishWeight = this.dish.dishWeight;
    });
  }

  onSubmit(tmarray: AshSample[]) {
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
  onResize(event) {

    console.log(event.target.innerWidth);
    if (event.target.innerWidth > 400 && event.target.innerWidth < 600) {
      this.pageSize = 10;
    }
    else if (event.target.innerWidth > 600 && event.target.innerWidth < 800) {
      this.pageSize = 15;
    } else {
      this.pageSize = 5;
    }

  }

  swalSamplesRegister() {
    Swal.fire(
      ' užregistruotas!',
      '',
      'success'
    );
  }
}

