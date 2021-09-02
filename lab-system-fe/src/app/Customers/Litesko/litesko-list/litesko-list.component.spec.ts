import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LiteskoListComponent } from './litesko-list.component';

describe('TotalMoistureListComponent', () => {
  let component: LiteskoListComponent;
  let fixture: ComponentFixture<LiteskoListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteskoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteskoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
