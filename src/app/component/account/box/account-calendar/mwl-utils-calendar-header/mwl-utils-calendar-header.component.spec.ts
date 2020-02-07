import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwlUtilsCalendarHeaderComponent } from './mwl-utils-calendar-header.component';

describe('MwlUtilsCalendarHeaderComponent', () => {
  let component: MwlUtilsCalendarHeaderComponent;
  let fixture: ComponentFixture<MwlUtilsCalendarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwlUtilsCalendarHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwlUtilsCalendarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
