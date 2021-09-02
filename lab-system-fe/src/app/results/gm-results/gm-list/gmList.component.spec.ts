import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GmListComponent } from './gmList.component';

describe('TotalMoistureListComponent', () => {
  let component: GmListComponent;
  let fixture: ComponentFixture<GmListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
