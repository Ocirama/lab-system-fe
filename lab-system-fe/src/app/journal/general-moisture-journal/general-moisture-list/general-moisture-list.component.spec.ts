import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneralMoistureListComponent } from './general-moisture-list.component';

describe('TotalMoistureListComponent', () => {
  let component: GeneralMoistureListComponent;
  let fixture: ComponentFixture<GeneralMoistureListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMoistureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMoistureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
