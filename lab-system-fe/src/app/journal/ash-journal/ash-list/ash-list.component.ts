import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../../core/api.service';
import {AshModalComponent} from '../ash-modal/ash-modal.component';
import {DateModalComponent} from '../../total-moisture-journal/date-modal/date-modal.component';
import Swal from 'sweetalert2';

interface AshJournal {
  id: number;
  protocolId: string;
  sampleId: string;
  trayId: string;
  dishId: string;
  dishWeight: number;
  dishAndSampleWeightBefore: number;
  dishAndSampleWeightAfter: number;
  ashValue: number;
  date: Date;
}
interface GeneralMoistureJournal {
  id: number;
  protocolId: string;
  sampleId: string;
  trayId: string;
  jarId: string;
  jarWeight: number;
  jarAndSampleWeightBefore: number;
  jarAndSampleWeightAfter: number;
  jarAndSampleWeightAfterPlus: number;
  generalMoisture: number;
  date: Date;
}
interface GmArray {
  order: string;
  sample: string;
  value: number;
}

@Component({
  selector: 'app-total-moisture-list',
  templateUrl: './ash-list.component.html',
  styleUrls: ['./ash-list.component.css']
})
export class AshListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'protocolId', 'sampleId', 'trayId', 'dishId', 'dishWeight', 'dishAndSampleWeightBefore', 'dishAndSampleWeightAfter', 'ashValue', 'date', 'actions'];
  ashJournals: AshJournal[] = [];
  dataSource: MatTableDataSource<AshJournal>;
  excelDate: string;
  generalMoistureArray: GmArray[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private api: ApiService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.getAsh();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
    this.dataSource.filterPredicate = function(data: AshJournal, filter: string): boolean {
      return data.protocolId.includes(filter);
    };
  }
  getAsh() {
    this.api.get('/lei/journals/ash').subscribe((data: AshJournal[]) => {
      for (let i = 0; i < data.length; i++) {
        data[i].ashValue = +(((data[i].dishAndSampleWeightBefore - data[i].dishAndSampleWeightAfter) / (data[i].dishAndSampleWeightBefore - data[i].dishWeight)) * 100).toFixed(2);
      }
      const groupedData = data.reduce(function(l, r) {
        const key = r.protocolId + '|' + r.sampleId;
        if (typeof l[key] === 'undefined') {
          l[key] = {
            sum: 0,
            count: 0
          };
        }
        l[key].sum += r.ashValue;
        l[key].count += 1;
        return l;
      }, {});
      console.log(JSON.stringify(groupedData));

      const avgGroupedData = Object.keys(groupedData)
        .map(function(key) {
          const keyParts = key.split(/\|/);
          return {
            protocolId: parseInt(keyParts[0], 10),
            sampleid: keyParts[1],
            asValue: (groupedData[key].sum / groupedData[key].count)
          };

        });
      console.log(JSON.stringify(avgGroupedData));

      this.dataSource.data = data;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete(id: number) {
    Swal.fire({
      title: 'Ar tikrai norite ištrinti šį svėrimą?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Atšaukti',
      confirmButtonText: 'Taip, ištrinti!'
    }).then((result) => {
      if (result.value) {
        // tslint:disable-next-line:no-shadowed-variable
        this.api.delete(`/journals/ash/${id}`).subscribe(
          () => this.ashJournals = this.ashJournals.filter(item => item.id !== id)
        );
        Swal.fire(
          'Ištrinta!',
          'Užsakymas ištrintas.'
        );
        this.dataSource.data = [];
        setTimeout(() => this.getAsh(), 1000);
      }
    });
  }

  openDialog(ashJournal?: AshJournal) {
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
  }

  displayFilter(value: any) {
    if (value === 'metai') {
      this.api.get('/lei/journals/ash')
        .subscribe((data: AshJournal[]) => this.dataSource.data = data
          .filter(result => Number
            .parseInt(result.date.toString()
              .substring(0, 4)) === new Date().getFullYear()));
    }
    if (value === 'pilnas') {
      this.api.get('/lei/journals/ash');
      this.api.get('/lei/journals/ash').subscribe((data: AshJournal[]) => this.dataSource.data = data);
      const date = new Date();
      console.log(date.getFullYear() + '-' + date.getMonth() + 1);
      console.log(this.dataSource.data[1].date.toString()
        .substring(0, 10));
    }
    if (value === 'menuo') {
      const date = new Date();
      this.api.get('/lei/journals/ash')
        .subscribe((data: AshJournal[]) => this.dataSource.data = data
          .filter(result => ((Number.parseInt(result.date.toString()
            .substring(0, 5)) + Number.parseInt(result.date.toString()
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

        this.api.get('/lei/journals/ash')
        // tslint:disable-next-line:no-shadowed-variable
          .subscribe((data: AshJournal[]) => this.dataSource.data = data
            .filter(result => ((result.date.toString()
              .substring(0, 10)) === dataa.date)));
        console.log(dataa.date);
      }
    });
  }
}
