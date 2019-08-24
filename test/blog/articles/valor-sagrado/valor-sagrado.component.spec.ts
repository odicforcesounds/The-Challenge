import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorSagradoComponent } from './valor-sagrado.component';

describe('ValorSagradoComponent', () => {
  let component: ValorSagradoComponent;
  let fixture: ComponentFixture<ValorSagradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorSagradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorSagradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
