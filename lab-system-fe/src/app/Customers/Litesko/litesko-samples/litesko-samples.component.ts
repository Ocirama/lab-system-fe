import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


import Swal from 'sweetalert2';
import {ThemePalette} from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';

import 'sweetalert2/src/sweetalert2.scss';
import {TabService} from '../../../tab.service';
import {ApiService} from '../../../core/api.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


interface LiteskoSamples {
  id: number;
  sampleId: string;
  testType: string;
  dateOfReceipt: Date;
  status: string;
  notes: string;
  startDate: Date;
}

interface Sample {
  id: number;
  protocolId: string;
  testType: string;
  sampleId: string;
  sampleWeight: number;
  date: Date;
}

interface Status {
  value: string;
  viewValue: string;
}


// tslint:disable-next-line:variable-name
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-form',
  templateUrl: './litesko-samples.component.html',
  providers: [TabService],
  styleUrls: ['./litesko-samples.component.css']
})
export class LiteskoSamplesComponent implements OnInit {
  statuses: Status[] = [
    {value: '0-0', viewValue: '0'},
    {value: '1-1', viewValue: '1'},
    {value: '2-2', viewValue: '2'}
  ];
  protocolId: string;
  stringDate1: string;
  stringDate2: string;
  status: string;
  displayedColumns: string[] = ['protocol', 'sampleId', 'testType'];
  dataSource: MatTableDataSource<Sample>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  color: ThemePalette = 'accent';
  sampleList = [];
  liteskoSamples: LiteskoSamples = {} as LiteskoSamples;
  samples: Sample[] = [];
  typeHasError = false;
  showVar = false;


  @Input() public value: number;
  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder,
              // tslint:disable-next-line:variable-name
              private _formBuilder2: FormBuilder,
              private api: ApiService,
              public dialog: MatDialog,
  ) {
  }

  submitted = false;


  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
  }

  getSamplesByProtocol(protocol: string) {
    const kept = protocol.substring(0, protocol.indexOf(','));
    const remainder = protocol.substring(protocol.indexOf(',') + 1, protocol.length);
    this.api.get(`/lei/samples/list/${kept}`).subscribe((data: Sample[]) => data.forEach(x => this.samples.push(x)));
    this.api.get(`/lei/samples/list/${remainder}`).subscribe((data: Sample[]) => data.forEach(x => this.samples.push(x)));
  }

  getSampleList() {
    const data = this.samples;
    this.dataSource.data = data;
  }

  convertDate() {
    this.liteskoSamples.dateOfReceipt = new Date(this.stringDate1);
    this.liteskoSamples.startDate = new Date(this.stringDate2);
  }

  onSubmit() {
    this.convertDate();
    try {
      for (const sample of this.samples) {
        this.liteskoSamples.status = this.status;
        this.liteskoSamples.sampleId = sample.sampleId;
        // tslint:disable-next-line:no-conditional-assignment
        if (sample.testType === 'D ') {
          this.liteskoSamples.testType = '1';
        } else {
          this.liteskoSamples.testType = '2';
        }
        console.log(this.liteskoSamples);
        this.api.post('/lei/litesko', this.liteskoSamples).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
      }
    } catch (e) {
      Swal.fire(
        'Klaida',
        '',
        'error'
      );
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async onSubmit2() {
    for (const sample of this.sampleList) {
      await this.delay(300);
      this.api.post('/lei/litesko', sample).subscribe(
        (result: LiteskoSamples) => {
          const row = this.sampleList.find(item => item.id === result.id);
          if (row) {
            row.dayOfReceipt = result.dateOfReceipt;
            row.status = result.status;
            row.notes = result.notes;
            row.startDate = result.startDate;
          } else {
            this.sampleList = [...this.sampleList, result];
          }
        }
      );
    }
    await this.delay(300);
    this.sampleList = [];
  }

  public clear() {
    this.liteskoSamples.dateOfReceipt = null;
    this.liteskoSamples.status = '';
    this.liteskoSamples.notes = '';
    this.liteskoSamples.startDate = null;
    this.sampleList = [];
  }

  public clearSamples() {
    this.samples = [];
  }

  swalOrderRegister() {
    Swal.fire(
      'Mėginiai įkelti!',
      '',
      'success'
    );
  }
}
