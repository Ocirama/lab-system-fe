import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CvModalComponent } from './cvModal.component';

describe('ModalComponent', () => {
  let component: CvModalComponent;
  let fixture: ComponentFixture<CvModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CvModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
