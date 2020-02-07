import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNewComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchNewComponent;
  let fixture: ComponentFixture<SearchNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
