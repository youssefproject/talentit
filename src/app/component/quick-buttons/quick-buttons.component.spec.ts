import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickButtonsComponent } from './quick-buttons.component';

describe('QuickButtonsComponent', () => {
  let component: QuickButtonsComponent;
  let fixture: ComponentFixture<QuickButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
