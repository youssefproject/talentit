import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfilePictureComponent } from './account-profile-picture.component';

describe('AccountProfilePictureComponent', () => {
  let component: AccountProfilePictureComponent;
  let fixture: ComponentFixture<AccountProfilePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountProfilePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
