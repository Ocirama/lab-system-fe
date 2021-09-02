import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../../core/api.service';
import {DateModalComponent} from '../../../journal/total-moisture-journal/date-modal/date-modal.component';

interface FullJournal {
  id: number;
  protocolId: string;
  sampleId: string;
  totalMoisture: number;
  ashContent: number;
  calorificValue: number;
  generalMoisture: number;
  date: Date;
}

interface TmResultJournal {
  id: number;
  protocolId: string;
  sampleId: string;
  trayWeight: number;
  trayAndSampleWeightBefore: number;
  trayAndSampleWeightAfter: number;
  trayAndSampleWeightAfterPlus: number;
  totalMoisture: number;
  uncertainty: number;
  meanDifference: number;
  date: Date;
}

@Component({
  selector: 'app-total-moisture-list',
  templateUrl: './fullList.component.html',
  styleUrls: ['./fullList.component.css']
})
export class FullListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'protocolId', 'sampleId', 'totalMoisture', 'ashContent', 'calorificValue', 'generalMoisture', 'date', 'actions'];
  tmResultJournals: TmResultJournal = {} as TmResultJournal;
  fullJournals: FullJournal = {} as FullJournal;
  dataSource: MatTableDataSource<TmResultJournal>;
  dataSource2: MatTableDataSource<FullJournal>;
  excelDate: string;
  data: TmResultJournal[];
  columnsToDisplay: string[] = ['id', 'protocolId', 'sampleId', 'date', 'actions'];

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
    this.dataSource.filterPredicate = function(data: TmResultJournal, filter: string): boolean {
      return data.protocolId.includes(filter);
    };
    this.dataSource2.filterPredicate = function(data: FullJournal, filter: string): boolean {
      return data.protocolId.includes(filter);
    };
  }
  addColumn(test: string) {
    const randomColumn = this.displayedColumns.find(x => x === test);
    const index: number = this.columnsToDisplay.indexOf(test);
    if (this.columnsToDisplay.indexOf(test) === -1) {
      this.columnsToDisplay.splice(4, 0, test);
    }else if (this.columnsToDisplay.indexOf(test) !== -1){
      this.columnsToDisplay.splice(index, 1);
    }
  }


  getResults() {
    this.api.get('/lei/results').subscribe((data: TmResultJournal[]) => this.dataSource.data = data);
  }

  getTm() {
    this.api.get('/lei/journals').subscribe((data: TmResultJournal[]) => {
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

  applyFilter(filterValue: string
  ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /*  openDialog(ashJournal ?: AshJournal) {
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
*/
  displayFilter(value: any
  ) {
    if (value === 'metai') {
      this.api.get('/lei/results')
        .subscribe((data: TmResultJournal[]) => this.dataSource.data = data
          .filter(result => Number
            .parseInt(result.date.toString()
              .substring(0, 4)) === new Date().getFullYear()));
    }
    if (value === 'pilnas') {
      this.api.get('/lei/results');
      this.api.get('/lei/results').subscribe((data: TmResultJournal[]) => this.dataSource.data = data);
      const date = new Date();
      console.log(date.getFullYear() + '-' + date.getMonth() + 1);
      console.log(this.dataSource.data[1].date.toString()
        .substring(0, 10));
    }
    if (value === 'menuo') {
      const date = new Date();
      this.api.get('/lei/results')
        .subscribe((data: TmResultJournal[]) => this.dataSource.data = data
          .filter(result => ((Number.parseInt(result.date.toString()
            .substring(0, 5)) + Number.parseInt(result.date.toString()
            .substring(5, 7))) === (date.getFullYear() + date.getMonth() + 1))));
      console.log();
    }
  }

  openDialog2(excelDate ?: string) {
    const dialogRef = this.dialog.open(DateModalComponent, {
      width: '250px',
      data: {
        date: excelDate ? excelDate : null,
      }
    });
    dialogRef.afterClosed().subscribe(dataa => {
      if (dataa) {
        this.api.get('/lei/results')
          // tslint:disable-next-line:no-shadowed-variable
          .subscribe((data: TmResultJournal[]) => this.dataSource.data = data
            .filter(result => ((result.date.toString()
              .substring(0, 10)) === dataa.date)));
        console.log(dataa.date);
      }
    });
  }
}
