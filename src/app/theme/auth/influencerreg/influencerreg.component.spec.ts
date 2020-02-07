import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerregComponent } from './influencerreg.component';

describe('InfluencerregComponent', () => {
  let component: InfluencerregComponent;
  let fixture: ComponentFixture<InfluencerregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencerregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
