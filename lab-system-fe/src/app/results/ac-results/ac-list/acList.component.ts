import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../../core/api.service';
import {DateModalComponent} from '../../../journal/total-moisture-journal/date-modal/date-modal.component';


interface ResultJournal {
  id: number;
  protocolId: string;
  sampleId: string;
  totalMoisture: string;
  generalMoisture: number;
  ash: number;
  calorificValue: number;
  date: Date;
}


@Component({
  selector: 'app-total-moisture-list',
  templateUrl: './acList.component.html',
  styleUrls: ['./acList.component.css']
})
export class AcListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'protocolId', 'sampleId', 'totalMoisture', 'generalMoisture', 'ash', 'calorificValue', 'date', 'actions'];
  resultJournals: ResultJournal = {} as ResultJournal;
  dataSource: MatTableDataSource<ResultJournal>;
  excelDate: string;
  data: ResultJournal[];

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
    this.dataSource.filterPredicate = function(data: ResultJournal, filter: string): boolean {
      return data.protocolId.includes(filter);
    };
  }


  getResults() {
    this.api.get('/lei/results').subscribe((data: ResultJournal[]) => this.dataSource.data = data);
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
        .subscribe((data: ResultJournal[]) => this.dataSource.data = data
          .filter(result => Number
            .parseInt(result.date.toString()
              .substring(0, 4)) === new Date().getFullYear()));
    }
    if (value === 'pilnas') {
      this.api.get('/lei/results');
      this.api.get('/lei/results').subscribe((data: ResultJournal[]) => this.dataSource.data = data);
      const date = new Date();
      console.log(date.getFullYear() + '-' + date.getMonth() + 1);
      console.log(this.dataSource.data[1].date.toString()
        .substring(0, 10));
    }
    if (value === 'menuo') {
      const date = new Date();
      this.api.get('/lei/results')
        .subscribe((data: ResultJournal[]) => this.dataSource.data = data
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
          .subscribe((data: ResultJournal[]) => this.dataSource.data = data
            .filter(result => ((result.date.toString()
              .substring(0, 10)) === dataa.date)));
        console.log(dataa.date);
      }
    });
  }
}
