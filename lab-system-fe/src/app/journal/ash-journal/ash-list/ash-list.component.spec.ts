import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshListComponent } from './ash-list.component';

describe('TotalMoistureListComponent', () => {
  let component: AshListComponent;
  let fixture: ComponentFixture<AshListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
