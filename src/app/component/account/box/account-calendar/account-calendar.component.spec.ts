import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCalendarComponent } from './account-calendar.component';

describe('AccountCalendarComponent', () => {
  let component: AccountCalendarComponent;
  let fixture: ComponentFixture<AccountCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
