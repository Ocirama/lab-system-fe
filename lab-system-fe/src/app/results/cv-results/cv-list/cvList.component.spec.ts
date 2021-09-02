import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CvListComponent } from './cvList.component';

describe('TotalMoistureListComponent', () => {
  let component: CvListComponent;
  let fixture: ComponentFixture<CvListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
