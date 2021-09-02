import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AcListComponent } from './acList.component';

describe('TotalMoistureListComponent', () => {
  let component: AcListComponent;
  let fixture: ComponentFixture<AcListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
