import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshTestComponent } from './ash-test.component';

describe('TotalMoistureTestComponent', () => {
  let component: AshTestComponent;
  let fixture: ComponentFixture<AshTestComponent>;

  beforeEach(async(() => {
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
