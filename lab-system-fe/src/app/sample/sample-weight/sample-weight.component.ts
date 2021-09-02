import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../core/api.service';
import {TabService} from '../../tab.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {isElementScrolledOutsideView} from '@angular/cdk/overlay/position/scroll-clip';


interface Sample {
  id: number;
  protocolId: string;
  sampleId: string;
  sampleWeight: number;

}

@Component({
  selector: 'app-sample-weight',
  templateUrl: './sample-weight.component.html',
  providers: [TabService],
  styleUrls: ['./sample-weight.component.css']
})


export class SampleWeightComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forms: FormGroup[];
  weight: number;
  samples: Sample[];
  sampleArray: Sample[] = [];
  formGroup: FormGroup;
  form: FormArray;
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

  getWeight(sample: Sample) {
    this.api.getWeight('/scales').subscribe((weight: any) => {
      sample.sampleWeight = weight;
    });
  }

  getSamplesByProtocol(protocol: any) {
    this.api.get(`/lei/samples/list/${protocol}`).subscribe((samples: any) => {
      this.samples = samples;
      console.log(this.samples);
      const array = [];
      for (const sample of this.samples) {
        const tt: Sample = {
          id: null,
          protocolId: '',
          sampleId: '',
          sampleWeight: null
        };
        tt.id = sample.id;
        tt.protocolId = sample.protocolId;
        tt.sampleId = sample.sampleId;
        array.push(tt);
      }
      this.sampleArray = array;
      console.log(this.sampleArray);
      for (let i = 1; i <= this.sampleArray.length - 1; i++) {
        this.addItem();
      }
    });
  }


  onSubmit(tmarray: Sample[]) {
    for (const sample of this.sampleArray) {
      console.log(sample);
      this.api.post('/lei/samples', sample).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
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

  weightSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Mėginys pasvertas',
      showConfirmButton: false,
      timer: 100
    });
  }

  swalSamplesRegister() {
    Swal.fire(
      'Svoriai išsaugoti.',
      '',
      'success'
    );
  }
}
