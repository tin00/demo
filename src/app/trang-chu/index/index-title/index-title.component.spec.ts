import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTitleComponent } from './index-title.component';

describe('IndexTitleComponent', () => {
  let component: IndexTitleComponent;
  let fixture: ComponentFixture<IndexTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
