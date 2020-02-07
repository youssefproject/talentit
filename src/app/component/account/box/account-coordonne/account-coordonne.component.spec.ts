import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCoordonneComponent } from './account-coordonne.component';

describe('AccountCoordonneComponent', () => {
  let component: AccountCoordonneComponent;
  let fixture: ComponentFixture<AccountCoordonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCoordonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCoordonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
