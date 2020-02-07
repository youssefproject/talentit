import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceregComponent } from './choicereg.component';

describe('ChoiceregComponent', () => {
  let component: ChoiceregComponent;
  let fixture: ComponentFixture<ChoiceregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
