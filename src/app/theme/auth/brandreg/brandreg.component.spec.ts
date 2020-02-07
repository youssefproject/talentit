import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandregComponent } from './brandreg.component';

describe('BrandregComponent', () => {
  let component: BrandregComponent;
  let fixture: ComponentFixture<BrandregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
