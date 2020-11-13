import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AshModalComponent } from './ash-modal.component';

describe('TotalMoistureModalComponent', () => {
  let component: AshModalComponent;
  let fixture: ComponentFixture<AshModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AshModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
