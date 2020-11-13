import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TotalMoistureListComponent } from './total-moisture-list.component';

describe('TotalMoistureListComponent', () => {
  let component: TotalMoistureListComponent;
  let fixture: ComponentFixture<TotalMoistureListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalMoistureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMoistureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
