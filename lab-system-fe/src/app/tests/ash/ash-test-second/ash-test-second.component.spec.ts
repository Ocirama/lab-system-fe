import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshTestSecondComponent } from './ash-test-second.component';

describe('TotalMoistureTestSecondComponent', () => {
  let component: AshTestSecondComponent;
  let fixture: ComponentFixture<AshTestSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshTestSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshTestSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
