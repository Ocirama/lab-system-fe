import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../../core/api.service';
import {TotalMoistureModalComponent} from '../total-moisture-modal/total-moisture-modal.component';
import {DateModalComponent} from '../date-modal/date-modal.component';
import Swal from 'sweetalert2';


interface TotalMoistureJournal {
  id: number;
  protocolId: string;
  sampleId: string;
  trayId: string;
  trayWeight: number;
  trayAndSampleWeightBefore: number;
  trayAndSampleWeightAfter: number;
  trayAndSampleWeightAfterPlus: number;
  totalMoisture: number;
  meanDifference: number;
  date: Date;
}

@Component({
  selector: 'app-total-moisture-list',
  templateUrl: './total-moisture-list.component.html',
  styleUrls: ['./total-moisture-list.component.css']
})
export class TotalMoistureListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'protocolId', 'sampleId', 'trayId', 'trayWeight', 'trayAndSampleWeightBefore', 'trayAndSampleWeightAfter', 'trayAndSampleWeightAfterPlus', 'totalMoisture', 'meanDifference', 'date', 'actions'];
  totalMoistureJournals: TotalMoistureJournal[] = [];
  dataSource: MatTableDataSource<TotalMoistureJournal>;
  excelDate: string;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private api: ApiService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.getTm();
    this.excelDate = new Date().toLocaleDateString();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
    this.dataSource.filterPredicate = function(data: TotalMoistureJournal, filter: string): boolean {
      return data.protocolId.includes(filter);
    };
  }

  getTm() {
    this.api.get('/lei/journals').subscribe((data: TotalMoistureJournal[]) => {
      for (let i = 0; i < data.length; i++) {
        data[i].totalMoisture = +(((data[i].trayAndSampleWeightBefore - data[i].trayAndSampleWeightAfter) / (data[i].trayAndSampleWeightBefore - data[i].trayWeight)) * 100).toFixed(2);
      }
      const groupedData = data.reduce(function(l, r) {
        const key = r.protocolId + '|' + r.sampleId;
        if (typeof l[key] === 'undefined') {
          l[key] = {
            sum: 0,
            count: 0,
            single: 0
          };
        }
        l[key].sum += r.totalMoisture;
        l[key].single = r.totalMoisture;
        l[key].count += 1;
        return l;
      }, {});

      const avgGroupedData = Object.keys(groupedData)
        .map(function(key) {
          const keyParts = key.split(/\|/);
          return {
            protocolId: parseInt(keyParts[0], 10),
            sampleid: keyParts[1],
            totalMoisture: (groupedData[key].sum / groupedData[key].count),
            meanDifference: ((groupedData[key].single - (groupedData[key].sum / groupedData[key].count)) / groupedData[key].single) * 100
          };

        });
      console.log(avgGroupedData[1].meanDifference);
      for (let i = 0; i < data.length; i++) {
        data[i].meanDifference = avgGroupedData[avgGroupedData.length - avgGroupedData.length - i].meanDifference;
        data[i + 1].meanDifference = avgGroupedData[avgGroupedData.length - avgGroupedData.length - i].meanDifference;
      }
      this.dataSource.data = data;
    });
  }


  displayFilter(value: any) {
    if (value === 'metai') {
      this.api.get('/lei/journals')
        .subscribe((data: TotalMoistureJournal[]) => this.dataSource.data = data
          .filter(result => Number
            .parseInt(result.date.toString()
              .substring(0, 4)) === new Date().getFullYear()));
    }
    if (value === 'pilnas') {
      this.api.get('/lei/journals');
      this.api.get('/lei/journals').subscribe((data: TotalMoistureJournal[]) => this.dataSource.data = data);

      const date = new Date();
      console.log(date.getFullYear() + '-' + date.getMonth() + 1);
      console.log(this.dataSource.data[1].date.toString()
        .substring(0, 10));

    }
    if (value === 'menuo') {
      const date = new Date();
      this.api.get('/lei/journals')
        .subscribe((data: TotalMoistureJournal[]) => this.dataSource.data = data
          .filter(result => ((Number.parseInt(result.date.toString()
            .substring(0, 5)) + Number.parseInt(result.date.toString()
            .substring(5, 7))) === (date.getFullYear() + date.getMonth() + 1))));
      console.log();
    }
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
        this.api.delete(`/lei/journals/${id}`).subscribe(
          () => this.totalMoistureJournals = this.totalMoistureJournals.filter(item => item.id !== id)
        );
        Swal.fire(
          'Ištrinta!',
          'Užsakymas ištrintas.'
        );
        this.dataSource.data = [];
        setTimeout(() => this.getTm(), 1000);
      }
    });
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

        this.api.get('/lei/journals')
          // tslint:disable-next-line:no-shadowed-variable
          .subscribe((data: TotalMoistureJournal[]) => this.dataSource.data = data
            .filter(result => ((result.date.toString()
              .substring(0, 10)) === dataa.date)));
        console.log(dataa.date);
      }
    });
  }

  openDialog(totalMoistureJournal?: TotalMoistureJournal) {
    const dialogRef = this.dialog.open(TotalMoistureModalComponent, {
      width: '250px',
      data: {
        id: totalMoistureJournal ? totalMoistureJournal.id : null,
        trayWeight: totalMoistureJournal ? totalMoistureJournal.trayWeight : null,
        trayAndSampleWeightBefore: totalMoistureJournal ? totalMoistureJournal.trayAndSampleWeightBefore : null,
        trayAndSampleWeightAfter: totalMoistureJournal ? totalMoistureJournal.trayAndSampleWeightAfter : null,
        trayAndSampleWeightAfterPlus: totalMoistureJournal ? totalMoistureJournal.trayAndSampleWeightAfterPlus : null,
        date: totalMoistureJournal ? totalMoistureJournal.date : null
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/journals', data).subscribe(
          (result: TotalMoistureJournal) => {
            const row = this.totalMoistureJournals.find(item => item.id === result.id);
            if (row) {
              row.trayWeight = result.trayWeight;
              row.trayAndSampleWeightBefore = result.trayAndSampleWeightBefore;
              row.trayAndSampleWeightAfter = result.trayAndSampleWeightAfter;
              row.trayAndSampleWeightAfterPlus = result.trayAndSampleWeightAfterPlus;
              row.date = result.date;
              setTimeout(() => this.getTm(), 1000);
            } else {
              this.totalMoistureJournals = [...this.totalMoistureJournals, result];
              setTimeout(() => this.getTm(), 1000);
            }
          }
        );
      }
    });
  }

}
