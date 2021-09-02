import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LiteskoSamplesComponent } from './litesko-samples.component';

describe('SampleWeightComponent', () => {
  let component: LiteskoSamplesComponent;
  let fixture: ComponentFixture<LiteskoSamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteskoSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteskoSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
