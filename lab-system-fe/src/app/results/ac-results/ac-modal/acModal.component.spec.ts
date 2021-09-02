import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AcModalComponent } from './acModal.component';

describe('ModalComponent', () => {
  let component: AcModalComponent;
  let fixture: ComponentFixture<AcModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
