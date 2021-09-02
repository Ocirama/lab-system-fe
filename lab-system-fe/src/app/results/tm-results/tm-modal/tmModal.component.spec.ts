import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TmModalComponent } from './tmModal.component';

describe('ModalComponent', () => {
  let component: TmModalComponent;
  let fixture: ComponentFixture<TmModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
