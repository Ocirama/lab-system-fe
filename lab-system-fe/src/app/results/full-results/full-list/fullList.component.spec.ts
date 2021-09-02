import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullListComponent } from './fullList.component';

describe('TotalMoistureListComponent', () => {
  let component: FullListComponent;
  let fixture: ComponentFixture<FullListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FullListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
