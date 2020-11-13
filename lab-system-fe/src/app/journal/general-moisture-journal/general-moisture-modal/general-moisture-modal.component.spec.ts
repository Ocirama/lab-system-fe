import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneralMoistureModalComponent } from './general-moisture-modal.component';

describe('TotalMoistureModalComponent', () => {
  let component: GeneralMoistureModalComponent;
  let fixture: ComponentFixture<GeneralMoistureModalComponent>;

  beforeEach(waitForAsync(() => {
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
