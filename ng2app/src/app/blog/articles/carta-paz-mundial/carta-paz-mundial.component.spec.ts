import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPazMundialComponent } from './carta-paz-mundial.component';

describe('CartaPazMundialComponent', () => {
  let component: CartaPazMundialComponent;
  let fixture: ComponentFixture<CartaPazMundialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaPazMundialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaPazMundialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
