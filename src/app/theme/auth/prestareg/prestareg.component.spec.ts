import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestaregComponent } from './prestareg.component';

describe('PrestaregComponent', () => {
  let component: PrestaregComponent;
  let fixture: ComponentFixture<PrestaregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestaregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestaregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
