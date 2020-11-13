import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMoistureTestSecondComponent } from './general-moisture-test-second.component';

describe('TotalMoistureTestSecondComponent', () => {
  let component: GeneralMoistureTestSecondComponent;
  let fixture: ComponentFixture<GeneralMoistureTestSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMoistureTestSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMoistureTestSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
