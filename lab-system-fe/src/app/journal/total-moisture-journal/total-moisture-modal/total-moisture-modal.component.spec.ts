import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TotalMoistureModalComponent } from './total-moisture-modal.component';

describe('TotalMoistureModalComponent', () => {
  let component: TotalMoistureModalComponent;
  let fixture: ComponentFixture<TotalMoistureModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalMoistureModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMoistureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
