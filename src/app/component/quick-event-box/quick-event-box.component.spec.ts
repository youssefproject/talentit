import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickEventBoxComponent } from './quick-event-box.component';

describe('QuickEventBoxComponent', () => {
  let component: QuickEventBoxComponent;
  let fixture: ComponentFixture<QuickEventBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickEventBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickEventBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
