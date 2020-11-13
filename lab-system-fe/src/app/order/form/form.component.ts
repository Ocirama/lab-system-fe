import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ApiService} from '../../core/api.service';
import {DropdownList} from './DropdownList';
import {customerGroups} from './Customers';
import Swal from 'sweetalert2';
import {MatDialog, ThemePalette} from '@angular/material';
import {ModalComponent} from '../modal/modal.component';
import 'sweetalert2/src/sweetalert2.scss';
import {TabService} from '../../tab.service';
import {sampleTypeGroups} from './SampleType';


export interface CustomerGroup {
  letter: string;
  names: string[];
}

export interface SampleTypeGroup {
  letter: string;
  names: string[];
}

interface Order {
  id: number;
  protocolId: string;
  customer: string;
  test: string;
  sampleType: string;
  orderAmount: number;
  year: number;
}

export interface Sample {
  id: number;
  protocolId: string;
  sampleId: string;
  sampleWeight: number;

}

export interface Customer {
  id: number;
  title: string;
}

export interface SampleType {
  id: number;
  title: string;
}

// tslint:disable-next-line:variable-name
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [TabService],
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  orders: Order = {} as Order;
  samples: Sample = {} as Sample;
  typeHasError = false;
  customers: Array<Customer> = [];
  sampleTypes: Array<SampleType> = [];
  sampleList: Array<Sample> = [];
  showVar = false;
  selectedOption: string;


  @Input() public value: number;

  dropdownList = Array<{ item_id: number; item_text: string }>();
  selectedItems = [];
  dropdownSettings = {};


  customerForm: FormGroup = this._formBuilder.group({
    customerGroup: '',
  });
  sampleTypeForm: FormGroup = this._formBuilder2.group({
    sampleTypeGroup: '',
  });

  customerGroupOptions: Observable<CustomerGroup[]>;
  sampleTypeGroupOptions: Observable<SampleTypeGroup[]>;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder,
              // tslint:disable-next-line:variable-name
              private _formBuilder2: FormBuilder,
              private api: ApiService,
              public dialog: MatDialog
  ) {
  }

  submitted = false;

  ngOnInit() {
    this.orders.year = new Date().getFullYear();
    this.selectedOption = 'Kuro rūšis';
    this.samples.sampleWeight = 0;
    this.dropdownList = DropdownList;

    // tslint:disable-next-line:no-unused-expression
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }


  getSampleTypes() {
    this.sampleTypes = [];
    sampleTypeGroups.forEach((item => item.names = []));
    this.api.get('/lei/st')
      .subscribe((samples: any) => {
        this.sampleTypes = samples;

        for (const entry of this.sampleTypes) {

          const letteri = entry.title.charAt(0);
          const name = entry.title;
          const result = sampleTypeGroups.find(({letter}) => letter === letteri);
          result.names.push(name);
        }
      });
    this.sampleTypeGroupOptions = this.sampleTypeForm.get('sampleTypeGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup2(value))
      );
  }

  getCustomers() {
    this.customers = [];
    customerGroups.forEach(item => item.names = []);
    this.api.get('/lei/customers')
      .subscribe((users: any) => {
        this.customers = users;
        console.log(users);
        for (const entry of this.customers) {
          const letteri = entry.title.charAt(0);
          const name = entry.title;
          const result = customerGroups.find(({letter}) => letter === letteri);
          result.names.push(name);
        }
      });

    this.customerGroupOptions = this.customerForm.get('customerGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  onDropDownClose(items: any) {
    if (items[0].item_text === 'Miksas') {
      this.orders.test = this.orders.orderAmount + ' - Drėgmė, 1 - Pelenai, Šilumingumas';
    } else {
      const strings = [];

      for (const item of items) {
        strings.push(item.item_text);
      }
      this.orders.test = strings.join(', ');
    }
  }

  delete(titlee: string) {
    Swal.fire({
      title: 'Ar tikrai norite ištrinti šį užsakovą?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Atšaukti',
      confirmButtonText: 'Taip, ištrinti!'
    }).then((result) => {
      if (result.value) {
        // tslint:disable-next-line:no-shadowed-variable
        const result = this.customers.find(({title}) => title === titlee);
        this.api.delete(`/lei/customers/${result.title}`).subscribe(
          () => this.customers = this.customers.filter(item => item.title !== result.title)
        );
        customerGroups.push();
        Swal.fire(
          'Ištrinta!',
          'Užsakovas ištrintas.'
        );
      }
    });
  }

  delete2(titlee: string) {
    Swal.fire({
      title: 'Ar tikrai norite ištrinti šį kuro tipą?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Atšaukti',
      confirmButtonText: 'Taip, ištrinti!'
    }).then((result) => {
      if (result.value) {
        // tslint:disable-next-line:no-shadowed-variable
        const result = this.sampleTypes.find(({title}) => title === titlee);
        this.api.delete(`/lei/st/${result.title}`).subscribe(
          () => this.sampleTypes = this.sampleTypes.filter(item => item.title !== result.title)
        );
        sampleTypeGroups.push();
        Swal.fire(
          'Ištrinta!'
        );
      }
    });
  }

  public childFunction(value) {
    if (value.orderAmount < 100) {
      for (let i = 0; i <= value.orderAmount - 1; i++) {
        // tslint:disable-next-line:new-parens
        this.sampleList[i] = new class implements Sample {
          id: number;
          protocolId: string;
          sampleId: string;
          sampleWeight: number;
        };
        this.sampleList[i].protocolId = value.protocolId;
        this.sampleList[i].sampleWeight = 0;
      }
    } else {
      console.error('Too many samples ! Try less than 15.');
    }
  }

  toggleChild() {
    this.showVar = !this.showVar;
  }

  public protocolChange(value) {
    this.samples.protocolId = value;

  }


  validateType(value) {
    if (value === 'default') {
      this.typeHasError = true;
    } else {
      this.typeHasError = false;
    }
  }

  private _filterGroup(value: string): CustomerGroup[] {
    if (value) {
      return customerGroups
        .map(group => ({
          letter: group.letter, names: _filter(group.names, value)
        }))
        .filter(group => group.names.length > 0);
    }
    return customerGroups;
  }

  private _filterGroup2(value: string): SampleTypeGroup[] {
    if (value) {
      return sampleTypeGroups
        .map(group => ({
          letter: group.letter, names: _filter(group.names, value)
        }))
        .filter(group => group.names.length > 0);
    }
    return sampleTypeGroups;
  }

  onSubmit() {
    try {
      this.api.post('/lei/orders', this.orders).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
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
      this.api.post('/lei/samples', sample).subscribe(
        (result: Sample) => {
          const row = this.sampleList.find(item => item.id === result.id);
          if (row) {
            row.protocolId = result.protocolId;
            row.sampleId = result.sampleId;
            row.sampleWeight = result.sampleWeight;
          } else {
            this.sampleList = [...this.sampleList, result];
          }
        }
      );
    }
    await this.delay(300);
    this.sampleList = [];
  }

  addCustomer() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/customers', data).subscribe(
          (result: Customer) => {
            const row = this.customers.find(item => item.id === result.id);
            if (row) {
              row.title = result.title;
            } else {
              this.customers = [...this.customers, result];
            }
          }
        );
      }
    });
  }

  openDialog2() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.api.post('/lei/st', data).subscribe(
          (result: Customer) => {
            const row = this.sampleTypes.find(item => item.id === result.id);
            if (row) {
              row.title = result.title;
            } else {
              this.sampleTypes = [...this.sampleTypes, result];
            }
          }
        );
      }
      this.swalCustomerAdd();
    });
  }

  public clear() {
    this.orders.sampleType = '';
    this.orders.protocolId = '';
    this.orders.test = '';
    this.orders.customer = '';
    this.orders.orderAmount = null;
    this.sampleList = [];
  }

  swalOrderRegister() {
    Swal.fire(
      'Protokolas užregistruotas!',
      '',
      'success'
    );
  }

  swalCustomerAdd() {
    Swal.fire(
      'Užsakovas pridėtas!',
      '',
      'success'
    );
  }

  swalCustomerDelete() {
    Swal.fire(
      'Užsakovas ištrintas.',
      '',
      'success'
    );
  }
}


