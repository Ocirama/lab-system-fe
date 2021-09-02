import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullModalComponent } from './fullModal.component';

describe('ModalComponent', () => {
  let component: FullModalComponent;
  let fixture: ComponentFixture<FullModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FullModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
