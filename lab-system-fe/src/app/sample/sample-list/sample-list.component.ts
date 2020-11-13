import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../core/api.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SampleModalComponent} from '../sample-modal/sample-modal.component';
import Swal from 'sweetalert2';

interface Sample {
  id: number;
  protocolId: string;
  sampleId: string;
  sampleWeight: number;
  date: Date;
}

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.css']
})
export class SampleListComponent implements OnInit {
  displayedColumns: string[] = ['no', 'protocolId', 'sampleId', 'weight', 'date', 'actions'];
  samples: Sample[] = [];
  dataSource: MatTableDataSource<Sample>;
  excelDate: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private api: ApiService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getSamples();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getSamples() {
    this.api.get('/lei/samples').subscribe((data: Sample[]) => this.dataSource.data = data);
  }

  delete(id: number) {
    Swal.fire({
      title: 'Ar tikrai norite ištrinti šį mėginį?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Atšaukti',
      confirmButtonText: 'Taip, ištrinti!'
    }).then((result) => {
      if (result.value) {
        // tslint:disable-next-line:no-shadowed-variable
        this.api.delete(`/lei/samples/${id}`).subscribe(
          () => this.samples = this.samples.filter(item => item.id !== id)
        );
        Swal.fire(
          'Ištrinta!',
          'Mėginys ištrintas.'
        );
        this.dataSource.data = [];
        setTimeout(() => this.getSamples(), 1000);
      }
    });
  }

  openDialog(sample?: Sample) {
    const dialogRef = this.dialog.open(SampleModalComponent, {
      width: '250px',
      data: {
        id: sample ? sample.id : null,
        protocolId: sample ? sample.protocolId : null,
        sampleId: sample ? sample.sampleId : null,
        sampleWeight: sample ? sample.sampleWeight : null,
        date: sample ? sample.date : null
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/samples', data).subscribe(
          (result: Sample) => {
            const row = this.samples.find(item => item.id === result.id);
            if (row) {
              row.protocolId = result.protocolId;
              row.sampleId = result.sampleId;
              row.sampleWeight = result.sampleWeight;
              row.date = result.date;
              this.dataSource.data = [];
              setTimeout(() => this.getSamples(), 1000);
            } else {
              this.samples = [...this.samples, result];
              this.dataSource.data = [];
              setTimeout(() => this.getSamples(), 1000);
            }
          }
        );
      }
    });
  }

  displayFilter(value: any) {
    if (value === 'metai') {
      this.api.get('/lei/samples')
        .subscribe((data: Sample[]) => this.dataSource.data = data
          .filter(result => Number
            .parseInt(result.date.toString()
              .substring(0, 4)) === new Date().getFullYear()));
    }
    if (value === 'pilnas') {
      this.api.get('/lei/samples');
      this.api.get('/lei/samples').subscribe((data: Sample[]) => this.dataSource.data = data);

      const date = new Date();
      console.log(date.getFullYear() + '-' + date.getMonth() + 1);
      console.log(this.dataSource.data[1].date.toString()
        .substring(0, 10));

    }
    if (value === 'menuo') {
      const date = new Date();
      this.api.get('/lei/samples')
        .subscribe((data: Sample[]) => this.dataSource.data = data
          .filter(result => ((Number.parseInt(result.date.toString()
            .substring(0, 5)) + Number.parseInt(result.date.toString()
            .substring(5, 7))) === (date.getFullYear() + date.getMonth() + 1))));
      console.log();
    }
  }
}
