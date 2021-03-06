import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../../core/api.service';
import {GeneralMoistureModalComponent} from '../general-moisture-modal/general-moisture-modal.component';
import {DateModalComponent} from '../../total-moisture-journal/date-modal/date-modal.component';
import Swal from 'sweetalert2';


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

@Component({
  selector: 'app-total-moisture-list',
  templateUrl: './general-moisture-list.component.html',
  styleUrls: ['./general-moisture-list.component.css']
})
export class GeneralMoistureListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'protocolId', 'sampleId', 'trayId', 'jarId', 'jarWeight', 'jarAndSampleWeightBefore', 'jarAndSampleWeightAfter', 'jarAndSampleWeightAfterPlus', 'generalMoisture', 'date', 'actions'];
  generalMoistureJournals: GeneralMoistureJournal[] = [];
  dataSource: MatTableDataSource<GeneralMoistureJournal>;
  excelDate: string;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private api: ApiService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.getGm();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
    this.dataSource.filterPredicate = function(data: GeneralMoistureJournal, filter: string): boolean {
      return data.protocolId.includes(filter);
    };
  }

  getGm() {
    this.api.get('/lei/journals/gm').subscribe((data: GeneralMoistureJournal[]) => {
      for (let i = 0; i < data.length; i++) {
        data[i].generalMoisture = +(((data[i]
          .jarAndSampleWeightBefore - data[i]
          .jarAndSampleWeightAfter) / (data[i]
          .jarAndSampleWeightBefore - data[i]
          .jarWeight)) * 100).toFixed(2);
      }
      const groupedData = data.reduce(function(l, r) {
        const key = r.protocolId + '|' + r.sampleId + '|' + r.date;
        if (typeof l[key] === 'undefined') {
          l[key] = {
            sum: 0,
            count: 0
          };
        }
        l[key].sum += r.generalMoisture;
        l[key].count += 1;
        return l;
      }, {});
      console.log(JSON.stringify(groupedData));

      const avgGroupedData = Object.keys(groupedData)
        .map((x => {
          const keyParts = x.split(/\|/);
          return {
            protocolId: parseInt(keyParts[0], 10),
            sampleId: keyParts[1],
            totalMoisture: 0,

            generalMoisture: (groupedData[x].sum / groupedData[x].count),
            calorificValue: 0,
            ash: 0,
            date: keyParts[2]
          };
        }));
      console.log(JSON.stringify(avgGroupedData));
      // avgGroupedData.forEach(x => this.onSubmit(x));
      /*for (let i = 2500; i < 3000; i++) {
          this.onSubmit(avgGroupedData[i]);
      }*/
      // this.onSubmit(avgGroupedData[2501]);
      this.dataSource.data = data;
    });
  }

  onSubmit(value) {
    this.api.post('/lei/results', value).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
  }


  applyFilter(filterValue
                :
                string
  ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id
           :
           number
  ) {
    Swal.fire({
      title: 'Ar tikrai norite i??trinti ???? sv??rim???',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'At??aukti',
      confirmButtonText: 'Taip, i??trinti!'
    }).then((result) => {
      if (result.value) {
        // tslint:disable-next-line:no-shadowed-variable
        this.api.delete(`/lei/journals/gm/${id}`).subscribe(
          () => this.generalMoistureJournals = this.generalMoistureJournals.filter(item => item.id !== id)
        );
        Swal.fire(
          'I??trinta!',
          'U??sakymas i??trintas.'
        );
        this.dataSource.data = [];
        setTimeout(() => this.getGm(), 1000);
      }
    });
  }

  openDialog(generalMoistureJournal ?: GeneralMoistureJournal) {
    const dialogRef = this.dialog.open(GeneralMoistureModalComponent, {
      width: '250px',
      data: {
        id: generalMoistureJournal ? generalMoistureJournal.id : null,
        jarId: generalMoistureJournal ? generalMoistureJournal.jarId : null,
        jarWeight: generalMoistureJournal ? generalMoistureJournal.jarWeight : null,
        jarAndSampleWeightBefore: generalMoistureJournal ? generalMoistureJournal.jarAndSampleWeightBefore : null,
        jarAndSampleWeightAfter: generalMoistureJournal ? generalMoistureJournal.jarAndSampleWeightAfter : null,
        jarAndSampleWeightAfterPlus: generalMoistureJournal ? generalMoistureJournal.jarAndSampleWeightAfterPlus : null,
        date: generalMoistureJournal ? generalMoistureJournal.date : null
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/journals/gm', data).subscribe(
          (result: GeneralMoistureJournal) => {
            const row = this.generalMoistureJournals.find(item => item.id === result.id);
            if (row) {
              row.jarId = result.jarId;
              row.jarWeight = result.jarWeight;
              row.jarAndSampleWeightBefore = result.jarAndSampleWeightBefore;
              row.jarAndSampleWeightAfter = result.jarAndSampleWeightAfter;
              row.jarAndSampleWeightAfterPlus = result.jarAndSampleWeightAfterPlus;
              row.date = result.date;
              setTimeout(() => this.getGm(), 1000);
            } else {
              this.generalMoistureJournals = [...this.generalMoistureJournals, result];
              setTimeout(() => this.getGm(), 1000);
            }
          }
        );
      }
    });
  }

  displayFilter(value: any) {
    if (value === 'metai') {
      this.api.get('/lei/journals/gm')
        .subscribe((data: GeneralMoistureJournal[]) => this.dataSource.data = data
          .filter(result => Number
            .parseInt(result.date.toString()
              .substring(0, 4)) === new Date().getFullYear()));
    }
    if (value === 'pilnas') {
      this.api.get('/lei/journals/gm');
      this.api.get('/lei/journals/gm').subscribe((data: GeneralMoistureJournal[]) => this.dataSource.data = data);

      const date = new Date();
      console.log(date.getFullYear() + '-' + date.getMonth() + 1);
      console.log(this.dataSource.data[1].date.toString()
        .substring(0, 10));

    }
    if (value === 'menuo') {
      const date = new Date();
      this.api.get('/lei/journals/gm')
        .subscribe((data: GeneralMoistureJournal[]) => this.dataSource.data = data
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

        this.api.get('/lei/journals/gm')
          // tslint:disable-next-line:no-shadowed-variable
          .subscribe((data: GeneralMoistureJournal[]) => this.dataSource.data = data
            .filter(result => ((result.date.toString()
              .substring(0, 10)) === dataa.date)));
        console.log(dataa.date);
      }
    });
  }
}
