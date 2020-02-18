import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewaybidingComponent } from './onewaybiding.component';

describe('OnewaybidingComponent', () => {
  let component: OnewaybidingComponent;
  let fixture: ComponentFixture<OnewaybidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewaybidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewaybidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
