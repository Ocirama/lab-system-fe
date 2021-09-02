import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TmListComponent } from './tmList.component';

describe('TotalMoistureListComponent', () => {
  let component: TmListComponent;
  let fixture: ComponentFixture<TmListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
