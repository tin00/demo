import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosuselComponent } from './carosusel.component';

describe('CarosuselComponent', () => {
  let component: CarosuselComponent;
  let fixture: ComponentFixture<CarosuselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarosuselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarosuselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
