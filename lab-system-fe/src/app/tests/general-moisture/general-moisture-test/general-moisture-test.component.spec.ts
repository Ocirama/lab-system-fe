import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMoistureTestComponent } from './general-moisture-test.component';

describe('TotalMoistureTestComponent', () => {
  let component: GeneralMoistureTestComponent;
  let fixture: ComponentFixture<GeneralMoistureTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMoistureTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMoistureTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
