import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GmModalComponent } from './gmModal.component';

describe('ModalComponent', () => {
  let component: GmModalComponent;
  let fixture: ComponentFixture<GmModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
