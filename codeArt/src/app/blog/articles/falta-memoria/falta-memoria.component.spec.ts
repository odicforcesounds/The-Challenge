import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltaMemoriaComponent } from './falta-memoria.component';

describe('FaltaMemoriaComponent', () => {
  let component: FaltaMemoriaComponent;
  let fixture: ComponentFixture<FaltaMemoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaltaMemoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaltaMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
