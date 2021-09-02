import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../../core/api.service';
import {AshModalComponent} from '../litesko-modal/ash-modal.component';
import Swal from 'sweetalert2';
import {DateModalComponent} from '../../../journal/total-moisture-journal/date-modal/date-modal.component';

interface LiteskoJournal {
  id: number;
  sampleId: string;
  testType: string;
  dateOfReceipt: Date;
  statusCode: string;
  notes: string;
  startDate: Date;
  endDate: Date;
  totalMoistureValue: number;
  lowerCalorificValue: number;
  upperCalorificValue: number;
  ashValue: number;
}

@Component({
  selector: 'app-total-moisture-list',
  templateUrl: './litesko-list.component.html',
  styleUrls: ['./litesko-list.component.css']
})
export class LiteskoListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'sampleId', 'testType', 'dateOfReceipt', 'statusCode', 'notes', 'startDate', 'endDate', 'totalMoistureValue','upperCalorificValue','lowerCalorificValue','ashValue', 'actions'];
  liteskoJournals: LiteskoJournal[] = [];
  dataSource: MatTableDataSource<LiteskoJournal>;
  excelDate: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private api: ApiService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.getResults();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
    this.dataSource.filterPredicate = function(data: LiteskoJournal, filter: string): boolean {
      return data.sampleId.includes(filter);
    };
  }

  getResults() {
    this.api.get('/lei/litesko').subscribe((data: LiteskoJournal[]) => this.dataSource.data = data);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  formatDate(date) {
    const d = new Date(date);
    if (d < new Date('2021-01-01')) {
      return '-';
    } else {
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();
      const hour = d.getHours() - 3;
      const minute = d.getMinutes();
      let minutestring;
      if (minute < 10) {
        minutestring = 0 + '' + minute;
      }

      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }
      if (minute < 10) {
        return [year, month, day].join('-') + ' ' + [hour, minutestring].join(':');
      } else {
        return [year, month, day].join('-') + ' ' + [hour, minute].join(':');
      }
    }
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
        this.api.delete(`/litesko/${id}`).subscribe(
          () => this.liteskoJournals = this.liteskoJournals.filter(item => item.id !== id)
        );
        Swal.fire(
          'Ištrinta!',
          'Mėginys ištrintas.'
        );
        this.dataSource.data = [];
        setTimeout(() => this.getResults(), 1000);
      }
    });
  }

 /* openDialog(ashJournal?: AshJournal) {
    const dialogRef = this.dialog.open(AshModalComponent, {
      width: '250px',
      data: {
        id: ashJournal ? ashJournal.id : null,
        dishId: ashJournal ? ashJournal.dishId : null,
        dishWeight: ashJournal ? ashJournal.dishWeight : null,
        dishAndSampleWeightBefore: ashJournal ? ashJournal.dishAndSampleWeightBefore : null,
        dishAndSampleWeightAfter: ashJournal ? ashJournal.dishAndSampleWeightAfter : null,
        date: ashJournal ? ashJournal.date : null
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/journals/ash', data).subscribe(
          (result: AshJournal) => {
            const row = this.ashJournals.find(item => item.id === result.id);
            if (row) {
              row.dishId = result.dishId;
              row.dishWeight = result.dishWeight;
              row.dishAndSampleWeightBefore = result.dishAndSampleWeightBefore;
              row.dishAndSampleWeightAfter = result.dishAndSampleWeightAfter;
              row.date = result.date;
              setTimeout(() => this.getAsh(), 1000);
            } else {
              this.ashJournals = [...this.ashJournals, result];
              setTimeout(() => this.getAsh(), 1000);
            }
          }
        );
      }
    });
  }*/

  displayFilter(value: any) {
    if (value === 'metai') {
      this.api.get('/lei/litesko')
        .subscribe((data: LiteskoJournal[]) => this.dataSource.data = data
          .filter(result => Number
            .parseInt(result.dateOfReceipt.toString()
              .substring(0, 4)) === new Date().getFullYear()));
    }
    if (value === 'pilnas') {
      this.api.get('/lei/litesko');
      this.api.get('/lei/litesko').subscribe((data: LiteskoJournal[]) => this.dataSource.data = data);
      const date = new Date();
      console.log(date.getFullYear() + '-' + date.getMonth() + 1);
      console.log(this.dataSource.data[1].dateOfReceipt.toString()
        .substring(0, 10));
    }
    if (value === 'menuo') {
      const date = new Date();
      this.api.get('/lei/litesko')
        .subscribe((data: LiteskoJournal[]) => this.dataSource.data = data
          .filter(result => ((Number.parseInt(result.dateOfReceipt.toString()
            .substring(0, 5)) + Number.parseInt(result.dateOfReceipt.toString()
            .substring(5, 7))) === (date.getFullYear() + date.getMonth() + 1))));
      console.log();
    }
  }

  openDialog2(excelDate?: string) {
    const dialogRef = this.dialog.open(DateModalComponent, {
      width: '250px',
      data: {
        date: excelDate ? excelDate : null,
      }
    });
    dialogRef.afterClosed().subscribe(dataa => {
      if (dataa) {

        this.api.get('/lei/litesko')
          // tslint:disable-next-line:no-shadowed-variable
          .subscribe((data: LiteskoJournal[]) => this.dataSource.data = data
            .filter(result => ((result.dateOfReceipt.toString()
              .substring(0, 10)) === dataa.date)));
        console.log(dataa.date);
      }
    });
  }
}
