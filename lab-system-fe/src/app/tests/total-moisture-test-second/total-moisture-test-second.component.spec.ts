import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TotalMoistureTestSecondComponent } from './total-moisture-test-second.component';

describe('TotalMoistureTestSecondComponent', () => {
  let component: TotalMoistureTestSecondComponent;
  let fixture: ComponentFixture<TotalMoistureTestSecondComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalMoistureTestSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMoistureTestSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
