import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMoistureModalComponent } from './general-moisture-modal.component';

describe('TotalMoistureModalComponent', () => {
  let component: GeneralMoistureModalComponent;
  let fixture: ComponentFixture<GeneralMoistureModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMoistureModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMoistureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
