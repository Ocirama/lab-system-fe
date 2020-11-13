import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMoistureListComponent } from './general-moisture-list.component';

describe('TotalMoistureListComponent', () => {
  let component: GeneralMoistureListComponent;
  let fixture: ComponentFixture<GeneralMoistureListComponent>;

  beforeEach(async(() => {
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
