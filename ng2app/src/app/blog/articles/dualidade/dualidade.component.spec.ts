import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualidadeComponent } from './dualidade.component';

describe('DualidadeComponent', () => {
  let component: DualidadeComponent;
  let fixture: ComponentFixture<DualidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
