import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AshTestComponent } from './ash-test.component';

describe('TotalMoistureTestComponent', () => {
  let component: AshTestComponent;
  let fixture: ComponentFixture<AshTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AshTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
