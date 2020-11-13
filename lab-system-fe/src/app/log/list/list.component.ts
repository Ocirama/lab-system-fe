import {Component, OnInit, ViewChild} from '@angular/core';


import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../core/api.service';
import {ModalComponent} from '../modal/modal.component';
import Swal from 'sweetalert2';
import {DateModalComponent} from '../../journal/total-moisture-journal/date-modal/date-modal.component';

interface Order {
  id: number;
  protocolId: string;
  customer: string;
  test: string;
  sampleType: string;
  orderAmount: number;
  date: Date;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['no', 'protocolId', 'customer', 'test', 'sampleType', 'orderAmount', 'date', 'actions'];
  orders: Order[] = [];
  dataSource: MatTableDataSource<Order>;
  excelDate: string;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(
    private api: ApiService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.getOrders();
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

  getOrders() {
    this.api.get('/lei/orders').subscribe((data: Order[]) => this.dataSource.data = data);
  }

  delete(id: number) {
    Swal.fire({
      title: 'Ar tikrai norite ištrinti šį užsakymą?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Atšaukti',
      confirmButtonText: 'Taip, ištrinti!'
    }).then((result) => {
      if (result.value) {
        // tslint:disable-next-line:no-shadowed-variable
        this.api.delete(`/lei/orders/${id}`).subscribe(
          () => this.orders = this.orders.filter(item => item.id !== id)
        );
        Swal.fire(
          'Ištrinta!',
          'Užsakymas ištrintas.'
        );
        this.dataSource.data = [];
        setTimeout(() => this.getOrders(), 1000);
      }
    });
  }

  openDialog(order?: Order) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {
        id: order ? order.id : null,
        protocolId: order ? order.protocolId : null,
        customer: order ? order.customer : null,
        test: order ? order.test : null,
        sampleType: order ? order.sampleType : null,
        orderAmount: order ? order.orderAmount : null,
        date: order ? order.date : null
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/orders', data).subscribe(
          (result: Order) => {
            const row = this.orders.find(item => item.id === result.id);
            if (row) {
              row.protocolId = result.protocolId;
              row.customer = result.customer;
              row.test = result.test;
              row.sampleType = result.sampleType;
              row.orderAmount = result.orderAmount;
              row.date = result.date;
              this.dataSource.data = [];
              setTimeout(() => this.getOrders(), 1000);
            } else {
              this.orders = [...this.orders, result];
              this.dataSource.data = [];
              setTimeout(() => this.getOrders(), 1000);
            }
          }
        );
      }
    });
  }

  displayFilter(value: any) {
    if (value === 'metai') {
      this.api.get('/lei/orders')
        .subscribe((data: Order[]) => this.dataSource.data = data
          .filter(result => Number
            .parseInt(result.date.toString()
              .substring(0, 4)) === new Date().getFullYear()));
    }
    if (value === 'pilnas') {
      this.api.get('/lei/orders');
      this.api.get('/lei/orders').subscribe((data: Order[]) => this.dataSource.data = data);

      const date = new Date();
      console.log(date.getFullYear() + '-' + date.getMonth() + 1);
      console.log(this.dataSource.data[1].date.toString()
        .substring(0, 10));

    }
    if (value === 'menuo') {
      const date = new Date();
      this.api.get('/lei/orders')
        .subscribe((data: Order[]) => this.dataSource.data = data
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

        this.api.get('/lei/orders')
          // tslint:disable-next-line:no-shadowed-variable
          .subscribe((data: Order[]) => this.dataSource.data = data
            .filter(result => ((result.date.toString()
              .substring(0, 10)) === dataa.date)));
        console.log(dataa.date);
      }
    });
  }
}

