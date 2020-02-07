import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegBrandComponent } from './reg-brand.component';

describe('RegBrandComponent', () => {
  let component: RegBrandComponent;
  let fixture: ComponentFixture<RegBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
